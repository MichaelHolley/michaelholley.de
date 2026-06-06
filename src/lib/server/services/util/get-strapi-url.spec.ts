import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getStrapiUrl } from './get-strapi-url';

let mockEnv: Record<string, string | undefined> = {};

vi.mock('$env/dynamic/private', () => ({
	get env() {
		return mockEnv;
	}
}));

describe('getStrapiUrl', () => {
	beforeEach(() => {
		mockEnv = {};
	});

	it('should return STRAPI_URL when the env var is set', () => {
		mockEnv = { STRAPI_URL: 'https://api.example.com/api' };
		expect(getStrapiUrl()).toBe('https://api.example.com/api');
	});

	it('should throw when STRAPI_URL is not set', () => {
		expect(() => getStrapiUrl()).toThrow('STRAPI_URL is not set');
	});

	it('should throw when STRAPI_URL is an empty string', () => {
		mockEnv = { STRAPI_URL: '' };
		expect(() => getStrapiUrl()).toThrow('STRAPI_URL is not set');
	});
});
