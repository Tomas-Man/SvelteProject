

    <section class="contenidoEscuela">
        <slot name="slotContenidoIzq">
            <div class="contIzq">
                <h2></h2>
                <br>
                <p></p>
            </div>
        </slot>
        <slot name="slotContenidoDcha">
            <div class="contDcha">
                <div class="contImg">
                    <figure></figure>
                </div>
            </div>
        </slot>
    </section>

<style>
    @font-face {
        font-family: "Decima Nova Pro";
        src: url("/fonts/DecimaNovaPro.otf");
    }
    *{
        font-family: "Decima Nova Pro", sans-serif;
    }/*
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
    }*/
    .contenidoEscuela{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #d9d9d9;
        display: flex;
    }
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
        color: green;
    }
    .contDcha{
        position: relative;
        top: 0;
        left: 0;
        margin: 40px 40px 40px 0;
    }
    .contImg{
        position: relative;
        top: 0;
    }/*
    .contImg img{
        width: calc(50vw - 80px);
    }*/
</style>