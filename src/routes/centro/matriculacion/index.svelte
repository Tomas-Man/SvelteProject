<script>
    import Titulo from '../../../lib/titulo.svelte';
</script>
<div class="fondo"></div>
<Titulo>
    <h1 slot="tituloH1">INFORMACIÓN SOBRE LA MATRICULACIÓN EN EL CENTRO</h1>
</Titulo>
<slot name="slotContent">
    <div class="content">
        <div class="matrESO">
            <h2>MATRICULACIÓN EN EDUCACIÓN SECUNDARIA (ESO)</h2>
        </div>
        <div class="frame" style="width:90%;max-width:1000px;margin:auto" data-v-719f1c65="" data-v-14889695=""><div style="position:relative;padding-bottom:56.25%;padding-top:0;height:0" data-v-719f1c65="" data-v-14889695=""><iframe frameborder="0" width="1200" height="675" src="https://view.genial.ly/604f2b63d1a43d0d17b3820e" type="text/html" allowscriptaccess="always" allowfullscreen="" scrolling="yes" allownetworking="all" style="position:absolute;top:0;left:0;width:100%;height:100%" data-v-719f1c65="" data-v-14889695=""></iframe></div></div>
    </div>
</slot>
<style>
    @font-face {
        font-family: "Decima Nova Pro";
        src: url("/fonts/DecimaNovaPro.otf");
    }
    *{
        font-family: "Decima Nova Pro", sans-serif;
    }
    h1{
        font-size: 2em;
    }
    .content{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        background-color: #d9d9d9;
    }
    .content h2{
        height: 100px;
        text-align: center;
        font-size: 3em;
        font-weight: lighter;
        line-height: 3em;
        color: #51626f;
    }
    .frame{
        padding: 40px;
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
</style>