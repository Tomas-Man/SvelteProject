import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-ff6ac367.js";
import { T as Titulo } from "../../../../chunks/titulo-a7a08935.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:"Decima Nova Pro";src:url("/fonts/DecimaNovaPro.otf")}.svelte-5jwshb.svelte-5jwshb{font-family:"Decima Nova Pro", sans-serif}h1.svelte-5jwshb.svelte-5jwshb{font-size:1.5em}.content.svelte-5jwshb.svelte-5jwshb{position:relative;top:0;left:0;width:100%;height:100%;display:grid;place-items:center;background-color:#d9d9d9}.content.svelte-5jwshb h2.svelte-5jwshb{height:100px;text-align:center;font-size:3em;font-weight:lighter;line-height:3em;color:#51626f}.frame.svelte-5jwshb.svelte-5jwshb{padding:40px}.fondo.svelte-5jwshb.svelte-5jwshb{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/centro/documentos-fondo.jpg");background-size:cover;background-position:left;background-repeat:no-repeat;z-index:-1}',
  map: null
};
const Matriculacion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"fondo svelte-5jwshb"}"></div>
${validate_component(Titulo, "Titulo").$$render($$result, {}, {}, {
    tituloH1: () => {
      return `<h1 slot="${"tituloH1"}" class="${"svelte-5jwshb"}">INFORMACI\xD3N SOBRE LA MATRICULACI\xD3N EN EL CENTRO</h1>`;
    }
  })}
${slots.slotContent ? slots.slotContent({}) : `
    <div class="${"content svelte-5jwshb"}"><div class="${"matrESO svelte-5jwshb"}"><h2 class="${"svelte-5jwshb"}">MATRICULACI\xD3N EN EDUCACI\xD3N SECUNDARIA (ESO)</h2></div>
        <div class="${"frame svelte-5jwshb"}" style="${"width:90%;max-width:1000px;margin:auto"}" data-v-719f1c65="${""}" data-v-14889695="${""}"><div style="${"position:relative;padding-bottom:56.25%;padding-top:0;height:0"}" data-v-719f1c65="${""}" data-v-14889695="${""}" class="${"svelte-5jwshb"}"><iframe frameborder="${"0"}" width="${"1200"}" height="${"675"}" src="${"https://view.genial.ly/604f2b63d1a43d0d17b3820e"}" type="${"text/html"}" allowscriptaccess="${"always"}" allowfullscreen="${""}" scrolling="${"yes"}" allownetworking="${"all"}" style="${"position:absolute;top:0;left:0;width:100%;height:100%"}" data-v-719f1c65="${""}" data-v-14889695="${""}" class="${"svelte-5jwshb"}"></iframe></div></div></div>
`}`;
});
export { Matriculacion as default };
