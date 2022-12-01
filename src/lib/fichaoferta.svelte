<script>
    let GM = "FP Grado Medio";
    const ficha1 = [
        {src: "/img/estudios/eso.jpg", alt: "ESO", ruta: "../estudios/eso", tipo:"ESO", nombre:"Educación Secundaria Obligatoria"},
        {src: "/img/estudios/fpb.jpg", alt: "Mantenimiento"+"de"+"vehículos", ruta: "../estudios/mantenimiento", tipo:"FP Básica", nombre:"Mantenimiento de vehículos"},
        {src: "/img/estudios/electromecanica.jpg", alt: "Electromecánica de vehículos", ruta: "../estudios/electromecanica", tipo:GM, nombre:"Electromecánica de vehículos"},
        ];
    const ficha2 = [
        {src: "/img/estudios/carroceria.jpg", alt: "Carrocería", ruta: "../estudios/carroceria", tipo: GM, nombre:"Carrocería"},
        {src: "/img/estudios/teleco.jpg", alt: "Telecomunicaciones", ruta: "../estudios/telecomunicaciones", tipo: GM, nombre:"Telecomunicaciones"},
        {src: "/img/estudios/asir.jpg", alt: "ASIR", ruta: "../estudios/asir", tipo:"Grado Superior", nombre:"ASIR"}
    ];
</script>
<div class="contFichas">
{#each ficha1 as ficha}
    <div class="filaFichas">
        <div class="card" on:click={() => {(location=ficha.ruta)}}>
            <img src="{ficha.src}" alt={ficha.alt}>
            <div class="nombreOferta">
                <h2>{ficha.tipo}</h2>
                <h3>{ficha.nombre}</h3>
            </div>
        </div>
    </div>
{/each}
</div>
<div class="contFichas">
{#each ficha2 as ficha}
    <div class="filaFichas">
        <div class="card" on:click={() => {(location=ficha.ruta)}}>
            <img src="{ficha.src}" alt={ficha.alt}>
            <div class="nombreOferta">
                <h2>{ficha.tipo}</h2>
                <h3>{ficha.nombre}</h3>
            </div>
        </div>
    </div>
{/each}
</div>

<style>
    .contFichas{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px;
    }
    .filaFichas{
        display: flex;
        align-items: center;
    }
    .card{
        width: 350px;
        height: 360px;
        background-color: rgb(255,255,255);
        opacity: 0.8;
        border-radius: 15px;
        margin: 0 15px;
        transition: opacity 500ms;
        color: #4a8089;
    }
    .card:hover{
        opacity: 1;
        cursor: pointer;
    }
    .card>img{
        width: 310px;
        margin: 20px;
        border-radius: 10px 10px 0 0 ;
    }
    .nombreOferta{
        margin: 0 20px;
        text-align: center;
    }
    .nombreOferta>h2{
        font-size: 2em;
        font-weight: lighter;
    }
    .nombreOferta>h3{
        margin-top: 0.5em;
        line-height: 1.5em;
        font-weight: lighter;
        font-size: 1.3em;
    }
</style>
