import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-ff6ac367.js";
import { E as Estudios } from "../../../chunks/estudios-b81bb893.js";
import { T as Titulo } from "../../../chunks/titulo-a7a08935.js";
var electromecanica_svelte_svelte_type_style_lang = "";
const css = {
  code: '.fondo.svelte-aj9w2.svelte-aj9w2{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/ciclos/electromecanica/fondo-electromecanica.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1}h2.svelte-aj9w2.svelte-aj9w2{font-weight:lighter}.textoPorq.svelte-aj9w2.svelte-aj9w2{font-size:1.4em}.iconosRamas.svelte-aj9w2.svelte-aj9w2{display:flex;justify-content:center;align-items:center}.iconoRama.svelte-aj9w2.svelte-aj9w2{position:relative;margin:120px 40px 40px;min-width:210px;width:13%;height:30vh;background-color:#2E2E2EB2;border-radius:10px;text-align:center;font-size:1.5em;display:grid;place-items:center}.iconoRama.svelte-aj9w2 img.svelte-aj9w2{position:relative;width:40%;margin:20px 20px 0}.iconoRama.svelte-aj9w2 p.svelte-aj9w2{margin:0 10px\r\n    }.lista.svelte-aj9w2.svelte-aj9w2{font-size:1.5em;line-height:1.5em;list-style:none}.lista.svelte-aj9w2 li.svelte-aj9w2{text-indent:-1.5em;margin-right:1.5em}.lista.svelte-aj9w2 li.svelte-aj9w2::before{content:"";display:inline-block;height:1em;width:1em;margin-right:0.5em;background-repeat:no-repeat;background-image:url(/img/ciclos/puntolista.svg);background-size:contain}figure.svelte-aj9w2.svelte-aj9w2{display:inline-block;width:23.5%;margin:0.5em}figure.svelte-aj9w2 img.svelte-aj9w2{width:100%}.materiasLista.svelte-aj9w2.svelte-aj9w2{font-size:1.5em;line-height:1.7em;height:100%}.materiasLista.svelte-aj9w2 li.svelte-aj9w2{text-indent:-1.5em;margin-right:1.5em;list-style:none}.materiasLista.svelte-aj9w2 li.svelte-aj9w2::before{content:"";display:inline-block;height:1em;width:1em;margin-right:0.5em;background-repeat:no-repeat;background-image:url(/img/ciclos/puntolista.svg);background-size:contain}',
  map: null
};
const Electromecanica = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"fondo svelte-aj9w2"}"></div>
${validate_component(Titulo, "Titulo").$$render($$result, {}, {}, {
    tituloH2: () => {
      return `<h2 slot="${"tituloH2"}" class="${"svelte-aj9w2"}">FP de Grado Medio</h2>`;
    },
    tituloH1: () => {
      return `<h1 slot="${"tituloH1"}">Electromec\xE1nica de Veh\xEDculos</h1>`;
    }
  })}
