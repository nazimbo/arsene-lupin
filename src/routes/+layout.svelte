<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { setTheme } from '$lib/theme';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let { children } = $props();

	// Initialiser le thème au montage du composant
	onMount(() => {
		if (browser) {
			const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
			if (savedTheme) {
				setTheme(savedTheme);
			}
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white"
>
	<header class="container mx-auto flex items-center justify-between px-4 py-6">
		<nav class="flex gap-6">
			<a href="/" class="font-serif-fine hover:underline" data-sveltekit-preload-data>Accueil</a>
			<a href="/personnage" class="font-serif-fine hover:underline" data-sveltekit-preload-data
				>Le Personnage</a
			>
			<a href="/oeuvres" class="font-serif-fine hover:underline" data-sveltekit-preload-data
				>Les Œuvres</a
			>
		</nav>
		<ThemeToggle />
	</header>

	<main class="container mx-auto px-4">
		{@render children?.()}
	</main>
</div>
