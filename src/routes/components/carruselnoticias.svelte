<!-- con este script importamos el carrusel y creamos el conjunto de imágenes para las noticias-->
<script>
    import Carousel from './carousel.svelte';
    const imgN = [
        {path: "/img/noticias/admision.jpg", alt: "admision.jpg", id: "imageN1", ruta: "../estudios/eso",
        resumen: ''},
        {path: "/img/noticias/admisiones-ESO.jpeg", alt: "admisiones-ESO.jpeg", id: "imageN2", ruta: "../privacidad",
        resumen: 'Abierto el periodo de admisiones para la ESO. Del 18 de marzo al 6 de abril, en la secretaría del Centro Don Bosco de 9:30h a 13:30h. Teléfono: 979777270'},
        {path: "/img/noticias/cartel-1-mayo.jpeg", alt: "noticiaImg3", id: "imageN3", ruta: "../noticias/2022/1-de-mayo",
        resumen: ''},
        {path: "/img/noticias/cartel-jornadas-innovacion.jpg", alt: "noticiaImg4", id: "imageN4", ruta: "",
        resumen: ''},
        {path: "/img/noticias/graduacion-22-00.jpg", alt: "noticiaImg5", id: "imageN5", ruta: "",
        resumen: ''},
        {path: "/img/noticias/info-solicitudes-fp.jpg", alt: "noticiaImg6", id: "imageN6", ruta: "",
        resumen: ''}
    ];
</script>
<!-- Con esto creamos el carrusel y sus componentes -->
<Carousel autoplay="3000">
    {#each imgN as imageN}
        <div class="carrusel" on:click={() => {(location=imageN.ruta)}}>
            <div class="fotoC">
                <img src={imageN.path} alt={imageN.alt}>
            </div>
            <div class="contResumen">
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
        width: 250px;
        height: 70vh;
        background-color: rgb(255,255,255);
        opacity: 0.7;
        border-radius: 10px;
        margin-left: 10%;
        transition: opacity 1s;
    }
    .carrusel:hover{
        opacity: 1;
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
    .noticiaResumen{
        position: relative;
        top: 20px;
        left: 5%;
        width: 90%;
        height: 30%;
        text-align: left;
    }
    .noticiaResumen>p{
        color: black;
    }
    .irNoticia{
        position: relative;
        top: 40px;
        left: 15%;
        text-align: center;
        width: 70%;
        height: 10%;
        background-color: #51626f;
        border-radius: 10px;
        color: white;
        line-height: 1em;
    }
    .irNoticia>p{
        line-height: 3em;
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
    }
    .flechaIzq>img{
        width: 100%;
        fill: #dc001b;
    }
</style>




