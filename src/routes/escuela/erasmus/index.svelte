<script>
    import Titulo from '../../../lib/titulo.svelte';
    import Escuela from '../../../lib/escuela.svelte';
</script>
<div class="fondo"></div>
<Titulo>
    <div class="tituloSlot" slot="tituloText">
        <h1>Servicio de Erasmus +</h1>
        <h2>Fomento de la educación Europea</h2>
    </div>
</Titulo>
<Escuela>
    <section class="contenidoEscuela">
    <div class="contIzq" slot="slotContenidoIzq">
        <h2>¿Qué es Erasmus+?</h2>
        <br>
        <p>El <a href="http://sepie.es/">Servicio Español para la Internacionalización de la Educación</a> nos concede para este curso el programa<a href="https://erasmus-plus.ec.europa.eu/es">ErasmusPlus</a>, el programa de la Unión Europea para apoyar la educación, la formación, la juventud y el deporte en Europa.</p>
    </div>
    <div class="contDcha" slot="slotContDcha">
        <div class="contImg">
            <figure>
                <img src="/img/escuela/erasmus/erasmus_SEPIe.jpeg" alt="Erasmus">
            </figure>
        </div>
    </div>
    </section>
</Escuela>
<!--
    <section class="contenidoEscuela">
        <slot name="slotContenidoIzq">
            <div class="contIzq">
                <h2>¿Qué es Erasmus+?</h2>
                <br>
                <p>El <a href="http://sepie.es/">Servicio Español para la Internacionalización de la Educación</a> nos concede para este curso el programa <a href="https://erasmus-plus.ec.europa.eu/es">ErasmusPlus</a>, el programa de la Unión Europea para apoyar la educación, la formación, la juventud y el deporte en Europa.</p>
            </div>
        </slot>
        <slot name="slotContenidoDcha">
            <div class="contDcha">
                <div class="contImg">
                    <figure>
                        <img src="/img/escuela/erasmus/erasmus_SEPIe.jpeg" alt="Erasmus">
                    </figure>
                </div>
            </div>
        </slot>
    </section>-->

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
        background-image: url("/img/escuela/erasmus/europa.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
    }/*
    .contIzq{
        position: relative;
        top: 0;
        left: 0;
        width: calc(50% - 200px);
        height: 100%;
        margin: 100px 100px 120px;
    }
    .contIzq h2{
        font-size: 3em;
        font-weight: lighter;
        text-align: center;
    }
    .contIzq p{
        font-size: 1.5em;
        margin-top: 20px;
    }*/
    .contIzq a{
        color: #4a8089;
    }
    .contIzq a:hover{
        text-decoration: none;
        color: #75b3b7;
    }/*
    .contDcha{
        position: relative;
        top: 0;
        left: 0;
        margin: 40px 40px 40px 0;
    }
    .contImg{
        position: relative;
        top: 0;
    }*/
    .contImg img{
        width: calc(50vw - 80px);
    }
</style>