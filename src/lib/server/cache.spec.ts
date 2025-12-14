import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { cache } from './cache';

// Mock the env module
vi.mock('$env/dynamic/private', () => ({
	env: {
		CACHE_INVALIDATION_TIME_IN_SECONDS: '60'
	}
}));

describe('Cache', () => {
	beforeEach(() => {
		// Clear the cache before each test
		vi.clearAllMocks();
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	describe('basic functionality', () => {
		it('should set and get a value', () => {
			cache.set('key1', 'value1');
			const result = cache.get<string>('key1');
			expect(result).toBe('value1');
		});

		it('should return null for non-existent key', () => {
			const result = cache.get<string>('nonexistent');
			expect(result).toBeNull();
		});

		it('should handle different data types', () => {
			cache.set('string', 'hello');
			cache.set('number', 42);
			cache.set('boolean', true);
			cache.set('object', { name: 'test' });
			cache.set('array', [1, 2, 3]);

			expect(cache.get<string>('string')).toBe('hello');
			expect(cache.get<number>('number')).toBe(42);
			expect(cache.get<boolean>('boolean')).toBe(true);
			expect(cache.get<{ name: string }>('object')).toEqual({ name: 'test' });
			expect(cache.get<number[]>('array')).toEqual([1, 2, 3]);
		});

		it('should overwrite existing key', () => {
			cache.set('key1', 'value1');
			cache.set('key1', 'value2');
			const result = cache.get<string>('key1');
			expect(result).toBe('value2');
		});
	});

	describe('cache invalidation', () => {
		it('should return cached value before invalidation time', () => {
			cache.set('key1', 'value1');

			// Advance time by 30 seconds (less than 60 second invalidation time)
			vi.advanceTimersByTime(30 * 1000);

			const result = cache.get<string>('key1');
			expect(result).toBe('value1');
		});

		it('should return null after invalidation time', () => {
			cache.set('key1', 'value1');

			// Advance time by 61 seconds (more than 60 second invalidation time)
			vi.advanceTimersByTime(61 * 1000);

			const result = cache.get<string>('key1');
			expect(result).toBeNull();
		});

		it('should return null exactly at invalidation time boundary', () => {
			cache.set('key1', 'value1');

			// Advance time by exactly 60 seconds
			vi.advanceTimersByTime(60 * 1000);

			const result = cache.get<string>('key1');
			expect(result).toBeNull();
		});

		it('should invalidate independently for different keys', () => {
			cache.set('key1', 'value1');

			// Advance time by 30 seconds
			vi.advanceTimersByTime(30 * 1000);

			cache.set('key2', 'value2');

			// Advance time by another 31 seconds (total 61 seconds)
			vi.advanceTimersByTime(31 * 1000);

			// key1 should be invalidated (61 seconds old)
			expect(cache.get<string>('key1')).toBeNull();

			// key2 should still be valid (31 seconds old)
			expect(cache.get<string>('key2')).toBe('value2');
		});

		it('should reset timestamp when overwriting a key', () => {
			cache.set('key1', 'value1');

			// Advance time by 50 seconds
			vi.advanceTimersByTime(50 * 1000);

			// Overwrite the key
			cache.set('key1', 'value2');

			// Advance time by another 50 seconds (total 100 seconds from original)
			vi.advanceTimersByTime(50 * 1000);

			// The new value should still be valid (only 50 seconds old from last set)
			const result = cache.get<string>('key1');
			expect(result).toBe('value2');
		});
	});

	describe('getIgnoreInvalidation method', () => {
		it('should return value even after invalidation time', () => {
			cache.set('key1', 'value1');

			// Advance time by 120 seconds (well past invalidation time)
			vi.advanceTimersByTime(120 * 1000);

			const result = cache.getIgnoreInvalidation<string>('key1');
			expect(result).toBe('value1');
		});

		it('should return null for non-existent key', () => {
			const result = cache.getIgnoreInvalidation<string>('nonexistent');
			expect(result).toBeNull();
		});

		it('should return value before invalidation time', () => {
			cache.set('key1', 'value1');

			// Advance time by 30 seconds
			vi.advanceTimersByTime(30 * 1000);

			const result = cache.getIgnoreInvalidation<string>('key1');
			expect(result).toBe('value1');
		});

		it('should work with different data types', () => {
			cache.set('object', { name: 'test', count: 5 });

			// Advance time by 120 seconds
			vi.advanceTimersByTime(120 * 1000);

			const result = cache.getIgnoreInvalidation<{ name: string; count: number }>('object');
			expect(result).toEqual({ name: 'test', count: 5 });
		});

		it('should return latest value after overwrite', () => {
			cache.set('key1', 'value1');

			// Advance time by 120 seconds
			vi.advanceTimersByTime(120 * 1000);

			cache.set('key1', 'value2');

			const result = cache.getIgnoreInvalidation<string>('key1');
			expect(result).toBe('value2');
		});
	});

	describe('type safety', () => {
		it('should handle generic types correctly', () => {
			interface User {
				id: number;
				name: string;
				email: string;
			}

			const user: User = { id: 1, name: 'John', email: 'john@example.com' };
			cache.set<User>('user', user);

			const result = cache.get<User>('user');
			expect(result).toEqual(user);
			expect(result?.id).toBe(1);
			expect(result?.name).toBe('John');
			expect(result?.email).toBe('john@example.com');
		});

		it('should handle nested objects', () => {
			interface Project {
				id: number;
				title: string;
				metadata: {
					createdAt: string;
					tags: string[];
				};
			}

			const project: Project = {
				id: 1,
				title: 'Test Project',
				metadata: {
					createdAt: '2025-01-01',
					tags: ['test', 'demo']
				}
			};

			cache.set<Project>('project', project);
			const result = cache.get<Project>('project');
			expect(result).toEqual(project);
			expect(result?.metadata.tags).toEqual(['test', 'demo']);
		});

		it('should handle array types', () => {
			interface Blog {
				id: number;
				title: string;
			}

			const blogs: Blog[] = [
				{ id: 1, title: 'Blog 1' },
				{ id: 2, title: 'Blog 2' }
			];

			cache.set<Blog[]>('blogs', blogs);
			const result = cache.get<Blog[]>('blogs');
			expect(result).toEqual(blogs);
			expect(result?.length).toBe(2);
		});
	});

	describe('edge cases', () => {
		it('should handle empty string as key', () => {
			cache.set('', 'value');
			const result = cache.get<string>('');
			expect(result).toBe('value');
		});

		it('should handle null as value', () => {
			cache.set('key1', null);
			const result = cache.get<null>('key1');
			expect(result).toBeNull();
		});

		it('should handle undefined as value', () => {
			cache.set('key1', undefined);
			const result = cache.get<undefined>('key1');
			expect(result).toBeUndefined();
		});

		it('should handle special characters in key', () => {
			cache.set('key:with:colons', 'value1');
			cache.set('key/with/slashes', 'value2');
			cache.set('key.with.dots', 'value3');

			expect(cache.get<string>('key:with:colons')).toBe('value1');
			expect(cache.get<string>('key/with/slashes')).toBe('value2');
			expect(cache.get<string>('key.with.dots')).toBe('value3');
		});

		it('should handle very large objects', () => {
			const largeArray = Array.from({ length: 10000 }, (_, i) => ({
				id: i,
				name: `Item ${i}`
			}));

			cache.set('large', largeArray);
			const result = cache.get<typeof largeArray>('large');
			expect(result?.length).toBe(10000);
			expect(result?.[0]).toEqual({ id: 0, name: 'Item 0' });
		});
	});

	describe('real-world examples', () => {
		it('should cache API response data', () => {
			interface ApiResponse {
				blogs: Array<{ id: number; title: string; slug: string }>;
				total: number;
			}

			const apiResponse: ApiResponse = {
				blogs: [
					{ id: 1, title: 'First Blog', slug: 'first-blog' },
					{ id: 2, title: 'Second Blog', slug: 'second-blog' }
				],
				total: 2
			};

			cache.set('api:blogs:list', apiResponse);
			const result = cache.get<ApiResponse>('api:blogs:list');
			expect(result).toEqual(apiResponse);
		});

		it('should cache and retrieve blog post by slug', () => {
			interface BlogPost {
				id: number;
				title: string;
				content: string;
				slug: string;
			}

			const blogPost: BlogPost = {
				id: 1,
				title: 'Getting Started with SvelteKit',
				content: 'Lorem ipsum...',
				slug: 'getting-started-with-sveltekit'
			};

			cache.set(`blog:${blogPost.slug}`, blogPost);
			const result = cache.get<BlogPost>(`blog:${blogPost.slug}`);
			expect(result?.title).toBe('Getting Started with SvelteKit');
		});

		it('should use getIgnoreInvalidation as fallback when cache expires', () => {
			interface Projects {
				items: Array<{ id: number; name: string }>;
			}

			const projects: Projects = {
				items: [{ id: 1, name: 'Project 1' }]
			};

			cache.set('projects', projects);

			// Advance time past invalidation
			vi.advanceTimersByTime(120 * 1000);

			// Normal get returns null
			expect(cache.get<Projects>('projects')).toBeNull();

			// But we can still get stale data as fallback
			const staleData = cache.getIgnoreInvalidation<Projects>('projects');
			expect(staleData).toEqual(projects);
		});

		it('should handle multiple concurrent cache operations', () => {
			// Simulate multiple API endpoints being cached
			cache.set('blogs:featured', [{ id: 1, title: 'Featured' }]);
			cache.set('projects:recent', [{ id: 2, title: 'Recent' }]);
			cache.set('user:profile', { name: 'John' });

			// Advance time by 30 seconds
			vi.advanceTimersByTime(30 * 1000);

			// Add more cache entries
			cache.set('blogs:recent', [{ id: 3, title: 'Recent Blog' }]);

			// Advance time by another 35 seconds (total 65 seconds)
			vi.advanceTimersByTime(35 * 1000);

			// First 3 should be invalidated
			expect(cache.get('blogs:featured')).toBeNull();
			expect(cache.get('projects:recent')).toBeNull();
			expect(cache.get('user:profile')).toBeNull();

			// Last one should still be valid (35 seconds old)
			expect(cache.get('blogs:recent')).toEqual([{ id: 3, title: 'Recent Blog' }]);
		});
	});
});
