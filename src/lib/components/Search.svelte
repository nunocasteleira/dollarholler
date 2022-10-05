<script lang="ts">
	import Search from '$lib/components/Icon/Search.svelte';
</script>

<div class="relative flex w-full items-baseline">
	<div class="mt-auto mr-2 text-pastelPurple"><Search /></div>
	<input
		type="text"
		name="search"
		placeholder="Search by Keyword"
		class="w-full border-b-2 border-dashed border-b-pastelPurple bg-transparent font-sansSerif text-base font-black outline-none focus:border-solid focus:border-b-lavenderIndigo md:w-[14rem] lg:w-72 lg:text-xl"
	/>
	<button class="font-sansSerif text-lg font-black text-pastelPurple lg:text-xl">Search</button>
</div>
