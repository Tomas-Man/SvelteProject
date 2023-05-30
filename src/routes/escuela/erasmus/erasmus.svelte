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
        <p>El <a href="http://sepie.es/">Servicio Español para la Internacionalización de la Educación</a> nos concede para este curso el programa<a href="https://erasmus-plus.ec.europa.eu/es">ErasmusPlus</a>, el programa de la Unión Europea para apoyar la educación, la formación, la juventud y el deporte en Europa.</p>
    </div>
    <div class="conDcha" slot="slotContDcha">
        <div class="excelenciaImg">
            <img src="/img/escuela/excelencia/FP_excelencia.jpeg" alt="Excelencia">
        </div>
    </div>
</Escuela>
<!--
<Escuela>
    <div slot="slotFondo" class="fondo"></div>
    <div slot="slotTituloEsc" class="tituloEsc">
        <h1>Servicio Erasmus+</h1>
        <h2>Fomento de la educación en Europa</h2>
    </div>
    <div slot="slotContenidoIzq" class="contIzq">
        <h2>¿Qué es Erasmus+?</h2>
        <br>
        <p>El <a href="http://sepie.es/">Servicio Español para la Internacionalización de la Educación</a> nos concede para este curso el programa<a href="https://erasmus-plus.ec.europa.eu/es">ErasmusPlus</a>, el programa de la Unión Europea para apoyar la educación, la formación, la juventud y el deporte en Europa.</p>
    </div>
    <div slot="slotContenidoDcha" class="contDcha">
        <div class="excelenciaImg">
            <figure>
                <img src="/img/escuela/excelencia/FP_excelencia.jpeg" alt="Excelencia">
            </figure>
        </div>
    </div>
</Escuela>
-->
<style>
    .fondo{
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
    .contIzq a{
        color: #4a8089;
    }
    .contIzq a:hover{
        text-decoration: none;
        color: #75b3b7;
    }
</style>