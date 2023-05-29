import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index-ff6ac367.js";
var global = "";
var cabecera_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: `@font-face{font-family:"Decima Nova Pro";src:url("/fonts/DecimaNovaPro.otf")}.cabecera.svelte-1szbuug.svelte-1szbuug.svelte-1szbuug{position:sticky;margin:0;top:0;left:0;width:100%;height:110px;background-color:white;font-family:'Decima Nova Pro', sans-serif;z-index:20}.contCabecera.svelte-1szbuug.svelte-1szbuug.svelte-1szbuug{position:relative;display:flex;justify-content:space-between;align-items:center;height:100%;background-color:white}#logoCabecera.svelte-1szbuug.svelte-1szbuug.svelte-1szbuug{display:block;padding:10px 8px 8px;width:580px;min-width:550px}#navCabecera.svelte-1szbuug.svelte-1szbuug.svelte-1szbuug{margin:0;padding:0;position:relative;top:0;right:0;display:block;width:450px;height:30px;font-size:20px}#navCabecera.svelte-1szbuug ul.svelte-1szbuug.svelte-1szbuug{margin:0;padding:0}.subnavCabecera.svelte-1szbuug.svelte-1szbuug.svelte-1szbuug{display:block;position:fixed;background-color:white;top:110px;left:50%;width:calc(50% - 20px);height:auto;min-height:65px;padding-top:10px;border-radius:0 0 7px 7px}.contSubnav.svelte-1szbuug.svelte-1szbuug.svelte-1szbuug{position:relative;top:0;left:0;height:auto;padding-bottom:20px}.contSubnav.svelte-1szbuug p.svelte-1szbuug.svelte-1szbuug{border-bottom:1px solid #dc001b;margin:20px 20px 15px 20px;color:darkgrey}.contSubnav.svelte-1szbuug>p.svelte-1szbuug.svelte-1szbuug:first-of-type{border-bottom:1px solid #dc001b;margin-right:70px}#liCorto.svelte-1szbuug.svelte-1szbuug.svelte-1szbuug{margin:.75em 75px 0 0}.contSubnav.svelte-1szbuug>ul.svelte-1szbuug>li.svelte-1szbuug{margin:2px 20px 2px 0;list-style:none;height:1.5em;line-height:1.7em;border-radius:7px;padding:5px 0 5px 8px}.cerrar.svelte-1szbuug.svelte-1szbuug.svelte-1szbuug{position:absolute;display:block;top:0;right:0;margin:10px 15px}.cerrar.svelte-1szbuug.svelte-1szbuug.svelte-1szbuug:hover{cursor:pointer}#navCabecera.svelte-1szbuug li.svelte-1szbuug.svelte-1szbuug{display:inline-block;padding:4px 6px;margin:0;transition:color 100ms;border-radius:7px}#navCabecera.svelte-1szbuug li.svelte-1szbuug.svelte-1szbuug:hover,.contSubnav.svelte-1szbuug>ul.svelte-1szbuug>li.svelte-1szbuug:hover{background-color:#dc001b;transition:100ms;color:white;cursor:pointer}a.svelte-1szbuug.svelte-1szbuug.svelte-1szbuug{text-decoration:none;color:black}`,
  map: null
};
const Cabecera = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `
<header class="${"cabecera svelte-1szbuug"}"><div class="${"contCabecera svelte-1szbuug"}"><div id="${"logoCabecera"}" class="${"svelte-1szbuug"}"><a href="${"/"}" class="${"svelte-1szbuug"}"><img src="${"/img/logo-grande.svg"}" alt="${"Logo"}"></a></div>
        <nav id="${"navCabecera"}" class="${"svelte-1szbuug"}"><ul class="${"svelte-1szbuug"}">
                <li class="${"svelte-1szbuug"}">ESTUDIOS</li>
                <li class="${"svelte-1szbuug"}">CENTRO</li>
                <li class="${"svelte-1szbuug"}">SERVICIOS</li>
                <li class="${"svelte-1szbuug"}">NOTICIAS</li></ul></nav>
        
        ${``}
        ${``}
        ${``}
        ${``}</div>
</header>`;
});
var formulario_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `@font-face{font-family:"Decima Nova Pro";src:url("/fonts/DecimaNovaPro.otf")}form.svelte-23k9la,button.svelte-23k9la,input.svelte-23k9la,textarea.svelte-23k9la{font-family:'Decima Nova Pro',sans-serif}label.svelte-23k9la{color:#dad4cb}input.svelte-23k9la,textarea.svelte-23k9la,button.svelte-23k9la{width:100%;margin:20px 0;background-color:#d9d9d9;border-radius:3px;border:none;font-size:1em}input.svelte-23k9la{font-size:1em;width:calc(100% - 0.3em);padding:0.3em}textarea.svelte-23k9la{width:calc(100% - 0.3em);height:300px;padding:0.3em}input.svelte-23k9la:focus,textarea.svelte-23k9la:focus{background-color:white;outline:none}button.svelte-23k9la{color:#d9d9d9;background-color:#616161;width:100%;height:3em;transition:background-color 1s}button.svelte-23k9la:hover{transition:background-color 1s;background-color:#484ca2}`,
  map: null
};
let clave = "0085b7dd-7b70-452f-a1cc-3953f02a2467";
const Formulario = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"form"}"><form action="${"https://api.staticforms.xyz/submit"}" method="${"post"}" class="${"svelte-23k9la"}"><input type="${"hidden"}" name="${"accessKey"}"${add_attribute("value", clave, 0)} class="${"svelte-23k9la"}">
        <label for="${"email"}" class="${"svelte-23k9la"}">Email del remitente</label> <br>
        <input type="${"text"}" name="${"email"}" id="${"email"}" required class="${"svelte-23k9la"}"> <br>
        <label for="${"message"}" class="${"svelte-23k9la"}">Texto de consulta</label> <br>
        <textarea name="${"message"}" id="${"message"}" cols="${"30"}" rows="${"1"}" required="${"required"}" class="${"svelte-23k9la"}"></textarea> <br>
        <input type="${"hidden"}" name="${"redirectTo"}" value="${"https://sveltekit-tomasmanz.vercel.app/"}" class="${"svelte-23k9la"}">
        <button value="${"Submit"}" class="${"svelte-23k9la"}">ENVIAR CONSULTA</button></form>
