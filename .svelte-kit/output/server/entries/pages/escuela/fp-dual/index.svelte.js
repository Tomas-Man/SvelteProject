import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-ff6ac367.js";
import { T as Titulo } from "../../../../chunks/titulo-a7a08935.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:"Decima Nova Pro";src:url("/fonts/DecimaNovaPro.otf")}.svelte-o053zy.svelte-o053zy{font-family:"Decima Nova Pro", sans-serif}h2.svelte-o053zy.svelte-o053zy{font-weight:lighter}.fondo.svelte-o053zy.svelte-o053zy{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/escuela/fpdual/estudio-dual.jpg");background-size:cover;background-position:left;background-repeat:no-repeat;z-index:-1}.descrFP.svelte-o053zy.svelte-o053zy{position:relative;top:0;left:0;display:flex;width:100%;height:100%;background-color:#d9d9d9}.txtFP.svelte-o053zy.svelte-o053zy{width:50%;height:100%;margin:40px}.txtFP.svelte-o053zy p.svelte-o053zy{font-size:1.4em}.txtFP.svelte-o053zy h2.svelte-o053zy,.docuInfo.svelte-o053zy h2.svelte-o053zy{font-size:3em;font-weight:lighter;text-align:center;margin-bottom:20px}.logoFP.svelte-o053zy.svelte-o053zy{position:relative;width:50%;height:100%;text-align:center}.logoFP.svelte-o053zy img.svelte-o053zy{position:relative;max-width:600px}.docuInfo.svelte-o053zy.svelte-o053zy{position:relative;top:0;left:0;height:100%;background-color:#d9d9d9}.contDocu.svelte-o053zy.svelte-o053zy{display:flex}.docu.svelte-o053zy.svelte-o053zy{position:relative;top:0;left:0;margin:20px 50px 70px;text-align:center;font-size:1.1em}.docu.svelte-o053zy img.svelte-o053zy{width:160px;height:220px;border-radius:5px}.docu.svelte-o053zy p.svelte-o053zy{color:#616161}.docu.svelte-o053zy:hover p.svelte-o053zy{color:blue}.docu.svelte-o053zy>a.svelte-o053zy:hover{text-decoration:none}.banner.svelte-o053zy.svelte-o053zy{position:relative;display:flex;justify-content:center;align-items:center;background-color:#d9d9d9}.entidad.svelte-o053zy.svelte-o053zy{margin:0 0 50px;padding:0 1.5em}.entidad.svelte-o053zy img.svelte-o053zy{height:90px}',
  map: null
};
const Fp_dual = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"fondo svelte-o053zy"}"></div>
${validate_component(Titulo, "Titulo").$$render($$result, {}, {}, {
    tituloH2: () => {
      return `<h2 slot="${"tituloH2"}" class="${"svelte-o053zy"}">Formaci\xF3n en el puesto de trabajo</h2>`;
    },
    tituloH1: () => {
      return `<h1 slot="${"tituloH1"}" class="${"svelte-o053zy"}">FP Dual</h1>`;
    }
  })}
<div class="${"descrFP svelte-o053zy"}"><div class="${"txtFP svelte-o053zy"}"><h2 class="${"svelte-o053zy"}">FP Dual</h2>
        <p class="${"svelte-o053zy"}">Estamos comprometidos con la formaci\xF3n en FP Dual, cada vez son m\xE1s empresas las que colaboran con nosotros
            en este nuevo paradigma de la Formaci\xF3n Profesional.</p>
        <br class="${"svelte-o053zy"}">
        <p class="${"svelte-o053zy"}">Mediante la FP Dual los alumnos aplican en un puesto laboral real los conocimientos aprendidos durante el
            ciclo y adem\xE1s se siguen formando mediante un programa educativo acordado entre el centro y la empresa.</p></div>
    <div class="${"logoFP svelte-o053zy"}"><figure class="${"svelte-o053zy"}"><img src="${"/img/escuela/fpdual/dual.svg"}" alt="${"FP Dual"}" class="${"svelte-o053zy"}"></figure></div></div>
<div class="${"docuInfo svelte-o053zy"}"><h2 class="${"svelte-o053zy"}">Documentos e informaci\xF3n</h2>
    <div class="${"contDocu svelte-o053zy"}"><div class="${"docu svelte-o053zy"}"><a href="${"https://drive.google.com/file/d/1cnSGiogY1lzZgC2Lfhbc2x2PwEht-0cA/view?usp=drive_web"}" target="${"_blank"}" class="${"svelte-o053zy"}"><img src="${"/img/escuela/fpdual/informacionalumnado.jpg"}" alt="${"Documento pdf"}" class="${"svelte-o053zy"}">
                <p class="${"svelte-o053zy"}">informacion-alumna...</p></a></div>
        <div class="${"docu svelte-o053zy"}"><a href="${"https://drive.google.com/file/d/125ihz8I6OYerXUqfZvaiP8ttWf_6HJos/view?usp=drive_web"}" target="${"_blank"}" class="${"svelte-o053zy"}"><img src="${"/img/escuela/fpdual/solicitudfp.jpg"}" alt="${"Documento pdf"}" class="${"svelte-o053zy"}">
                <p class="${"svelte-o053zy"}">solicitud-fp-dual.pdf</p></a></div></div></div>
<div class="${"banner svelte-o053zy"}"><div class="${"entidad svelte-o053zy"}"><figure class="${"svelte-o053zy"}"><img src="${"/img/escuela/fpdual/logo-junta.png"}" alt="${"Junta de Castilla y Le\xF3n"}" class="${"svelte-o053zy"}"></figure></div>
    <div class="${"entidad svelte-o053zy"}"><figure class="${"svelte-o053zy"}"><img src="${"/img/logo-grande.svg"}" alt="${"Salesianos"}" class="${"svelte-o053zy"}"></figure></div>
    <div class="${"entidad svelte-o053zy"}"><figure class="${"svelte-o053zy"}"><img src="${"/img/escuela/fpdual/europa-impulsa.png"}" alt="${"Europa impulsa nuestro crecimiento"}" class="${"svelte-o053zy"}"></figure></div>
</div>`;
});
export { Fp_dual as default };
