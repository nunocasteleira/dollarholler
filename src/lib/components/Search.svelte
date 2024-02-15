<script lang="ts">
	import Search from '$lib/components/Icon/Search.svelte';
</script>

<div class="relative flex w-full items-baseline">
	<div class="mt-auto mr-2 text-pastel-purple"><Search /></div>
	<input
		type="text"
		name="search"
		placeholder="Search by Keyword"
		class="w-full border-b-2 border-dashed border-b-pastel-purple bg-transparent font-sans-serif text-base font-black outline-none focus:border-solid focus:border-b-lavender-indigo md:w-[14rem] lg:w-72 lg:text-xl"
	/>
	<button class="font-sans-serif text-lg font-black text-pastel-purple lg:text-xl">Search</button>
</div>
