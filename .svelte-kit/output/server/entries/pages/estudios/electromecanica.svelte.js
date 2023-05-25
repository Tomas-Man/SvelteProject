import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-ff6ac367.js";
import Telecomunicaciones from "./telecomunicaciones.svelte.js";
var electromecanica_svelte_svelte_type_style_lang = "";
const css = {
  code: '.fondo.svelte-h0hphe{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/ciclos/electromecanica/fondo-electromecanica.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1}',
  map: null
};
const Electromecanica = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Telecomunicaciones, "Ciclos").$$render($$result, {}, {}, {
    slotModulosSegundo: () => {
      return `<div slot="${"slotModulosSegundo"}" class="${"materiasLista"}"><ul><li>Sistemas auxiliares del motor</li>
            <li>Circuitos ele\u0301ctricos auxiliares del vehi\u0301culo</li>
            <li>Sistemas de seguridad y confortabilidad</li>
            <li>Empresa e iniciativa emprendedora</li>
            <li>Vehi\u0301culos hi\u0301bridos y ele\u0301ctricos</li>
            <li>Formaci\xF3n en Centros de Trabajo</li></ul></div>`;
    },
    slotModulosPrimero: () => {
      return `<div slot="${"slotModulosPrimero"}" class="${"materiasLista"}"><ul><li>Motores</li>
            <li>Circuitos de fluidos. Suspensio\u0301n y direccio\u0301n</li>
            <li>Sistemas de transmisio\u0301n y frenado</li>
            <li>Sistemas de carga y arranque</li>
            <li>Mecanizado b\xE1sico</li>
            <li>Formaci\xF3n y orientaci\xF3n laboral</li></ul></div>`;
    },
    slotFotos: () => {
      return `<div slot="${"slotFotos"}" class="${"fotos"}"><figure><img src="${"/img/ciclos/electromecanica/electromecanica01.jpg"}" alt="${"foto1"}"></figure>
        <figure><img src="${"/img/ciclos/electromecanica/electromecanica02.jpg"}" alt="${"foto2"}"></figure>
        <figure><img src="${"/img/ciclos/electromecanica/electromecanica03.jpg"}" alt="${"foto3"}"></figure>
        <figure><img src="${"/img/ciclos/electromecanica/electromecanica04.jpg"}" alt="${"foto4"}"></figure></div>`;
    },
    slotSalidasProf: () => {
      return `<ul slot="${"slotSalidasProf"}" class="${"lista"}"><li>Electricista de veh\xEDculos</li>
        <li>Mec\xE1nica del autom\xF3vil</li>
        <li>Electromec\xE1nica del autom\xF3vil</li>
        <li>Reparaci\xF3n de sistemas neum\xE1ticos e hidra\xFAlicos</li>
        <li>Reparaci\xF3n de sistemas de transmisi\xF3n y frenos</li>
        <li>Instalaci\xF3n de accesorios y recambios del autom\xF3vil</li>
        <li>Reparaci\xF3n de sistemas de direcci\xF3n y suspensi\xF3n</li>
        <li>Operador de ITV</li>
        <li>Venta de recambios y sistemas de diagnosis</li></ul>`;
    },
    slotIconosRamas: () => {
      return `<div slot="${"slotIconosRamas"}" class="${"iconosRamas"}"><div class="${"iconoRama"}"><img src="${"/img/ciclos/carroceria/reparacion.svg"}" alt="${"Reparaci\xF3n de veh\xEDculos"}">
            <p>Reparaci\xF3n de veh\xEDculos</p></div>
        <div class="${"iconoRama"}"><img src="${"/img/ciclos/electromecanica/electricidad.svg"}" alt="${"Electricidad"}">
            <p>Electricidad</p></div>
        <div class="${"iconoRama"}"><img src="${"/img/ciclos/carroceria/mecanica.svg"}" alt="${"Mec\xE1nica"}">
            <p>Mec\xE1nica</p></div></div>`;
    },
    slotTextoPorq: () => {
      return `<div slot="${"slotTextoPorq"}"><p>Estos estudios te permitir\xE1n desarrollar una carrera como especialista en el mantenimiento de veh\xEDculos.</p>
        <br>
        <p>Se trata de un \xE1rea muy pr\xE1ctica con alta demanda que te permitir\xE1 adquirir las destrezas y t\xE9cnicas que permitan localizar y arreglar aver\xEDas mec\xE1nicas, hidra\xFAlicas, el\xE9ctricas y electr\xF3nicas.</p>
        <br>
        <p>Obtendr\xE1s las capacidades necesarias para la puesta a punto de todos los sistemas de los veh\xEDculos: motor, sistema el\xE9ctrico y electr\xF3nico, suspensi\xF3n, direcci\xF3n, frenos, etc.</p></div>`;
    },
    slotImagenPorq: () => {
      return `<img slot="${"slotImagenPorq"}" src="${"/img/ciclos/electromecanica/electromecanica00.jpg"}" alt="${"Electromec\xE1nica"}">`;
    },
    slotTipoFP: () => {
      return `<h2 slot="${"slotTipoFP"}">FP de Grado Medio</h2>`;
    },
    slotNombreFP: () => {
      return `<h1 slot="${"slotNombreFP"}">Electromec\xE1nica de Veh\xEDculos</h1>`;
    },
    slotFondo: () => {
      return `<div slot="${"slotFondo"}" class="${"fondo svelte-h0hphe"}"></div>`;
    }
  })}`;
});
export { Electromecanica as default };
