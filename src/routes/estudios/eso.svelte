<script>
    import Titulo from '../../lib/titulo.svelte';
</script>
<main>
    <div class="fondo"></div>
    <Titulo>
        <h1 slot="tituloH1">Educación Secundaria</h1>
        <h2 slot="tituloH2">ESO</h2>
    </Titulo>
    <!--
    <section class="titulo">
        <div class="tituloeso">
            <h1>Educación Secundaria</h1>
            <h2>ESO</h2>
        </div>
    </section>
    -->
    <section class="resumenESO">
        <div class="imgResESO">
            <img src="/img/estudios/eso.jpg" alt="ESO">
        </div>
        <div class="textResESO">
            <h2>Los Estudios de Educación Secundaria</h2>
            <br>
            <p>Desde el centro Don Bosco entendemos la importancia que tiene esta etapa en la formación de la persona a todos los niveles. Por ello trabajamos en esta etapa desde la consciencia de la importancia de la motivación personal y la implicación del alumnado en su propio conocimiento.</p>
            <br>
            <p>La Educación Secundaria Obligatoria (ESO) cubre la etapa en la cual los alumnos y alumnas tomarán las primeras decisiones importantes sobre su futuro personal y profesional en un camino en el que nuestro acompañamiento busca la mayor calidad educativa.</p>
            <br>
            <p>No nos quedamos solo en los contenidos académicos, queremos ir más allá. Trabajamos por una enseñanza en valores con el objetivo de que nuestro alumnado se convierta en personas seguras, felices e implicadas en la mejora de su entorno social, cultural y ecológico.</p>
        </div>
    </section>
    <section class="claves">
        <h1>CLAVES</h1>
        <div class="iconosclaves">
            <div class="iconoESO">
                <img src="/img/ciclos/eso/excelEdu.png" alt="Excelencia Educativa">
                <p>Excelencia Educativa</p>
            </div>
            <div class="iconoESO">
                <img src="/img/ciclos/eso/acompanamiento.png" alt="Acompañamiento">
                <p>Acompañamiento</p>
            </div>
            <div class="iconoESO">
                <img src="/img/ciclos/eso/aprendizColab.png" alt="Apredizaje Colaborativo">
                <p>Aprendizaje Colaborativo</p>
            </div>
            <div class="iconoESO">
                <img src="/img/ciclos/eso/attDiversidad.png" alt="Atención a la diversidad">
                <p>Atención a la diversidad</p>
            </div>
            <div class="iconoESO">
                <img src="/img/ciclos/eso/ensenanzaValores.png" alt="Enseñanza en valores">
                <p>Enseñanza en valores</p>
            </div>
        </div>
    </section>
    <section class="valores">
        <div class="fotoIzq">
            <div class="imagenValIzq">
                <img src="/img/ciclos/eso/coches.jpg" alt="Proyecto con coches">
            </div>
            <div class="txtDcha">
                <h2>Nos gustan los proyectos</h2>
                <p>El aprendizaje basado en proyectos y retos es motivante, presenta resultados inmediatamente aplicables en el mundo real y facilita un aprendizaje autónomo y colaborativo.</p>
                <br>
                <p>Buscamos un aprendizaje significativo, que tenga en cuenta la diversidad de nuestro alumnado y la realidad del entorno en el que se encuentran. Por ello los proyectos nos encantan, porque apuntalan nuestro método educativo.</p>
            </div>
        </div>
        <div class="fotoDcha">
            <div class="txtIzq">
                <h2>Usamos la tecnología en apoyo de nuestro método educativo</h2>
                <p>Somos un centro de excelencia TIC, reconocido con nivel 5 (el máximo). Tenemos una larga tradición de uso de la tecnología en el aula para favorecer el conocimiento.</p>
                <br>
                <p>Actualmente mantenemos una estrategia 1 a 1 (un dispositivo por alumno) que en secundaria se basa en que cada alumno dispone de un Chromebook, portátil en el que los contenidos son exclusivamente educativos.</p>
                <br>
                <p>Usamos la tecnología en pro de aplicar métodos activos de enseñanza. La tecnología facilita la participación de los alumnos en proyectos motivantes impulsados por las últimas tecnologías.</p>
            </div>
            <div class="imagenValDcha">
                <img src="/img/ciclos/eso/croma.jpg" alt="Uso de tecnología">
            </div>
        </div>
        <div class="fotoIzq">
            <div class="imagenValIzq">
                <img src="/img/ciclos/eso/valores.jpg" alt="Educación en valores">
            </div>
            <div class="txtDcha">
                <h2>Educando en valores</h2>
                <p>Siempre miramos mas allá de los contenidos académicos. Trabajamos valores en nuestros alumnos, nos implicamos en nuestro entorno, somos sensibles a los problemas que nos rodean y realizamos acciones y proyectos para reflexionar y mejorar nuestra realidad.</p>
                <br>
                <p>Nuestro centro se inspira en los valores salesianos que fomentan un método preventivo de educación. La educación en valores es la base de nuestro trabajo para conseguir personas cuyos valores sean inspiradores.</p>
                <br>
                <p>Trabajamos en conjunto con las familias para conseguir un apoyo educativo constante y un mejor acompañamiento de nuestro alumnado.</p>
            </div>
        </div>
    </section>
    <section class="galeriaFotos">
        <div class="galFotos">
            <figure><img src="/img/ciclos/eso/eso01.jpg" alt="foto1"></figure>
            <figure><img src="/img/ciclos/eso/eso02.jpg" alt="foto2"></figure>
            <figure><img src="/img/ciclos/eso/eso03.jpg" alt="foto3"></figure>
            <figure><img src="/img/ciclos/eso/eso04.jpg" alt="foto4"></figure>
            <figure><img src="/img/ciclos/eso/eso05.jpg" alt="foto5"></figure>
            <figure><img src="/img/ciclos/eso/eso06.jpg" alt="foto6"></figure>
            <figure><img src="/img/ciclos/eso/eso07.jpg" alt="foto7"></figure>
            <figure><img src="/img/ciclos/eso/eso08.jpg" alt="foto8"></figure>
        </div>
    </section>
