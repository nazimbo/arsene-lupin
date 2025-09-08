<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('home.title')} - L'Ombre et la Plume</title>
	<meta name="description" content={$_('meta.homeDescription')} />
</svelte:head>

<div
	class="mx-auto flex min-h-[calc(100vh-200px)] max-w-4xl flex-col items-center justify-center px-6"
>
	<h1
		class="font-manuscript mb-8 text-center text-6xl text-black md:text-7xl lg:text-8xl dark:text-white"
	>
		{$_('home.title')}
	</h1>

	<blockquote
		class="font-serif-fine mb-8 text-center text-xl font-light text-black italic md:text-2xl dark:text-white"
	>
		{$_('home.quote')}
	</blockquote>

	<p
		class="font-serif-fine mb-12 max-w-2xl text-center text-lg leading-relaxed font-light text-black dark:text-white"
	>
		{$_('home.description')}
	</p>

	<nav class="flex flex-col gap-6 sm:flex-row">
		<a
			href="/personnage"
			class="font-serif-fine decoration-none border border-black px-8 py-3 text-center
				   text-lg text-black no-underline transition-colors duration-300
				   hover:bg-black hover:text-white dark:border-white dark:text-white
				   dark:hover:bg-white dark:hover:text-black"
			data-sveltekit-preload-data
		>
			{$_('home.characterLink')}
		</a>
		<a
			href="/oeuvres"
			class="font-serif-fine decoration-none border border-black px-8 py-3 text-center
				   text-lg text-black no-underline transition-colors duration-300
				   hover:bg-black hover:text-white dark:border-white dark:text-white
				   dark:hover:bg-white dark:hover:text-black"
			data-sveltekit-preload-data
		>
			{$_('home.worksLink')}
		</a>
	</nav>
</div>
