<script>
    import Centro from '../matriculacion/index.svelte';
</script>
<Centro>
    <div slot="slotTitulo" class="titulo">
        <h1>SECRETARÍA DEL CENTRO</h1>
    </div>
    <div slot="slotContent" class="content">
        <h2>DOCUMENTOS PARA MATRICULACIÓN</h2>
        <div class="documentos">
            <div class="docu">
                <a href="https://drive.google.com/file/d/15xTlIo4nJmyfvFfzK1Q6c70yOk3DedMW/view?usp=drive_web" target="_blank">
                    <img src="/img/centro/2022-InformacionSolicitudes-FP.jpg" alt="Documento pdf">
                    <p>2022-Información S...</p>
                </a>
            </div>
            <div class="docu">
                <a href="https://drive.google.com/file/d/12w9DDifSo-EKhy10MJTcX_IKlxsSeO1Z/view?usp=drive_web" target="_blank">
                    <img src="/img/centro/FP-2021-online.jpg" alt="Documento pdf">
                    <p>FP-2021-online.pdf</p>
                </a>
            </div>
            <div class="docu">
                <a href="https://drive.google.com/file/d/1OgI6nTL6h2itxB7cnsYb02Mvl9ofHMbz/view?usp=drive_web" target="_blank">
                    <img src="/img/centro/Listado-CFGM-Y-CFGS.jpg" alt="Documento pdf">
                    <p>Listado-CFGM-Y-CF...</p>
                </a>
            </div>
            <div class="docu">
                <a href="https://drive.google.com/file/d/1l54e6MFwRmllfYkp5S9gO0D0IHKgQdI9/view?usp=drive_web" target="_blank">
                    <img src="/img/centro/Listado-CGB.jpg" alt="Documento pdf">
                    <p>Listado-CGB.pdf</p>
                </a>
            </div>
        </div>
    </div>
</Centro>
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
        height: 25vh;
        display: grid;
        place-items: center;
        color: white;
    }
    .titulo h1{
        font-size: 4em;
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
    .documentos{
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 100%;
        margin: 0 50px;
    }
    .docu{
        position: relative;
        top: 0;
        left: 0;
        margin: 100px 50px;
        text-align: center;
        font-size: 1.1em;
    }
    .docu img{
        width: 160px;
        height: 220px;
        border-radius: 5px;
    }
    .docu p{
        color: #616161;
    }
    .docu:hover p{
        color: blue;
    }
    .docu>a:hover{
        text-decoration: none;
    }
</style>