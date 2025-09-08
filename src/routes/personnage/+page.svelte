<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('character.title')} - Arsène Lupin</title>
	<meta name="description" content={$_('meta.characterDescription')} />
</svelte:head>

<div class="min-h-screen py-12">
	<div class="mx-auto max-w-4xl px-6">
		<header class="mb-16 text-center">
			<h1 class="font-manuscript mb-6 text-6xl text-black md:text-7xl lg:text-8xl dark:text-white">
				{$_('character.title')}
			</h1>
			<p class="font-serif-fine text-xl font-light text-black dark:text-white">
				{$_('character.subtitle')}
			</p>
		</header>

		<div class="mx-auto prose prose-lg text-black dark:text-white dark:prose-invert">
			<p class="font-serif-fine text-lg leading-relaxed">
				{$_('character.description')}
			</p>
		</div>
	</div>
</div>
