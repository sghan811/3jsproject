<script>
	import Nav from '$lib/components/Nav.svelte';
	import { onMount } from 'svelte';
	import { car } from '$lib/utils/car';

	onMount(() => {
		car();
	});
    
</script>

<Nav></Nav>

<h6>Model made by Karol Miklas</h6>
<div id="container"></div>
<div id="blocker"></div>


<style>
	#container {
		/* background-image: url('$lib/imgs/main_pic.png'); */
		background-repeat: no-repeat;
		width: 100%;
		background-size: cover;
	}
</style>


