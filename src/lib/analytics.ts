import { afterNavigate } from '$app/navigation';

export function initAnalytics() {
	afterNavigate(({ to }) => {
		sendPageView(to?.url.pathname ?? 'undefined');
	});
}

function sendPageView(path: string) {
	navigator.sendBeacon(
		'/analytics',
		JSON.stringify({
			path,
			timestamp: Date.now()
		})
	);
}
