<script>
    import Cabecera from '../lib/cabecera.svelte'
    import Footer from '../lib/footer.svelte'
</script>
<Cabecera />
<main>
    <!-- Aquí va el contenido de la página -->
    <slot />
</main>
<Footer />