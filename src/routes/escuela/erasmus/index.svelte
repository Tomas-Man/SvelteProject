<script>
    import '../../../styles/escuela.css';
</script>
<main>
    <slot name="slotFondo">
        <div class="fondo"></div>
    </slot>
    <section class="tituloEscuela">
        <slot name="slotTituloEsc">
            <div class="tituloEsc">
                <h1>Servicio Erasmus+</h1>
                <h2>Fomento de la educación en Europa</h2>
            </div>
        </slot>
    </section>
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
    </section>
</main>
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
</style>