import { writable } from 'svelte/store';
import data from '../../seed.json';

export const invoices = writable<Array<Invoice>>([]);

export const loadInvoices = () => {
	invoices.set(data.invoices);
};
