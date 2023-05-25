import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-ff6ac367.js";
import Matriculacion from "../matriculacion/index.svelte.js";
const Documentos_secretaria = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Matriculacion, "Centro").$$render($$result, {}, {}, {
    slotContent: () => {
      return `<div slot="${"slotContent"}" class="${"content"}"><h2>DOCUMENTOS PARA MATRICULACI\xD3N</h2>
        <div class="${"documentos"}"><div class="${"docu"}"><a href="${"https://drive.google.com/file/d/15xTlIo4nJmyfvFfzK1Q6c70yOk3DedMW/view?usp=drive_web"}" target="${"_blank"}"><img src="${"/img/centro/2022-InformacionSolicitudes-FP.jpg"}" alt="${"Documento pdf"}">
                    <p>2022-Informaci\xF3n S...</p></a></div>
            <div class="${"docu"}"><a href="${"https://drive.google.com/file/d/12w9DDifSo-EKhy10MJTcX_IKlxsSeO1Z/view?usp=drive_web"}" target="${"_blank"}"><img src="${"/img/centro/FP-2021-online.jpg"}" alt="${"Documento pdf"}">
                    <p>FP-2021-online.pdf</p></a></div>
            <div class="${"docu"}"><a href="${"https://drive.google.com/file/d/1OgI6nTL6h2itxB7cnsYb02Mvl9ofHMbz/view?usp=drive_web"}" target="${"_blank"}"><img src="${"/img/centro/Listado-CFGM-Y-CFGS.jpg"}" alt="${"Documento pdf"}">
                    <p>Listado-CFGM-Y-CF...</p></a></div>
            <div class="${"docu"}"><a href="${"https://drive.google.com/file/d/1l54e6MFwRmllfYkp5S9gO0D0IHKgQdI9/view?usp=drive_web"}" target="${"_blank"}"><img src="${"/img/centro/Listado-CGB.jpg"}" alt="${"Documento pdf"}">
                    <p>Listado-CGB.pdf</p></a></div></div></div>`;
    },
    slotTitulo: () => {
      return `<div slot="${"slotTitulo"}" class="${"titulo"}"><h1>SECRETAR\xCDA DEL CENTRO</h1></div>`;
    }
  })}`;
});
export { Documentos_secretaria as default };
