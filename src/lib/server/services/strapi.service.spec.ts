import type { Blog } from '$lib/server/types';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('$env/dynamic/private', () => ({
	env: {
		STRAPI_URL: 'https://api.example.com/api'
	}
}));

const cacheMock = vi.hoisted(() => ({
	get: vi.fn(),
	set: vi.fn(),
	getIgnoreInvalidation: vi.fn()
}));

vi.mock('$lib/server/cache', () => ({ cache: cacheMock }));

const { fetchBlogBySlug } = await import('./strapi.service');

const blog: Blog = {
	id: 1,
	documentId: 'doc-1',
	title: 'Einblick in Ralph Loops',
	description: 'Ein Blick auf Ralph Loops',
	released: '2026-01-24',
	slug: 'einblick-in-ralph-loops'
};

function respondWith(data: Blog[]) {
	return { ok: true, json: async () => ({ data }) };
}

const fetchMock = vi.fn();

beforeEach(() => {
	vi.stubGlobal('fetch', fetchMock);
	vi.spyOn(console, 'log').mockImplementation(() => {});
	vi.spyOn(console, 'error').mockImplementation(() => {});
	cacheMock.get.mockReturnValue(null);
	cacheMock.getIgnoreInvalidation.mockReturnValue(null);
});

afterEach(() => {
	vi.unstubAllGlobals();
	vi.restoreAllMocks();
	vi.clearAllMocks();
});

describe('fetchBlogBySlug', () => {
	it('returns the blog when Strapi has a matching entry', async () => {
		fetchMock.mockResolvedValue(respondWith([blog]));

		await expect(fetchBlogBySlug('einblick-in-ralph-loops')).resolves.toMatchObject({
			slug: 'einblick-in-ralph-loops',
			title: 'Einblick in Ralph Loops'
		});
	});

	it('returns null when no entry matches the slug', async () => {
		fetchMock.mockResolvedValue(respondWith([]));

		await expect(fetchBlogBySlug('does-not-exist')).resolves.toBeNull();
	});

	it('throws when Strapi fails and nothing is cached, so the route does not serve a 404', async () => {
		fetchMock.mockResolvedValue({
			ok: false,
			status: 500,
			statusText: 'Internal Server Error',
			text: async () => 'boom'
		});

		await expect(fetchBlogBySlug('einblick-in-ralph-loops')).rejects.toThrow(
			'Failed to fetch blog einblick-in-ralph-loops'
		);
	});

	it('throws when the network call itself rejects and nothing is cached', async () => {
		fetchMock.mockRejectedValue(new Error('ECONNREFUSED'));

		await expect(fetchBlogBySlug('einblick-in-ralph-loops')).rejects.toThrow('ECONNREFUSED');
	});

	it('serves a stale cached blog when Strapi is unreachable', async () => {
		fetchMock.mockRejectedValue(new Error('ECONNREFUSED'));
		cacheMock.getIgnoreInvalidation.mockReturnValue(blog);

		await expect(fetchBlogBySlug('einblick-in-ralph-loops')).resolves.toEqual(blog);
	});

	it('does not call Strapi when a fresh cache entry exists', async () => {
		cacheMock.get.mockReturnValue(blog);

		await expect(fetchBlogBySlug('einblick-in-ralph-loops')).resolves.toEqual(blog);
		expect(fetchMock).not.toHaveBeenCalled();
	});
});
