<script>
    const servicios = [
        {src: "/img/servicios/educamos.png", alt: "Plataforma Educamos", desc: "Seguimineto de la actividad educativa", ruta: "https://sso2.educamos.com/Autenticacion/Acceder?ReturnUrl=%2fissue%2fwsfed%3fwa%3dwsignin1.0%26wtrealm%3dhttps%253a%252f%252fdonbosco-salesianos-villamurieldecerrato.educamos.com%252f%26wctx%3drm%253d0%2526id%253dpassive%2526ru%253d%25252f%26wct%3d2017-03-16T07%253a36%253a30Z&wa=wsignin1.0&wtrealm=https%3a%2f%2fdonbosco-salesianos-villamurieldecerrato.educamos.com%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252f&wct=2017-03-16T07%3a36%3a30Z"},
        {src: "/img/servicios/google-classroom.svg", alt: "Google Classroom", desc: "Plataforma de trabajo en la nube de Google", ruta: "https://classroom.google.com/?emr=0"},
        {src: "/img/servicios/teams.svg", alt: "Microsoft Teams", desc: "Aulas virtuales para la sección de FP", ruta: "https://teams.microsoft.com/"},
        {src: "/img/servicios/office.svg", alt: "Microsoft Office", desc: "Plataforma de trabajo en la nube de Microsoft", ruta: "https://www.office.com/login?es=Click&ru=%2F"},
        {src: "/img/servicios/casita.svg", alt: "Agencia de colocación", desc: "Búsqueda de empleo de la red Salesianos", ruta: "http://salesianosvillamuriel.redagenciadecolocacion.com/"}
    ]
</script>
<div class="fichasContenedor">
    {#each servicios as servicio}
        <div class="contFichasS" on:click={() => {(location=servicio.ruta)}}>
            <div class="fichasServicio">
                <div class="imgS">
                    <img src={servicio.src} alt={servicio.alt}>
                </div>
                <div class="plataforma">
                    <h2>{servicio.alt}</h2>
                    <p>{servicio.desc}</p>
                </div>
            </div>
        </div>
    {/each}
</div>
<style>
    .fichasContenedor{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        overflow: hidden;
    }
    .contFichasS{
        display: flex;
        align-items: center;
    }
    .fichasServicio{
        position: relative;
        width: 200px;
        height: 340px;
        background-color: white;
        opacity: 0.6;
        transition: opacity 500ms;
        border-radius: 15px;
        margin: 15px;
    }
    .fichasServicio:hover{
        opacity: 1;
        cursor: pointer;
    }
    .imgS>img{
        width: 160px;
        margin: 20px;
    }
    .plataforma{
        width: calc(100% - 40px);
        margin: 0 20px;
        text-align: center;

    }
    .plataforma>h2{
        text-transform: uppercase;
        margin-bottom: 10px;
        color: #4a8089;
        font-weight: lighter;
    }
</style>