<script>
    let fichaMerito1 = [
        {src: "/img/meritos/tic5.png", alt: "TIC 5", descr: "Máxima certificación en TIC"},
        {src: "/img/meritos/dual.svg", alt: "FP Dual", descr: "Programa dual escuela/empresa", ruta: "../escuela/fp-dual"}
    ]
    let fichaMerito2 = [
        {src: "/img/meritos/erasmus-plus.png", alt: "Erasmus Plus", descr: "", ruta: "../escuela/erasmus"},
        {src: "/img/meritos/excelencia.svg", alt: "Centro de Excelencia de Alto Nivel", descr: "Cerifiación más alta comocentro de excelencia en FP", ruta: "../escuela/excelencia"}
    ]
</script>
<div class="contFichaMerito">
    {#each fichaMerito1 as fichaM1}
        <div class="filaFichasM">
            <div class="fichaMerito" on:click={() => {window.location.href=fichaM1.ruta}}>
              <div class="imgM">
                  <img src={fichaM1.src} alt={fichaM1.alt}>
              </div>
              <div class="textoMerito">
                 <h2>{fichaM1.alt}</h2> <br>
                 <p>{fichaM1.descr}</p>
              </div>
          </div>
        </div>
    {/each}
</div>
<div class="contFichaMerito">
    {#each fichaMerito2 as fichaM2}
        <div class="filaFichasM">
            <div class="fichaMerito" on:click={() => {(window.location.href=fichaM2.ruta)}}>
              <div class="imgM">
                  <img src={fichaM2.src} alt={fichaM2.alt}>
              </div>
              <div class="textoMerito">
                 <h2>{fichaM2.alt}</h2> <br>
                 <p>{fichaM2.descr}</p>
              </div>
            </div>
        </div>
    {/each}
</div>
<style>
    .contFichaMerito{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 50px;
    }
    .filaFichasM{
        display: flex;
        align-items: center;
    }
    .fichaMerito{
        width: 400px;
        background-color: rgb(255,255,255);
        opacity: 0.8;
        border-radius: 15px;
        margin: 0 15px;
        transition: opacity 500ms;
        color: #4a8089;
    }
    .fichaMerito:hover{
        opacity: 1;
        cursor: pointer;
    }
    .imgM>img{
        width: calc(100% - 40px);
        margin: 20px 20px 0;

        border-radius: 10px 10px 0 0 ;
    }
    .textoMerito{
        margin: 0 20px 20px;
        text-align: center;
    }
</style>