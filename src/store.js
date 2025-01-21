import { writable } from 'svelte/store';

export let choice = writable("");
export let P = writable(0);
export let r = writable(0);
export let n = writable(0);
export let t = writable(0);
export let A = writable(0);

export let TFcal = writable(false);
export let result = writable(0)