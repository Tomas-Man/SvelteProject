<main>
    <div class="fondo"></div>
    <section class="titulo">
        <h1>Misión, Visión y Valores</h1>
    </section>
    <section class="contenido">
        <div class="conjunto">
            <div class="container">
                <h2>NUESTRA MISIÓN</h2>
                <p>Somos una Escuela Salesiana que mira al futuro con la responsabilidad de continuar el patrimonio pedagógico y carismático de Don Bosco y con la esperanza de dar una adecuada respuestas a niños y jóvenes de hoy.</p>
            </div>
            <div class="container">
                <figure>
                    <img src="/img/pastoral/n-mision.png" alt="Misión">
                </figure>
            </div>
        </div>
        <div class="conjunto">
            <div class="container">
                <figure>
                    <img src="/img/pastoral/n-vision.png" alt="Visión">
                </figure>
            </div>
            <div class="container">
                <h2>NUESTRA VISIÓN</h2>
                <p>Pretendemos ser una escuela inclusiva que acoge a todos y cada uno de nuestros alumnos, con un talante basado en la cercanía y en la creación de un ambiente educativo rico en valores evangélicos al estilo del Sistema Preventivo de Don Bosco.</p>
                <br>
                <p>Buscamos una educación integral que ayuda a crecer como persona y como cristiano soñando un mundo mejor.</p>
                <br>
                <p>Favorecemos una escuela a tiempo completo: tiempo libre educativo y conciliación familiar.</p>
                <br>
                <p>Apostamos por la innovación pedagógica: las nuevas metodologías, el plurilingüismo y las tecnologías como instrumentos pedagógicos.</p>
                <br>
                <p>Avalamos el protagonismo del alumnado en el proceso de enseñanza-aprendizaje, y aspiramos desde el sentido crítico a la construcción de un mundo mejor.</p>
            </div>
        </div>
        <div class="conjunto">
            <div class="container">
                <h2>NUESTROS VALORES</h2>
                <p>Somos educadores comprometidos con el dersarrollo de los valores propios de nuestro patrimonio educativo.</p>
                <ul>
                    <li>Somos educadores comprometidos con el dersarrollo de los valores propios de nuestro patrimonio educativo.</li>
                    <li>Confianza en los jóvenes.</li>
                    <li>Atención preferencial a los más necesitados.</li>
                    <li>Respeto a la vida.</li>
                    <li>Esfuerzo como instrumento de crecimiento.</li>
                    <li>Construcción de un mundo más solidario justo y pacífico.</li>
                    <li>Apertura a Dios.</li>
                </ul>
            </div>
            <div class="container">
                <figure>
                    <img src="/img/pastoral/n-valores.png" alt="Valores">
                </figure>
            </div>
        </div>
    </section>
</main>
<style>
    @font-face {
        font-family: "Decima Nova Pro";
        src: url("/fonts/DecimaNovaPro.otf");
    }
    *{
        font-family: "Decima Nova Pro", sans-serif;
    }
    .fondo{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-image: url("/img/escuela/excelencia/textura1.jpg");
        background-size: cover;
        background-position: left;
        background-repeat: no-repeat;
        z-index: -1;
    }
    .titulo{
        height: 250px;
        color: white;
        text-align: center;
    }
    .titulo h1{
        font-size: 5em;
        line-height: 3em;
    }
    .contenido{
        position: relative;
        top: 0;
        left: 0;
        background-color: #d9d9d9;
        width: 100%;
        height: 100%;
    }
    .conjunto{
        display: flex;
        justify-content: center;
    }
    .container{
        width: 50%;
        margin: 60px;
    }
    .container h2{
        text-align: center;
        font-size: 3em;
        font-weight: lighter;
        margin-bottom: 20px;
    }
    .container figure{
        position: relative;
        top: 0;
        left: 0;
        text-align: center;
        margin-bottom: 30px;
        font-size: 1.5em;
        margin-top: 15%;
    }
    figure img{
        height: 100%;
    }
    .container:nth-of-type(1) figure{
        margin-top: calc(50% - 250px);
    }
    .container>p,.container>ul{
        font-size: 2em;
    }
    .container ul{
        margin: 30px;
    }
</style>