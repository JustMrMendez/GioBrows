<script lang="ts">
	import { AppRail, AppRailTile, drawerStore } from '@skeletonlabs/skeleton';
	import { fly } from 'svelte/transition';
	import { writable, type Writable } from 'svelte/store';
	import { Cog6Tooth } from 'svelte-heros-v2';
	import { menuCategories, menuNavLinks } from './menu';
	import { storeCurrentUrl } from '$lib/stores/stores';

	// Local
	const storeCategory: Writable<string> = writable('home'); // guides | docs | tailwind | svelte | utilities
	let filteredMenuNavLinks: any[] = menuNavLinks;

	// set filteredMenuNavLinks that match the current category
	$: filteredMenuNavLinks = menuNavLinks.filter((item) => item.parent === $storeCategory);

	// Reactive
	$: classesActive = (href: string) => {
		const currentUrlParts = $storeCurrentUrl?.split('/');
		const hrefParts = href.split('/');

		if (currentUrlParts && currentUrlParts.length > 0) {
			// Check if the last path component of the current URL matches the href
			const currentHref = currentUrlParts[currentUrlParts.length - 1];
			if (currentHref === hrefParts[hrefParts.length - 1]) {
				return 'bg-primary-active-token';
			}
		}

		return '';
	};

	let sidebarOpen = true;
</script>

<div
	class="grid h-full grid-cols-[auto_1fr] border-r border-surface-500/30 bg-surface-50-900-token {$$props.class ??
		''}"
>
	<AppRail selected={storeCategory} background="bg-surface-100-800-token z-10">
		<!-- <svelte:fragment slot="lead">
			<AppRailTile icon="menu">
				<Hamburger bind:open={sidebarOpen} />
			</AppRailTile>
		</svelte:fragment> -->

		{#each menuCategories as category}
			<AppRailTile label={category.label} value={category.id}>
				<svelte:component this={category.icon} />
			</AppRailTile>
		{/each}

		<svelte:fragment slot="trail">
			<AppRailTile label="Settings" value="settings">
				<Cog6Tooth />
			</AppRailTile>
		</svelte:fragment>
	</AppRail>
	<!-- Nav Links -->
	{#if sidebarOpen}
		<section
			transition:fly={{ x: -100, opacity: 1, duration: 300 }}
			class="z-0 space-y-4 overflow-y-auto p-4 pb-20"
		>
			{#each filteredMenuNavLinks as { id, title, list }, i}
				{#if list.length > 0}
					<!-- Title -->
					<div {id} class="px-4 font-bold uppercase text-primary-700 dark:text-primary-500">
						{title}
					</div>
					<!-- Navigation List -->
					<nav class="list-nav">
						<ul>
							{#each list as { href, label, badge }}
								<li on:keypress>
									<a {href} class={classesActive(href)} data-sveltekit-preload-data="hover">
										<span class="flex-auto">{@html label}</span>
										{#if badge}<span class="badge variant-filled-secondary">{badge}</span>{/if}
									</a>
								</li>
							{/each}
						</ul>
					</nav>
					<!-- Divider -->
					{#if i + 1 < filteredMenuNavLinks.length}<hr class="!my-6 opacity-50" />{/if}
				{/if}
			{/each}
		</section>
	{/if}
</div>
