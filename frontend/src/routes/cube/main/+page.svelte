<script>
	import { votecube } from '$lib/utils/cube';
	import { onMount } from 'svelte';

	onMount(() => {
		votecube();
	});
</script>

<div class="main">
	<div class="box">
		<div class="title_box">
			<h1 class="title">Welcome to</h1>
			<div class="main_title">My Website</div>
		</div>
		<div id="container2"></div>
	</div>

	<div id="blocker"></div>
</div>

<style>
	#container2 {
		width: auto;
		padding-left: 15%;
		padding-right: 40%;
		height: 60%;
	}
	div {
		width: 100%;
	}
	h1 {
		padding: 0px;
		margin: 0px;
	}
	.title_box {
		width: 100%;
	}
	.title {
		padding-top: 5%;
		width: 100%;
		text-align: center;
		font-family: 'Open Sans';
	}
	.main_title {
		width: 100%;
		text-align: center;
		font-size: 60px;
		font-weight: bolder;
	}
	.main {
		margin: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(to top, #2f4f4f, #fffafa);
	}
	.box {
		width: 100%;
		height: 100%;
		background-color: rgba(77, 88, 99, 0.7);
	}
</style>
