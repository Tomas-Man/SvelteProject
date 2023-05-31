<script>
    import Titulo from '../../../lib/titulo.svelte';
    import Escuela from '../../../lib/escuela.svelte';
</script>
<div class="fondo"></div>
<Titulo>
    <h1 slot="tituloH1">Servicio de Erasmus +</h1>
    <h2 slot="tituloH2">Fomento de la educación Europea</h2>
</Titulo>
<Escuela>
    <h2 slot="slotH2">¿Qué es Erasmus+?</h2>
    <br>
    <p slot="slotp">El <a href="http://sepie.es/">Servicio Español para la Internacionalización de la Educación</a> nos
        concede para este curso el programa <a href="https://erasmus-plus.ec.europa.eu/es">ErasmusPlus</a>, el programa
        de la Unión Europea para apoyar la educación, la formación, la juventud y el deporte en Europa.</p>
    <div slot="contDcha">
        <figure>
            <img src="/img/escuela/erasmus/erasmus_SEPIe.jpeg" alt="Erasmus">
        </figure>
    </div>
</Escuela>
<style>
    @font-face {
        font-family: "Decima Nova Pro";
        src: url("/fonts/DecimaNovaPro.otf");
    }

    h2 {
        font-weight: lighter;
    }

    * {
        font-family: "Decima Nova Pro", sans-serif;
    }

    .fondo {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-image: url("/img/escuela/erasmus/europa.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
    }

    p a {
        color: #4a8089;
    }

    p a:hover {
        text-decoration: none;
        color: #75b3b7;
    }

    figure img {
        width: calc(50vw - 80px);
    }
</style>