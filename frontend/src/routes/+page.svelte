<script>
	import Nav from '../lib/components/Nav.svelte';
	import { onMount } from 'svelte';
	import { youtube } from '../lib/utils/control';

	onMount(() => {
		youtube();
	});
</script>

<Nav></Nav>

<div id="container"></div>
<div id="blocker"></div>

<style>
	#container {
		background-image: url('$lib/imgs/main_pic.png');
		background-repeat: no-repeat;
		width: 100%;
		background-size: cover;
	}
</style>
