<script>
	import { isLogedin, username } from '$lib/utils/store';
	import { onMount } from 'svelte';
	import { verify } from '$lib/utils/verify';
	import { logout } from '$lib/utils/logout';
	import { goto } from '$app/navigation';
	function move() {
		window.location.href="../3js"
	}
	function home() {
		window.location.href="/"
	}
	let logedin = false;
	let name = '';
	//handleLogOut
	function out() {
		logout();
	}
	onMount(async () => {
		//isAuth
		verify();
		isLogedin.subscribe((data) => {
			logedin = data;
			console.log(data);
		});
		username.subscribe((data) => {
			name = data;
			console.log(data);
		});
	});
</script>

<nav class="navbar">
	<div class="navbar__logo">
		<i class="fab fa-accusoft"></i>
		<a style="padding-left: 5px;" href="/">Andy's web</a>
	</div>

	<ul class="navbar__menu">
		<li><div class="third" on:click={home}>Home</div></li>
		<li><a href="/posts">comments</a></li>
        <li><div class="third" on:click={move}>3js</div></li>
	</ul>

	<ul class="navbar__icons">
		{#if logedin == true}
			<li><a href="" class="nav_button">ADD COMMENT</a></li>
		{:else}
			<li></li>
		{/if}
		{#if logedin == true}
			<li><a href="" class="nav_button" on:click={out}>Logout</a></li> 
		{:else}
			<li></li>
		{/if}
		{#if logedin == true}
			<li><a href="" class="nav_button">{name}</a></li>
		{:else}
			<li><a href="/register" class="nav_button">Sign up</a></li>
			<li><a href="/login" class="nav_button">Sign in</a></li>
		{/if}
	</ul>

	<a href="#" class="navbar__toogleBtn">
		<i class="fas fa-bars"></i>
	</a>
</nav>

<style>
	.third:hover{
		cursor: pointer;
	}
	.third {
		color: white;
	}
	.nav_button {
		padding: 8px 12px;
		display: flex;
		cursor: pointer;
		background: #263343;
		color: white;
		border-radius: 5px;
	}
	.nav_button:hover {
		background: #d49466;
	}
	a {
		text-decoration: none;
		color: white;
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #263343;
	}

	.navbar__logo {
		font-size: 24px;
		color: white;
	}

	.navbar__logo i {
		color: #d49466;
	}

	.navbar__menu {
		display: flex;
		list-style: none;
		padding-left: 0px;
	}

	.navbar__menu li {
		padding: 8px 12px;
	}

	.navbar__menu :hover {
		background: #d49466;
		border-radius: 4px;
	}

	.navbar__icons {
		list-style: none;
		color: white;
		display: flex;
		padding-left: 0px;
	}

	.navbar__toogleBtn {
		display: none;
		position: absolute;
		right: 32px;
		font-size: 24px;
		color: #d49466;
	}

	@media screen and (max-width: 768px) {
		.navbar {
			flex-direction: column;
			align-items: flex-start;
			padding: 8px 24px;
		}

		.navbar__menu {
			display: none;
			flex-direction: column;
			align-items: center;
			width: 100%;
		}

		.navbar__menu li {
			width: 100%;
			text-align: center;
		}

		.navbar__icons {
			display: none;
			justify-content: center;
			width: 100%;
		}

		.navbar__toogleBtn {
			display: block;
		}

		.navbar__menu.active,
		.navbar__icons.active {
			display: flex;
		}
	}
</style>
