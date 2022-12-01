<script>
    import '../styles/form.css'
    let clave = "6aab494f-e54d-4505-bcd9-feec7675787b"
</script>
<div class="form">
    <form action="https://api.staticforms.xyz/submit" method="post">
        <input type="hidden" name="accessKey" value="{clave}">
        <label for="email">Email del remitente</label> <br>
        <input type="text" name="email" id="email" required> <br>
        <label for="message">Texto de consulta</label> <br>
        <textarea name="message" id="message" cols="30" rows="1" required="required"></textarea> <br>
        <input type="hidden" name="redirectTo" value="https://svelte-project-tomas-man.vercel.app/">
        <button value="Submit">ENVIAR CONSULTA</button>
    </form>
</div>