<script>
	import Card from './Card.svelte';

	$: classsesBase = `${$$props.class ?? ''}`;
</script>

<section class="py-12 {classsesBase}">
	<div class="container mx-auto px-4">
		<div class="mb-12 space-y-4 text-center">
			<h2 class="!text-7xl font-bold">What would you learn?</h2>
			<p class="">All the skills you need to become a successful micropigmentation artist.</p>
		</div>

		<div class="flex justify-around gap-10">
			<Card
				title="Theory & Background"
				description="Dive into the fundamentals of micropigmentation. Learn the history, techniques, tools, color theory, and essential hygiene practices to excel in your career."
				imgSrc="img/theory-b.jpg"
			/>
			<Card
				title="Latex Practice"
				description="Hone your skills through guided latex practice sessions. Master the techniques and precision required for successful micropigmentation treatments."
				imgSrc="https://picsum.photos/500/500"
			/>
			<Card
				title="Expert Demonstrations"
				description="Gain practical insights by watching expert instructors perform micropigmentation techniques on live models in detailed video demonstrations."
				imgSrc="https://picsum.photos/500/500"
			/>
		</div>
	</div>
</section>
