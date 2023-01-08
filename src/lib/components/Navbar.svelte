<script lang="ts">
    import { userData } from '$lib/store/userStore/userStore';
</script>

<div class="navbar bg-primary">
    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">carSearch</a>
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-end">
            {#if !$userData.username}
                <div class="navbar-end">
                    <a href="/login" class="btn">Login</a>
                </div>
            {:else}
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" /> //todo remove the place holder
                </div>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            {/if}
        </div>
    </div>
</div>
