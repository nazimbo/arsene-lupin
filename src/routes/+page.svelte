<svelte:head>
	<title>Arsène Lupin - L'Ombre et la Plume</title>
	<meta name="description" content="L'univers du gentleman-cambrioleur Arsène Lupin" />
</svelte:head>

<div class="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-6 max-w-4xl mx-auto">
	<h1 class="font-manuscript text-6xl md:text-7xl lg:text-8xl text-center mb-8 text-black dark:text-white">
		Arsène Lupin
	</h1>
	
	<blockquote class="font-serif-fine text-xl md:text-2xl text-center italic mb-8 font-light text-gray-700 dark:text-gray-300">
		« Il faut être de son temps. »
	</blockquote>
	
	<p class="font-serif-fine text-lg text-center font-light leading-relaxed mb-12 text-gray-600 dark:text-gray-400 max-w-2xl">
		Plongez dans l'univers du gentleman-cambrioleur le plus célèbre de la littérature française, 
		créé par Maurice Leblanc.
	</p>
	
	<nav class="flex flex-col sm:flex-row gap-6">
		<a 
			href="/personnage" 
			class="font-serif-fine text-lg px-8 py-3 border border-black dark:border-white 
				   text-center text-black dark:text-white hover:bg-black hover:text-white 
				   dark:hover:bg-white dark:hover:text-black transition-colors duration-300 
				   no-underline decoration-none"
		>
			Le Personnage
		</a>
		<a 
			href="/oeuvres" 
			class="font-serif-fine text-lg px-8 py-3 border border-black dark:border-white 
				   text-center text-black dark:text-white hover:bg-black hover:text-white 
				   dark:hover:bg-white dark:hover:text-black transition-colors duration-300 
				   no-underline decoration-none"
		>
			Les Œuvres
		</a>
	</nav>
</div>