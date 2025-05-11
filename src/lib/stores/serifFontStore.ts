import { writable } from 'svelte/store';

export const useSerifFont = writable(false);

export function toggleSerifFont() {
	useSerifFont.update((v) => !v);
}
