<script lang="ts">
	import { invoices, loadInvoices } from '$lib/stores/InvoiceStore';
	import { onMount } from 'svelte';
	import CircledAmount from '$lib/components/CircledAmount.svelte';
	import Search from '$lib/components/Search.svelte';
	import InvoiceRow from './InvoiceRow.svelte';

	onMount(() => {
		loadInvoices();
		console.log($invoices);
	});
</script>

<svelte:head>
	<title>Invoices | The Dollar Holler</title>
</svelte:head>

<div
	class="mb-7 flex flex-col-reverse items-start justify-between gap-y-6 md:mb-16 md:flex-row md:items-center md:gap-y-4"
>
	<!-- search field -->
	<Search />

	<!-- new invoice button -->
	<div>
		<button
			class="hover:shadow-coloredHover relative translate-y-0 whitespace-nowrap rounded-lg bg-lavender-indigo px-5 py-2 font-sans-serif text-base font-black text-white shadow-colored transition-all hover:-translate-y-2 lg:px-10 lg:py-3 lg:text-xl"
			>+ Invoice</button
		>
	</div>
</div>

<!-- list of invoices -->
<div>
	<!-- header -->
	<div class="table-header invoice-table hidden text-daisy-bush lg:grid">
		<h3>Status</h3>
		<h3>Due date</h3>
		<h3>ID</h3>
		<h3>Client</h3>
		<h3 class="text-right">Amount</h3>
		<div />
		<div />
	</div>

	<!-- invoices -->
	{#each $invoices as invoice}
		<InvoiceRow {invoice} />
	{/each}
</div>

<CircledAmount label="Total:" amount="$1,144.00" />

<style lang="postcss">
	.table-header h3 {
		@apply text-xl font-black leading-snug;
	}
</style>
