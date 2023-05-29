import { c as create_ssr_component } from "../../../../chunks/index-ff6ac367.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:"Decima Nova Pro";src:url("/fonts/DecimaNovaPro.otf")}.svelte-bvtc53.svelte-bvtc53{font-family:"Decima Nova Pro", sans-serif}.titulo.svelte-bvtc53.svelte-bvtc53{position:relative;top:0;left:0;width:100%;height:25vh;display:grid;place-items:center;color:white}.titulo.svelte-bvtc53 h1.svelte-bvtc53{font-size:4em}.content.svelte-bvtc53.svelte-bvtc53{position:relative;top:0;left:0;width:100%;height:100%;display:grid;place-items:center;background-color:#d9d9d9}.content.svelte-bvtc53 h2.svelte-bvtc53{height:100px;text-align:center;font-size:3em;font-weight:lighter;line-height:3em;color:#51626f}.frame.svelte-bvtc53.svelte-bvtc53{padding:40px}.fondo.svelte-bvtc53.svelte-bvtc53{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/centro/documentos-fondo.jpg");background-size:cover;background-position:left;background-repeat:no-repeat;z-index:-1}',
  map: null
};
const Matriculacion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-bvtc53"}">${slots.slotFondo ? slots.slotFondo({}) : `
        <div class="${"fondo svelte-bvtc53"}"></div>
    `}
    ${slots.slotTitulo ? slots.slotTitulo({}) : `
        <div class="${"titulo svelte-bvtc53"}"><h1 class="${"svelte-bvtc53"}">INFORMACI\xD3N SOBRE LA MATRICULACI\xD3N EN EL CENTRO</h1></div>
    `}
    ${slots.slotContent ? slots.slotContent({}) : `
        <div class="${"content svelte-bvtc53"}"><div class="${"matrESO svelte-bvtc53"}"><h2 class="${"svelte-bvtc53"}">MATRICULACI\xD3N EN EDUCACI\xD3N SECUNDARIA (ESO)</h2></div>
            <div class="${"frame svelte-bvtc53"}" style="${"width:90%;max-width:1000px;margin:auto"}" data-v-719f1c65="${""}" data-v-14889695="${""}"><div style="${"position:relative;padding-bottom:56.25%;padding-top:0;height:0"}" data-v-719f1c65="${""}" data-v-14889695="${""}" class="${"svelte-bvtc53"}"><iframe frameborder="${"0"}" width="${"1200"}" height="${"675"}" src="${"https://view.genial.ly/604f2b63d1a43d0d17b3820e"}" type="${"text/html"}" allowscriptaccess="${"always"}" allowfullscreen="${""}" scrolling="${"yes"}" allownetworking="${"all"}" style="${"position:absolute;top:0;left:0;width:100%;height:100%"}" data-v-719f1c65="${""}" data-v-14889695="${""}" class="${"svelte-bvtc53"}"></iframe></div></div></div>
    `}
</main>`;
});
export { Matriculacion as default };
