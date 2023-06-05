<script>
	import { slide } from 'svelte/transition';

	export let title = '';
	export let description = '';
	export let imgSrc = '';
	let flipped = false;
	$: classsesBase = `${$$props.class ?? ''}`;
</script>

<div class="group flex max-w-md flex-col {classsesBase}">
	<div
		class="sticky top-32 h-96 w-fit transition-all duration-300 md:relative md:group-hover:-translate-y-6"
	>
		<img
			class="mb-4 aspect-square rounded-lg object-cover shadow-md md:aspect-[10/8]"
			src={imgSrc}
			alt={title}
		/>
	</div>

	<div
		class="sticky -mt-16 px-4 transition-all duration-300 md:relative md:mt-0 md:group-hover:translate-y-6"
	>
		<div class="card-footer card-hover bg-surface-50-900-token text-surface-900-50-token space-y-4 rounded-lg p-4 shadow-2xl">
			<h3 class="">{title}</h3>
			<p>{description}</p>
			<div class="">
				<a href="#" class="unstyled text-secondary-500-400-token underline">Learn More</a>
			</div>
		</div>
	</div>
</div>

<style>
	.variant-filled {
		background-color: rgb(var(--color-surface-900));
		color: rgb(var(--color-surface-50));
	}
	.dark .variant-filled {
		background-color: rgb(var(--color-surface-50));
		color: rgb(var(--color-surface-900));
	}
</style>
