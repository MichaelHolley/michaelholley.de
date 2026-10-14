import { query } from '$app/server';
import { fetchExperienceSection } from '#lib/server/services/strapi.service.js';

export const getExperienceSection = query(async () => {
	const experienceSection = await fetchExperienceSection();
	return { experienceSection };
});
