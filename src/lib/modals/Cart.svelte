<script lang="ts">
	import { shoppingCart } from '$lib/stores/stores';
	import { modalStore } from '@skeletonlabs/skeleton';

	function getTotal() {
		return $shoppingCart.reduce((acc, item) => acc + item.price, 0);
	}

	function formatPrice(price: number | bigint) {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
	}

	function removeFromCart(item: any) {
		$shoppingCart = $shoppingCart.filter((i) => i.id !== item.id);
	}
</script>

<div class="card p-4 h-full grid grid-rows-[auto_1fr_auto]">
	<div class="card-header">
		<h2>Your Cart</h2>
	</div>
	<ul>
		{#each $shoppingCart as item}
			<li>
				<div>
					<img src={item.image} alt={item.name} />
					<div>
						<h3>{item.name}</h3>
						<p>{formatPrice(item.price)}</p>
					</div>
				</div>
				<button on:click={() => removeFromCart(item)}>Remove</button>
			</li>
		{/each}
	</ul>
	<div>
		<span>Total:</span>
		<span>{formatPrice(getTotal())}</span>
	</div>
	<div class="card-footer flex justify-between h-min">
		<button class="btn variant-soft-primary" on:click={() => modalStore.close()}
			>Continue Shopping</button
		>
		<button class="btn variant-filled-primary" on:click={() => modalStore.close()}>Checkout</button>
	</div>
</div>
