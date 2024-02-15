<script lang="ts">
	import ThreeDots from '$lib/components/Icon/ThreeDots.svelte';
	import View from '$lib/components/Icon/View.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import { centsToDollars, sumLineItems } from '$lib/utils/moneyHelpers';
	export let invoice: Invoice;
	const { client, dueDate, invoiceNumber, invoiceStatus, lineItems } = invoice;
</script>

<div
	class="invoice-table invoice-row shadow-tableRow items-center rounded-lg bg-white py-3 lg:py-6"
>
	<div class="status"><Tag label={invoiceStatus} className="ml-auto lg:ml-0" /></div>
	<div class="due-date text-sm lg:text-lg">{dueDate}</div>
	<div class="invoice-number text-sm lg:text-lg">{invoiceNumber}</div>
	<div class="client-name truncate whitespace-nowrap text-base font-bold lg:text-xl">
		{client.name}
	</div>
	<div class="amount text-right font-mono text-sm font-bold lg:text-lg">
		{centsToDollars(sumLineItems(lineItems))}
	</div>
	<div class="view-button lg:center hidden text-sm lg:text-lg">
		<a href="#" class="text-pastel-purple hover:text-daisy-bush"><View /></a>
	</div>
	<div class="more-button lg:center hidden text-sm lg:block lg:text-lg">
		<button class="text-pastel-purple hover:text-daisy-bush"><ThreeDots /></button>
	</div>
</div>

<style lang="postcss">
	.invoice-row {
		grid-template-areas:
			'invoice-number invoice-number'
			'client-name amount'
			'due-date status';
	}

	@media (min-width: 1024px) {
		.invoice-row {
			grid-template-areas: 'status due-date invoice-number client-name amount view-button more-button';
		}
	}

	.invoice-row .status {
		grid-area: status;
	}

	.invoice-row .due-date {
		grid-area: due-date;
	}

	.invoice-row .invoice-number {
		grid-area: invoice-number;
	}

	.invoice-row .client-name {
		grid-area: client-name;
	}

	.invoice-row .amount {
		grid-area: amount;
	}

	.invoice-row .view-button {
		grid-area: view-button;
	}

	.invoice-row .more-button {
		grid-area: more-button;
	}
</style>
