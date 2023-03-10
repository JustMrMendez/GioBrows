import { pb } from '$lib/pb';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const protectedRoutes = ['/app'];

	// before
	pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	if (pb.authStore.isValid) {
		try {
			await pb.collection('users').authRefresh();
		} catch (_) {
			pb.authStore.clear();
		}
	}

	event.locals.pb = pb;
	event.locals.user = structuredClone(pb.authStore.model);

	if (protectedRoutes.includes(event.url.pathname) && !pb.authStore.isValid) {
		throw redirect(302, '/auth');
	}

	const response = await resolve(event);
	// after
	response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }));

	return response;
};
