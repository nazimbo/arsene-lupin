import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

// Récupérer le thème depuis localStorage ou utiliser 'light' par défaut
const defaultTheme: Theme = 'light';
const initialTheme: Theme = browser ? 
	(localStorage.getItem('theme') as Theme) || defaultTheme : 
	defaultTheme;

export const theme = writable<Theme>(initialTheme);

// Fonction pour définir le thème avec persistence
export function setTheme(newTheme: Theme) {
	if (browser) {
		// Mise à jour localStorage
		localStorage.setItem('theme', newTheme);
		
		// Mise à jour classe CSS
		document.documentElement.classList.toggle('dark', newTheme === 'dark');
		
		// Mise à jour cookie pour SSR
		document.cookie = `theme=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
	}
	
	// Mise à jour store
	theme.set(newTheme);
}

// Fonction pour basculer le thème
export function toggleTheme() {
	theme.update(current => {
		const newTheme = current === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		return newTheme;
	});
}