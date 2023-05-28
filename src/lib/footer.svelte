<script>
    //importar estilos
    import '../styles/global.css';
    import Contacto from './contacto.svelte';
    import Form from './formulario.svelte';
</script>
<footer>
    <div class="contentFooter">

        <Contacto />
        <!--<div class="contFooter">
            <h1>CONTACTO</h1>
            <br>
            <p>
                Pasaje Don Bosco 1,<br>
                34190, Villamuriel de Cerrato<br>
                Tlfno: <a href="tel:979777270">979 77 72 70</a><br>
                <a href="mailto:direccioncolegio@salesianosvillamuriel.com">direccioncolegio@salesianosvillamuriel.com</a>
            </p>
            <br>
            <p>Horario de atención: De 9:00 a 14:00</p>
            <br>
            <div class="mapa">
                <a href="https://goo.gl/maps/dTQNZjREAZymheM77"><div class="googlemaps">
                    <p><strong>Haz click aquí para ver la ubicación en <br>Google Maps</strong></p>
                </div></a>
                <img src="/img/mapa.jpg" alt="Mapa">
            </div>
        </div>-->
        <div class="contFooter">
            <h1>PEDIR INFORMACIÓN</h1>
            <br>
            <p id="lineaForm">Si deseas información o nos quieres consultar algo, puedes utilizar este formulario.
            Por favor, indica un email válido para que la respuesta se envíe correctamente (<a href="/privacidad">leer nuestra política de privacidad</a>)</p>
            <br>
            <Form />
        </div>
    </div>
</footer>
<style>
    @font-face {
        font-family: "Decima Nova Pro";
        src: url("/fonts/DecimaNovaPro.otf");
    }
    @font-face {
        font-family: "Decima Nova Pro Light";
        src: url("/fonts/DecimaNovaProLight.otf");
    }
    footer{
        font-family: "Decima Nova Pro", sans-serif;
        position: relative;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 120vh;
        background-color: #2E2E2E;
        font-size: 1.3em;
    }
    footer h1{
        font-family: "Decima Nova Pro Light", sans-serif;
        color: white;
    }
    footer p{
        color: #dad4cb;
    }
    a{
        color: white;
    }
    a:hover{
        text-decoration: underline;
    }
    .contentFooter{
        position: relative;
        width: calc(100% - 2em);
        padding-top: 2em;
        display: inline-flex;
        justify-content: center;
    }
    /*.contFooter{
        display: inline-block;
        text-align: left;
        min-width: 400px;
        max-width: 700px;
        margin-left: 2.5em;
    }
    .googlemaps{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #d9d9d9;
        z-index: 2;
        opacity: 0;
        text-align: center;
        border-radius: 5px;
        transition: opacity 1s;
    }
    .googlemaps>p{
        margin-top: 100px;
        color: #2E2E2E;
        line-height: 2em;
        font-size: 1.2em;
    }
    .googlemaps:hover{
        transition: 1s;
        opacity: .7;
    }
    .mapa{
        display: block;
        position: relative;
        top: 0;
        left: 0;
        width: 400px;
        height: 285px;
        transition: 1s;
    }
    .mapa>img{
        width: 400px;
        z-index: -1;
        transition: 2s;
        background-color: #d9d9d9;
        border-radius: 5px;
    }*/
    #lineaForm{
        padding-bottom: 1em;
        border-bottom: 1px solid white;
    }
</style>