${validate_component(Estudios, "Ciclos").$$render($$result, {}, {}, {
    slotModulosSegundo: () => {
      return `<div slot="${"slotModulosSegundo"}" class="${"materiasLista svelte-aj9w2"}"><ul><li class="${"svelte-aj9w2"}">Sistemas auxiliares del motor</li>
            <li class="${"svelte-aj9w2"}">Circuitos ele\u0301ctricos auxiliares del vehi\u0301culo</li>
            <li class="${"svelte-aj9w2"}">Sistemas de seguridad y confortabilidad</li>
            <li class="${"svelte-aj9w2"}">Empresa e iniciativa emprendedora</li>
            <li class="${"svelte-aj9w2"}">Vehi\u0301culos hi\u0301bridos y ele\u0301ctricos</li>
            <li class="${"svelte-aj9w2"}">Formaci\xF3n en Centros de Trabajo</li></ul></div>`;
    },
    slotModulosPrimero: () => {
      return `<div slot="${"slotModulosPrimero"}" class="${"materiasLista svelte-aj9w2"}"><ul><li class="${"svelte-aj9w2"}">Motores</li>
            <li class="${"svelte-aj9w2"}">Circuitos de fluidos. Suspensio\u0301n y direccio\u0301n</li>
            <li class="${"svelte-aj9w2"}">Sistemas de transmisio\u0301n y frenado</li>
            <li class="${"svelte-aj9w2"}">Sistemas de carga y arranque</li>
            <li class="${"svelte-aj9w2"}">Mecanizado b\xE1sico</li>
            <li class="${"svelte-aj9w2"}">Formaci\xF3n y orientaci\xF3n laboral</li></ul></div>`;
    },
    slotFotos: () => {
      return `<div slot="${"slotFotos"}" class="${"fotos"}"><figure class="${"svelte-aj9w2"}"><img src="${"/img/ciclos/electromecanica/electromecanica01.jpg"}" alt="${"foto1"}" class="${"svelte-aj9w2"}"></figure>
        <figure class="${"svelte-aj9w2"}"><img src="${"/img/ciclos/electromecanica/electromecanica02.jpg"}" alt="${"foto2"}" class="${"svelte-aj9w2"}"></figure>
        <figure class="${"svelte-aj9w2"}"><img src="${"/img/ciclos/electromecanica/electromecanica03.jpg"}" alt="${"foto3"}" class="${"svelte-aj9w2"}"></figure>
        <figure class="${"svelte-aj9w2"}"><img src="${"/img/ciclos/electromecanica/electromecanica04.jpg"}" alt="${"foto4"}" class="${"svelte-aj9w2"}"></figure></div>`;
    },
    slotSalidasProf: () => {
      return `<ul slot="${"slotSalidasProf"}" class="${"lista svelte-aj9w2"}"><li class="${"svelte-aj9w2"}">Electricista de veh\xEDculos</li>
        <li class="${"svelte-aj9w2"}">Mec\xE1nica del autom\xF3vil</li>
        <li class="${"svelte-aj9w2"}">Electromec\xE1nica del autom\xF3vil</li>
        <li class="${"svelte-aj9w2"}">Reparaci\xF3n de sistemas neum\xE1ticos e hidra\xFAlicos</li>
        <li class="${"svelte-aj9w2"}">Reparaci\xF3n de sistemas de transmisi\xF3n y frenos</li>
        <li class="${"svelte-aj9w2"}">Instalaci\xF3n de accesorios y recambios del autom\xF3vil</li>
        <li class="${"svelte-aj9w2"}">Reparaci\xF3n de sistemas de direcci\xF3n y suspensi\xF3n</li>
        <li class="${"svelte-aj9w2"}">Operador de ITV</li>
        <li class="${"svelte-aj9w2"}">Venta de recambios y sistemas de diagnosis</li></ul>`;
    },
    slotIconosRamas: () => {
      return `<div slot="${"slotIconosRamas"}" class="${"iconosRamas svelte-aj9w2"}"><div class="${"iconoRama svelte-aj9w2"}"><img src="${"/img/ciclos/carroceria/reparacion.svg"}" alt="${"Reparaci\xF3n de veh\xEDculos"}" class="${"svelte-aj9w2"}">
            <p class="${"svelte-aj9w2"}">Reparaci\xF3n de veh\xEDculos</p></div>
        <div class="${"iconoRama svelte-aj9w2"}"><img src="${"/img/ciclos/electromecanica/electricidad.svg"}" alt="${"Electricidad"}" class="${"svelte-aj9w2"}">
            <p class="${"svelte-aj9w2"}">Electricidad</p></div>
        <div class="${"iconoRama svelte-aj9w2"}"><img src="${"/img/ciclos/carroceria/mecanica.svg"}" alt="${"Mec\xE1nica"}" class="${"svelte-aj9w2"}">
            <p class="${"svelte-aj9w2"}">Mec\xE1nica</p></div></div>`;
    },
    slotTextoPorq: () => {
      return `<div slot="${"slotTextoPorq"}" class="${"textoPorq svelte-aj9w2"}"><p>Estos estudios te permitir\xE1n desarrollar una carrera como especialista en el mantenimiento de veh\xEDculos.</p>
        <br>
        <p>Se trata de un \xE1rea muy pr\xE1ctica con alta demanda que te permitir\xE1 adquirir las destrezas y t\xE9cnicas que permitan localizar y arreglar aver\xEDas mec\xE1nicas, hidra\xFAlicas, el\xE9ctricas y electr\xF3nicas.</p>
        <br>
        <p>Obtendr\xE1s las capacidades necesarias para la puesta a punto de todos los sistemas de los veh\xEDculos: motor, sistema el\xE9ctrico y electr\xF3nico, suspensi\xF3n, direcci\xF3n, frenos, etc.</p></div>`;
    },
    slotImagenPorq: () => {
      return `<img slot="${"slotImagenPorq"}" src="${"/img/ciclos/electromecanica/electromecanica00.jpg"}" alt="${"Electromec\xE1nica"}">`;
    }
  })}`;
});
export { Electromecanica as default };
