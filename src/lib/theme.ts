import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

// Get theme from localStorage or use 'light' as default
const defaultTheme: Theme = 'light';
const initialTheme: Theme = browser
	? (localStorage.getItem('theme') as Theme) || defaultTheme
	: defaultTheme;

export const theme = writable<Theme>(initialTheme);

// Function to set theme with persistence
export function setTheme(newTheme: Theme) {
	if (browser) {
		// Update localStorage
		localStorage.setItem('theme', newTheme);

		// Update CSS class
		document.documentElement.classList.toggle('dark', newTheme === 'dark');

		// Update cookie for SSR
		document.cookie = `theme=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
	}

	// Update store
	theme.set(newTheme);
}

// Function to toggle theme
export function toggleTheme() {
	theme.update((current) => {
		const newTheme = current === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		return newTheme;
	});
}
