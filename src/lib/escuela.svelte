<section class="contEscuela">
    <div class="contIzq">
        <h2><slot name="slotH2"></slot></h2>
        <br>
        <p><slot name="slotp"></slot></p>
        <p><slot name="slotp2"></slot></p>
    </div>
    <div class="contDcha">
        <div class="contImg">
            <slot name="contDcha">
                <h3><slot name="1h3"></slot></h3>
                <h3><slot name="2h3"></slot></h3>
                <figure><slot name="contImg"><img src="" alt=""></slot></figure>
            </slot>
        </div>
    </div>
</section>
<style>
    @font-face {
        font-family: "Decima Nova Pro";
        src: url("/fonts/DecimaNovaPro.otf");
    }
    *{
        font-family: "Decima Nova Pro", sans-serif;
        color: #2E2E2E;
    }
    .contEscuela{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #d9d9d9;
        display: flex;
    }
    .contIzq{
        position: relative;
        top: 0;
        left: 0;
        width: calc(50% - 200px);
        height: 100%;
        margin: 100px 100px 120px;
    }
    h2{
        font-size: 3em;
        font-weight: lighter;
        text-align: center;
    }
    p{
        font-size: 1.5em;
        margin-top: 20px;
    }
    h3{
        font-size: 2em;
    }
    .contDcha{
        position: relative;
        top: 0;
        left: 0;
        margin: 40px 40px 40px 0;
    }
    .contDcha>div{
        position: relative;
        top: 0;
    }
    .contImg img{
        width: calc(50vw - 80px);
    }
</style>