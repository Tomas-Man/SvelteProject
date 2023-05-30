<section class="titulo">

        <h1><slot name="tituloH1"></slot></h1>
        <h2><slot name="tituloH2"></slot></h2>

</section>
<style>
    @font-face {
        font-family: "Decima Nova Pro";
        src: url("/fonts/DecimaNovaPro.otf");
    }
    *{
        font-family: "Decima Nova Pro", sans-serif;
    }
    .titulo{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 60vh;
        text-align: center;
        display: grid;
        align-items: center;
        color: white;
    }
    h1{
        line-height: 3em;
        font-size: 3em;
        letter-spacing: .05em;
    }
    h2{
        font-size: 3em;
        font-weight: lighter;
        line-height: 4em;
    }
</style>