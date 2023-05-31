<script>
    import Titulo from '../../../lib/titulo.svelte';
</script>
<div class="fondo"></div>
<Titulo>
    <h1 slot="tituloH1">FP Dual</h1>
    <h2 slot="tituloH2">Formación en el puesto de trabajo</h2>
</Titulo>
<div class="descrFP">
    <div class="txtFP">
        <h2>FP Dual</h2>
        <p>Estamos comprometidos con la formación en FP Dual, cada vez son más empresas las que colaboran con nosotros
            en este nuevo paradigma de la Formación Profesional.</p>
        <br>
        <p>Mediante la FP Dual los alumnos aplican en un puesto laboral real los conocimientos aprendidos durante el
            ciclo y además se siguen formando mediante un programa educativo acordado entre el centro y la empresa.</p>
    </div>
    <div class="logoFP">
        <figure>
            <img src="/img/escuela/fpdual/dual.svg" alt="FP Dual">
        </figure>
    </div>
</div>
<div class="docuInfo">
    <h2>Documentos e información</h2>
    <div class="contDocu">
        <div class="docu">
            <a href="https://drive.google.com/file/d/1cnSGiogY1lzZgC2Lfhbc2x2PwEht-0cA/view?usp=drive_web"
               target="_blank">
                <img src="/img/escuela/fpdual/informacionalumnado.jpg" alt="Documento pdf">
                <p>informacion-alumna...</p>
            </a>
        </div>
        <div class="docu">
            <a href="https://drive.google.com/file/d/125ihz8I6OYerXUqfZvaiP8ttWf_6HJos/view?usp=drive_web"
               target="_blank">
                <img src="/img/escuela/fpdual/solicitudfp.jpg" alt="Documento pdf">
                <p>solicitud-fp-dual.pdf</p>
            </a>
        </div>
    </div>
</div>
<div class="banner">
    <div class="entidad">
        <figure>
            <img src="/img/escuela/fpdual/logo-junta.png" alt="Junta de Castilla y León">
        </figure>
    </div>
    <div class="entidad">
        <figure>
            <img src="/img/logo-grande.svg" alt="Salesianos">
        </figure>
    </div>
    <div class="entidad">
        <figure>
            <img src="/img/escuela/fpdual/europa-impulsa.png" alt="Europa impulsa nuestro crecimiento">
        </figure>
    </div>
</div>
<style>
    @font-face {
        font-family: "Decima Nova Pro";
        src: url("/fonts/DecimaNovaPro.otf");
    }

    * {
        font-family: "Decima Nova Pro", sans-serif;
    }

    h2 {
        font-weight: lighter;
    }

    .fondo {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-image: url("/img/escuela/fpdual/estudio-dual.jpg");
        background-size: cover;
        background-position: left;
        background-repeat: no-repeat;
        z-index: -1;
    }

    .descrFP {
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 100%;
        background-color: #d9d9d9;
    }

    .txtFP {
        width: 50%;
        height: 100%;
        margin: 40px;
    }

    .txtFP p {
        font-size: 1.4em;
    }

    h2 {
        font-size: 3em;
        font-weight: lighter;
        text-align: center;
        margin-bottom: 20px;
    }

    .logoFP {
        position: relative;
        width: 50%;
        height: 100%;
        text-align: center;
    }

    .logoFP img {
        position: relative;
        max-width: 600px;
    }

    .docuInfo {
        position: relative;
        top: 0;
        left: 0;
        height: 100%;
        background-color: #d9d9d9;
    }

    .contDocu {
        display: flex;
    }

    .docu {
        position: relative;
        top: 0;
        left: 0;
        margin: 20px 50px 70px;
        text-align: center;
        font-size: 1.1em;
    }

    .docu img {
        width: 160px;
        height: 220px;
        border-radius: 5px;
    }

    .docu p {
        color: #616161;
    }

    .docu:hover p {
        color: blue;
    }

    .docu > a:hover {
        text-decoration: none;
    }

    .banner {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #d9d9d9;
    }

    .entidad {
        margin: 0 0 50px;
        padding: 0 1.5em;
    }

    .entidad img {
        height: 90px;
    }
</style>