<script>
    import Cabecera from '../lib/cabecera.svelte'
    import Footer from '../lib/footer.svelte'
    window.document.title = 'Salesianos Villamuriel';
</script>
<Cabecera />
<main>
    <!-- Aquí va el contenido de la página -->
    <slot />
</main>
<Footer />
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
