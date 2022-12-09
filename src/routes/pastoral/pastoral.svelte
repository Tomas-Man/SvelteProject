<main>
    <div class="fondo"></div>
    <section class="titulo">
        <h1>Pastoral</h1>
    </section>
    <section class="contenido">
        <h2>Página en construcción</h2>
    </section>
</main>
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
        background-image: url("/img/centro/documentos-fondo.jpg");
        background-size: cover;
        background-position: left;
        background-repeat: no-repeat;
        z-index: -1;
    }
    .titulo{
        position: relative;
        height: 30vh;
        font-size: 3em;
        color: white;
        display: grid;
        place-items: center;
    }
    .contenido{
        position: relative;
        top: 0;
        left: 0;
        height: 20vh;
        background-color: #d9d9d9;
        display: grid;
        place-items: center;
    }
</style>