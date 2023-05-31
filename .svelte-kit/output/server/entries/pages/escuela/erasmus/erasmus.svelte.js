import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-ff6ac367.js";
import { E as Escuela } from "../../../../chunks/escuela-cab92d7d.js";
import { T as Titulo } from "../../../../chunks/titulo-a7a08935.js";
var erasmus_svelte_svelte_type_style_lang = "";
const css = {
  code: '.fondo.svelte-35y2we.svelte-35y2we{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/escuela/erasmus/europa.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1}h2.svelte-35y2we.svelte-35y2we{font-weight:lighter}.contIzq.svelte-35y2we a.svelte-35y2we{color:#4a8089}.contIzq.svelte-35y2we a.svelte-35y2we:hover{text-decoration:none;color:#75b3b7}.contIzq.svelte-35y2we.svelte-35y2we{position:relative;top:0;left:0;width:calc(50% - 200px);height:100%;margin:100px 100px 120px}h2.svelte-35y2we.svelte-35y2we{font-size:3em;font-weight:lighter;text-align:center;color:green}p.svelte-35y2we.svelte-35y2we{font-size:1.5em;margin-top:20px}.contDcha.svelte-35y2we.svelte-35y2we{position:relative;top:0;left:0;margin:40px 40px 40px 0}',
  map: null
};
const Erasmus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"fondo svelte-35y2we"}"></div>
${validate_component(Titulo, "Titulo").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>Servicio Erasmus+</h1>
    <h2 class="${"svelte-35y2we"}">Fomento de la educaci\xF3n en Europa</h2>`;
    }
  })}
${validate_component(Escuela, "Escuela").$$render($$result, {}, {}, {
    slotContDcha: () => {
      return `<div class="${"contDcha svelte-35y2we"}" slot="${"slotContDcha"}"><div class="${"excelenciaImg"}"><img src="${"/img/escuela/excelencia/FP_excelencia.jpeg"}" alt="${"Excelencia"}"></div></div>`;
    },
    slotContenidoIzq: () => {
      return `<div class="${"contIzq svelte-35y2we"}" slot="${"slotContenidoIzq"}"><h2 class="${"svelte-35y2we"}">\xBFQu\xE9 es Erasmus+?</h2>
        <br>
        <p class="${"svelte-35y2we"}">El <a href="${"http://sepie.es/"}" class="${"svelte-35y2we"}">Servicio Espa\xF1ol para la Internacionalizaci\xF3n de la Educaci\xF3n</a> nos concede
            para este curso el programa<a href="${"https://erasmus-plus.ec.europa.eu/es"}" class="${"svelte-35y2we"}">ErasmusPlus</a>, el programa de la
            Uni\xF3n Europea para apoyar la educaci\xF3n, la formaci\xF3n, la juventud y el deporte en Europa.</p></div>`;
    }
  })}`;
});
export { Erasmus as default };
