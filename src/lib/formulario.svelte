<script>
    let clave = "0085b7dd-7b70-452f-a1cc-3953f02a2467"
</script>
<div class="form">
    <form action="https://api.staticforms.xyz/submit" method="post">
        <input type="hidden" name="accessKey" value="{clave}">
        <label for="email">Email del remitente</label> <br>
        <input type="text" name="email" id="email" required> <br>
        <label for="message">Texto de consulta</label> <br>
        <textarea name="message" id="message" cols="30" rows="1" required="required"></textarea> <br>
        <input type="hidden" name="redirectTo" value="https://sveltekit-tomasmanz.vercel.app/">
        <button value="Submit">ENVIAR CONSULTA</button>
    </form>
</div>
<style>
    @font-face {
        font-family: "Decima Nova Pro";
        src: url("/fonts/DecimaNovaPro.otf");
    }
    form,button,input,textarea{
        font-family: 'Decima Nova Pro',sans-serif;
    }
    label{
        color: #dad4cb;
    }
    input,textarea,button{
        width: 100%;
        margin: 20px 0;
        background-color: #d9d9d9;
        border-radius: 3px;
        border: none;
        font-size: 1em;
    }
    input{
        font-size: 1em;
        width: calc(100% - 0.3em);
        padding: 0.3em;
    }
    textarea{
        width: calc(100% - 0.3em);
        height: 300px;
        padding: 0.3em;
    }
    input:focus,textarea:focus{
        background-color: white;
        outline: none;
    }
    button{
        color: #d9d9d9;
        background-color: #616161;
        width: 100%;
        height: 3em;
        transition: background-color 1s;
    }
    button:hover{
        transition: background-color 1s;
        background-color: #484ca2;
    }
</style>