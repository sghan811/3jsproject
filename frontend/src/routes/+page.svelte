<script>
	import Nav from '../lib/components/Nav.svelte';
	import { onMount } from 'svelte';
	import { youtube } from '../lib/utils/control';

	onMount(() => {
		youtube();
	});
</script>

<div class="main_div"> 
    <Nav></Nav>
    <div id="container"></div>
    <div id="blocker"></div>
</div>




<style>
    .main_div {
        display: flex;  
        flex-direction: column;
    }
	#container {
		background-image: url('$lib/imgs/main_pic.png');
		background-repeat: no-repeat;
		width: 100%;
		background-size: cover;
	}
</style>
