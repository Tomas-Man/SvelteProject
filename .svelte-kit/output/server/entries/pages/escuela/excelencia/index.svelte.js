import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-ff6ac367.js";
import Erasmus from "../erasmus/index.svelte.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.fondo.svelte-1i3n6v3{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/escuela/excelencia/textura1.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1}',
  map: null
};
const Excelencia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Erasmus, "Escuela").$$render($$result, {}, {}, {
    slotContenidoDcha: () => {
      return `<div slot="${"slotContenidoDcha"}" class="${"contDcha"}"><div class="${"contExcel"}"><figure><img src="${"/img/escuela/excelencia/fp-excelencia.jpg"}" alt="${"Excelencia"}"></figure></div></div>`;
    },
    slotContenidoIzq: () => {
      return `<div slot="${"slotContenidoIzq"}" class="${"contIzq"}"><p>La Junta de Castilla y Le\xF3n nos ha reconocido como centro de excelencia de alto nivel en su orden de 13 de Octubre de 2020.</p>
        <br>
        <p>Este reconocimiento supone un espaldarazo a nuerstra labor por intentar hacer de nuestro centro un centro especial y nos motiva a continuar en los a\xF1os venideros por este camino.</p></div>`;
    },
    slotTituloEsc: () => {
      return `<div slot="${"slotTituloEsc"}" class="${"tituloEsc"}"><h1>Somos centro de excelencia de alto nivel</h1>
        <h2>El reconocimiento m\xE1s alto como centro de excelencia en FP</h2></div>`;
    },
    slotFondo: () => {
      return `<div slot="${"slotFondo"}" class="${"fondo svelte-1i3n6v3"}"></div>`;
    }
  })}`;
});
export { Excelencia as default };
