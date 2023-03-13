<script lang="ts">
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { page } from '$app/stores';
	import { storeCurrentUrl } from '$lib/stores/stores';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { Modal, modalStore, storePopup, type ModalComponent } from '@skeletonlabs/skeleton';
	import Cart from '$lib/modals/Cart.svelte';

	storePopup.set({
		computePosition,
		autoUpdate,
		flip,
		shift,
		offset,
		arrow
	});
	$: storeCurrentUrl.set($page.url.pathname);

	const components: Record<string, ModalComponent> = {
		inspector: {
			// Pass a reference to your custom component
			ref: Cart,
			// Pass any props you want to pass to your component
			props: {
				transaction: $modalStore[0]?.meta
			}
		}
	};
</script>

<Modal {components} />

	<slot />
