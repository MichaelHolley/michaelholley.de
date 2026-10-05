import { CACHE_INVALIDATION_TIME_IN_SECONDS } from '$app/env/private';

class Cache {
	private cache: { [key: string]: { data: unknown; timestamp: number } } = {};
	private cacheInvalidationTimeInSeconds = CACHE_INVALIDATION_TIME_IN_SECONDS;

	get<T>(key: string): T | null {
		const item = this.cache[key];
		if (item && Date.now() - item.timestamp < this.cacheInvalidationTimeInSeconds * 1000) {
			return item.data as T;
		}
		return null;
	}

	set<T>(key: string, data: T) {
		this.cache[key] = { data, timestamp: Date.now() };
	}

	getIgnoreInvalidation<T>(key: string): T | null {
		const item = this.cache[key];
		if (item) {
			return item.data as T;
		}

		return null;
	}
}

export const cache = new Cache();
