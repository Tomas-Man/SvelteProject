<div class="tituloramas">
    <slot id="title"></slot>
</div>

<div class="descrip">
    <slot name="nomb"></slot>
</div>
<!--
<div class="imagenes"></div>
<div class="modulos"></div>
-->
<style>
    .tituloramas{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 50vh;
        text-align: center;
        color: white;
        /*background-color: grey;*/
    }
    .descrip{
        position: Relative;
        left: 0;
        top: 0;
        width: 100%;
        height: 50vh;
        text-align: left;
        color: red;
        /*background-color: cyan;
    */}
</style>