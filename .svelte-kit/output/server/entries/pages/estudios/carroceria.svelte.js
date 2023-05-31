import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-ff6ac367.js";
import { E as Estudios } from "../../../chunks/estudios-b81bb893.js";
import { T as Titulo } from "../../../chunks/titulo-a7a08935.js";
var carroceria_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:"Decima Nova Pro";src:url("/fonts/DecimaNovaPro.otf")}.svelte-1ncxyfq.svelte-1ncxyfq{font-family:"Decima Nova Pro", sans-serif}h2.svelte-1ncxyfq.svelte-1ncxyfq{font-weight:lighter}.fondo.svelte-1ncxyfq.svelte-1ncxyfq{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/ciclos/carroceria/fondo-carroceria.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1}.textoPorq.svelte-1ncxyfq.svelte-1ncxyfq{font-size:1.4em}.iconosRamas.svelte-1ncxyfq.svelte-1ncxyfq{display:flex;justify-content:center;align-items:center}.iconoRama.svelte-1ncxyfq.svelte-1ncxyfq{position:relative;margin:120px 40px 40px;min-width:210px;width:13%;height:30vh;background-color:#2E2E2EB2;border-radius:10px;text-align:center;font-size:1.5em;display:grid;place-items:center}.iconoRama.svelte-1ncxyfq img.svelte-1ncxyfq{position:relative;width:40%;margin:20px 20px 0}.iconoRama.svelte-1ncxyfq p.svelte-1ncxyfq{margin:0 10px\r\n    }.lista.svelte-1ncxyfq.svelte-1ncxyfq{font-size:1.5em;line-height:1.5em;list-style:none}.lista.svelte-1ncxyfq li.svelte-1ncxyfq{text-indent:-1.5em;margin-right:1.5em}.lista.svelte-1ncxyfq li.svelte-1ncxyfq::before{content:"";display:inline-block;height:1em;width:1em;margin-right:0.5em;background-repeat:no-repeat;background-image:url(/img/ciclos/puntolista.svg);background-size:contain}figure.svelte-1ncxyfq.svelte-1ncxyfq{display:inline-block;width:23.5%;margin:0.5em}figure.svelte-1ncxyfq img.svelte-1ncxyfq{width:100%}.materiasLista.svelte-1ncxyfq.svelte-1ncxyfq{font-size:1.5em;line-height:1.7em;height:100%}.materiasLista.svelte-1ncxyfq li.svelte-1ncxyfq{text-indent:-1.5em;margin-right:1.5em;list-style:none}.materiasLista.svelte-1ncxyfq li.svelte-1ncxyfq::before{content:"";display:inline-block;height:1em;width:1em;margin-right:0.5em;background-repeat:no-repeat;background-image:url(/img/ciclos/puntolista.svg);background-size:contain}',
  map: null
};
const Carroceria = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"fondo svelte-1ncxyfq"}"></div>
${validate_component(Titulo, "Titulo").$$render($$result, {}, {}, {
    tituloH2: () => {
      return `<h2 slot="${"tituloH2"}" class="${"svelte-1ncxyfq"}">FP de Grado Medio</h2>`;
    },
    tituloH1: () => {
      return `<h1 slot="${"tituloH1"}" class="${"svelte-1ncxyfq"}">Formaci\xF3n Profesional en Carrocer\xEDa</h1>`;
    }
  })}
