<script lang="ts">
	import Logo from '$lib/shared/Logo.svelte';
	import { LightSwitch, AppBar, Avatar, type PopupSettings, popup } from '@skeletonlabs/skeleton';

	let exPopupSettings: PopupSettings = {
		event: 'click',
		target: 'profileMenu',
		placement: 'bottom'
	};
</script>

<AppBar regionRowMain="mx-auto max-w-7xl w-full" padding="p-2">
	<svelte:fragment slot="lead">
		<Logo />
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<div data-popup="profileMenu" class="card variant-filled-surface">
			<slot name="profileMenu">
				<ul
					class="list-nav flex w-full flex-col items-center justify-center py-1 align-middle [&>li>a]:place-content-center [&>li]:w-full"
				>
					<li><a href="/">Home</a></li>
					<li><a href="/forms">Forms</a></li>
				</ul>
			</slot>
			<div class="flex h-fit items-center justify-center space-x-4 p-2 align-middle">
				<button class="btn variant-ghost-primary">Log out</button>
				<LightSwitch width="!w-12" rounded="rounded" />
			</div>
			<div class="arrow variant-filled-surface" data-arrow />
		</div>
		<slot name="actions" />
		<!-- {#if user} -->
		<button name="menu" use:popup={exPopupSettings}>
			<!-- <Avatar
					src={user.image || ''}
					rounded="rounded-full"
					initials={user.name
						?.split(' ')
						.map((n) => n[0])
						.join('') || ''}
					width="w-10"
					height="h-10"
				/>
			</button> -->
			<!-- {:else} -->
			<button>Login</button>
			<!-- {/if} -->
		</button></svelte:fragment
	>
	<!-- <svelte:fragment slot="headline">
				</svelte:fragment> -->
</AppBar>
