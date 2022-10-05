export const sumLineItems = (lineItems: Array<LineItem> | undefined): number => {
	if (!lineItems) return 0;

	return lineItems.reduce((sum, item) => sum + item.amount * item.quantity, 0);
};

export const centsToDollars = (cents: number): string => {
	const dollars = cents / 100;
	return dollars.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });
};
