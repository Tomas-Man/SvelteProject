<script>
    //importar estilos
    import '../styles/global.css';
    import '../styles/cabecera.css';
    //creación de variables para la barra de navegación
    let eShow=false;
    let cShow=false;
    let nShow=false;
    let sShow=false;
    let irESO=false;
    let irFPB=false;
    let irTEL=false;
    let irCAR=false;
    let irELE=false;
    let irASIR=false;
    //creación de función para que cambie el estado de los submenús
    const estuClickd = () => {eShow = !eShow, cShow=false, nShow=false, sShow=false};
    const centClickd = () => {cShow = !cShow, eShow=false, nShow=false, sShow=false};
    const notClickd = () => {nShow= !nShow, cShow=false, eShow=false, sShow=false};
    const servClickd = () => {sShow = !sShow, cShow=false, nShow=false, eShow=false};
    //Creación de función para que redireccione el <li> entero y no sólo el texto que contiene
    const esoClickd = () => {irESO = (location='/estudios/eso')};
    const fpbClickd = () => {irFPB = (location='/estudios/mantenimiento')};
    const carClickd = () => {irCAR = (location='/estudios/carroceria')};
    const telClickd = () => {irTEL = (location='/estudios/telecomunicaciones')};
    const eleClickd = () => {irELE = (location='/estudios/electromecanica')};
    const asirClickd = () => {irASIR = (location='/estudios/asir')};
    //Creación de la función que cerrará los submenús
    const xClickd = () => {eShow=false, cShow=false, nShow=false, sShow=false};
</script>
<!-- Creación de lo que sería el HTML -->
<header class="cabecera">
    <div class="contCabecera">
        <div id="logoCabecera">
            <a href="/"><img src="/img/logo-grande.svg" alt="Logo"></a>
        </div>
        <nav id="navCabecera">
            <ul>
                <!-- Uso de las funciones creadas anteriormente en un evento "on:click" -->
                <li on:click = {estuClickd}>ESTUDIOS</li>
                <li on:click = {centClickd}>CENTRO</li>
                <li on:click = {servClickd}>SERVICIOS</li>
                <li on:click = {notClickd}>NOTICIAS</li>
            </ul>
        </nav>
        <!-- Creación de las condiciones -->
        {#if eShow}
            <!-- Submenú que aparece en caso de activar el evento "on:click" -->
            <div class="subnavCabecera">
                <div class="contSubnav">
                    <p>EDUCACIÓN SECUNDARIA OBLIGATORIA</p>
                    <ul>
                        <!-- Evento que redirecciona a la página de la ESO -->
                        <li on:click={esoClickd}>ESO</li>
                    </ul>
                    <p>FORMACIÓN PROFESIONAL BÁSICA (FPB)</p>
                    <ul>
                        <!-- Evento que redirecciona a la página de la FPB -->
                        <li on:click={fpbClickd}>MANTENIMIENTO DE VEHÍULOS</li>
                    </ul>
                    <p>FORMACIÓN PROFESIONAL DE GRADO MEDIO</p>
                    <ul>
                        <!-- Eventos que redireccionan a las páginas de grado medio -->
                        <li on:click={telClickd}>TELECOMUNICACIONES</li>
                        <li on:click={carClickd}>CARROCERÍA</li>
                        <li on:click={eleClickd}>ELECTROMECÁNICA DE VEHÍCULOS</li>
                    </ul>
                    <p>FORMACIÓN PROFESIONAL DE GRADO SUPERIOR</p>
                    <ul>
                        <!-- Evento que redirecciona a la página de ASIR -->
                        <li on:click={asirClickd}>ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS EN RED</li>
                    </ul>
                </div>
                <img on:click|once = {xClickd} src="/img/markx.png" alt="Cerrar" class="cerrar">
            </div>
        {/if}
        {#if cShow}
            <div class="subnavCabecera">
                <div class="contSubnav">
                    <p>SECRETARÍA</p>
                    <ul>
                        <li>INFORMACIÓN SOBRE MATRICULACIÓN</li>
                        <li>DOCUMENTOS DE SECRETARÍA</li>
                    </ul>
                    <p>PROGRAMAS</p>
                    <ul>
                        <li>FP DUAL</li>
                        <li>PROGRAMA ERASMUS</li>
                        <li>CENTRO DE EXCELENCIA DE ALTO NIVEL</li>
                    </ul>
                    <p>NUESTRA ESCUELA</p>
                    <ul>
                        <li>NUESTRO MÉTODO EDUCATIVO</li>
                        <li>DOCUMENTOS</li>
                    </ul>
                    <p>NUESTROS VALORES</p>
                    <ul>
                        <li>LEMA DEL CURSO</li>
                        <li>MISIÓN, VISIÓN Y VALORES</li>
                        <li>PASTORAL</li>
                    </ul>
                </div>
                <img on:click="{xClickd}" src="/img/markx.png" alt="Cerrar" class="cerrar">
            </div>
        {/if}
        {#if sShow}
            <div class="subnavCabecera">
                <div class="contSubnav">
                    <p>SERVICIOS EDUCATIVOS</p>
                        <ul>
                            <li>EDUCAMOS</li>
                            <li>GOOGLE CLASSROOM</li>
                            <li>MICROSOFT OFFICE 365</li>
                            <li>MICROSOFT TEAMS</li>
                        </ul>
                    <p>OTROS SERVICIOS</p>
                        <ul>
                            <li>SUGERENCIAS</li>
                            <li>AGENCIA DE COLOCACIÓN</li>
                            <li>RECEPCIÓN DE CURRÍCULOS</li>
                        </ul>
                </div>
                <img on:click ="{xClickd}" src="/img/markx.png" alt="cerrar" class="cerrar">
            </div>
        {/if}
        {#if nShow}
            <div class="subnavCabecera">
                <div class="contSubnav">
                    <ul>
                        <li id="liCorto">VER NOTICIAS</li>
                    </ul>
                </div>
                <img on:click = {xClickd} src="/img/markx.png" alt="Cerrar" class="cerrar">
            </div>
        {/if}
    </div>
</header>

<main>
    <!-- Aquí va el contenido de la página -->
    <slot></slot>
</main>
<style>
    /*
    ¡¡ HACER UN MEDIA QUERY PARA CAMBIAR LA APARIENCIA DEL NAVBAR A PARTIR DE 1003px o 1020px !!
    */
    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
