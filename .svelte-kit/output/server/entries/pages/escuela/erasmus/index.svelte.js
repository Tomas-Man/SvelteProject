import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-ff6ac367.js";
var escuela = "";
var titulo_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".titulo.svelte-wku1mf{position:relative;top:0;left:0;width:100%;height:50vh}h1.svelte-wku1mf{font-size:3em;color:white;display:grid;place-items:center}h2.svelte-wku1mf{font-size:3em;color:white;display:grid;place-items:center;font-weight:lighter}",
  map: null
};
const Titulo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="${"titulo svelte-wku1mf"}"><h1 class="${"svelte-wku1mf"}"></h1>
    <h2 class="${"svelte-wku1mf"}"></h2>
</section>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.fondo.svelte-3v23o4{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/escuela/erasmus/europa.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1}',
  map: null
};
const Erasmus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main>${slots.slotFondo ? slots.slotFondo({}) : `
        <div class="${"fondo svelte-3v23o4"}"></div>
    `}
    ${validate_component(Titulo, "Titulo").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>Servicio de Erasmus +</h1>
        <h2>Fomento de la educaci\xF3n Europea</h2>`;
    }
  })}
    
    <section class="${"contenidoEscuela"}">${slots.slotContenidoIzq ? slots.slotContenidoIzq({}) : `
            <div class="${"contIzq"}"><h2>\xBFQu\xE9 es Erasmus+?</h2>
                <br>
                <p>El <a href="${"http://sepie.es/"}">Servicio Espa\xF1ol para la Internacionalizaci\xF3n de la Educaci\xF3n</a> nos concede para este curso el programa <a href="${"https://erasmus-plus.ec.europa.eu/es"}">ErasmusPlus</a>, el programa de la Uni\xF3n Europea para apoyar la educaci\xF3n, la formaci\xF3n, la juventud y el deporte en Europa.</p></div>
        `}
        ${slots.slotContenidoDcha ? slots.slotContenidoDcha({}) : `
            <div class="${"contDcha"}"><div class="${"contImg"}"><figure><img src="${"/img/escuela/erasmus/erasmus_SEPIe.jpeg"}" alt="${"Erasmus"}"></figure></div></div>
        `}</section>
</main>`;
});
export { Erasmus as default };
