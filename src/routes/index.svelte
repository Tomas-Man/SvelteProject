<script>
    import '../styles/estiloindex.css';
    import Carrusel from './components/carruselnoticias.svelte'
</script>
<div id="fondo"></div>
<main>
    <section id="portada">
        <div id="tabNews">
            <h2>ÚLTIMAS NOTICIAS</h2>
        </div>
        <div id="lema">
            <h1>Excelencia adaptada <br>a cada estudiante</h1>
            <h2>En búsqueda permanente de nuevos caminos que permitan el éxito educativo</h2>
        </div>
    </section>
    <section id="noticias">
        <h1>NOTICIAS</h1>
        <Carrusel />
        <div class="vertodasnoticias">
            <p>VER TODAS LAS NOTICIAS</p>
        </div>
    </section>
    <section id="metodo">
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
        </div>
    </section>
</main>
