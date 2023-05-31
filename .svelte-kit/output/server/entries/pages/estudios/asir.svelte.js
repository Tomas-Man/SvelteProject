import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-ff6ac367.js";
import { E as Estudios } from "../../../chunks/estudios-b81bb893.js";
import { T as Titulo } from "../../../chunks/titulo-a7a08935.js";
var asir_svelte_svelte_type_style_lang = "";
const css = {
  code: '.fondo.svelte-1if6t3y.svelte-1if6t3y{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/ciclos/asir/fondo-asir.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1}.textoPorq.svelte-1if6t3y.svelte-1if6t3y{font-size:1.4em}.iconosRamas.svelte-1if6t3y.svelte-1if6t3y{display:flex;justify-content:center;align-items:center}.iconoRama.svelte-1if6t3y.svelte-1if6t3y{position:relative;margin:120px 40px 40px;min-width:210px;width:13%;height:30vh;background-color:#2E2E2EB2;border-radius:10px;text-align:center;font-size:1.5em;display:grid;place-items:center}.iconoRama.svelte-1if6t3y img.svelte-1if6t3y{position:relative;width:40%;margin:20px 20px 0}.iconoRama.svelte-1if6t3y p.svelte-1if6t3y{margin:0 10px\r\n    }.lista.svelte-1if6t3y.svelte-1if6t3y{font-size:1.5em;line-height:1.5em;list-style:none}.lista.svelte-1if6t3y li.svelte-1if6t3y{text-indent:-1.5em;margin-right:1.5em}.lista.svelte-1if6t3y li.svelte-1if6t3y::before{content:"";display:inline-block;height:1em;width:1em;margin-right:0.5em;background-repeat:no-repeat;background-image:url(/img/ciclos/puntolista.svg);background-size:contain}figure.svelte-1if6t3y.svelte-1if6t3y{display:inline-block;width:23.5%;margin:0.5em}figure.svelte-1if6t3y img.svelte-1if6t3y{width:100%}.materiasLista.svelte-1if6t3y.svelte-1if6t3y{font-size:1.5em;line-height:1.7em;height:100%}.materiasLista.svelte-1if6t3y li.svelte-1if6t3y{text-indent:-1.5em;margin-right:1.5em;list-style:none}.materiasLista.svelte-1if6t3y li.svelte-1if6t3y::before{content:"";display:inline-block;height:1em;width:1em;margin-right:0.5em;background-repeat:no-repeat;background-image:url(/img/ciclos/puntolista.svg);background-size:contain}',
  map: null
};
const Asir = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"fondo svelte-1if6t3y"}"></div>
${validate_component(Titulo, "Titulo").$$render($$result, {}, {}, {
    tituloH2: () => {
      return `<h2 slot="${"tituloH2"}">FP de Grado Superior</h2>`;
    },
    tituloH1: () => {
      return `<h1 slot="${"tituloH1"}">Administraci\xF3n de Sistemas Inform\xE1ticos en Red</h1>`;
    }
  })}
