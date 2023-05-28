<script>
    // import '../styles/estiloindex.css';
    import Carrusel from '../lib/carruselnoticias.svelte'
    import Metodo from '../lib/componentemetodo.svelte'
    import FichaOferta from '../lib/fichaoferta.svelte'
    import FichaSeccionServicios from '../lib/fichaservicio.svelte'
    import FichaMeritos from '../lib/fichamerito.svelte'
</script>
<div class="fondo"></div>
    <section class="portada">
        <div class="tabNews">
            <h2>ÚLTIMAS NOTICIAS</h2>
        </div>
        <div class="lema">
            <h1>Excelencia adaptada <br>a cada estudiante</h1>
            <h2>En búsqueda permanente de nuevos caminos que permitan el éxito educativo</h2>
        </div>
    </section>
    <section class="noticias">
        <h1>NOTICIAS</h1>
        <Carrusel />
        <div class="vertodasnoticias">
            <p>VER TODAS LAS NOTICIAS</p>
        </div>
    </section>
    <section class="metodo">
        <Metodo />
        <!--
        <h1>¿QUIÉNES SOMOS?</h1>
        <div class="filaMetodo">
            <div class="metodoIzq">
                <p>Eliminamos la barrera profesorr/alumno<br>Nos adelantamos a los problemas<br>Siempre estamos disponibles</p>
                <img src="/img/indeximg/cercanos.jpg" alt="Cercanos">
            </div>
            <div class="metodoDcha">
                <img src="/img/indeximg/motivados.jpg" alt="Motivados">
                <p>Somos un equipo ilusionado<br>Rebosantes de entusiasmo<br>Creemos en lo que hacemos</p>
            </div>
        </div>
        <div class="filaMetodo">
            <div class="metodoIzq">
                <p>Aplicamos metodologías activas<br>Usamos la tecnología en nuestro provecho<br>Aplicamos las mejores técnicas de enseñanza</p>
                <img src="/img/indeximg/innovadores.jpg" alt="Innovadores">
            </div>
            <div class="metodoDcha">
                <img src="/img/indeximg/implicados.jpg" alt="Implicados">
                <p>Creemos en lo que hacemos<br>Comprometidos a todos los niveles<br>Educamos en valores</p>
            </div>
        </div>
        <div class="vermasmetodo" on:click={() => {(location='/privacidad')}}>
                <p>VER MÁS SOBRE NUESTRO MÉTODO EDUCATIVO</p>
        </div> -->
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
    .tabNews{
        position: absolute;
        top: 30px;
        right: 50px;
        width: 500px;
        height: 200px;
        border: 1px solid white;
    }
    .tabNews h2{
        background-color: white;
        color: rgba(0,0,0,0.5);
        text-align: center;
        height: 1.5em;
        line-height: 1.5em;
        font-family: 'Decima Nova Pro', sans-serif;
    }
    .lema{
        position: absolute;
        top: 320px;
        left: 75px;
        font-family: 'Decima Nova Pro', sans-serif;
        color: #FFF;
        letter-spacing: 1px;
    }
    .lema h1{
        padding: 0 0 30px;
        font-size: 4em;
        font-weight: 300;
    }
    .lema h2{
        font-size: 2em;
        font-weight: 300;
    }
    .noticias{
        position: relative;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
    }
    .noticias>h1{
        padding: 50px;
        font-size: 4em;
        font-family: 'Decima Nova Pro', sans-serif;
        font-weight: 300;
        color: white;
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
    .vertodasnoticias:hover/*, .vermasmetodo:hover*/{
        background-color: #6d819a;
        cursor: pointer;
    }
    .metodo{
        position: relative;
        top: 145px;
        left: 0 ;
        width: 100%;
        padding-bottom: 145px;
        background-color: #dad4cb;
    }/*
    .metodo>h1{
        text-align: center;
        position: relative;
        color: #51626f;
        font-size: 4em;
        font-weight: lighter;
        line-height: 2em;
    }
    .filaMetodo{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .metodoIzq, .metodoDcha{
        display: flex;
        align-items: center;
    }
    .metodoIzq{
        text-align: right;
    }
    .filaMetodo img{
        width: 150px;
        height: 150px;
        margin: 30px;
    }
    .vermasmetodo{
        position: relative;
        left: calc(50% - 350px);
        width: 700px;
        background-color: #51626f;
        text-align: center;
        border-radius: 10px;
        font-size: 2em;
        line-height: 2em;
        margin: 1em 0 2em ;
        color: white;
    }*/
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