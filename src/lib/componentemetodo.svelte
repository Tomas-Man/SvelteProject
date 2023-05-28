<h1>¿QUIÉNES SOMOS?</h1>
<div class="filaMetodo">
    <div class="metodoIzq">
        <p>Eliminamos la barrera profesorr/alumno<br>Nos adelantamos a los problemas<br>Siempre estamos disponibles</p>
        <img src="/img/indeximg/cercanos.jpg" alt="Cercanos">
    </div>
    <div class="metodoDcha">
        <img src="/img/indeximg/motivados.jpg" alt="Motivados">
        <p>Somos un equipo ilusionado<br>Rebosantes de entusiasmo<br>Creemos en lo que hacemos</p>
    </div>
</div>
<div class="filaMetodo">
    <div class="metodoIzq">
        <p>Aplicamos metodologías activas<br>Usamos la tecnología en nuestro provecho<br>Aplicamos las mejores técnicas de enseñanza</p>
        <img src="/img/indeximg/innovadores.jpg" alt="Innovadores">
    </div>
    <div class="metodoDcha">
        <img src="/img/indeximg/implicados.jpg" alt="Implicados">
        <p>Creemos en lo que hacemos<br>Comprometidos a todos los niveles<br>Educamos en valores</p>
    </div>
</div>
<div class="vermasmetodo" on:click={() => {(location='/privacidad')}}>
    <p>VER MÁS SOBRE NUESTRO MÉTODO EDUCATIVO</p>
</div>

<style>
    .vermasmetodo:hover{
        background-color: #6d819a;
        cursor: pointer;
    }
    .metodo>h1{
        text-align: center;
        position: relative;
        color: #51626f;
        font-size: 4em;
        font-weight: lighter;
        line-height: 2em;
    }
    .filaMetodo{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .metodoIzq, .metodoDcha{
        display: flex;
        align-items: center;
    }
    .metodoIzq{
        text-align: right;
    }
    .filaMetodo img{
        width: 150px;
        height: 150px;
        margin: 30px;
    }
    .vermasmetodo{
        position: relative;
        left: calc(50% - 350px);
        width: 700px;
        background-color: #51626f;
        text-align: center;
        border-radius: 10px;
        font-size: 2em;
        line-height: 2em;
        margin: 1em 0 2em ;
        color: white;
    }
</style>