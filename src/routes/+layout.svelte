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

<div class="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
	<header class="container mx-auto px-4 py-6 flex justify-between items-center">
		<nav class="flex gap-6">
			<a href="/" class="hover:underline">Accueil</a>
			<a href="/personnage" class="hover:underline">Le Personnage</a>
			<a href="/oeuvres" class="hover:underline">Les Œuvres</a>
		</nav>
		<ThemeToggle />
	</header>

	<main class="container mx-auto px-4">
		{@render children?.()}
	</main>
</div>