</main>
<style>
    @font-face {
        font-family: "Decima Nova Pro";
        src: url("/fonts/DecimaNovaPro.otf");
    }
    *{
        font-family: "Decima Nova Pro", sans-serif;
    }
    h2{
        font-size: 2em;
        font-weight: lighter;
    }
    p{
        color: #2E2E2E;
    }
    .fondo{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-image: url("/img/ciclos/eso/fondo-eso.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    /*.titulo{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 60vh;
        color: white;
    }
    .tituloeso{
        position: relative;
        top: 15vh;
        text-align: center;
        line-height: 15vh;
    }
    .tituloeso h1{
        font-size: 5em;
    }
    .tituloeso h2{
        font-size: 3em;
    }*/
    .resumenESO{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 570px;
        display: inline-flex;
        background-color: #d9d9d9;
        color: #2E2E2E;
    }
    .imgResESO{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 40px 0 0 40px;
    }
    .textResESO{
        position: relative;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        margin: 40px 40px 0 40px;
    }
    .textResESO h2{
        font-size: 2.5em;
        text-align: center;
    }
    .textResESO p{
        font-size: 1.3em;
    }
    .imgResESO img{
        width: 100%;
        max-width: 800px;
        min-width: 645px;
    }
    .claves{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 80vh;
        color: white;
    }
    .claves h1{
        position: relative;
        top: 80px;
        left: 0;
        text-align: center;
        font-size: 5em;
        font-weight: lighter;
        margin: 0 30px;
    }
    .iconosclaves{
        position: relative;
        top: 20%;
        left: 0;
        height: 100%;
        display: flex;
    }
    .iconoESO{
        position: relative;
        top: 30px;
        left: 0;
        width: 20%;
        height: 40%;
        border-radius: 10px;
        margin: 30px;
        background-color: #2E2E2EB2;
        display: grid;
        place-items: center;
    }
    .iconoESO p{
        position: relative;
        top: 0;
        text-align: center;
        font-size: 2em;
        color: white;
    }
    .iconoESO img{
        position: relative;
        width: 100px;
    }
    .valores{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 211vh;
        background-color: #d9d9d9;
        padding: 40px 0 20px;
    }
    .fotoIzq{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: inline-flex;
        margin: 15px 0;
    }
    .imagenValIzq{
        position: relative;
        top: 0;
        left: 50px;
    }
    .imagenValIzq img{
        width: calc(50vw - 50px);
    }
    .txtDcha{
        position: relative;
        top: 0;
        left: 50px;
        width: calc(50vw - 100px);
        margin-left: 50px;
        color: #2E2E2E;
    }
    .txtDcha h2{
        font-size: 2.5em;
        text-align: center;
        margin-bottom: 30px;
    }
    .txtDcha p{
        font-size: 1.4em;
        margin-right: 25px;
    }
    .fotoDcha{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: inline-flex;
        margin: 15px 0;
    }
    .txtIzq{
        position: relative;
        top: 0;
        left: 50px;
        width: calc(50vw - 100px);
        margin-left: 50px;
        color: #2E2E2E;
    }
    .txtIzq h2{
        font-size: 2.5em;
        text-align: center;
        padding-bottom: 30px;
        margin-right: 50px;
        color: black;
    }
    .txtIzq p{
        font-size: 1.4em;
        margin-right: 50px;
    }
    .imagenValDcha{
        position: relative;
        top: 0;
        left: 50px;
    }
    .imagenValDcha img{
        width: calc(50vw - 75px);
    }
    .galeriaFotos{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #999999FF;
        display: block;
        text-align: center;
        padding: 20px 0;
    }
    figure{
        display: inline-block;
        width: 23%;
        margin: 0.5em;
    }
    figure img{
        width: 100%;
    }
</style>