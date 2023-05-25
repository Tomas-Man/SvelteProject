import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index-ff6ac367.js";
var global = "";
var cabecera = "";
const Cabecera = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<header class="${"cabecera"}"><div class="${"contCabecera"}"><div id="${"logoCabecera"}"><a href="${"/"}"><img src="${"/img/logo-grande.svg"}" alt="${"Logo"}"></a></div>
        <nav id="${"navCabecera"}"><ul>
                <li>ESTUDIOS</li>
                <li>CENTRO</li>
                <li>SERVICIOS</li>
                <li>NOTICIAS</li></ul></nav>
        
        ${``}
        ${``}
        ${``}
        ${``}</div></header>`;
});
var footer = "";
var form = "";
let clave = "6aab494f-e54d-4505-bcd9-feec7675787b";
const Formulario = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"form"}"><form action="${"https://api.staticforms.xyz/submit"}" method="${"post"}"><input type="${"hidden"}" name="${"accessKey"}"${add_attribute("value", clave, 0)}>
        <label for="${"email"}">Email del remitente</label> <br>
        <input type="${"text"}" name="${"email"}" id="${"email"}" required> <br>
        <label for="${"message"}">Texto de consulta</label> <br>
        <textarea name="${"message"}" id="${"message"}" cols="${"30"}" rows="${"1"}" required="${"required"}"></textarea> <br>
        <input type="${"hidden"}" name="${"redirectTo"}" value="${"https://svelte-project-tomas-man.vercel.app/"}">
        <button value="${"Submit"}">ENVIAR CONSULTA</button></form></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer><div class="${"contentFooter"}"><div class="${"contFooter"}"><h1>CONTACTO</h1>
            <br>
            <p>Pasaje Don Bosco 1,<br>
                34190, Villamuriel de Cerrato<br>
                Tlfno: <a href="${"tel:979777270"}">979 77 72 70</a><br>
                <a href="${"mailto:direccioncolegio@salesianosvillamuriel.com"}">direccioncolegio@salesianosvillamuriel.com</a></p>
            <br>
            <p>Horario de atenci\xF3n: De 9:00 a 14:00</p>
            <br>
            <div class="${"mapa"}"><a href="${"https://goo.gl/maps/dTQNZjREAZymheM77"}"><div class="${"googlemaps"}"><p><strong>Haz click aqu\xED para ver la ubicaci\xF3n en <br>Google Maps</strong></p></div></a>
                <img src="${"/img/mapa.jpg"}" alt="${"Mapa"}"></div></div>
        <div class="${"contFooter"}"><h1>PEDIR INFORMACI\xD3N</h1>
            <br>
            <p id="${"lineaForm"}">Si deseas informaci\xF3n o nos quieres consultar algo, puedes utilizar este formulario.
            Por favor, indica un email v\xE1lido para que la respuesta se env\xEDe correctamente (<a href="${"/privacidad"}">leer nuestra pol\xEDtica de privacidad</a>)</p>
            <br>
            ${validate_component(Formulario, "Form").$$render($$result, {}, {}, {})}</div></div></footer>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width: 640px){main.svelte-1mqdaco{max-width:none}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Cabecera, "Cabecera").$$render($$result, {}, {}, {})}
<main class="${"svelte-1mqdaco"}">
    ${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
