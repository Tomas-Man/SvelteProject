<section class="titulo">
        <div class="contTitulo">
                <h1><slot name="tituloH1"></slot></h1>
                <h2><slot name="tituloH2"></slot></h2>
        </div>
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
            color: white;
    }
    .contTitulo{
            position: relative;
            top: 15vh;
            text-align: center;
            line-height: 15vh;
    }
    h1{
        font-size: 3em;
        letter-spacing: .05em;
    }
    h2{
        font-size: 1.5em;
        font-weight: lighter;
    }
</style>