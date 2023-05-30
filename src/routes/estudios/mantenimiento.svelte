<script>
    import Ciclos from './telecomunicaciones.svelte';
    import Titulo from '../../lib/titulo.svelte';
</script>
<div class="fondo"></div>
<Titulo>
    <h1 slot="tituloH1">Formación Profesional Básica en Mantenimiento de Vehículos</h1>
    <h2 slot="tituloH2">FP Básica</h2>
</Titulo>
<Ciclos>
    <img slot="slotImagenPorq" src="/img/ciclos/electromecanica/electromecanica00.jpg" alt="Carrocería">
    <div slot="slotTextoPorq" class="textoPorq">
        <p>Estos estudios te permitirán desarrollar una carrera como especialista en el mantenimiento de vehículos.</p>
        <br>
        <p>Se trata de un área muy práctica con alta demanda que te permitirá adquirir las destrezas y técnicas que permitan localizar y arreglar averías mecánicas, hidraúlicas, eléctricas y electrónicas.</p>
        <br>
        <p>Obtendrás las capacidades necesarias para la puesta a punto de todos los sistemas de los vehículos: motor, sistema eléctrico y electrónico, suspensión, dirección, frenos, etc.</p>
    </div>
    <div slot="slotIconosRamas" class="iconosRamas">
        <div class="iconoRama">
            <img src="/img/ciclos/carroceria/reparacion.svg" alt="Reparación de vehículos">
            <p>Reparación de vehículos</p>
        </div>
        <div class="iconoRama">
            <img src="/img/ciclos/electromecanica/electricidad.svg" alt="Electricidad">
            <p>Electricidad</p>
        </div>
        <div class="iconoRama">
            <img src="/img/ciclos/carroceria/mecanica.svg" alt="Mecánica">
            <p>Mecánica</p>
        </div>
    </div>
    <ul slot="slotListaRequisitos" class="lista">
        <li>Tener 15 años o cumplirlos durante el año natural en curso y no superar los 17 durante el año natural en curso</li>
        <li>Haber cursado el primer ciclo de Educación Secundaria Obligatoria (excepcionalmente haber cursado 2º curso de ESO)</li>
        <li>Haber propuesto el equipo docente a los padres, madres o tutores legales la incorporación del alumno o alumna a un ciclo de Formación Profesional Básica</li>
    </ul>
    <ul slot="slotSalidasAcademicas" class="lista">
        <li>Electricidad y Electrónica</li>
        <li>Informática y Comunicaciones</li>
        <li>Fabricación Mecánica</li>
        <li>Instalación y Mantenimiento</li>
        <li>Energía y Agua</li>
        <li>Industrias Extractivas</li>
        <li>Industria Marítimo-Pesquera</li>
        <li>Química, Transporte y Mantenimiento de Vehículos</li>
        <li>Madera, Mueble y Corcho y Edificación y Obra Civil</li>
    </ul>
    <ul slot="slotSalidasProf" class="lista">
        <li>Ayudante en el área de carrocería</li>
        <li>Auxiliar de almacén de recambios</li>
        <li>Operario empresas de sustitución de lunas</li>
        <li>Ayudante en el área de electromecánica</li>
        <li>Operario de taller de mecánica rápida</li>
    </ul>
    <div slot="slotFotos" class="fotos">
        <figure><img src="/img/ciclos/mantenimiento/fpb01.jpg" alt="foto1"></figure>
        <figure><img src="/img/ciclos/mantenimiento/fpb02.jpg" alt="foto2"></figure>
        <figure><img src="/img/ciclos/mantenimiento/fpb03.jpg" alt="foto3"></figure>
    </div>
    <div slot="slotModulosPrimero" class="materiasLista">
        <ul>
            <li>Ciencias aplicadas 1</li>
            <li>Comunicación y sociedad 1</li>
            <li>Mecanizado y soldadura</li>
            <li>Amovibles</li>
            <li>Preparación de superficies</li>
            <li>Tutoría</li>
        </ul>
    </div>
    <div slot="slotModulosSegundo" class="materiasLista">
        <ul>
            <li>Ciencias aplicadas 2</li>
            <li>Comunicación y sociedad 2</li>
            <li>Electricidad del vehículo</li>
            <li>Mecánica del vehículo</li>
            <li>Formación en Centros de Trabajo</li>
            <li>Tutoría</li>
        </ul>
    </div>
</Ciclos>
<style>
    .fondo{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-image: url("/img/ciclos/electromecanica/fondo-electromecanica.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
    }
    .textoPorq{
        font-size: 1.4em;
    }
    .iconosRamas{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .iconoRama{
        position: relative;
        margin: 120px 40px 40px;
        min-width: 210px;
        width: 13%;
        height: 30vh;
        background-color: #2E2E2EB2;
        border-radius: 10px;
        text-align: center;
        font-size: 1.5em;
        display: grid;
        place-items: center;
    }
    .iconoRama img{
        position: relative;
        width: 40%;
        margin: 20px 20px 0;
    }
    .iconoRama p {
        margin: 0 10px
    }
    .lista{
        font-size: 1.5em;
        line-height: 1.5em;
        list-style: none;
    }
    .lista li{
        text-indent: -1.5em;
        margin-right: 1.5em;
    }
    .lista li::before{
        content: "";
        display: inline-block;
        height: 1em;
        width: 1em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-image: url(/img/ciclos/puntolista.svg);
        background-size: contain;
    }
    figure{
        display: inline-block;
        width: 23.5%;
        margin: 0.5em;
    }
    figure img{
        width: 100%;
    }
    .materiasLista{
        font-size: 1.5em;
        line-height: 1.7em;
        height: 100%;
    }
    .materiasLista li{
        text-indent: -1.5em;
        margin-right: 1.5em;
        list-style: none;
    }
    .materiasLista li::before{
        content: "";
        display: inline-block;
        height: 1em;
        width: 1em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-image: url(/img/ciclos/puntolista.svg);
        background-size: contain;
    }
</style>