import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-ff6ac367.js";
import { T as Titulo } from "../../../../chunks/titulo-a7a08935.js";
import { E as Escuela } from "../../../../chunks/escuela-cab92d7d.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:"Decima Nova Pro";src:url("/fonts/DecimaNovaPro.otf")}h2.svelte-y12vb9.svelte-y12vb9{font-weight:lighter}.svelte-y12vb9.svelte-y12vb9{font-family:"Decima Nova Pro", sans-serif}.fondo.svelte-y12vb9.svelte-y12vb9{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/escuela/erasmus/europa.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1}p.svelte-y12vb9 a.svelte-y12vb9{color:#4a8089;text-decoration:none}p.svelte-y12vb9 a.svelte-y12vb9:hover{text-decoration:none;color:#75b3b7}figure.svelte-y12vb9 img.svelte-y12vb9{width:calc(50vw - 80px)}',
  map: null
};
const Erasmus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"fondo svelte-y12vb9"}"></div>
${validate_component(Titulo, "Titulo").$$render($$result, {}, {}, {
    tituloH2: () => {
      return `<h2 slot="${"tituloH2"}" class="${"svelte-y12vb9"}">Fomento de la educaci\xF3n Europea</h2>`;
    },
    tituloH1: () => {
      return `<h1 slot="${"tituloH1"}" class="${"svelte-y12vb9"}">Servicio de Erasmus +</h1>`;
    }
  })}
${validate_component(Escuela, "Escuela").$$render($$result, {}, {}, {
    contDcha: () => {
      return `<div slot="${"contDcha"}" class="${"svelte-y12vb9"}"><figure class="${"svelte-y12vb9"}"><img src="${"/img/escuela/erasmus/erasmus_SEPIe.jpeg"}" alt="${"Erasmus"}" class="${"svelte-y12vb9"}"></figure></div>`;
    },
    slotp: () => {
      return `<p slot="${"slotp"}" class="${"svelte-y12vb9"}">El <a href="${"http://sepie.es/"}" class="${"svelte-y12vb9"}">Servicio Espa\xF1ol para la Internacionalizaci\xF3n de la Educaci\xF3n</a> nos
        concede para este curso el programa <a href="${"https://erasmus-plus.ec.europa.eu/es"}" class="${"svelte-y12vb9"}">ErasmusPlus</a>, el programa
        de la Uni\xF3n Europea para apoyar la educaci\xF3n, la formaci\xF3n, la juventud y el deporte en Europa.</p>`;
    },
    slotH2: () => {
      return `<h2 slot="${"slotH2"}" class="${"svelte-y12vb9"}">\xBFQu\xE9 es Erasmus+?</h2>`;
    },
    default: () => {
      return `<br class="${"svelte-y12vb9"}">`;
    }
  })}`;
});
export { Erasmus as default };
