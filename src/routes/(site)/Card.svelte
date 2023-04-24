<script>
	export let title = '';
	export let description = '';
	export let imgSrc = '';
</script>

<div class="flex max-w-md flex-col">
	<div class="bg-primary-500 w-fit h-fit">
		<img
			class="mb-4 aspect-square rounded-lg object-cover shadow-2xl "
			src={imgSrc}
			alt={title}
		/>
	</div>

	<div class="-mt-16 px-4">
		<div class="card-footer variant-filled space-y-4 rounded-lg p-4">
			<h3 class="">{title}</h3>
			<p>{description}</p>
			<div class="">
				<a href="#" class="unstyled text-secondary-500 underline">Learn More</a>
			</div>
		</div>
	</div>
</div>
