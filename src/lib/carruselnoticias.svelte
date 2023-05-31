<!-- con este script importamos el carrusel y creamos el conjunto de imágenes para las noticias-->
<script>
    import Carousel from './carousel.svelte';
    const imgN = [
        {path: "/img/noticias/admision.jpg", alt: "admision.jpg", id: "imageN1", ruta: "../noticias/2022/listados-fp-2022", titulo: "Listados con las admisiones en ciclos de FP",
        resumen: 'Acceso a las admisiones (a fecha de 21 de julio) en los Ciclos Formativos de Formación Profesional'},
        {path: "/img/noticias/admisiones-ESO.jpeg", alt: "admisiones-ESO.jpeg", id: "imageN2", ruta: "", titulo: "Periodo de admisiones ESO",
        resumen: 'Abierto el periodo de admisiones para la ESO. Del 18 de marzo al 6 de abril, en la secretaría del Centro Don Bosco de 9:30h a 13:30h. Teléfono: 979777270'},
        {path: "/img/noticias/cartel-1-mayo.jpeg", alt: "noticiaImg3", id: "imageN3", ruta: "", titulo: "XXXIX Peregrinación de Palencia a Villamuriel",
        resumen: 'Después de estos dos años de pandemia retomamos con muchocariño el Homenaje a María Auxiliadora el sábado 30 de abril y laXXXIX Fiesta-peregrinación el 1 de mayo'},
        {path: "/img/noticias/cartel-jornadas-innovacion.jpg", alt: "noticiaImg4", id: "imageN4", ruta: "", titulo: "Jornadas de Innovación empresarial",
        resumen: 'Los días 25 y 26 de mayo hemos celebrado unas Jornadas Formativas de Innovación Empresarial para nuestros alumnos de Formación Profesional'},
        {path: "/img/noticias/graduacion-22-00.jpg", alt: "noticiaImg5", id: "imageN5", ruta: "", titulo: "Graduación, curso 2021/22",
        resumen: 'El pasado 3 de Junio celebramos la graduación de nuestro alumnado tanto de secundaria como de ciclos formativos'},
        {path: "/img/noticias/info-solicitudes-fp.jpg", alt: "noticiaImg6", id: "imageN6", ruta: "", titulo: "Solicitudes para ciclos de FP",
        resumen: 'Te explicamos como realizar la solicitud para estudiar un ciclo formativo de FP con nosotros y el material que se necesita para estudiar'}
    ];
</script>
<!-- Con esto creamos el carrusel y sus componentes -->
<Carousel autoplay="4000">
    {#each imgN as imageN}
        <div class="carrusel" on:click={() => {(location=imageN.ruta)}}>
            <div class="fotoC">
                <img src={imageN.path} alt={imageN.alt}>
            </div>
            <div class="contResumen">
                <div class="tituloN">
                    <h2>{imageN.titulo}</h2>
                </div>
                <div class="noticiaResumen">
                    <p>{imageN.resumen}</p>
                </div>
                <div class="irNoticia">
                    <p>ir a la noticia</p>
                </div>
            </div>
        </div>
    {/each}
    <div class="flechaIzq" slot="left-control"><img src="/img/left-arrow-svgrepo-com-white.svg" alt="noticia anterior"></div>
    <div class="flechaDcha" slot="right-control"><img src="/img/right-arrow-svgrepo-com-white.svg" alt="noticia siguiente"></div>
</Carousel>
<style>
    @font-face {
        font-family: "Decima Nova Pro", sans-serif;
        src: url('/fonts/DecimaNovaPro.otf');
    }
    .carrusel{
        width: 280px;
        height: 85vh;/* 70vh */
        background-color: rgb(255,255,255);
        opacity: 0.7;
        border-radius: 10px;
        margin-left: 10%;
        transition: opacity 1s;
    }
    .carrusel:hover{
        opacity: 1;
        cursor: pointer;
    }
    .fotoC{
        position: relative;
        top: 10px;
        width: calc(100% - 20px);
        height: calc(50% - 20px);
        margin: 10px;
    }
    .fotoC img{
        image-resolution: normal;
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0 0;
    }
    .contResumen{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .tituloN{
        position: relative;
        top: 10px;
        margin: 0 10px;
        height: 100px;
    }
    .tituloN h2{
        font-size: 1.5em;
        font-weight: bolder;
    }
    .noticiaResumen{
        position: relative;
        top: 20px;
        left: 5%;
        width: 90%;
        height: 20%;
        text-align: left;
    }
    .noticiaResumen>p{
        color: black;
    }
    .irNoticia{
        position: relative;
        top: 30px;
        left: 15%;
        text-align: center;
        width: 70%;
        height: 10%;
        background-color: #51626f;
        border-radius: 10px;
        line-height: 1em;
    }
    .irNoticia>p{
        font-size: 1.3em;
        line-height: 3em;
        color: white;
    }
    .flechaIzq{
        position: relative;
        top: 0;
        left: -100px;
        width: 70px;
        display: inline-block;
        margin-top: 0;
        opacity: 0.5;
        transition: opacity 1s;
    }
    .flechaDcha{
        position: relative;
        top: 0;
        left: 60px;
        width: 70px;
        display: inline-block;
        margin-top: 0;
        opacity: 0.5;
        transition: opacity 1s;
    }
    .flechaIzq:hover,.flechaDcha:hover{
        opacity: 1;
        cursor: pointer;
    }
    .flechaIzq>img{
        width: 100%;
        fill: #dc001b;
    }
    /*a partir de 1690px hay que hacer mediaquery*/
</style>




