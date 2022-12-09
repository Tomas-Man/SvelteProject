<script>
    import Ciclos from './telecomunicaciones.svelte';
</script>
<Ciclos>
    <div slot="slotFondo" class="fondo"></div>
    <h1 slot="slotNombreFP">Administración de Sistemas Informáticos en Red</h1>
    <h2 slot="slotTipoFP">FP de Grado Superior</h2>
    <img slot="slotImagenPorq" src="/img/ciclos/asir/asir00.jpg" alt="Administración de Sistemas Informáticos en Red">
    <div slot="slotTextoPorq">
        <p>La alta demanda de profesionales en las tecnologías relacionadas con la gestión de computadoras, redes, bases de datos y sistemas operativos, así como el desarrollo y administración de aplicaciones de todo tipo, hace de estos estudios, unos de los más solicitados a nivel laboral.</p>
        <br>
        <p>El ciclo permite conseguir las capacidades y habilidades que se requieren a un técnico superior en administración de sistemas, redes y tecnologías relacionadas con Internet.</p>
        <br>
        <p>Se recorren, durante los dos años de duración del ciclo, el funcionamiento de las redes, tanto locales como de área global (especialmente Internet), el diseño, manejo y administración de sistemas de bases de datos, la administración de sistemas operativos de servidor, virtualización de sistemas, desarrollo e implementación de aplicaciones web, seguridad de sistemas, gestión y administración de servicios de red, etc.</p>
    </div>
    <div slot="slotIconosRamas" class="iconosRamas">
        <div class="iconoRama">
            <img src="/img/ciclos/asir/sistemas.svg" alt="Administración de Sistemas">
            <p>Administración de Sistemas</p>
        </div>
        <div class="iconoRama">
            <img src="/img/ciclos/asir/basesdedatos.svg" alt="Gestión y Administración de Bases de Datos">
            <p>Gestión y Administración de Bases de Datos</p>
        </div>
        <div class="iconoRama">
            <img src="/img/ciclos/asir/gestionredes.svg" alt="Gestión y Administración de Redes">
            <p>Gestión y Administración de Redes</p>
        </div>
        <div class="iconoRama">
            <img src="/img/ciclos/asir/seguridadyredes.svg" alt="Seguridad de Sistemas y Redes">
            <p>Seguridad de Sistemas y Redes</p>
        </div>
        <div class="iconoRama">
            <img src="/img/ciclos/asir/webapp.svg" alt="Desarrollo e Implementación de Aplicaciones Web">
            <p>Desarrollo e Implementación de Aplicaciones Web</p>
        </div>
    </div>
    <ul slot="slotListaRequisitos" class="lista">
        <li>Título de Bachillerato</li>
        <li>Título de técnico especialista (FP de Grado Medio) o de técnico superior (FP de Grado Superior)</li>
        <li>Título universitario o haber superado la prueba de acceso a la universidad para mayores de 25 años</li>
    </ul>
    <ul slot="slotSalidasAcademicas" class="lista">
        <li>Acceso a carreras universitarias: Ingeniería Informática</li>
        <li>Acceso a otros grados superiores</li>
    </ul>
    <ul slot="slotSalidasProf" class="lista">
        <li>Técnico en administración de redes</li>
        <li>Técnico en administración de sistemas</li>
        <li>Técnico en administración en bases de datos</li>
        <li>Técnico en administración en bases de datos</li>
        <li>Técnico en desarrollo e implementación de aplicaciones web front-end y back-end</li>
        <li>Técnico en servicios de comunicaciones</li>
        <li>Responsable de servicio de informática</li>
        <li>Servicios de soporte a usuarios</li>
        <li>Personal de apoyo técnico</li>
    </ul>
    <div slot="slotFotos" class="fotos">
        <figure><img src="/img/ciclos/asir/asir01.jpg" alt="foto1"></figure>
        <figure><img src="/img/ciclos/asir/asir02.jpg" alt="foto2"></figure>
        <figure><img src="/img/ciclos/asir/asir03.jpg" alt="foto3"></figure>
        <figure><img src="/img/ciclos/asir/asir04.jpg" alt="foto4"></figure>
    </div>
    <div slot="slotModulosPrimero" class="materiasLista">
        <ul>
            <li>Implantación de Sistemas Operativos</li>
            <li>Planificación y Administración de Redes</li>
            <li>Gestión de Bases de Datos</li>
            <li>Fundamentos de Hardware</li>
            <li>Fundamentos de Hardware</li>
            <li>Formación y orientación laboral</li>
        </ul>
    </div>
    <div slot="slotModulosSegundo" class="materiasLista">
        <ul>
            <li>Administración de Sistemas Operativos</li>
            <li>Servicios de Red e Internet</li>
            <li>Implantación de Aplicaciones Web</li>
            <li>Administración de Sistemas Gestores de Bases de Datos</li>
            <li>Seguridad y Alta Disponibilidad</li>
            <li>Empresa e Iniciativa Emprendedora</li>
            <li>Proyecto final de ciclo</li>
            <li>Formación en Centros de Trabajo</li>
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
        background-image: url("/img/ciclos/asir/fondo-asir.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
    }
</style>