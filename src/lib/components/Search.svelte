<script lang="ts">
    import { hsn, tsn} from "$lib/store/search/store.ts";
    let HSN, TSN:string;
    function update() {
        hsn.update(hsn => HSN)
        tsn.update(tsn => TSN)
    }

</script>

<div class="form-control w-full max-w-xs">
    <label class="label">
        <span class="label-text">Herstellerschlüsselnummer</span>
    </label>
    <input bind:value={HSN} type="text" placeholder="Schreibe hier" class="input input-bordered w-full max-w-xs" />
</div>
<div class="max-w-md mb-5">
<div class="form-control w-full max-w-xs">
    <label class="label">
        <span class="label-text">Typschlüsselnummer</span>
    </label>
    <input bind:value={TSN} type="text" placeholder="Schreibe hier" class="input input-bordered w-full max-w-xs" />
</div>
</div>
        <input type="submit" value="Such" class="btn " on:click={update}>