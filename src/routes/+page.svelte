<script lang="ts">
    import Search from "$lib/components/Search.svelte";
    import { hsn, tsn} from "$lib/store/search/store.ts";
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <Search></Search>
        </div>
    </div>
</div>
