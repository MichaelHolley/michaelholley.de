import { env } from '$env/dynamic/private';

class Cache {
	private cache: { [key: string]: { data: unknown; timestamp: number } } = {};
	private cacheInvalidationTimeInSeconds =
		Number(env.CACHE_INVALIDATION_TIME_IN_SECONDS) || 60 * 10;

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
