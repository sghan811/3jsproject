import { writable } from 'svelte/store';

const isLogedin = writable(false);
const username = writable('');

export { isLogedin, username };
