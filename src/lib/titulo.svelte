<section class="titulo">
    <slot name="tituloText">
        <h1></h1>
        <h2></h2>
    </slot>
</section>
<style>
    .titulo{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 60vh;
        text-align: center;
        display: grid;
        align-items: center;
        color: white;
    }
    .titulo h1{
        font-size: 6em;
        letter-spacing: .05em;
    }
    .titulo h2{
        font-size: 3em;
        font-weight: lighter;
        line-height: 4em;
    }
</style>