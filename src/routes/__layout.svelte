<script>
    import Cabecera from './components/cabecera.svelte'
    import Footer from './components/footer.svelte'
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
