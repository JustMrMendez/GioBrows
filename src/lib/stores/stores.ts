import { writable, type Writable } from 'svelte/store';
import type { Record } from 'pocketbase';

export const messages = writable<Record[]>([]);

export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);

export const shoppingCart = writable<Record[]>([]);
