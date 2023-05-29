import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-ff6ac367.js";
import Matriculacion from "../matriculacion/index.svelte.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:"Decima Nova Pro";src:url("/fonts/DecimaNovaPro.otf")}.svelte-p7clng.svelte-p7clng{font-family:"Decima Nova Pro", sans-serif}.titulo.svelte-p7clng.svelte-p7clng{position:relative;top:0;left:0;width:100%;height:25vh;display:grid;place-items:center;color:white}.titulo.svelte-p7clng h1.svelte-p7clng{font-size:4em}.content.svelte-p7clng.svelte-p7clng{position:relative;top:0;left:0;width:100%;height:100%;display:grid;place-items:center;background-color:#d9d9d9}.content.svelte-p7clng h2.svelte-p7clng{height:100px;text-align:center;font-size:3em;font-weight:lighter;line-height:3em;color:#51626f}.documentos.svelte-p7clng.svelte-p7clng{position:relative;top:0;left:0;display:flex;width:100%;height:100%;margin:0 50px}.docu.svelte-p7clng.svelte-p7clng{position:relative;top:0;left:0;margin:100px 50px;text-align:center;font-size:1.1em}.docu.svelte-p7clng img.svelte-p7clng{width:160px;height:220px;border-radius:5px}.docu.svelte-p7clng p.svelte-p7clng{color:#616161}.docu.svelte-p7clng:hover p.svelte-p7clng{color:blue}.docu.svelte-p7clng>a.svelte-p7clng:hover{text-decoration:none}',
  map: null
};
const Documentos_secretaria = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Matriculacion, "Centro").$$render($$result, {}, {}, {
    slotContent: () => {
      return `<div slot="${"slotContent"}" class="${"content svelte-p7clng"}"><h2 class="${"svelte-p7clng"}">DOCUMENTOS PARA MATRICULACI\xD3N</h2>
        <div class="${"documentos svelte-p7clng"}"><div class="${"docu svelte-p7clng"}"><a href="${"https://drive.google.com/file/d/15xTlIo4nJmyfvFfzK1Q6c70yOk3DedMW/view?usp=drive_web"}" target="${"_blank"}" class="${"svelte-p7clng"}"><img src="${"/img/centro/2022-InformacionSolicitudes-FP.jpg"}" alt="${"Documento pdf"}" class="${"svelte-p7clng"}">
                    <p class="${"svelte-p7clng"}">2022-Informaci\xF3n S...</p></a></div>
            <div class="${"docu svelte-p7clng"}"><a href="${"https://drive.google.com/file/d/12w9DDifSo-EKhy10MJTcX_IKlxsSeO1Z/view?usp=drive_web"}" target="${"_blank"}" class="${"svelte-p7clng"}"><img src="${"/img/centro/FP-2021-online.jpg"}" alt="${"Documento pdf"}" class="${"svelte-p7clng"}">
                    <p class="${"svelte-p7clng"}">FP-2021-online.pdf</p></a></div>
            <div class="${"docu svelte-p7clng"}"><a href="${"https://drive.google.com/file/d/1OgI6nTL6h2itxB7cnsYb02Mvl9ofHMbz/view?usp=drive_web"}" target="${"_blank"}" class="${"svelte-p7clng"}"><img src="${"/img/centro/Listado-CFGM-Y-CFGS.jpg"}" alt="${"Documento pdf"}" class="${"svelte-p7clng"}">
                    <p class="${"svelte-p7clng"}">Listado-CFGM-Y-CF...</p></a></div>
            <div class="${"docu svelte-p7clng"}"><a href="${"https://drive.google.com/file/d/1l54e6MFwRmllfYkp5S9gO0D0IHKgQdI9/view?usp=drive_web"}" target="${"_blank"}" class="${"svelte-p7clng"}"><img src="${"/img/centro/Listado-CGB.jpg"}" alt="${"Documento pdf"}" class="${"svelte-p7clng"}">
                    <p class="${"svelte-p7clng"}">Listado-CGB.pdf</p></a></div></div></div>`;
    },
    slotTitulo: () => {
      return `<div slot="${"slotTitulo"}" class="${"titulo svelte-p7clng"}"><h1 class="${"svelte-p7clng"}">SECRETAR\xCDA DEL CENTRO</h1></div>`;
    }
  })}`;
});
export { Documentos_secretaria as default };
