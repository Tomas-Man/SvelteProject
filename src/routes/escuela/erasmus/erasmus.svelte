<script>
    import Escuela from '../../../lib/escuela.svelte';
    import Titulo from '../../../lib/titulo.svelte';
</script>
<div class="fondo"></div>
<Titulo>
    <h1>Servicio Erasmus+</h1>
    <h2>Fomento de la educación en Europa</h2>
</Titulo>
<Escuela>
    <div class="contIzq" slot="slotContenidoIzq">
        <h2>¿Qué es Erasmus+?</h2>
        <br>
        <p>El <a href="http://sepie.es/">Servicio Español para la Internacionalización de la Educación</a> nos concede
            para este curso el programa<a href="https://erasmus-plus.ec.europa.eu/es">ErasmusPlus</a>, el programa de la
            Unión Europea para apoyar la educación, la formación, la juventud y el deporte en Europa.</p>
    </div>
    <div class="contDcha" slot="slotContDcha">
        <div class="excelenciaImg">
            <img src="/img/escuela/excelencia/FP_excelencia.jpeg" alt="Excelencia">
        </div>
    </div>
</Escuela>
<style>
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

    h2 {
        font-weight: lighter;
    }

    .contIzq a {
        color: #4a8089;
    }

    .contIzq a:hover {
        text-decoration: none;
        color: #75b3b7;
    }

    .contIzq {
        position: relative;
        top: 0;
        left: 0;
        width: calc(50% - 200px);
        height: 100%;
        margin: 100px 100px 120px;
    }

    h2 {
        font-size: 3em;
        font-weight: lighter;
        text-align: center;
        color: green;
    }

    p {
        font-size: 1.5em;
        margin-top: 20px;
    }

    .contDcha {
        position: relative;
        top: 0;
        left: 0;
        margin: 40px 40px 40px 0;
    }

    .contImg img {
        width: calc(50vw - 80px);
    }
</style>