<script>
	import Logo from '$lib/shared/Logo.svelte';

	export let navigationLinks = [
		{ href: '#', label: 'Home' },
		{ href: '#', label: 'About' },
		{ href: '#', label: 'Contact' }
	];

	export let legalLinks = [
		{ href: '#', label: 'Privacy Policy' },
		{ href: '#', label: 'Terms of Service' }
	];
</script>

<footer class="">
	<div class="">
		<Logo />
		<nav class="list-nav">
			<ul class="">
				{#each navigationLinks as { href, label }}
					<li>
						<a {href} class="">
							{label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<nav class="list-nav">
			<ul class="">
				{#each legalLinks as { href, label }}
					<li>
						<a {href} class="">
							{label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</footer>
