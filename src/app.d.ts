// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		pb: import('pocketbase').default;
		// extend import('pocketbase').default['authStore']['model'] with some extra properties
		user: import('pocketbase').default['authStore']['model'] & {
			role: 'admin' | 'user' | 'manager' | 'guest';
		} | null;
	}

	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
