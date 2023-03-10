<script lang="ts">
	import { enhance } from '$app/forms';
	import Logo from '$lib/shared/Logo.svelte';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

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
		{/if}
	</ul>
	<svelte:fragment slot="trail">
		<LightSwitch height="h-6" />
	</svelte:fragment>
</AppBar>
<slot />
