<script lang="ts">
	import DashRail from '$lib/navigation/DashRail.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';

	import BaseAppBar from '$lib/navigation/BaseAppBar.svelte';

	export let data: LayoutData;
</script>

<AppShell slotHeader="py-0" slotPageContent="overflow-hidden">
	<svelte:fragment slot="header">
		<BaseAppBar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<DashRail />
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
