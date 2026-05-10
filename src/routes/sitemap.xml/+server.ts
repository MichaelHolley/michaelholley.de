import { fetchBlogs, fetchProjects } from '$lib/server/services/strapi.service';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const origin = url.origin;
	const [blogs, projects] = await Promise.all([fetchBlogs(), fetchProjects()]);

	const staticUrls = [{ loc: `${origin}/`, priority: '1.0' }];

	const blogUrls = blogs.map((blog) => ({
		loc: `${origin}/blogs/${blog.slug}`,
		lastmod: blog.released.split('T')[0],
		priority: '0.8'
	}));

	const projectUrls = projects.map((project) => ({
		loc: `${origin}/projects/${project.slug}`,
		priority: '0.7'
	}));

	const allUrls = [...staticUrls, ...blogUrls, ...projectUrls];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
	.map(
		(entry) => `  <url>
    <loc>${entry.loc}</loc>${'lastmod' in entry ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''}
    <priority>${entry.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
