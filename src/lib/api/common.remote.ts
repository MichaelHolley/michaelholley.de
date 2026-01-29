import { query } from '$app/server';
import { tech, type TechMap } from '$lib/tech-icons';

export const getTech = query(async () => {
	return tech as TechMap;
});
