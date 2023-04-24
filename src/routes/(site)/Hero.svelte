<script lang="ts">
	$: classsesBase = `${$$props.class ?? ''}`;
</script>

<section
	class="h-fit bg-surface-50-900-token md:rounded-none lg:h-5/6 lg:overflow-y-hidden xl:rounded-bl-full {classsesBase}"
>
	<div class="container mx-auto flex h-full flex-col lg:flex-row">
		<img
			class="pointer-events-none order-2 mx-auto hidden h-1/2 max-h-[680px] select-none object-contain object-left-bottom mix-blend-multiply dark:mix-blend-normal md:block md:h-full lg:order-1 lg:ml-auto lg:max-h-full lg:w-[55%]"
			src="/img/jeovana.png"
			alt="Jeovana"
		/>
		<img
			class="pointer-events-none order-2 mx-auto h-1/2 max-h-[680px] select-none object-contain object-left-bottom mix-blend-multiply dark:mix-blend-normal md:hidden md:h-full"
			src="/img/lady.png"
			alt="Jeovana"
		/>
		<div
			class="order-1 my-auto flex h-4/5 flex-grow flex-col justify-around space-y-4 pt-24 md:justify-around lg:order-2 lg:pt-0"
		>
			<div class="">
				<h1
					class="unstyled mb-4 text-center text-3xl font-black sm:text-4xl md:!text-5xl xl:!text-6xl"
				>
					Take Charge of Your <span class="block">Beauty Career</span>
				</h1>
				<h1
					class="gradient-heading block pb-1 text-center !text-4xl font-black dark:text-primary-500 xl:!text-7xl"
				>
					<a href="#microblading" class="unstyled link-underline link-underline-black">
						Micropigmentation Courses
					</a>
				</h1>
			</div>
			<div class="mx-4">
				<p class="mx-auto mb-8 text-center opacity-80 md:w-2/3">
					20+ Years of Expertise. Join Our Courses and Boost Your Career and Income.<span
						class="hidden md:inline"
						>Learn the Skills to Create Flawless Brows and Build a Thriving Business.</span
					> Enroll Now!"
				</p>
				<div class="flex flex-col items-center justify-around gap-4 md:flex-row">
					<a
						href="#courses"
						class="btn variant-glass-surface h-fit font-bold md:hover:variant-filled-primary"
						>See Courses</a
					>
					<a
						href="#courses"
						class="btn variant-ringed-primary h-fit border-surface-500/50 font-bold border-token md:hover:variant-ghost-primary md:md:hover:shadow-2xl md:hover:text-on-surface-token"
					>
						Get Full Access
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@media (min-width: 640px) {
		section {
			-webkit-box-shadow: 0px 55px 0px 0px rgba(var(--color-surface-500) / 0.5);
			-moz-box-shadow: 0px 55px 0px 0px rgba(var(--color-surface-500) / 0.5);
			box-shadow: 0px 55px 0px 0px rgba(var(--color-surface-500) / 0.5),
				0px 0px 100px 80px rgba(var(--color-surface-700) / 0.4);
		}
	}
	@media (max-width: 640px) {
		section {
			-webkit-box-shadow: 0px 35px 0px 0px rgba(var(--color-surface-500) / 0.5);
			-moz-box-shadow: 0px 35px 0px 0px rgba(var(--color-surface-500) / 0.5);
			box-shadow: 0px 35px 0px 0px rgba(var(--color-surface-500) / 0.5),
				0px 0px 100px 80px rgba(var(--color-surface-700) / 0.4);

			border-bottom-left-radius: 40px;
			border-bottom-right-radius: 40px;
		}
	}
	img {
		-webkit-filter: drop-shadow(0px 100px 100px rgba(var(--color-surface-600) / 0.9));
		-moz-filter: drop-shadow(0px 100px 100px rgba(var(--color-surface-600) / 0.9));
		filter: drop-shadow(0px 100px 100px rgba(var(--color-surface-600) / 0.9));
	}

	.link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 3px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size 0.5s ease-in-out;
	}

	.link-underline-black {
		background-image: linear-gradient(transparent, transparent),
			linear-gradient(to right, rgb(var(--color-primary-500)), rgb(var(--color-surface-500)));
	}

	.link-underline:hover {
		background-size: 100% 3px;
		background-position: 0 100%;
	}
</style>
