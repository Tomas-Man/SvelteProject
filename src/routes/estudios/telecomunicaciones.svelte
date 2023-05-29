    <!--<div class="fondo"></div>-->
    <!--
    <section class="titulo">
        <div class="tituloFP">-->
            <!-- con estos "slots" podremos hacer que éste código funcione como plantilla, y sólo cambiaremos el contenido que hay en el slot
            <slot name="slotNombreFP">
                <h1>Instalaciones de Telecomunicaciones</h1>
            </slot>
            <slot name="slotTipoFP">
                <h2>FP de Grado Medio</h2>
            </slot>
        </div>
    </section>-->
    <section class="porque">
        <div class="imagenPq">
            <figure>
                <slot name="slotImagenPorq">
                    <img src="/img/ciclos/teleco/teleco00.jpg" alt="Telecomunicaciones">
                </slot>
            </figure>
        </div>
        <div class="textoPq">
            <h2>¿Por qué estudiar este ciclo?</h2>
            <slot name="slotTextoPorq">
                <div>
                    <p>Los estudios de telecomunicaciones permiten formarse en un área de alta demanda laboral. Se trata de una formación para personal muy polifacético capaz de cubrir las necesidades de un gran número de puestos de trabajo relacionados con la tecnología.</p>
                    <br>
                    <p>El ciclo permite conseguir las capacidades y habilidades que se requieren a un técnico en instalaciones de telecomunicaciones.</p>
                    <br>
                    <p>En los dos años de duración del ciclo aprenderás lo relativo a:</p>
                </div>
            </slot>
        </div>
    </section>
    <section class="ramasProf">
        <div class="textoRamas">
            <h1>RAMAS PROFESIONALES</h1>
            <slot name="slotIconosRamas">
                <div class="iconosRamas">
                    <div class="iconoRama">
                        <img src="/img/ciclos/teleco/sistemasinformaticos.png" alt="Sistemas y Equipos Informáticos">
                        <p>Sistemas y Equipos Informáticos</p>
                    </div>
                    <div class="iconoRama">
                        <img src="/img/ciclos/teleco/domotica.png" alt="Domótica">
                        <p>Domótica</p>
                    </div>
                    <div class="iconoRama">
                        <img src="/img/ciclos/teleco/sistemasaudio.png" alt="Sistemas de audio y video">
                        <p>Sistemas de audio y video</p>
                    </div>
                    <div class="iconoRama">
                        <img src="/img/ciclos/teleco/infraestructurastelco.png" alt="Infraestructuras de telecomunicaciones">
                        <p>Infraestructuras de telecomunicaciones</p>
                    </div>
                </div>
            </slot>
        </div>
    </section>
    <section class="aspectosDest">
        <div class="tituloAspectos">
            <h1>ASPECTOS DESTACABLES</h1>
        </div>
        <div class="listasAspectos">
            <div class="listasAspectosDest">
                <ul class="tituloLista">
                    <li>Requisitos de acceso</li>
                </ul >
                <p>Hay que cumplir uno de estos requisitos:</p>
                <slot name="slotListaRequisitos">
                    <ul class="lista">
                        <li>Título de Educación Secundaria obligatoria</li>
                        <li>Título de Formación Profesional Básica</li>
                        <li>Título de Técnico o de Técnico Auxiliar o equivalente a efectos académicos</li>
                        <li>Haber superado el segundo curso de Bachillerato Unificado y Polivalente (BUP)</li>
                        <li>Haber superado la prueba de acceso a la Universidad para mayores de 25 años</li>
                        <li>Haber superado la prueba de acceso a ciclos formativos de grado medio (se requerirá tener, al menos, diecisiete años, cumplidos en el año de realización de la prueba)</li>
                    </ul>
                </slot>
            </div>
            <div class="listasAspectosDest">
                <ul class="tituloLista">
                    <li>Salidas Académicas</li>
                </ul>
                <slot name="slotSalidasAcademicas">
                    <ul class="lista">
                        <li>Acceso a otros ciclos de FP (incluido grado superior) con posibilidad de convalidar algunas materias</li>
                        <li>Acceso a cursos de especialización profesional</li>
                        <li>Acceso a cualquier modalidad de Bachillerato</li>
                    </ul>
                </slot>
            </div>
            <div class="listasAspectosDest">
                <ul class="tituloLista">
                    <li>Salidas Profesionales</li>
                </ul>
                <slot name="slotSalidasProf">
                    <ul class="lista">
                        <li>Instalación de seguridad</li>
                        <li>Instalación y mantenimiento de sistemas informáticos</li>
                        <li>Instalación de telecomunicaciones en en edificios de viviendas</li>
                        <li>Instalación de antenas</li>
                        <li>Instalación de telefonía</li>
                        <li>Mantenimiento en instalaciones de sonido</li>
                        <li>Instalación de sistemas de megafonía</li>
                        <li>Mantenimiento de sistemas domóticos</li>
                        <li>Instalación y mantenimiento de sistemas de radio difusión</li>
                    </ul>
                </slot>
            </div>
        </div>
    </section>
    <section class="galFotos">
        <slot name="slotFotos">
            <div class="fotos">
                <figure><img src="/img/ciclos/teleco/teleco01.jpg" alt="foto1"></figure>
                <figure><img src="/img/ciclos/teleco/teleco02.jpg" alt="foto2"></figure>
                <figure><img src="/img/ciclos/teleco/teleco03.jpg" alt="foto3"></figure>
                <figure><img src="/img/ciclos/teleco/teleco04.jpg" alt="foto4"></figure>
            </div>
        </slot>
    </section>
    <section class="modulos">
        <div class="tituloModulos">
            <h1>MÓDULOS DEL CICLO</h1>
        </div>
        <div class="cursosListas">
            <div class="materias">
            <h2>Primer Curso</h2>
            <slot name="slotModulosPrimero">
                <div class="materiasLista">
                    <ul>
                        <li>Electrónica aplicada</li>
                        <li>Equipos microinformáticos</li>
                        <li>Infraestructuras de redes de datos y sistemas de telefonía</li>
                        <li>Instalaciones eléctricas básicas</li>
                        <li>Instalaciones de radiocomunicaciones</li>
                        <li>Formación y orientación laboral</li>
                    </ul>
                </div>
            </slot>
        </div>
            <div class="materias">
            <h2>Segundo Curso</h2>
            <slot name="slotModulosSegundo">
                <div class="materiasLista">
                    <ul>
                        <li>Infraestructuras comunes de telecomunicación en viviendas y edificios</li>
                        <li>Instalaciones domóticas</li>
                        <li>Instalaciones de megafonía y sonorización</li>
                        <li>Circuito cerrado de televisión y seguridad electrónica</li>
                        <li>Empresa e iniciativa emprendedora</li>
                        <li>Formación en Centros de Trabajo</li>
                    </ul>
                </div>
            </slot>
        </div>
        </div>
    </section>
