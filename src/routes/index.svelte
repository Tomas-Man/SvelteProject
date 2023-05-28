<script>
    import Portada from '../lib/portada.svelte'
    import Noticias from '../lib/noticias.svelte'
    import Metodo from '../lib/componentemetodo.svelte'
    import FichaOferta from '../lib/fichaoferta.svelte'
    import FichaSeccionServicios from '../lib/fichaservicio.svelte'
    import FichaMeritos from '../lib/fichamerito.svelte'
</script>
<div class="fondo"></div>
    <section class="portada">
        <Portada />
        <!--
        <div class="tabNews">
            <h2>ÚLTIMAS NOTICIAS</h2>
        </div>
        <div class="lema">
            <h1>Excelencia adaptada <br>a cada estudiante</h1>
            <h2>En búsqueda permanente de nuevos caminos que permitan el éxito educativo</h2>
        </div>
        -->
    </section>
    <section class="noticias">
        <Noticias />
        <!--
        <h1>NOTICIAS</h1>
        <Carrusel />
        <div class="vertodasnoticias">
            <p>VER TODAS LAS NOTICIAS</p>
        </div>
        -->
    </section>
    <section class="metodo">
        <Metodo />
    </section>
    <section class="ofertaedu">
        <h1>OFERTA EDUCATIVA</h1>
        <div class="contOferta">
        <FichaOferta />
        </div>
    </section>
    <section class="servicios">
        <h1>SERVICIOS</h1>
        <FichaSeccionServicios />
    </section>
    <section class="meritos">
        <h1>NUESTROS MÉRITOS</h1>
        <FichaMeritos />
    </section>
<style>
    @font-face {
        font-family: "Decima Nova Pro";
        src: url("/fonts/DecimaNovaPro.otf");
    }
    *{
        font-family: "Decima Nova Pro", sans-serif;
    }
    .fondo{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-image: url("/img/fondo.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
    }
    .portada{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100vh - 110px);
        background-color: rgba(0,0,0,.5);
    }
    .noticias{
        position: relative;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
    }
    .metodo{
        position: relative;
        top: 145px;
        left: 0 ;
        width: 100%;
        padding-bottom: 145px;
        background-color: #dad4cb;
    }
    .ofertaedu{
        position: relative;
        top: 145px;
        padding-bottom: 145px;
    }
    .ofertaedu h1{
        text-align: center;
        color: white;
        height: 6em;
        font-size: 6em;
        font-weight: lighter;
        display: grid;
        place-items: center;
    }
    .servicios{
        position: relative;
        background-color: #dad4cb;
        width: 100%;
        padding: 80px 0;
    }
    .servicios>h1{
        text-align: center;
        font-size: 4em;
        font-weight: 300;
        padding-bottom: 50px;
        color: #51626f;
    }
    .meritos h1{
        text-align: center;
        color: white;
        height: 6em;
        font-size: 6em;
        font-weight: lighter;
        display: grid;
        place-items: center;
    }
</style>