<script>
	import Benefits from '$lib/sections/Benefits.svelte';
	import Hero from '$lib/sections/Hero.svelte';
</script>

<div class="flex flex-col">
	<Hero class="relative z-10" />
	<!-- <div class="wave spacer" /> -->

	<Benefits class="flex-grow pt-32 md:mt-40 md:pt-0" />
</div>

<!-- 
<main class="flex flex-col justify-between h-full">
<div class="bg-primary-500 block h-full">
	 <section class="h-fit bg-surface-50-900-token md:rounded-none lg:h-5/6 lg:overflow-y-hidden xl:rounded-bl-full relative z-10">...</section>
	 <section class="py-12 bg-primary-500 pt-32 md:mt-40 md:pt-0 mb-96">...</section>
 </div>
<footer class="">...</footer>
</main>
 -->