${validate_component(Estudios, "Ciclos").$$render($$result, {}, {}, {
    slotModulosSegundo: () => {
      return `<div slot="${"slotModulosSegundo"}" class="${"materiasLista svelte-1if6t3y"}"><ul><li class="${"svelte-1if6t3y"}">Administraci\xF3n de Sistemas Operativos</li>
            <li class="${"svelte-1if6t3y"}">Servicios de Red e Internet</li>
            <li class="${"svelte-1if6t3y"}">Implantaci\xF3n de Aplicaciones Web</li>
            <li class="${"svelte-1if6t3y"}">Administraci\xF3n de Sistemas Gestores de Bases de Datos</li>
            <li class="${"svelte-1if6t3y"}">Seguridad y Alta Disponibilidad</li>
            <li class="${"svelte-1if6t3y"}">Empresa e Iniciativa Emprendedora</li>
            <li class="${"svelte-1if6t3y"}">Proyecto final de ciclo</li>
            <li class="${"svelte-1if6t3y"}">Formaci\xF3n en Centros de Trabajo</li></ul></div>`;
    },
    slotModulosPrimero: () => {
      return `<div slot="${"slotModulosPrimero"}" class="${"materiasLista svelte-1if6t3y"}"><ul><li class="${"svelte-1if6t3y"}">Implantaci\xF3n de Sistemas Operativos</li>
            <li class="${"svelte-1if6t3y"}">Planificaci\xF3n y Administraci\xF3n de Redes</li>
            <li class="${"svelte-1if6t3y"}">Gesti\xF3n de Bases de Datos</li>
            <li class="${"svelte-1if6t3y"}">Fundamentos de Hardware</li>
            <li class="${"svelte-1if6t3y"}">Fundamentos de Hardware</li>
            <li class="${"svelte-1if6t3y"}">Formaci\xF3n y orientaci\xF3n laboral</li></ul></div>`;
    },
    slotFotos: () => {
      return `<div slot="${"slotFotos"}" class="${"fotos"}"><figure class="${"svelte-1if6t3y"}"><img src="${"/img/ciclos/asir/asir01.jpg"}" alt="${"foto1"}" class="${"svelte-1if6t3y"}"></figure>
        <figure class="${"svelte-1if6t3y"}"><img src="${"/img/ciclos/asir/asir02.jpg"}" alt="${"foto2"}" class="${"svelte-1if6t3y"}"></figure>
        <figure class="${"svelte-1if6t3y"}"><img src="${"/img/ciclos/asir/asir03.jpg"}" alt="${"foto3"}" class="${"svelte-1if6t3y"}"></figure>
        <figure class="${"svelte-1if6t3y"}"><img src="${"/img/ciclos/asir/asir04.jpg"}" alt="${"foto4"}" class="${"svelte-1if6t3y"}"></figure></div>`;
    },
    slotSalidasProf: () => {
      return `<ul slot="${"slotSalidasProf"}" class="${"lista svelte-1if6t3y"}"><li class="${"svelte-1if6t3y"}">T\xE9cnico en administraci\xF3n de redes</li>
        <li class="${"svelte-1if6t3y"}">T\xE9cnico en administraci\xF3n de sistemas</li>
        <li class="${"svelte-1if6t3y"}">T\xE9cnico en administraci\xF3n en bases de datos</li>
        <li class="${"svelte-1if6t3y"}">T\xE9cnico en administraci\xF3n en bases de datos</li>
        <li class="${"svelte-1if6t3y"}">T\xE9cnico en desarrollo e implementaci\xF3n de aplicaciones web front-end y back-end</li>
        <li class="${"svelte-1if6t3y"}">T\xE9cnico en servicios de comunicaciones</li>
        <li class="${"svelte-1if6t3y"}">Responsable de servicio de inform\xE1tica</li>
        <li class="${"svelte-1if6t3y"}">Servicios de soporte a usuarios</li>
        <li class="${"svelte-1if6t3y"}">Personal de apoyo t\xE9cnico</li></ul>`;
    },
    slotSalidasAcademicas: () => {
      return `<ul slot="${"slotSalidasAcademicas"}" class="${"lista svelte-1if6t3y"}"><li class="${"svelte-1if6t3y"}">Acceso a carreras universitarias: Ingenier\xEDa Inform\xE1tica</li>
        <li class="${"svelte-1if6t3y"}">Acceso a otros grados superiores</li></ul>`;
    },
    slotListaRequisitos: () => {
      return `<ul slot="${"slotListaRequisitos"}" class="${"lista svelte-1if6t3y"}"><li class="${"svelte-1if6t3y"}">T\xEDtulo de Bachillerato</li>
        <li class="${"svelte-1if6t3y"}">T\xEDtulo de t\xE9cnico especialista (FP de Grado Medio) o de t\xE9cnico superior (FP de Grado Superior)</li>
        <li class="${"svelte-1if6t3y"}">T\xEDtulo universitario o haber superado la prueba de acceso a la universidad para mayores de 25 a\xF1os</li></ul>`;
    },
    slotIconosRamas: () => {
      return `<div slot="${"slotIconosRamas"}" class="${"iconosRamas svelte-1if6t3y"}"><div class="${"iconoRama svelte-1if6t3y"}"><img src="${"/img/ciclos/asir/sistemas.svg"}" alt="${"Administraci\xF3n de Sistemas"}" class="${"svelte-1if6t3y"}">
            <p class="${"svelte-1if6t3y"}">Administraci\xF3n de Sistemas</p></div>
        <div class="${"iconoRama svelte-1if6t3y"}"><img src="${"/img/ciclos/asir/basesdedatos.svg"}" alt="${"Gesti\xF3n y Administraci\xF3n de Bases de Datos"}" class="${"svelte-1if6t3y"}">
            <p class="${"svelte-1if6t3y"}">Gesti\xF3n y Administraci\xF3n de Bases de Datos</p></div>
        <div class="${"iconoRama svelte-1if6t3y"}"><img src="${"/img/ciclos/asir/gestionredes.svg"}" alt="${"Gesti\xF3n y Administraci\xF3n de Redes"}" class="${"svelte-1if6t3y"}">
            <p class="${"svelte-1if6t3y"}">Gesti\xF3n y Administraci\xF3n de Redes</p></div>
        <div class="${"iconoRama svelte-1if6t3y"}"><img src="${"/img/ciclos/asir/seguridadyredes.svg"}" alt="${"Seguridad de Sistemas y Redes"}" class="${"svelte-1if6t3y"}">
            <p class="${"svelte-1if6t3y"}">Seguridad de Sistemas y Redes</p></div>
        <div class="${"iconoRama svelte-1if6t3y"}"><img src="${"/img/ciclos/asir/webapp.svg"}" alt="${"Desarrollo e Implementaci\xF3n de Aplicaciones Web"}" class="${"svelte-1if6t3y"}">
            <p class="${"svelte-1if6t3y"}">Desarrollo e Implementaci\xF3n de Aplicaciones Web</p></div></div>`;
    },
    slotTextoPorq: () => {
      return `<div slot="${"slotTextoPorq"}" class="${"textoPorq svelte-1if6t3y"}"><p>La alta demanda de profesionales en las tecnolog\xEDas relacionadas con la gesti\xF3n de computadoras, redes, bases de datos y sistemas operativos, as\xED como el desarrollo y administraci\xF3n de aplicaciones de todo tipo, hace de estos estudios, unos de los m\xE1s solicitados a nivel laboral.</p>
        <br>
        <p>El ciclo permite conseguir las capacidades y habilidades que se requieren a un t\xE9cnico superior en administraci\xF3n de sistemas, redes y tecnolog\xEDas relacionadas con Internet.</p>
        <br>
        <p>Se recorren, durante los dos a\xF1os de duraci\xF3n del ciclo, el funcionamiento de las redes, tanto locales como de \xE1rea global (especialmente Internet), el dise\xF1o, manejo y administraci\xF3n de sistemas de bases de datos, la administraci\xF3n de sistemas operativos de servidor, virtualizaci\xF3n de sistemas, desarrollo e implementaci\xF3n de aplicaciones web, seguridad de sistemas, gesti\xF3n y administraci\xF3n de servicios de red, etc.</p></div>`;
    },
    slotImagenPorq: () => {
      return `<img slot="${"slotImagenPorq"}" src="${"/img/ciclos/asir/asir00.jpg"}" alt="${"Administraci\xF3n de Sistemas Inform\xE1ticos en Red"}">`;
    }
  })}`;
});
export { Asir as default };
