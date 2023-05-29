<script>
    import Ciclos from './telecomunicaciones.svelte';
</script>
<Ciclos>
    <div slot="slotFondo" class="fondo"></div>
    <section class="titulo">
        <div class="tituloFP">
            <h1 slot="slotNombreFP">Formación Profesional en Carrocería</h1>
            <h2 slot="slotTipoFP">FP de Grado Medio</h2>
        </div>
    </section>
    <section class="porque">
        <img slot="slotImagenPorq" src="/img/ciclos/carroceria/carroceria00.jpg" alt="Carrocería">
        <div class="textoPq">
            <div slot="slotTextoPorq">
                <p>Estos estudios te permitirán desarrollar una carrera como especialista en el mantenimiento de vehículos.</p>
                <br>
                <p>Aprenderás los fundamentos de una profesión muy práctica con alta demanda que te permitirá adquirir las destrezas y técnicas que permitan una salida como profesional en trabajos de chapa, transformaciones de carrocerías, vehículos pesados, construcción y reparación de elementos de fibra y pintura.</p>
            </div>
        </div>
    </section>
    <div slot="slotIconosRamas" class="iconosRamas">
        <div class="iconoRama">
            <img src="/img/ciclos/carroceria/reparacion.svg" alt="Reparación de vehículos">
            <p>Reparación de vehículos</p>
        </div>
        <div class="iconoRama">
            <img src="/img/ciclos/carroceria/embellecimiento.svg" alt="/img/ciclos/carroceria">
            <p>Embellecimiento de Superficies</p>
        </div>
        <div class="iconoRama">
            <img src="/img/ciclos/carroceria/mecanica.svg" alt="Mecánica">
            <p>Mecánica</p>
        </div>
    </div>
    <ul slot="slotSalidasProf" class="lista">
        <li>Chapista /reparador de carrocería de vehículos, obras públicas y material ferroviario</li>
        <li>Instalación de lunas y montaje de accesorios</li>
        <li>Pintura de carrocerías</li>
        <li>Comercial de productos afines</li>
        <li>Reparación de aeronaves</li>
    </ul>
    <div slot="slotFotos" class="fotos">
        <figure><img src="/img/ciclos/carroceria/carroceria01.jpg" alt="foto1"></figure>
        <figure><img src="/img/ciclos/carroceria/carroceria02.jpg" alt="foto2"></figure>
        <figure><img src="/img/ciclos/carroceria/carroceria03.jpg" alt="foto3"></figure>
        <figure><img src="/img/ciclos/carroceria/carroceria04.jpg" alt="foto4"></figure>
    </div>
    <div slot="slotModulosPrimero" class="materiasLista">
        <ul>
            <li>Elementos amovibles</li>
            <li>Elementos metálicos y sintéticos</li>
            <li>Elementos fijos</li>
            <li>Mecanizado básico</li>
            <li>Formación y orientación laboral</li>
        </ul>
    </div>
    <div slot="slotModulosSegundo" class="materiasLista">
        <ul>
            <li>Preparación de superficies</li>
            <li>Instalaciones domóticas</li>
            <li>Elementos estructurales del vehículo</li>
            <li>Embellecimiento de superficies</li>
            <li>Empresa e iniciativa emprendedora</li>
            <li>Formación en Centros de Trabajo</li>
        </ul>
    </div>
</Ciclos>
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
        background-image: url("/img/ciclos/carroceria/fondo-carroceria.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
    }
    .titulo h1{
        font-size: 6em;
        letter-spacing: .05em;
    }
    .titulo h2{
        font-size: 3em;
        font-weight: lighter;
        line-height: 4em;
    }
    .imagenPq img{
        width: calc(50vw - 40px);
    }
    .textoPq h2{
        font-size: 3em;
        font-weight: lighter;
        margin-bottom: 30px;
        text-align: center;
    }
    .textoPq p{
        font-size: 1.4em;
    }
    .textoRamas h1{
        margin-top: 100px;
        font-size: 5em;
        text-align: center;
        font-weight: lighter;
    }
    .iconosRamas{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .iconoRama{
        position: relative;
        margin: 120px 40px 40px;
        min-width: 210px;
        width: 13%;
        height: 30vh;
        background-color: #2E2E2EB2;
        border-radius: 10px;
        text-align: center;
        font-size: 1.5em;
        display: grid;
        place-items: center;
    }
    .iconoRama img{
        position: relative;
        width: 40%;
        margin: 20px 20px 0;
    }
    .iconoRama p {
        margin: 0 10px
    }
    .tituloAspectos h1{
        font-size: 5em;
        font-weight: lighter;
        color: #51626f;
    }
    .listasAspectosDest p{
        font-size: 1.7em;
        margin-bottom: 1em;
    }
    .lista{
        font-size: 1.5em;
        line-height: 1.5em;
        list-style: none;
    }
    .lista li{
        text-indent: -1.5em;
        margin-right: 1.5em;
    }
    .lista li::before{
        content: "";
        display: inline-block;
        height: 1em;
        width: 1em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-image: url(/img/ciclos/puntolista.svg);
        background-size: contain;
    }
    figure{
        display: inline-block;
        width: 23.5%;
        margin: 0.5em;
    }
    figure img{
        width: 100%;
    }
    .tituloModulos h1 {
        font-size: 5em;
        font-weight: lighter;
        color: #51626f;
    }
    .cursosListas h2{
        text-align: center;
        font-size: 3em;
        font-weight: lighter;
        margin-bottom: 30px;
    }
    .materiasLista{
        font-size: 1.5em;
        line-height: 1.7em;
        height: 100%;
    }
    .materiasLista li{
        text-indent: -1.5em;
        margin-right: 1.5em;
        list-style: none;
    }
    .materiasLista li::before{
        content: "";
        display: inline-block;
        height: 1em;
        width: 1em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-image: url(/img/ciclos/puntolista.svg);
        background-size: contain;
    }
</style>
