<main>
    <div class="container">
    <section class="tituloPrincipal" style="background-image: url('/img/escuela/metodo/idea.jpg')">
        <h1>Nuestro método educativo</h1>
    </section>
    <section class="scrollFondo" style="background-image: url('/img/escuela/metodo/peatones.jpg')"></section>
    <div class="scrollTitulo">
        <h1>Caminamos juntos</h1>
    </div>
    <div class="scrollTxt">
        <p>Queremos ser una compañía sólida en tu caminar por el proceso educativo</p>
        <br>
        <p>Estamos siempre disponibles y priorizamos la cercanía entre alumnos y profesores a todos los niveles</p>
    </div>
    <section class="scrollFondo" style="background-image: url('/img/escuela/metodo/salto.jpg')"></section>
    <div class="scrollTitulo">
        <h1>Estamos ilusionados</h1>
    </div>
    <div class="scrollTxt">
        <p>Creemos en lo que hacemos y se nota</p>
        <br>
        <p>Tenemos ganas, siempre buscamos mejorar, la búsqueda de la excelencia empieza por nuestras ganas continuas de superarnos</p>
    </div>
    <section class="scrollFondo" style="background-image: url('/img/escuela/metodo/asir-rol.jpg')"></section>
    <div class="scrollTitulo">
        <h1>Aprendizaje cooperativo</h1>
    </div>
    <div class="scrollTxt">
        <p>Fomentamos el trabajo en equipo con estrategías de aprendizaje compartido</p>
        <br>
        <p>Usamos métodos de autoevaluación y cooevaluación para que los propios alumnos y alumnas tomen conciencia de su proceso de aprendizaje</p>
    </div>
    <section class="scrollFondo" style="background-image: url('/img/escuela/metodo/aprender.jpg')"></section>
    <div class="scrollTitulo">
        <h1>Aprendizaje desde la experiencia</h1>
    </div>
    <div class="scrollTxt">
        <p>Nuestro método educativo busca el aprendizaje significativo</p>
        <br>
        <p>Creemos en un aprendizaje práctico donde los alumnos desarrollen su conocimiento a través de la experimentación</p>
    </div>
    <section class="scrollFondo" style="background-image: url('/img/escuela/metodo/proyecto1.jpg')"></section>
    <div class="scrollTitulo">
        <h1>Aprendizaje basado en proyectos</h1>
    </div>
    <div class="scrollTxt">
        <p>Creemos en las metodologías basadas en el aprendizaje basado en retos y tareas</p>
        <br>
        <p>Las metodologías activas son la base de nuestra trabajo educativo</p>
    </div>
    <section class="scrollFondo" style="background-image: url('/img/escuela/metodo/1a1.jpg')"></section>
    <div class="scrollTitulo">
        <h1>Somos un centro muy TIC</h1>
    </div>
    <div class="scrollTxt">
        <p>Es una de nuestras señas de identidad: hacemos un uso inteligente de la tecnología en apoyo de la enseñanza</p>
        <br>
        <p>Cada alumno dispone de su propio dispositivo preparado exclusivamente para el aprendizaje</p>
    </div>
    <section class="scrollFondo" style="background-image: url('/img/escuela/metodo/lazo.jpeg')"></section>
    <div class="scrollTitulo">
        <h1>Educamos en valores</h1>
    </div>
    <div class="scrollTxt">
        <p>Trabajamos en pro de la igualdad, solidaridad y respeto de los seres humanos sea cual sea su creencia, sexo, origen y posición social</p>
        <br>
        <p>Transmitimos un modo de vida vocacional impulsando un sentido ético de la misma</p>
    </div>
    <section class="scrollFondo" style="background-image: url('/img/escuela/metodo/familias.jpg')"></section>
    <div class="scrollTitulo">
        <h1>Trabajamos con las familias</h1>
    </div>
    <div class="scrollTxt">
        <p>Nuestra cercanía se extiende a las familias, buscamos un trato directo</p>
        <br>
        <p>Nuestro proyecto educativo busca una implicación directa y coordinada entre familias y equipo educativo</p>
    </div>
    <section class="scrollFondo" style="background-image: url('/img/escuela/metodo/como-casa.jpg')"></section>
    <div class="scrollTitulo">
        <h1>Orgullosos de nuestra identidad</h1>
    </div>
    <div class="scrollTxt">
        <p>Somos un centro cristiano y fomentamos un sentido trascendente de la vida</p>
        <br>
        <p>Somos un centro salesiano lo que coloca en el centro de nuestro trabajo a la inclusión social de los jóvenes</p>
    </div>
    </div>
</main>
<style>
    @font-face {
        font-family: "Decima Nova Pro";
        src: url("/fonts/DecimaNovaPro.otf");
    }
    *{
        font-family: "Decima Nova Pro", sans-serif;
    }
    main{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0);
        z-index: 10;
    }
    .tituloPrincipal{
        position: relative;
        top: 110px;
        left: 0;
        width: 100%;
        height: 70vh;
        background: rgba(0,0,0,0) center center no-repeat fixed;
        background-size: cover;
        text-align: center;
    }
    .tituloPrincipal h1{
        font-size: 4em;
        color: white;
        padding-top: 20vh;
    }
    .scrollFondo{
        position: sticky;
        top: 40px;
        background: #2e2e2e no-repeat center center;
        background-size: cover;
        height: 100vh;
        padding: .5em 0 0 0;
    }
    .scrollTitulo{
        position: sticky;
        top: 40px;
        background: rgba(0, 0, 0, 0.4) no-repeat center center;
        background-size: cover;
        height: 100vh;
        padding: 2em 0 0 0;
    }
    .scrollTxt{
        position: sticky;
        top: 40vh;
        background: rgba(0, 0, 0, 0) no-repeat center center;
        background-size: cover;
        height: 100vh;
        margin-top: 20vh;
    }
    .scrollTxt p{
        color: white;
        text-align: right;
        width: 30%;
        margin-left: 60%;
        font-size: 2.5em;
        font-style: italic;
        background-color: rgba(81, 98, 111, 0.5);
    }
    .scrollTitulo h1{
        margin-top: 10vh;
        font-size: 5em;
        font-weight: lighter;
        text-align: center;
        color: white;
    }
</style>