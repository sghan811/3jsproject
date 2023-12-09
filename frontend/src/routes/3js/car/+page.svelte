<script>
	import Nav from '$lib/components/Nav.svelte';
	import { onMount,onDestroy } from 'svelte';
	import { car} from '$lib/utils/car';

	onMount(() => {
		car();
	});
</script>

<Nav></Nav>


<div id="container"><h6>Model made by Karol Miklas</h6></div>
<div id="blocker"></div>


<style>
    h6{
        margin: 0;
    }
	#container {
		/* background-image: url('$lib/imgs/main_pic.png'); */
		background-repeat: no-repeat;
		width: 100%;
		background-size: cover;
	}
</style>


