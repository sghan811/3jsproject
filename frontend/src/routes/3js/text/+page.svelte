<script>
    import { text,mount } from '$lib/utils/text';
	import Nav from '$lib/components/Nav.svelte';
	import { onMount } from 'svelte';
    let data = "";
    let last_data = data;
	onMount(() => {
		mount()
	});
    $: if (last_data !== data) {
        last_data = data
        console.log("changed")
        const canvas = document.getElementById("canvas")
        canvas?.remove()
        text(data)
    }
</script>

<Nav></Nav>
<div id="container"></div>
<div class="data">
    <input type="data" name="" bind:value={data} id="" placeholder="Enter the text to change" />
</div>


<style>
    div {
        background-color: black;
    }
    .data {
        bottom: 0;
        position: absolute;
        height: 70px;
        width: 100%;
    }
    .data input {
        font-size: 20px;
        height: 60px;
        width: 85%;
    }
    .data button {
        height: 65px;
        width: 12%;
    }
</style>


