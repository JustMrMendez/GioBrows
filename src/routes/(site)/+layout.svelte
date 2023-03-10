<script lang="ts">
	import { enhance } from '$app/forms';
	import Cart from '$lib/modals/Cart.svelte';
	import Logo from '$lib/shared/Logo.svelte';
	import {
		AppBar,
		Drawer,
		drawerStore,
		LightSwitch,
		type DrawerSettings
	} from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;

	function drawerOpenStyled(): void {
		const settings: DrawerSettings = {
			id: 'notifications',
			// Provide your property overrides:
			bgDrawer: 'bg-surface-100-800-token',
			bgBackdrop: 'bg-surface-900/50',
			width: 'w-[280px] md:w-[480px]',
			padding: 'p-4',
			rounded: 'rounded-xl',
			position: 'right'
		};
		drawerStore.open(settings);
	}
</script>

<Drawer>
	<Cart />
</Drawer>
<AppBar
	padding="p-4 w-full"
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">
		<Logo />
	</svelte:fragment>
	<ul class="list-nav flex">
		{#if data.user}
			<li>
				<form method="post" use:enhance action="/auth?/logout">
					<button type="submit">Logout</button>
				</form>
			</li>
		{:else}
			<li>
				<a href="/auth">Login</a>
			</li>
			<li>
				<button on:click={drawerOpenStyled}>Cart</button>
			</li>
		{/if}
	</ul>
	<svelte:fragment slot="trail">
		<LightSwitch height="h-6" />
	</svelte:fragment>
</AppBar>
<slot />
