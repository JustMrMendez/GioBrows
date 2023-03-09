import { dev } from '$app/environment';
import { PUBLIC_BACKEND_URL, PUBLIC_DEV_BACKEND_URL } from '$env/static/public';
import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase(dev ? PUBLIC_DEV_BACKEND_URL : PUBLIC_BACKEND_URL);

export const currentUser = writable(pb.authStore.model);
