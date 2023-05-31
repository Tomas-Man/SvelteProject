<script>
    import Titulo from '../../../../lib/tituloNoticia.svelte'
    import Contenido from '../../../../lib/escuela.svelte'
</script>
<div class="fondo"></div>
<Titulo>
    <h1 slot="tituloH1">Listados con las admisiones en ciclos de FP</h1>
    <h2 slot="tituloH2">Curso 2022/2023</h2>
</Titulo>
<Contenido>
    <p slot="slotp">Tenemos disponibles los listados con las admisiones (a fecha de 21 de Julio de 2022) en los ciclos de formación profesional</p>

        <h3 slot="1h3">Documento con la admisión en Ciclos Formativos de Grado Básico</h3>
        <h3 slot="2h3">Documento con la admisión en Ciclos Formativos de Grado Medio y Superior</h3>

</Contenido>
<style>
    h2{
        font-weight: lighter;
    }
</style>