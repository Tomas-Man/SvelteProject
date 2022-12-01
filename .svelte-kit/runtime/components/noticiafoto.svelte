<script>
    import '../../../src/styles/noticiafoto.css'
</script>
<section class="contMain">
    <div class="contTitulo">
        <slot name="tituloN"></slot>
    </div>
    <div class="contNot">
        <div class="contNoticia">
            <slot name="textoN"></slot>
        </div>
        <div class="contFotoN">
            <slot name="fotoN"></slot>
        </div>
    </div>
    <slot name="tabla"></slot>
</section>
