<script>
    import Titulo from '../../../lib/titulo.svelte';
    import Escuela from '../../../lib/escuela.svelte';
</script>
<div class="fondo"></div>
<Titulo>
    <h1 slot="tituloH1">Somos centro de excelencia de alto nivel</h1>
    <h2 slot="tituloH2">El reconocimiento más alto como centro de excelencia en FP</h2>
</Titulo>
<Escuela>
    <p slot="slotp">La Junta de Castilla y León nos ha reconocido como centro de excelencia de alto nivel en su orden de
        13 de Octubre de 2020.</p>
    <br>
    <p slot="slotp2">Este reconocimiento supone un espaldarazo a nuerstra labor por intentar hacer de nuestro centro un
        centro especial y nos motiva a continuar en los años venideros por este camino.</p>
    <div slot="contDcha">
        <figure>
            <img src="/img/escuela/excelencia/fp-excelencia.jpg" alt="Excelencia">
        </figure>
    </div>
</Escuela>
<style>
    h2 {
        font-weight: lighter;
    }

    .fondo {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-image: url("/img/escuela/excelencia/textura1.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
    }

    figure img {
        width: calc(50vw - 300px);
        margin-left: 100px;
        border-radius: 17px;
    }
</style>
