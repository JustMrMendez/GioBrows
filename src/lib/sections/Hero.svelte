<script lang="ts">
	$: classsesBase = `${$$props.class ?? ''}`;
</script>

<!-- 
	bg-surface-50-900-token
	xl:rounded-bl-full
 -->
<section
	class="bg-gradient-500 h-fit md:rounded-none lg:h-[90vh] lg:overflow-y-hidden {classsesBase} text-white"
>
	<div class="container mx-auto flex h-full flex-col lg:flex-row">
		<!-- mix-blend-multiply -->
		<img
			class="pointer-events-none order-2 mx-auto hidden h-1/2 max-h-[680px] select-none object-contain object-left-bottom dark:mix-blend-normal md:block md:h-full lg:order-1 lg:ml-auto lg:max-h-full lg:w-[55%]"
			src="/img/jeovana.png"
			alt="Jeovana"
		/>
		<!-- mix-blend-multiply -->
		<img
			class="pointer-events-none order-2 mx-auto h-1/2 max-h-[680px] select-none object-contain object-left-bottom dark:mix-blend-normal md:hidden md:h-full"
			src="/img/lady.png"
			alt="Jeovana"
		/>
		<div
			class="order-1 my-auto flex h-4/5 flex-grow flex-col justify-around space-y-4 pt-24 md:justify-around lg:order-2 lg:pt-0"
		>
			<div class="">
				<h1
					class="unstyled mb-4 text-center font-brand !text-3xl font-black sm:text-4xl md:!text-5xl xl:!text-5xl"
				>
					Take Charge of Your <span class="block">Beauty Career</span>
				</h1>
				<h1
					class="gradient-heading block pb-1 text-center !text-4xl font-black dark:text-primary-500 xl:!text-6xl"
				>
					<a href="#microblading" class="unstyled link-underline link-underline-black group">
						Micropigmentation
						<span
							class="block bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]"
							>Courses</span
						>
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
				<div class="mb-10 flex flex-col items-center justify-around gap-4 md:flex-row">
					<a
						href="#courses"
						class="btn variant-soft-surface h-fit font-bold md:hover:variant-filled-primary"
						>See Courses</a
					>
					<a
						href="#courses"
						class="btn variant-filled-surface h-fit border-surface-500/50 font-bold border-token md:hover:variant-ghost-primary md:md:hover:shadow-2xl md:hover:text-on-surface-token"
					>
						Get Full Access
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="curve">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
				class="fill-surface-50 dark:fill-surface-900"
			/>
		</svg>
	</div>
</section>

<style>
	.curve {
		position: absolute;
		bottom: -10px;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.curve svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 150px;
	}

	/* .curve .shape-fill {
		fill: rgba(var(--color-surface-50) / 1);
	} */

	/** For tablet devices **/
	@media (min-width: 768px) and (max-width: 1023px) {
		.curve svg {
			width: calc(100% + 1.3px);
			height: 100px;
		}
	}

	/** For mobile devices **/
	@media (max-width: 767px) {
		.curve svg {
			width: calc(100% + 1.3px);
			height: 60px;
		}
	}

	/* @media (min-width: 640px) {
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
	} */
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
