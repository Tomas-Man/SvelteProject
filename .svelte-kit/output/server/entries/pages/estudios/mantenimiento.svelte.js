import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-ff6ac367.js";
import Telecomunicaciones from "./telecomunicaciones.svelte.js";
var mantenimiento_svelte_svelte_type_style_lang = "";
const css = {
  code: '.fondo.svelte-h0hphe{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/ciclos/electromecanica/fondo-electromecanica.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1}',
  map: null
};
const Mantenimiento = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Telecomunicaciones, "Ciclos").$$render($$result, {}, {}, {
    slotModulosSegundo: () => {
      return `<div slot="${"slotModulosSegundo"}" class="${"materiasLista"}"><ul><li>Ciencias aplicadas 2</li>
            <li>Comunicaci\xF3n y sociedad 2</li>
            <li>Electricidad del veh\xEDculo</li>
            <li>Mec\xE1nica del veh\xEDculo</li>
            <li>Formaci\xF3n en Centros de Trabajo</li>
            <li>Tutor\xEDa</li></ul></div>`;
    },
    slotModulosPrimero: () => {
      return `<div slot="${"slotModulosPrimero"}" class="${"materiasLista"}"><ul><li>Ciencias aplicadas 1</li>
            <li>Comunicaci\xF3n y sociedad 1</li>
            <li>Mecanizado y soldadura</li>
            <li>Amovibles</li>
            <li>Preparaci\xF3n de superficies</li>
            <li>Tutor\xEDa</li></ul></div>`;
    },
    slotFotos: () => {
      return `<div slot="${"slotFotos"}" class="${"fotos"}"><figure><img src="${"/img/ciclos/mantenimiento/fpb01.jpg"}" alt="${"foto1"}"></figure>
        <figure><img src="${"/img/ciclos/mantenimiento/fpb02.jpg"}" alt="${"foto2"}"></figure>
        <figure><img src="${"/img/ciclos/mantenimiento/fpb03.jpg"}" alt="${"foto3"}"></figure></div>`;
    },
    slotSalidasProf: () => {
      return `<ul slot="${"slotSalidasProf"}" class="${"lista"}"><li>Ayudante en el \xE1rea de carrocer\xEDa</li>
        <li>Auxiliar de almac\xE9n de recambios</li>
        <li>Operario empresas de sustituci\xF3n de lunas</li>
        <li>Ayudante en el \xE1rea de electromec\xE1nica</li>
        <li>Operario de taller de mec\xE1nica r\xE1pida</li></ul>`;
    },
    slotSalidasAcademicas: () => {
      return `<ul slot="${"slotSalidasAcademicas"}" class="${"lista"}"><li>Electricidad y Electr\xF3nica</li>
        <li>Inform\xE1tica y Comunicaciones</li>
        <li>Fabricaci\xF3n Mec\xE1nica</li>
        <li>Instalaci\xF3n y Mantenimiento</li>
        <li>Energ\xEDa y Agua</li>
        <li>Industrias Extractivas</li>
        <li>Industria Mar\xEDtimo-Pesquera</li>
        <li>Qu\xEDmica, Transporte y Mantenimiento de Veh\xEDculos</li>
        <li>Madera, Mueble y Corcho y Edificaci\xF3n y Obra Civil</li></ul>`;
    },
    slotListaRequisitos: () => {
      return `<ul slot="${"slotListaRequisitos"}" class="${"lista"}"><li>Tener 15 a\xF1os o cumplirlos durante el a\xF1o natural en curso y no superar los 17 durante el a\xF1o natural en curso</li>
        <li>Haber cursado el primer ciclo de Educaci\xF3n Secundaria Obligatoria (excepcionalmente haber cursado 2\xBA curso de ESO)</li>
        <li>Haber propuesto el equipo docente a los padres, madres o tutores legales la incorporaci\xF3n del alumno o alumna a un ciclo de Formaci\xF3n Profesional B\xE1sica</li></ul>`;
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
      return `<img slot="${"slotImagenPorq"}" src="${"/img/ciclos/electromecanica/electromecanica00.jpg"}" alt="${"Carrocer\xEDa"}">`;
    },
    slotTipoFP: () => {
      return `<h2 slot="${"slotTipoFP"}">FP B\xE1sica</h2>`;
    },
    slotNombreFP: () => {
      return `<h1 slot="${"slotNombreFP"}">Formaci\xF3n Profesional B\xE1sica en Mantenimiento de Veh\xEDculos</h1>`;
    },
    slotFondo: () => {
      return `<div slot="${"slotFondo"}" class="${"fondo svelte-h0hphe"}"></div>`;
    }
  })}`;
});
export { Mantenimiento as default };
