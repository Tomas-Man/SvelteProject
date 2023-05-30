
    <slot name="tituloText">
        <section class="tituloSlot">
        <h1></h1>
        <h2></h2>
        </section>
    </slot>

<style>
    .tituloSlot{
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
    h1{
        font-size: 6em;
        letter-spacing: .05em;
        color: pink;
    }
    h2{
        font-size: 3em;
        font-weight: lighter;
        line-height: 4em;
    }
</style>