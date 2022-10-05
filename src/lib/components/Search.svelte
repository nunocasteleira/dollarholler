<script lang="ts">
	import Search from '$lib/components/Icon/Search.svelte';
</script>

<div class="relative flex w-full items-baseline">
	<div class="mt-auto mr-2 text-pastelPurple"><Search /></div>
	<input
		type="text"
		name="search"
		placeholder="Search by Keyword"
		class="w-72 border-b-2 border-dashed border-b-pastelPurple bg-transparent font-sansSerif text-xl font-black outline-none focus:border-solid focus:border-b-lavenderIndigo"
	/>
	<button class="font-sansSerif text-xl font-black text-pastelPurple">Search</button>
</div>
