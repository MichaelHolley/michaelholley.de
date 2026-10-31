import { isHttpError } from '@sveltejs/kit';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchBlogBySlug, fetchProjects } from './strapi.service';

vi.mock('$app/env/private', () => ({
	STRAPI_URL: 'http://cms.test/api',
	CACHE_INVALIDATION_TIME_IN_SECONDS: 60
}));

const respond = (data: unknown) => Response.json({ data });
const fetchMock = vi.fn<typeof fetch>();

async function statusOf(promise: Promise<unknown>) {
	try {
		await promise;
	} catch (e) {
		if (isHttpError(e)) return e.status;
		throw e;
	}
}

describe('strapi.service', () => {
	beforeEach(() => {
		vi.useFakeTimers();
		vi.stubGlobal('fetch', fetchMock);
		vi.spyOn(console, 'log').mockImplementation(() => {});
		vi.spyOn(console, 'error').mockImplementation(() => {});
	});

	afterEach(() => {
		vi.useRealTimers();
		vi.unstubAllGlobals();
		vi.restoreAllMocks();
		fetchMock.mockReset();
	});

	it('returns null when the slug does not exist', async () => {
		fetchMock.mockResolvedValueOnce(respond([]));

		expect(await fetchBlogBySlug('missing')).toBeNull();
	});

	it('answers 503 when the CMS is unreachable and nothing is cached', async () => {
		fetchMock.mockRejectedValue(new Error('ECONNREFUSED'));

		expect(await statusOf(fetchBlogBySlug('uncached'))).toBe(503);
		expect(await statusOf(fetchProjects())).toBe(503);
	});

	it('serves stale cache when the CMS fails after expiry', async () => {
		const blog = { slug: 'stale', title: 'Stale post' };
		fetchMock.mockResolvedValueOnce(respond([blog]));
		await fetchBlogBySlug('stale');

		vi.advanceTimersByTime(61_000);
		fetchMock.mockResolvedValueOnce(new Response('down', { status: 500 }));

		expect(await fetchBlogBySlug('stale')).toMatchObject(blog);
	});
});
