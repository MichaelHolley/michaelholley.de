import { describe, it, expect, vi } from 'vitest';
import { buildStrapiUrl } from './strapi-url-builder';

// Mock the env module
vi.mock('$env/dynamic/private', () => ({
	env: {
		STRAPI_URL: 'https://api.example.com'
	}
}));

describe('buildStrapiUrl', () => {
	describe('basic functionality', () => {
		it('should build a simple URL with just an endpoint', () => {
			const url = buildStrapiUrl('blogs').build();
			expect(url).toBe('https://api.example.com/blogs');
		});

		it('should build a URL with a different endpoint', () => {
			const url = buildStrapiUrl('projects').build();
			expect(url).toBe('https://api.example.com/projects');
		});
	});

	describe('fields method', () => {
		it('should add single field to the URL', () => {
			const url = buildStrapiUrl('blogs').fields(['title']).build();
			expect(url).toBe('https://api.example.com/blogs?fields[0]=title');
		});

		it('should add multiple fields to the URL', () => {
			const url = buildStrapiUrl('blogs').fields(['title', 'slug', 'description']).build();
			expect(url).toBe(
				'https://api.example.com/blogs?fields[0]=title&fields[1]=slug&fields[2]=description'
			);
		});

		it('should handle readonly string arrays', () => {
			const fields = ['title', 'slug'] as const;
			const url = buildStrapiUrl('blogs').fields(fields).build();
			expect(url).toBe('https://api.example.com/blogs?fields[0]=title&fields[1]=slug');
		});

		it('should overwrite fields when called multiple times', () => {
			const url = buildStrapiUrl('blogs').fields(['title', 'slug']).fields(['description']).build();
			expect(url).toBe('https://api.example.com/blogs?fields[0]=description');
		});
	});

	describe('populate method', () => {
		it('should add single populate parameter', () => {
			const url = buildStrapiUrl('blogs').populate(['author']).build();
			expect(url).toBe('https://api.example.com/blogs?populate[0]=author');
		});

		it('should add multiple populate parameters', () => {
			const url = buildStrapiUrl('blogs').populate(['author', 'thumbnail', 'tags']).build();
			expect(url).toBe(
				'https://api.example.com/blogs?populate[0]=author&populate[1]=thumbnail&populate[2]=tags'
			);
		});

		it('should handle readonly string arrays', () => {
			const relations = ['author', 'thumbnail'] as const;
			const url = buildStrapiUrl('blogs').populate(relations).build();
			expect(url).toBe('https://api.example.com/blogs?populate[0]=author&populate[1]=thumbnail');
		});

		it('should overwrite populate when called multiple times', () => {
			const url = buildStrapiUrl('blogs')
				.populate(['author', 'thumbnail'])
				.populate(['tags'])
				.build();
			expect(url).toBe('https://api.example.com/blogs?populate[0]=tags');
		});
	});

	describe('filter method', () => {
		it('should add a filter with string value', () => {
			const url = buildStrapiUrl('blogs').filter('slug', '$eq', 'my-blog-post').build();
			expect(url).toBe('https://api.example.com/blogs?filters[slug][$eq]=my-blog-post');
		});

		it('should add a filter with number value', () => {
			const url = buildStrapiUrl('blogs').filter('id', '$eq', 123).build();
			expect(url).toBe('https://api.example.com/blogs?filters[id][$eq]=123');
		});

		it('should add a filter with boolean value', () => {
			const url = buildStrapiUrl('blogs').filter('published', '$eq', true).build();
			expect(url).toBe('https://api.example.com/blogs?filters[published][$eq]=true');
		});

		it('should handle different filter operators', () => {
			const url = buildStrapiUrl('blogs').filter('title', '$contains', 'test').build();
			expect(url).toBe('https://api.example.com/blogs?filters[title][$contains]=test');
		});

		it('should encode special characters in filter values', () => {
			const url = buildStrapiUrl('blogs').filter('title', '$eq', 'test & value').build();
			expect(url).toBe('https://api.example.com/blogs?filters[title][$eq]=test%20%26%20value');
		});

		it('should support multiple filters', () => {
			const url = buildStrapiUrl('blogs')
				.filter('published', '$eq', true)
				.filter('category', '$eq', 'tech')
				.build();
			expect(url).toBe(
				'https://api.example.com/blogs?filters[published][$eq]=true&filters[category][$eq]=tech'
			);
		});
	});

	describe('method chaining', () => {
		it('should chain fields and populate', () => {
			const url = buildStrapiUrl('blogs').fields(['title', 'slug']).populate(['author']).build();
			expect(url).toBe(
				'https://api.example.com/blogs?fields[0]=title&fields[1]=slug&populate[0]=author'
			);
		});

		it('should chain fields, populate, and filter', () => {
			const url = buildStrapiUrl('blogs')
				.fields(['title', 'slug'])
				.populate(['author', 'thumbnail'])
				.filter('slug', '$eq', 'my-post')
				.build();
			expect(url).toBe(
				'https://api.example.com/blogs?fields[0]=title&fields[1]=slug&populate[0]=author&populate[1]=thumbnail&filters[slug][$eq]=my-post'
			);
		});

		it('should support complex chaining with multiple filters', () => {
			const url = buildStrapiUrl('projects')
				.fields(['title', 'slug', 'description'])
				.populate(['thumbnail', 'tech'])
				.filter('published', '$eq', true)
				.filter('featured', '$eq', true)
				.filter('category', '$ne', 'archived')
				.build();
			expect(url).toBe(
				'https://api.example.com/projects?fields[0]=title&fields[1]=slug&fields[2]=description&populate[0]=thumbnail&populate[1]=tech&filters[published][$eq]=true&filters[featured][$eq]=true&filters[category][$ne]=archived'
			);
		});

		it('should allow any order of method calls', () => {
			const url = buildStrapiUrl('blogs')
				.filter('slug', '$eq', 'test')
				.populate(['author'])
				.fields(['title'])
				.build();
			expect(url).toBe(
				'https://api.example.com/blogs?fields[0]=title&populate[0]=author&filters[slug][$eq]=test'
			);
		});
	});

	describe('edge cases', () => {
		it('should handle empty fields array', () => {
			const url = buildStrapiUrl('blogs').fields([]).build();
			expect(url).toBe('https://api.example.com/blogs');
		});

		it('should handle empty populate array', () => {
			const url = buildStrapiUrl('blogs').populate([]).build();
			expect(url).toBe('https://api.example.com/blogs');
		});

		it('should handle endpoint with trailing slash', () => {
			const url = buildStrapiUrl('blogs/').build();
			expect(url).toBe('https://api.example.com/blogs/');
		});

		it('should handle endpoint with leading slash', () => {
			const url = buildStrapiUrl('/blogs').build();
			expect(url).toBe('https://api.example.com//blogs');
		});

		it('should handle nested endpoint paths', () => {
			const url = buildStrapiUrl('api/blogs').build();
			expect(url).toBe('https://api.example.com/api/blogs');
		});
	});

	describe('real-world examples', () => {
		it('should build URL for blog listing page', () => {
			const url = buildStrapiUrl('blogs')
				.fields(['title', 'slug', 'description', 'publishedAt'])
				.populate(['author', 'thumbnail'])
				.filter('published', '$eq', true)
				.build();
			expect(url).toBe(
				'https://api.example.com/blogs?fields[0]=title&fields[1]=slug&fields[2]=description&fields[3]=publishedAt&populate[0]=author&populate[1]=thumbnail&filters[published][$eq]=true'
			);
		});

		it('should build URL for single blog post by slug', () => {
			const url = buildStrapiUrl('blogs')
				.fields(['title', 'content', 'publishedAt'])
				.populate(['author', 'thumbnail', 'tags'])
				.filter('slug', '$eq', 'getting-started-with-sveltekit')
				.build();
			expect(url).toBe(
				'https://api.example.com/blogs?fields[0]=title&fields[1]=content&fields[2]=publishedAt&populate[0]=author&populate[1]=thumbnail&populate[2]=tags&filters[slug][$eq]=getting-started-with-sveltekit'
			);
		});

		it('should build URL for project listing', () => {
			const url = buildStrapiUrl('projects')
				.fields(['title', 'slug', 'shortDescription'])
				.populate(['thumbnail', 'techStack'])
				.build();
			expect(url).toBe(
				'https://api.example.com/projects?fields[0]=title&fields[1]=slug&fields[2]=shortDescription&populate[0]=thumbnail&populate[1]=techStack'
			);
		});
	});
});
