<script>
    import { onMount } from 'svelte';

    let Carousel; // for saving Carousel component class
    let carousel; // for calling methods of the carousel instance
    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });

    const handleNextClick = () => {
        carousel.goToNext()
    }
</script>
<div id="carrusel">
    <svelte:component
            this={Carousel}
            bind:this={carousel}
    >
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </svelte:component>
</div>
<!--<button on:click={handleNextClick}>Next</button>-->
<style>
    #carrusel{
        position: relative;
        top: 200px;
        left: calc(50% - 150px);
        width: 300px;
        height: 300px;
        background-color: antiquewhite;

    }
    div{
        position: relative;
        top: 100px;
        width: 50px;
        height: 200px;
        background-color: white;
        margin-bottom: 100px;

    }
</style>