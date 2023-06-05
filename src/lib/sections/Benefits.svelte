<script>
	import Card from '$lib/shared/Card.svelte';

	$: classsesBase = `${$$props.class ?? ''}`;
</script>

<section class="py-12 {classsesBase}">
	<div class="container mx-auto px-4">
		<div class="mb-12 space-y-4 text-center md:mb-0">
			<h2 class="!text-4xl font-bold lg:!text-7xl">What would you learn?</h2>
			<p class="hidden md:block">
				All the skills you need to become a successful micropigmentation artist.
			</p>
			<p class="md:hidden">All the skills needed to become a <b>micropigmentation artist.</b></p>
		</div>

		<div class="flex flex-wrap justify-around gap-10">
			<Card
				class="top-24"
				title="Theory & Background"
				description="Dive into the fundamentals of micropigmentation. Learn the history, techniques, tools, color theory, and essential hygiene practices to excel in your career."
				imgSrc="img/theory-b.jpg"
			/>
			<Card
				class="top-24"
				title="Latex Practice"
				description="Hone your skills through guided latex practice sessions. Master the techniques and precision required for successful micropigmentation treatments."
				imgSrc="img/latex_practice.webp"
			/>
			<Card
				class="top-24"
				title="Expert Demonstrations"
				description="Gain practical insights by watching expert instructors perform micropigmentation techniques on live models in detailed video demonstrations."
				imgSrc="img/expert_demonstrations.webp"
			/>
		</div>
	</div>
</section>
