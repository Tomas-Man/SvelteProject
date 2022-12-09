<script>
    import Escuela from './index.svelte';
</script>
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
