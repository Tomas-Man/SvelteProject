<script>
    import '../../styles/form.css'
    let clave = "6aab494f-e54d-4505-bcd9-feec7675787b"
</script>
<div class="form">
    <form action="https://api.staticforms.xyz/submit" method="post">
        <input type="hidden" name="accessKey" value="{clave}">
        <label for="email">Email del remitente</label>
        <input type="text" name="email" id="email" required>
        <label for="mensaje">Texto de consulta</label>
        <textarea name="message" id="mensaje" required></textarea>
        <input type="hidden" name="redirectTo" value="https://svelte-project-tomas-man.vercel.app/">
        <button value="Submit">ENVIAR CONSULTA</button>
    </form>
</div>