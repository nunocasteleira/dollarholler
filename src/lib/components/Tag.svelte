<script lang="ts">
	export let label: 'draft' | 'sent' | 'current' | 'late' | 'paid' | 'archive' = 'draft';
	export let className = '';
</script>

<div
	class={`text-md w-20 rounded-full border-1 text-center font-bold capitalize ${className}`}
	class:inverted={label === 'draft'}
	class:success={label === 'sent' || label === 'current'}
	class:alert={label === 'late'}
	class:archive={label === 'paid' || label === 'archive'}
>
	{label}
</div>

<style lang="postcss">
	.inverted {
		@apply border-pastel-purple text-pastel-purple;
	}
	.success {
		@apply border-robin-egg-blue bg-robin-egg-blue text-blue-gem;
	}
	.alert {
		@apply border-scarlet bg-scarlet text-golden-fizz;
	}
	.archive {
		@apply border-pastel-purple bg-pastel-purple text-white;
	}
</style>
