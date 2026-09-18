type ContactLocation = 'header' | 'footer';
type BlogLocation = 'blogs-section' | 'blogs-index';

type UmamiEvents = {
	'contact-click': { location: ContactLocation };
	'social-click': { network: 'github' | 'linkedin'; location: ContactLocation };
	'project-open': { project: string };
	'project-link-click': { project: string; target: 'demo' | 'github' };
	'blog-open': { blog: string; location: BlogLocation };
	'blog-index-open': { location: 'blogs-section' };
	'section-view': { section: 'dev' | 'experience' | 'projects' | 'blog' };
	'article-read': { blog: string };
};

export function track<E extends keyof UmamiEvents>(event: E, data: UmamiEvents[E]) {
	window.umami?.track(event, data);
}

/**
 * Svelte action that invokes `report` the first time the node scrolls a quarter
 * into the viewport, then stops observing.
 */
export function trackOnce(node: HTMLElement, report: () => void) {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return;
			report();
			observer.disconnect();
		},
		{ rootMargin: '0px 0px -25% 0px' }
	);
	observer.observe(node);

	return { destroy: () => observer.disconnect() };
}
