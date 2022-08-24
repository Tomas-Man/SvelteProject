<script>
    import Modal from './carroceria.svelte';
</script>
<style>
    .contenido{
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url("/img/fondo.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>
<main>
<div class="eso">
<section class="titulo">
    <h1>Educación Secundaria</h1>
    <h2>ESO</h2>
</section>
    <Modal>
        <slot id="title">
        <h1>Hola!</h1>
        </slot>
        <div class="contenido" slot="nomb">
            <h2>Qué tal?</h2>
        </div>
    </Modal>
<section class="foIzq">
    <div class="imgIzq">
        <!--<figure>
            <img src="" alt="">
        </figure>-->
    </div>
    <div class="infDer">
        <h3>Los estudios de educación secundaria</h3>
        <p></p>
    </div>
</section>
</div>
</main>