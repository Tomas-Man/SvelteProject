import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-ff6ac367.js";
import Telecomunicaciones from "./telecomunicaciones.svelte.js";
var carroceria_svelte_svelte_type_style_lang = "";
const css = {
  code: '.fondo.svelte-dbulk8{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/ciclos/carroceria/fondo-carroceria.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1}',
  map: null
};
const Carroceria = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Telecomunicaciones, "Ciclos").$$render($$result, {}, {}, {
    slotModulosSegundo: () => {
      return `<div slot="${"slotModulosSegundo"}" class="${"materiasLista"}"><ul><li>Preparaci\xF3n de superficies</li>
            <li>Instalaciones dom\xF3ticas</li>
            <li>Elementos estructurales del veh\xEDculo</li>
            <li>Embellecimiento de superficies</li>
            <li>Empresa e iniciativa emprendedora</li>
            <li>Formaci\xF3n en Centros de Trabajo</li></ul></div>`;
    },
    slotModulosPrimero: () => {
      return `<div slot="${"slotModulosPrimero"}" class="${"materiasLista"}"><ul><li>Elementos amovibles</li>
            <li>Elementos met\xE1licos y sint\xE9ticos</li>
            <li>Elementos fijos</li>
            <li>Mecanizado b\xE1sico</li>
            <li>Formaci\xF3n y orientaci\xF3n laboral</li></ul></div>`;
    },
    slotFotos: () => {
      return `<div slot="${"slotFotos"}" class="${"fotos"}"><figure><img src="${"/img/ciclos/carroceria/carroceria01.jpg"}" alt="${"foto1"}"></figure>
        <figure><img src="${"/img/ciclos/carroceria/carroceria02.jpg"}" alt="${"foto2"}"></figure>
        <figure><img src="${"/img/ciclos/carroceria/carroceria03.jpg"}" alt="${"foto3"}"></figure>
        <figure><img src="${"/img/ciclos/carroceria/carroceria04.jpg"}" alt="${"foto4"}"></figure></div>`;
    },
    slotSalidasProf: () => {
      return `<ul slot="${"slotSalidasProf"}" class="${"lista"}"><li>Chapista /reparador de carrocer\xEDa de veh\xEDculos, obras p\xFAblicas y material ferroviario</li>
        <li>Instalaci\xF3n de lunas y montaje de accesorios</li>
        <li>Pintura de carrocer\xEDas</li>
        <li>Comercial de productos afines</li>
        <li>Reparaci\xF3n de aeronaves</li></ul>`;
    },
    slotIconosRamas: () => {
      return `<div slot="${"slotIconosRamas"}" class="${"iconosRamas"}"><div class="${"iconoRama"}"><img src="${"/img/ciclos/carroceria/reparacion.svg"}" alt="${"Reparaci\xF3n de veh\xEDculos"}">
            <p>Reparaci\xF3n de veh\xEDculos</p></div>
        <div class="${"iconoRama"}"><img src="${"/img/ciclos/carroceria/embellecimiento.svg"}" alt="${"/img/ciclos/carroceria"}">
            <p>Embellecimiento de Superficies</p></div>
        <div class="${"iconoRama"}"><img src="${"/img/ciclos/carroceria/mecanica.svg"}" alt="${"Mec\xE1nica"}">
            <p>Mec\xE1nica</p></div></div>`;
    },
    slotTextoPorq: () => {
      return `<div slot="${"slotTextoPorq"}"><p>Estos estudios te permitir\xE1n desarrollar una carrera como especialista en el mantenimiento de veh\xEDculos.</p>
        <br>
        <p>Aprender\xE1s los fundamentos de una profesi\xF3n muy pr\xE1ctica con alta demanda que te permitir\xE1 adquirir las destrezas y t\xE9cnicas que permitan una salida como profesional en trabajos de chapa, transformaciones de carrocer\xEDas, veh\xEDculos pesados, construcci\xF3n y reparaci\xF3n de elementos de fibra y pintura.</p></div>`;
    },
    slotImagenPorq: () => {
      return `<img slot="${"slotImagenPorq"}" src="${"/img/ciclos/carroceria/carroceria00.jpg"}" alt="${"Carrocer\xEDa"}">`;
    },
    slotTipoFP: () => {
      return `<h2 slot="${"slotTipoFP"}">FP de Grado Medio</h2>`;
    },
    slotNombreFP: () => {
      return `<h1 slot="${"slotNombreFP"}">Formaci\xF3n Profesional en Carrocer\xEDa</h1>`;
    },
    slotFondo: () => {
      return `<div slot="${"slotFondo"}" class="${"fondo svelte-dbulk8"}"></div>`;
    }
  })}`;
});
export { Carroceria as default };
