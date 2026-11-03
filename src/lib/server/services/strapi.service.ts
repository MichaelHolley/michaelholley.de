import { STRAPI_URL } from '$app/env/private';
import { error } from '@sveltejs/kit';
import { cache } from '#lib/server/cache.js';
import { buildStrapiUrl } from '#lib/server/services/util/strapi-url-builder.js';
import type {
	Blog,
	ExperienceSectionData,
	Image,
	ImageFormat,
	Project
} from '#lib/server/types.js';

const blogSelectFields = [
	'id',
	'documentId',
	'title',
	'slug',
	'description',
	'released',
	'updatedAt',
	'isExternal',
	'externalUrl',
	'externalSource'
] as const satisfies readonly (keyof Blog)[];

const blogPopulateFields = ['tags', 'teaserImage'] as const satisfies readonly (keyof Blog)[];

const projectSelectFields = [
	'id',
	'documentId',
	'title',
	'slug',
	'description',
	'url',
	'github_ref',
	'position'
] as const satisfies readonly (keyof Project)[];

const projectPopulateFields: string[] = ['teaserImage', 'projectIcon', 'tech.icon'];

/**
 * Gets the base URL for Strapi (without /api suffix)
 */
function getStrapiBaseUrl(): string {
	return STRAPI_URL.replace('/api', '');
}

/**
 * Normalizes an image URL to be absolute
 * @param image - Image object with url property
 * @param baseUrl - Base URL to prepend to relative URLs
 * @returns Image object with absolute URL
 */
function normalizeImageUrl(image: ImageFormat, baseUrl: string): ImageFormat {
	return {
		...image,
		url: image.url.startsWith('http') ? image.url : `${baseUrl}${image.url}`
	};
}

/**
 * Normalizes all URLs in a teaserImage object to be absolute
 * @param teaserImage - TeaserImage object from Strapi
 * @returns TeaserImage with absolute URLs
 */
function normalizeImage(image: Image): Image {
	const baseUrl = getStrapiBaseUrl();

	return {
		...image,
		url: image.url.startsWith('http') ? image.url : `${baseUrl}${image.url}`,
		formats: {
			thumbnail: image.formats?.thumbnail
				? normalizeImageUrl(image.formats.thumbnail, baseUrl)
				: undefined,
			medium: image.formats?.medium ? normalizeImageUrl(image.formats.medium, baseUrl) : undefined,
			large: image.formats?.large ? normalizeImageUrl(image.formats.large, baseUrl) : undefined,
			small: image.formats?.small ? normalizeImageUrl(image.formats.small, baseUrl) : undefined
		}
	};
}

/**
 * Normalizes a project's teaserImage URLs to be absolute
 * @param project - Project object from Strapi
 * @returns Project with absolute teaserImage URLs
 */
function normalizeProject(project: Project): Project {
	return {
		...project,
		teaserImage: project.teaserImage ? normalizeImage(project.teaserImage) : undefined
	};
}

function normalizeBlog(blog: Blog): Blog {
	return {
		...blog,
		teaserImage: blog.teaserImage ? normalizeImage(blog.teaserImage) : undefined
	};
}

/**
 * Serves fresh cache, otherwise loads from Strapi. On failure falls back to stale cache,
 * then answers 503 so crawlers retry instead of de-indexing pages as 404s.
 */
async function cached<T>(key: string, load: () => Promise<T>): Promise<T> {
	const fresh = cache.get<T>(key);
	if (fresh) {
		console.log(`Using cached data (${key})`);
		return fresh;
	}

	try {
		console.log(`No cached data (${key}) - Fetching from Strapi...`);
		const data = await load();
		// Skipping misses keeps random crawler slugs out of the cache
		if (data !== null) cache.set(key, data);
		return data;
	} catch (e) {
		console.error(`Error fetching ${key}:`, e);
		const stale = cache.getIgnoreInvalidation<T>(key);
		if (stale) return stale;
		error(503, 'Content temporarily unavailable');
	}
}

async function fetchStrapi<T>(url: string): Promise<T> {
	const res = await fetch(url);

	// Strapi v5 answers 404 for an unpublished single type; collections answer 200 []
	if (res.status === 404) return null as T;

	if (!res.ok) {
		throw new Error(`${res.status} ${res.statusText} (${await res.text()})`);
	}

	return ((await res.json()) as { data: T }).data;
}

function single<T>(entries: T[]): T | null {
	return entries.length === 1 ? (entries[0] as T) : null;
}

export function fetchBlogs(): Promise<Blog[]> {
	return cached('blogs', async () => {
		const url = buildStrapiUrl('blogs')
			.fields(blogSelectFields)
			.populate(blogPopulateFields)
			.build();
		return (await fetchStrapi<Blog[]>(url)).map(normalizeBlog);
	});
}

/**
 * @returns The blog, or null if no single entry matches the slug
 */
export function fetchBlogBySlug(slug: string): Promise<Blog | null> {
	return cached(`blog-${slug}`, async () => {
		const url = buildStrapiUrl('blogs')
			.filter('slug', '$eq', slug)
			.populate(blogPopulateFields)
			.build();
		const blog = single(await fetchStrapi<Blog[]>(url));
		return blog && normalizeBlog(blog);
	});
}

export function fetchProjects(): Promise<Project[]> {
	return cached('projects', async () => {
		const url = buildStrapiUrl('projects')
			.fields(projectSelectFields)
			.populate(projectPopulateFields)
			.build();
		return (await fetchStrapi<Project[]>(url)).map(normalizeProject);
	});
}

export function fetchExperienceSection(): Promise<ExperienceSectionData | null> {
	return cached('experience-section', () =>
		fetchStrapi<ExperienceSectionData | null>(
			buildStrapiUrl('experience-section').populate(['Steps', 'Steps.Work']).build()
		)
	);
}

/**
 * @returns The project, or null if no single entry matches the slug
 */
export function fetchProjectBySlug(slug: string): Promise<Project | null> {
	return cached(`project-${slug}`, async () => {
		const url = buildStrapiUrl('projects')
			.filter('slug', '$eq', slug)
			.populate(projectPopulateFields)
			.build();
		const project = single(await fetchStrapi<Project[]>(url));
		return project && normalizeProject(project);
	});
}