</div>`;
});
var footer_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:"Decima Nova Pro";src:url("/fonts/DecimaNovaPro.otf")}@font-face{font-family:"Decima Nova Pro Light";src:url("/fonts/DecimaNovaProLight.otf")}footer.svelte-1io3t8q.svelte-1io3t8q{font-family:"Decima Nova Pro", sans-serif;position:relative;bottom:0;left:0;width:100%;height:120vh;background-color:#2E2E2E;font-size:1.3em}footer.svelte-1io3t8q h1.svelte-1io3t8q{font-family:"Decima Nova Pro Light", sans-serif;color:white}footer.svelte-1io3t8q p.svelte-1io3t8q{color:#dad4cb}a.svelte-1io3t8q.svelte-1io3t8q{color:white}a.svelte-1io3t8q.svelte-1io3t8q:hover{text-decoration:underline}.contentFooter.svelte-1io3t8q.svelte-1io3t8q{position:relative;width:calc(100% - 2em);padding-top:2em;display:inline-flex;justify-content:center}.contFooter.svelte-1io3t8q.svelte-1io3t8q{display:inline-block;text-align:left;min-width:400px;max-width:700px;margin-left:2.5em}.googlemaps.svelte-1io3t8q.svelte-1io3t8q{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#d9d9d9;z-index:2;opacity:0;text-align:center;border-radius:5px;transition:opacity 1s}.googlemaps.svelte-1io3t8q>p.svelte-1io3t8q{margin-top:100px;color:#2E2E2E;line-height:2em;font-size:1.2em}.googlemaps.svelte-1io3t8q.svelte-1io3t8q:hover{transition:1s;opacity:.7}.mapa.svelte-1io3t8q.svelte-1io3t8q{display:block;position:relative;top:0;left:0;width:400px;height:285px;transition:1s}.mapa.svelte-1io3t8q>img.svelte-1io3t8q{width:400px;z-index:-1;transition:2s;background-color:#d9d9d9;border-radius:5px}#lineaForm.svelte-1io3t8q.svelte-1io3t8q{padding-bottom:1em;border-bottom:1px solid white}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-1io3t8q"}"><div class="${"contentFooter svelte-1io3t8q"}"><div class="${"contFooter svelte-1io3t8q"}"><h1 class="${"svelte-1io3t8q"}">CONTACTO</h1>
            <br>
            <p class="${"svelte-1io3t8q"}">Pasaje Don Bosco 1,<br>
                34190, Villamuriel de Cerrato<br>
                Tlfno: <a href="${"tel:979777270"}" class="${"svelte-1io3t8q"}">979 77 72 70</a><br>
                <a href="${"mailto:direccioncolegio@salesianosvillamuriel.com"}" class="${"svelte-1io3t8q"}">direccioncolegio@salesianosvillamuriel.com</a></p>
            <br>
            <p class="${"svelte-1io3t8q"}">Horario de atenci\xF3n: De 9:00 a 14:00</p>
            <br>
            <div class="${"mapa svelte-1io3t8q"}"><a href="${"https://goo.gl/maps/dTQNZjREAZymheM77"}" class="${"svelte-1io3t8q"}"><div class="${"googlemaps svelte-1io3t8q"}"><p class="${"svelte-1io3t8q"}"><strong>Haz click aqu\xED para ver la ubicaci\xF3n en <br>Google Maps</strong></p></div></a>
                <img src="${"/img/mapa.jpg"}" alt="${"Mapa"}" class="${"svelte-1io3t8q"}"></div></div>
        <div class="${"contFooter svelte-1io3t8q"}"><h1 class="${"svelte-1io3t8q"}">PEDIR INFORMACI\xD3N</h1>
            <br>
            <p id="${"lineaForm"}" class="${"svelte-1io3t8q"}">Si deseas informaci\xF3n o nos quieres consultar algo, puedes utilizar este formulario.
            Por favor, indica un email v\xE1lido para que la respuesta se env\xEDe correctamente (<a href="${"/privacidad"}" class="${"svelte-1io3t8q"}">leer nuestra pol\xEDtica de privacidad</a>)</p>
            <br>
            ${validate_component(Formulario, "Form").$$render($$result, {}, {}, {})}</div></div>
</footer>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Cabecera, "Cabecera").$$render($$result, {}, {}, {})}
<main>
    ${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
