import { env } from '$env/dynamic/private';
import { cache } from '$lib/server/cache';
import type { Blog, ImageFormat, Project, Image } from '$lib/server/types';
import { buildStrapiUrl } from '$lib/server/services/util/strapi-url-builder';

const blogSelectFields = [
	'id',
	'documentId',
	'title',
	'slug',
	'description',
	'released'
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
	'highlight'
] as const satisfies readonly (keyof Project)[];

const projectPopulateFields: string[] = ['teaserImage', 'projectIcon', 'tech.icon'];

/**
 * Gets the base URL for Strapi (without /api suffix)
 */
function getStrapiBaseUrl(): string {
	const strapiUrl = env.STRAPI_URL ?? '';
	return strapiUrl.replace('/api', '');
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
 * Fetches all blogs from Strapi with caching support
 * @returns Array of blogs or empty array on error
 */
export async function fetchBlogs(): Promise<Blog[]> {
	let cachedBlogs = cache.get<Blog[]>('blogs');

	try {
		if (cachedBlogs) {
			console.log('Using cached data (blogs)');
			return cachedBlogs;
		}

		console.log('No cached data (blogs) - Fetching from Strapi...');

		const strapiUrl = buildStrapiUrl('blogs')
			.fields(blogSelectFields)
			.populate(blogPopulateFields)
			.build();
		const res = await fetch(strapiUrl);

		if (!res.ok) {
			throw new Error(
				`Failed to fetch blogs: ${res.status} ${res.statusText} (${await res.text()})`
			);
		}

		const filterResult = (await res.json()) as { data: Blog[] };
		const normalizedBlogs = filterResult.data.map(normalizeBlog);

		cache.set('blogs', normalizedBlogs);

		return normalizedBlogs;
	} catch (e) {
		console.error('Error fetching blogs:', e);

		cachedBlogs = cache.getIgnoreInvalidation<Blog[]>('blogs');

		return cachedBlogs || [];
	}
}

/**
 * Fetches a single blog by slug from Strapi with caching support
 * @param slug - The blog slug to fetch
 * @returns Blog object or null if not found
 */
export async function fetchBlogBySlug(slug: string): Promise<Blog | null> {
	let cachedBlog = cache.get<Blog>(`blog-${slug}`);

	try {
		if (cachedBlog) {
			console.log(`Using cached data (blog-slug: ${slug})`);
			return cachedBlog;
		}

		console.log(`No cached data (blog-slug: ${slug}) - Fetching from Strapi...`);
		const strapiUrl = buildStrapiUrl('blogs')
			.filter('slug', '$eq', slug)
			.populate(blogPopulateFields)
			.build();
		const res = await fetch(strapiUrl);

		if (!res.ok) {
			throw new Error(
				`Failed to fetch blog ${slug}: ${res.status} ${res.statusText} (${await res.text()})`
			);
		}

		const filterResult = ((await res.json()) as { data: Blog[] }).data;

		if (filterResult.length !== 1) {
			throw new Error(`Blog with slug ${slug} not found or multiple entries exist.`);
		}

		const blog = filterResult[0] as Blog;
		const normalizedBlog = normalizeBlog(blog);

		cache.set(`blog-${slug}`, normalizedBlog);

		return normalizedBlog;
	} catch (e) {
		console.error('Error fetching blog:', e);

		cachedBlog = cache.getIgnoreInvalidation<Blog>(`blog-${slug}`);
		return cachedBlog || null;
	}
}

/**
 * Fetches all projects from Strapi with caching support
 * @returns Array of projects or empty array on error
 */
export async function fetchProjects(): Promise<Project[]> {
	let cachedProjects = cache.get<Project[]>('projects');

	try {
		if (cachedProjects) {
			console.log('Using cached data (projects)');
			return cachedProjects;
		}

		console.log('No cached data (projects) - Fetching from Strapi...');

		const strapiUrl = buildStrapiUrl('projects')
			.fields(projectSelectFields)
			.populate(projectPopulateFields)
			.build();
		const res = await fetch(strapiUrl);

		if (!res.ok) {
			throw new Error(
				`Failed to fetch projects: ${res.status} ${res.statusText} (${await res.text()})`
			);
		}

		const filterResult = (await res.json()) as { data: Project[] };

		const normalizedProjects = filterResult.data.map(normalizeProject);

		cache.set('projects', normalizedProjects);

		return normalizedProjects;
	} catch (e) {
		console.error('Error fetching projects:', e);

		cachedProjects = cache.getIgnoreInvalidation<Project[]>('projects');

		return cachedProjects || [];
	}
}

/**
 * Fetches a single project by slug from Strapi with caching support
 * @param slug - The project slug to fetch
 * @returns Project object or null if not found
 */
export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
	let cachedProject = cache.get<Project>(`project-${slug}`);

	try {
		if (cachedProject) {
			console.log(`Using cached data (project-slug: ${slug})`);
			return cachedProject;
		}

		console.log(`No cached data (project-slug: ${slug}) - Fetching from Strapi...`);
		const strapiUrl = buildStrapiUrl('projects')
			.filter('slug', '$eq', slug)
			.populate(projectPopulateFields)
			.build();
		const res = await fetch(strapiUrl);

		if (!res.ok) {
			throw new Error(
				`Failed to fetch project ${slug}: ${res.status} ${res.statusText} (${await res.text()})`
			);
		}

		const filterResult = ((await res.json()) as { data: Project[] }).data;

		if (filterResult.length !== 1) {
			throw new Error(`Project with slug ${slug} not found or multiple entries exist.`);
		}

		const project = filterResult[0] as Project;
		const normalizedProject = normalizeProject(project);

		cache.set(`project-${slug}`, normalizedProject);

		return normalizedProject;
	} catch (e) {
		console.error('Error fetching project:', e);

		cachedProject = cache.getIgnoreInvalidation<Project>(`project-${slug}`);
		return cachedProject || null;
	}
}
