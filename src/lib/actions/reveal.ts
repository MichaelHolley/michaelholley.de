/**
 * Svelte action: lets an element rise into place the first time it scrolls into view.
 *
 * Only elements that start below the viewport are hidden (`data-reveal="pending"`), and the
 * hidden state itself lives in CSS behind `prefers-reduced-motion: no-preference`, so content is
 * never held back without JavaScript, under reduced motion, or when it is already on screen.
 *
 * @param delay stagger in milliseconds, applied as `--reveal-delay`
 */
export function reveal(node: HTMLElement, delay = 0) {
	node.style.setProperty('--reveal-delay', `${delay}ms`);

	if (node.getBoundingClientRect().top < window.innerHeight) {
		node.dataset.reveal = 'in';
		return;
	}

	node.dataset.reveal = 'pending';
	const observer = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return;
			node.dataset.reveal = 'in';
			observer.disconnect();
		},
		{ rootMargin: '0px 0px -10% 0px' }
	);
	observer.observe(node);

	return { destroy: () => observer.disconnect() };
}
