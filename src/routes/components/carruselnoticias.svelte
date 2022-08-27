<!-- con este script importamos el carrusel y creamos el conjunto de imágenes para las noticias-->
<script>
    import Carousel from './carousel.svelte';
    const imgN = [
        {path: "/img/noticias/admision.jpg", alt: "admision.jpg", id: "imageN1", ruta: "../estudios/eso",
        resumen: ''},
        {path: "/img/noticias/admisiones-ESO.jpeg", alt: "admisiones-ESO.jpeg", id: "imageN2", ruta: "../privacidad",
        resumen: ''},
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
                    <p></p>
                </div>
                <div class="irNoticia">
                    <p>ir a la noticia</p>
                </div>
            </div>
        </div>
    {/each}
    <span slot="left-control">Left</span>
    <span slot="right-control">Right</span>
</Carousel>

<style>
    .carrusel{
        width: 300px;
        height: 70vh;
        background-color: rgb(255,255,255);
        opacity: 0.7;
        border-radius: 10px;
    }
    .carrusel:hover{
        opacity: 1;
        transition: opacity 1s;
    }
    span{
        display: inline-block;
        margin-top: 6rem;
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
        text-align: center;
        background-color: wheat;
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
</style>




