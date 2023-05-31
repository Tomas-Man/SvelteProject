import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-ff6ac367.js";
import { T as Titulo } from "../../../../chunks/titulo-a7a08935.js";
import { E as Escuela } from "../../../../chunks/escuela-cab92d7d.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h2.svelte-1vq7gtx.svelte-1vq7gtx{font-weight:lighter}.fondo.svelte-1vq7gtx.svelte-1vq7gtx{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/escuela/excelencia/textura1.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1}figure.svelte-1vq7gtx img.svelte-1vq7gtx{width:calc(50vw - 300px);margin-left:100px;border-radius:17px}',
  map: null
};
const Excelencia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"fondo svelte-1vq7gtx"}"></div>
${validate_component(Titulo, "Titulo").$$render($$result, {}, {}, {
    tituloH2: () => {
      return `<h2 slot="${"tituloH2"}" class="${"svelte-1vq7gtx"}">El reconocimiento m\xE1s alto como centro de excelencia en FP</h2>`;
    },
    tituloH1: () => {
      return `<h1 slot="${"tituloH1"}">Somos centro de excelencia de alto nivel</h1>`;
    }
  })}
${validate_component(Escuela, "Escuela").$$render($$result, {}, {}, {
    contDcha: () => {
      return `<div slot="${"contDcha"}"><figure class="${"svelte-1vq7gtx"}"><img src="${"/img/escuela/excelencia/fp-excelencia.jpg"}" alt="${"Excelencia"}" class="${"svelte-1vq7gtx"}"></figure></div>`;
    },
    slotp2: () => {
      return `<p slot="${"slotp2"}">Este reconocimiento supone un espaldarazo a nuerstra labor por intentar hacer de nuestro centro un
        centro especial y nos motiva a continuar en los a\xF1os venideros por este camino.</p>`;
    },
    slotp: () => {
      return `<p slot="${"slotp"}">La Junta de Castilla y Le\xF3n nos ha reconocido como centro de excelencia de alto nivel en su orden de
        13 de Octubre de 2020.</p>`;
    },
    default: () => {
      return `<br>`;
    }
  })}`;
});
export { Excelencia as default };
