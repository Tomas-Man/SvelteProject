<script>
    import Carrusel from '../lib/carruselnoticias.svelte'
</script>
<h1>NOTICIAS</h1>
<Carrusel />
<div class="vertodasnoticias">
    <p>VER TODAS LAS NOTICIAS</p>
</div>
<style>
    h1{
        padding: 50px;
        font-size: 4em;
        font-family: 'Decima Nova Pro', sans-serif;
        font-weight: 300;
        color: pink;
    }
    .vertodasnoticias{
        position: relative;
        top: 75px;
        left: calc(50% - 150px);
        width: 300px;
        height: 70px;
        background-color: #51626f;
        border-radius: 10px;
        line-height: 70px;
        font-size: 1.3em;
        color: white;
        letter-spacing: 2px;
    }
    .vertodasnoticias:hover{
        background-color: #6d819a;
        cursor: pointer;
    }
</style>