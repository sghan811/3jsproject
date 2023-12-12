<script>
	import Nav from '../lib/components/Nav.svelte';
	import { onMount } from 'svelte';
	import { cube } from '../lib/utils/main_cube';

	onMount(() => {
		cube();
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
