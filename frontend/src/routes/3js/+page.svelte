<script>
    import Nav from '$lib/components/Nav.svelte';
    function car() {
        window.location.href = "3js/car"
    }
</script>

<Nav></Nav>

<div id="container"></div>
<div class="main">
    <div class="first_menu">
        <div class="first_content">
            <div class="car" on:click={car}></div>
        </div>
        <div class="second_content">
            
        </div>
    </div>
    <div class="second_menu">
        <div class="first_content">

        </div>
        <div class="second_content">
            
        </div>
    </div>
</div>


<style>
    .car {
        margin: auto auto;
        border-radius: 15px;
        width: 80%;
        height: 80%;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('$lib/imgs/3js/car.png');
    }
    .main {
		background-image: url('$lib/imgs/main_pic.png');
		background-repeat: no-repeat;
		width: 100%;
        height: 100%;
		background-size: cover;
    }
    .first_menu {
        position: relative;
        justify-content: center;
        display: flex;
        
        width: 100%;
        height: 50%;
    }
    .second_menu {
        display: flex;
        width: 100%;
        height: 50%;
    }
    .first_content{
        display: flex;
        margin: auto auto;
        width: 40%;
        height: 80%;
        border-radius: 15px;
        background-color: whitesmoke;
    }
    .second_content{
        margin: auto auto;
        width: 40%;
        height: 80%;
        border-radius: 15px;
        background-color: whitesmoke;
    }
</style>