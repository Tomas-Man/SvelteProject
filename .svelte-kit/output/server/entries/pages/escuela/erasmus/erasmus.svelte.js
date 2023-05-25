import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-ff6ac367.js";
import Erasmus$1 from "./index.svelte.js";
const Erasmus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Erasmus$1, "Escuela").$$render($$result, {}, {}, {
    slotContenidoDcha: () => {
      return `<div slot="${"slotContenidoDcha"}" class="${"contDcha"}"><div class="${"excelenciaImg"}"><figure><img src="${"/img/escuela/excelencia/FP_excelencia.jpeg"}" alt="${"Excelencia"}"></figure></div></div>`;
    },
    slotContenidoIzq: () => {
      return `<div slot="${"slotContenidoIzq"}" class="${"contIzq"}"><h2>\xBFQu\xE9 es Erasmus+?</h2>
        <br>
        <p>El <a href="${"http://sepie.es/"}">Servicio Espa\xF1ol para la Internacionalizaci\xF3n de la Educaci\xF3n</a> nos concede para este curso el programa<a href="${"https://erasmus-plus.ec.europa.eu/es"}">ErasmusPlus</a>, el programa de la Uni\xF3n Europea para apoyar la educaci\xF3n, la formaci\xF3n, la juventud y el deporte en Europa.</p></div>`;
    },
    slotTituloEsc: () => {
      return `<div slot="${"slotTituloEsc"}" class="${"tituloEsc"}"><h1>Servicio Erasmus+</h1>
        <h2>Fomento de la educaci\xF3n en Europa</h2></div>`;
    },
    slotFondo: () => {
      return `<div slot="${"slotFondo"}" class="${"fondo"}"></div>`;
    }
  })}`;
});
export { Erasmus as default };
