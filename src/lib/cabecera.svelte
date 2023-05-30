<script>
    //importar estilos
    import '../styles/global.css';
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
    const msTeams = () => {(location='https://sso2.educamos.com/Autenticacion/Acceder?ReturnUrl=%2fissue%2fwsfed%3fwa%3dwsignin1.0%26wtrealm%3dhttps%253a%252f%252fdonbosco-salesianos-villamurieldecerrato.educamos.com%252f%26wctx%3drm%253d0%2526id%253dpassive%2526ru%253d%25252f%26wct%3d2017-03-16T07%253a36%253a30Z&wa=wsignin1.0&wtrealm=https%3a%2f%2fdonbosco-salesianos-villamurieldecerrato.educamos.com%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252f&wct=2017-03-16T07%3a36%3a30Z')};
    //--------------------------------------------------------------------
    const matriClckd = () => {irASIR = (location='/centro/matriculacion')};
    const secreClckd = () => {irASIR = (location='/centro/documentos-secretaria')};
    const fpdualClckd = () => {irASIR = (location='/escuela/fp-dual')};
    const erasmusClckd = () => {irASIR = (location='/escuela/erasmus')};
    const excelClckd = () => {irASIR = (location='/escuela/excelencia')};
    const metodoClckd = () => {irASIR = (location='/escuela/metodo')};
    const docuClckd = () => {irASIR = (location='/escuela/doumentos')};
    const lemaClckd = () => {irASIR = (location='/pastoral/lema-curso')};
    const misionClckd = () => {irASIR = (location='/pastoral/mision')};
    const pastoralClckd = () => {irASIR = (location='/pastoral/pastoral')};
    //--------------------------------------------------------------------
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
                <img on:click = {xClickd} src="/img/markx.png" alt="Cerrar" class="cerrar">
            </div>
        {/if}
        {#if cShow}
            <div class="subnavCabecera">
                <div class="contSubnav">
                    <p>SECRETARÍA</p>
                    <ul>
                        <li on:click={matriClckd}>INFORMACIÓN SOBRE MATRICULACIÓN</li>
                        <li on:click={secreClckd}>DOCUMENTOS DE SECRETARÍA</li>
                    </ul>
                    <p>PROGRAMAS</p>
                    <ul>
                        <li on:click={fpdualClckd}>FP DUAL</li>
                        <li on:click={erasmusClckd}>PROGRAMA ERASMUS</li>
                        <li on:click={excelClckd}>CENTRO DE EXCELENCIA DE ALTO NIVEL</li>
                    </ul>
                    <p>NUESTRA ESCUELA</p>
                    <ul>
                        <li on:click={metodoClckd}>NUESTRO MÉTODO EDUCATIVO</li>
                        <li on:click={docuClckd}>DOCUMENTOS</li>
                    </ul>
                    <p>NUESTROS VALORES</p>
                    <ul>
                        <li on:click={lemaClckd}>LEMA DEL CURSO</li>
                        <li on:click={misionClckd}>MISIÓN, VISIÓN Y VALORES</li>
                        <li on:click={pastoralClckd}>PASTORAL</li>
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
                        <li on:click ={msTeams}>EDUCAMOS</li>
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
<style>
    @font-face {
        font-family: "Decima Nova Pro";
        src: url("/fonts/DecimaNovaPro.otf");
    }
    .cabecera{
        position:sticky;
        margin: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 110px;
        background-color: white;
        font-family: 'Decima Nova Pro', sans-serif;
        z-index: 20;
    }
    .contCabecera{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        background-color: white;
    }
    #logoCabecera{
        display:block;
        padding: 10px 8px 8px;
        width: 580px;
        min-width: 550px;
    }
    #navCabecera{
        margin: 0;
        padding: 0;
        position: relative;
        top: 0;
        right: 0;
        display: block;
        width: 450px;
        height: 30px;
        font-size: 20px;

    }
    #navCabecera ul{
        margin: 0;
        padding: 0;
    }
    .subnavCabecera{
        display: block;
        position: fixed;
        background-color: white;
        top: 110px;
        left: 50%;
        width: calc(50% - 20px);
        height: auto;
        min-height: 65px;
        padding-top: 10px;
        border-radius: 0 0 7px 7px;
    }
    .contSubnav{
        position: relative;
        top: 0;
        left: 0;
        height: auto;
        padding-bottom: 20px;
    }
    .contSubnav p{
        border-bottom: 1px solid #dc001b;
        margin: 20px 20px 15px 20px;
        color: darkgrey;
    }
    .contSubnav>p:first-of-type{
        border-bottom: 1px solid #dc001b;
        margin-right: 70px;
    }
    #liCorto{
        margin: .75em 75px 0 0;

    }
    .contSubnav>ul>li{
        margin: 2px 20px 2px 0;
        list-style: none;
        height: 1.5em;
        line-height: 1.7em;
        border-radius: 7px;
        padding: 5px 0 5px 8px;
    }
    .cerrar {
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        margin: 10px 15px;
    }
    .cerrar:hover{
        cursor: pointer;
    }
    #navCabecera li {
        display: inline-block;
        padding: 4px 6px;
        margin: 0;
        transition: color 100ms;
        border-radius: 7px;
    }
    #navCabecera li:hover,.contSubnav>ul>li:hover{
        background-color: #dc001b;
        transition: 100ms;
        color: white;
        cursor: pointer;
    }
    a{
        text-decoration: none;
        color: black;
    }
</style>