${validate_component(Estudios, "Ciclos").$$render($$result, {}, {}, {
    slotModulosSegundo: () => {
      return `<div slot="${"slotModulosSegundo"}" class="${"materiasLista svelte-1ncxyfq"}"><ul class="${"svelte-1ncxyfq"}"><li class="${"svelte-1ncxyfq"}">Preparaci\xF3n de superficies</li>
            <li class="${"svelte-1ncxyfq"}">Instalaciones dom\xF3ticas</li>
            <li class="${"svelte-1ncxyfq"}">Elementos estructurales del veh\xEDculo</li>
            <li class="${"svelte-1ncxyfq"}">Embellecimiento de superficies</li>
            <li class="${"svelte-1ncxyfq"}">Empresa e iniciativa emprendedora</li>
            <li class="${"svelte-1ncxyfq"}">Formaci\xF3n en Centros de Trabajo</li></ul></div>`;
    },
    slotModulosPrimero: () => {
      return `<div slot="${"slotModulosPrimero"}" class="${"materiasLista svelte-1ncxyfq"}"><ul class="${"svelte-1ncxyfq"}"><li class="${"svelte-1ncxyfq"}">Elementos amovibles</li>
            <li class="${"svelte-1ncxyfq"}">Elementos met\xE1licos y sint\xE9ticos</li>
            <li class="${"svelte-1ncxyfq"}">Elementos fijos</li>
            <li class="${"svelte-1ncxyfq"}">Mecanizado b\xE1sico</li>
            <li class="${"svelte-1ncxyfq"}">Formaci\xF3n y orientaci\xF3n laboral</li></ul></div>`;
    },
    slotFotos: () => {
      return `<div slot="${"slotFotos"}" class="${"fotos svelte-1ncxyfq"}"><figure class="${"svelte-1ncxyfq"}"><img src="${"/img/ciclos/carroceria/carroceria01.jpg"}" alt="${"foto1"}" class="${"svelte-1ncxyfq"}"></figure>
        <figure class="${"svelte-1ncxyfq"}"><img src="${"/img/ciclos/carroceria/carroceria02.jpg"}" alt="${"foto2"}" class="${"svelte-1ncxyfq"}"></figure>
        <figure class="${"svelte-1ncxyfq"}"><img src="${"/img/ciclos/carroceria/carroceria03.jpg"}" alt="${"foto3"}" class="${"svelte-1ncxyfq"}"></figure>
        <figure class="${"svelte-1ncxyfq"}"><img src="${"/img/ciclos/carroceria/carroceria04.jpg"}" alt="${"foto4"}" class="${"svelte-1ncxyfq"}"></figure></div>`;
    },
    slotSalidasProf: () => {
      return `<ul slot="${"slotSalidasProf"}" class="${"lista svelte-1ncxyfq"}"><li class="${"svelte-1ncxyfq"}">Chapista /reparador de carrocer\xEDa de veh\xEDculos, obras p\xFAblicas y material ferroviario</li>
        <li class="${"svelte-1ncxyfq"}">Instalaci\xF3n de lunas y montaje de accesorios</li>
        <li class="${"svelte-1ncxyfq"}">Pintura de carrocer\xEDas</li>
        <li class="${"svelte-1ncxyfq"}">Comercial de productos afines</li>
        <li class="${"svelte-1ncxyfq"}">Reparaci\xF3n de aeronaves</li></ul>`;
    },
    slotIconosRamas: () => {
      return `<div slot="${"slotIconosRamas"}" class="${"iconosRamas svelte-1ncxyfq"}"><div class="${"iconoRama svelte-1ncxyfq"}"><img src="${"/img/ciclos/carroceria/reparacion.svg"}" alt="${"Reparaci\xF3n de veh\xEDculos"}" class="${"svelte-1ncxyfq"}">
            <p class="${"svelte-1ncxyfq"}">Reparaci\xF3n de veh\xEDculos</p></div>
        <div class="${"iconoRama svelte-1ncxyfq"}"><img src="${"/img/ciclos/carroceria/embellecimiento.svg"}" alt="${"/img/ciclos/carroceria"}" class="${"svelte-1ncxyfq"}">
            <p class="${"svelte-1ncxyfq"}">Embellecimiento de Superficies</p></div>
        <div class="${"iconoRama svelte-1ncxyfq"}"><img src="${"/img/ciclos/carroceria/mecanica.svg"}" alt="${"Mec\xE1nica"}" class="${"svelte-1ncxyfq"}">
            <p class="${"svelte-1ncxyfq"}">Mec\xE1nica</p></div></div>`;
    },
    slotTextoPorq: () => {
      return `<div slot="${"slotTextoPorq"}" class="${"textoPorq svelte-1ncxyfq"}"><p class="${"svelte-1ncxyfq"}">Estos estudios te permitir\xE1n desarrollar una carrera como especialista en el mantenimiento de veh\xEDculos.</p>
        <br class="${"svelte-1ncxyfq"}">
        <p class="${"svelte-1ncxyfq"}">Aprender\xE1s los fundamentos de una profesi\xF3n muy pr\xE1ctica con alta demanda que te permitir\xE1 adquirir las
            destrezas y t\xE9cnicas que permitan una salida como profesional en trabajos de chapa, transformaciones de
            carrocer\xEDas, veh\xEDculos pesados, construcci\xF3n y reparaci\xF3n de elementos de fibra y pintura.</p></div>`;
    },
    slotImagenPorq: () => {
      return `<img slot="${"slotImagenPorq"}" src="${"/img/ciclos/carroceria/carroceria00.jpg"}" alt="${"Carrocer\xEDa"}" class="${"svelte-1ncxyfq"}">`;
    }
  })}`;
});
export { Carroceria as default };