<style>
    @font-face {
        font-family: "Decima Nova Pro";
        src: url("/fonts/DecimaNovaPro.otf");
    }
    /*.fondo{
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100vh;
         background-image: url("/img/ciclos/teleco/fondo-teleco.jpg");
         background-size: cover;
         background-position: center;
         background-repeat: no-repeat;
         z-index: -1;
    }*/
    *{
        font-family: "Decima Nova Pro", sans-serif;
    }
    /*.titulo{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 60vh;
        text-align: center;
        display: grid;
        align-items: center;
        color: white;
    }
    .titulo h1{
        font-size: 6em;
        letter-spacing: .05em;
    }
    .titulo h2{
        font-size: 3em;
        font-weight: lighter;
        line-height: 4em;
    }*/
    .porque{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 80%;
        background-color: #d9d9d9;
        display: flex;
    }
    .imagenPq{
        position: relative;
        top: 0;
        left: 0;
        margin: 40px;
    }
    .imagenPq img{
        width: calc(50vw - 40px);
    }
    .textoPq{
        position: relative;
        top: 0;
        left: 0;
        margin: 40px 40px 0 0;
    }
    .textoPq h2{
        font-size: 3em;
        font-weight: lighter;
        margin-bottom: 30px;
        text-align: center;
    }
    .textoPq p{
        font-size: 1.4em;
    }
    .ramasProf{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 80%;
        display: grid;
        align-items: center;
        color: white;
    }
    .textoRamas h1{
        margin-top: 100px;
        font-size: 5em;
        text-align: center;
        font-weight: lighter;
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
    .aspectosDest{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 90%;
        background-color: #d9d9d9;
    }
    .listasAspectos{
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        width: calc(100% - 40px);
        height: 100%;
        margin: 40px 40px 0;
    }
    .tituloAspectos{
        display: grid;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 30vh;
    }
    .tituloAspectos h1{
        font-size: 5em;
        font-weight: lighter;
        color: #51626f;
    }
    .listasAspectosDest{
        width: 32%;
        margin-bottom: 30px;
    }
    .tituloLista{
        text-align: center;
        font-size: 3em;
        font-weight: lighter;
        list-style: none;
        margin: 0 0 30px;
    }
    .listasAspectosDest p{
        font-size: 1.7em;
        margin-bottom: 1em;
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
    .galFotos {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #999999FF;
        display: block;
        text-align: center;
        padding: 20px 0;
    }
    figure{
        display: inline-block;
        width: 23.5%;
        margin: 0.5em;
    }
    figure img{
        width: 100%;
    }
    .modulos{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 70vh;
        background-color: #d9d9d9;
    }
    .tituloModulos{
        display: grid;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 30vh;
    }
    .tituloModulos h1 {
        font-size: 5em;
        font-weight: lighter;
        color: #51626f;
    }
    .cursosListas{
        display: flex;
        margin: 20px 70px 0;
    }
    .cursosListas h2{
        text-align: center;
        font-size: 3em;
        font-weight: lighter;
        margin-bottom: 30px;
    }
    .materias{
        width: 50%;
        height: 100%;
        margin: 10px;
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