import { c as create_ssr_component } from "../../../chunks/index-ff6ac367.js";
var ciclos = "";
var telecomunicaciones_svelte_svelte_type_style_lang = "";
const css = {
  code: '.fondo.svelte-b3vpeq{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/ciclos/teleco/fondo-teleco.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1}',
  map: null
};
const Telecomunicaciones = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main>${slots.slotFondo ? slots.slotFondo({}) : `
        <div class="${"fondo svelte-b3vpeq"}"></div>
    `}
    <section class="${"titulo"}"><div class="${"tituloFP"}">
            ${slots.slotNombreFP ? slots.slotNombreFP({}) : `
                <h1>Instalaciones de Telecomunicaciones</h1>
            `}
            ${slots.slotTipoFP ? slots.slotTipoFP({}) : `
                <h2>FP de Grado Medio</h2>
            `}</div></section>
    <section class="${"porque"}"><div class="${"imagenPq"}"><figure>${slots.slotImagenPorq ? slots.slotImagenPorq({}) : `
                    <img src="${"/img/ciclos/teleco/teleco00.jpg"}" alt="${"Telecomunicaciones"}">
                `}</figure></div>
        <div class="${"textoPq"}"><h2>\xBFPor qu\xE9 estudiar este ciclo?</h2>
            ${slots.slotTextoPorq ? slots.slotTextoPorq({}) : `
                <div><p>Los estudios de telecomunicaciones permiten formarse en un \xE1rea de alta demanda laboral. Se trata de una formaci\xF3n para personal muy polifac\xE9tico capaz de cubrir las necesidades de un gran n\xFAmero de puestos de trabajo relacionados con la tecnolog\xEDa.</p>
                    <br>
                    <p>El ciclo permite conseguir las capacidades y habilidades que se requieren a un t\xE9cnico en instalaciones de telecomunicaciones.</p>
                    <br>
                    <p>En los dos a\xF1os de duraci\xF3n del ciclo aprender\xE1s lo relativo a:</p></div>
            `}</div></section>
    <section class="${"ramasProf"}"><div class="${"textoRamas"}"><h1>RAMAS PROFESIONALES</h1>
            ${slots.slotIconosRamas ? slots.slotIconosRamas({}) : `
                <div class="${"iconosRamas"}"><div class="${"iconoRama"}"><img src="${"/img/ciclos/teleco/sistemasinformaticos.png"}" alt="${"Sistemas y Equipos Inform\xE1ticos"}">
                        <p>Sistemas y Equipos Inform\xE1ticos</p></div>
                    <div class="${"iconoRama"}"><img src="${"/img/ciclos/teleco/domotica.png"}" alt="${"Dom\xF3tica"}">
                        <p>Dom\xF3tica</p></div>
                    <div class="${"iconoRama"}"><img src="${"/img/ciclos/teleco/sistemasaudio.png"}" alt="${"Sistemas de audio y video"}">
                        <p>Sistemas de audio y video</p></div>
                    <div class="${"iconoRama"}"><img src="${"/img/ciclos/teleco/infraestructurastelco.png"}" alt="${"Infraestructuras de telecomunicaciones"}">
                        <p>Infraestructuras de telecomunicaciones</p></div></div>
            `}</div></section>
    <section class="${"aspectosDest"}"><div class="${"tituloAspectos"}"><h1>ASPECTOS DESTACABLES</h1></div>
        <div class="${"listasAspectos"}"><div class="${"listasAspectosDest"}"><ul class="${"tituloLista"}"><li>Requisitos de acceso</li></ul>
                <p>Hay que cumplir uno de estos requisitos:</p>
                ${slots.slotListaRequisitos ? slots.slotListaRequisitos({}) : `
                    <ul class="${"lista"}"><li>T\xEDtulo de Educaci\xF3n Secundaria obligatoria</li>
                        <li>T\xEDtulo de Formaci\xF3n Profesional B\xE1sica</li>
                        <li>T\xEDtulo de T\xE9cnico o de T\xE9cnico Auxiliar o equivalente a efectos acad\xE9micos</li>
                        <li>Haber superado el segundo curso de Bachillerato Unificado y Polivalente (BUP)</li>
                        <li>Haber superado la prueba de acceso a la Universidad para mayores de 25 a\xF1os</li>
                        <li>Haber superado la prueba de acceso a ciclos formativos de grado medio (se requerir\xE1 tener, al menos, diecisiete a\xF1os, cumplidos en el a\xF1o de realizaci\xF3n de la prueba)</li></ul>
                `}</div>
            <div class="${"listasAspectosDest"}"><ul class="${"tituloLista"}"><li>Salidas Acad\xE9micas</li></ul>
                ${slots.slotSalidasAcademicas ? slots.slotSalidasAcademicas({}) : `
                    <ul class="${"lista"}"><li>Acceso a otros ciclos de FP (incluido grado superior) con posibilidad de convalidar algunas materias</li>
                        <li>Acceso a cursos de especializaci\xF3n profesional</li>
                        <li>Acceso a cualquier modalidad de Bachillerato</li></ul>
                `}</div>
            <div class="${"listasAspectosDest"}"><ul class="${"tituloLista"}"><li>Salidas Profesionales</li></ul>
                ${slots.slotSalidasProf ? slots.slotSalidasProf({}) : `
                    <ul class="${"lista"}"><li>Instalaci\xF3n de seguridad</li>
                        <li>Instalaci\xF3n y mantenimiento de sistemas inform\xE1ticos</li>
                        <li>Instalaci\xF3n de telecomunicaciones en en edificios de viviendas</li>
                        <li>Instalaci\xF3n de antenas</li>
                        <li>Instalaci\xF3n de telefon\xEDa</li>
                        <li>Mantenimiento en instalaciones de sonido</li>
                        <li>Instalaci\xF3n de sistemas de megafon\xEDa</li>
                        <li>Mantenimiento de sistemas dom\xF3ticos</li>
                        <li>Instalaci\xF3n y mantenimiento de sistemas de radio difusi\xF3n</li></ul>
                `}</div></div></section>
    <section class="${"galFotos"}">${slots.slotFotos ? slots.slotFotos({}) : `
            <div class="${"fotos"}"><figure><img src="${"/img/ciclos/teleco/teleco01.jpg"}" alt="${"foto1"}"></figure>
                <figure><img src="${"/img/ciclos/teleco/teleco02.jpg"}" alt="${"foto2"}"></figure>
                <figure><img src="${"/img/ciclos/teleco/teleco03.jpg"}" alt="${"foto3"}"></figure>
                <figure><img src="${"/img/ciclos/teleco/teleco04.jpg"}" alt="${"foto4"}"></figure></div>
        `}</section>
    <section class="${"modulos"}"><div class="${"tituloModulos"}"><h1>M\xD3DULOS DEL CICLO</h1></div>
        <div class="${"cursosListas"}"><div class="${"materias"}"><h2>Primer Curso</h2>
            ${slots.slotModulosPrimero ? slots.slotModulosPrimero({}) : `
                <div class="${"materiasLista"}"><ul><li>Electr\xF3nica aplicada</li>
                        <li>Equipos microinform\xE1ticos</li>
                        <li>Infraestructuras de redes de datos y sistemas de telefon\xEDa</li>
                        <li>Instalaciones el\xE9ctricas b\xE1sicas</li>
                        <li>Instalaciones de radiocomunicaciones</li>
                        <li>Formaci\xF3n y orientaci\xF3n laboral</li></ul></div>
            `}</div>
            <div class="${"materias"}"><h2>Segundo Curso</h2>
            ${slots.slotModulosSegundo ? slots.slotModulosSegundo({}) : `
                <div class="${"materiasLista"}"><ul><li>Infraestructuras comunes de telecomunicaci\xF3n en viviendas y edificios</li>
                        <li>Instalaciones dom\xF3ticas</li>
                        <li>Instalaciones de megafon\xEDa y sonorizaci\xF3n</li>
                        <li>Circuito cerrado de televisi\xF3n y seguridad electr\xF3nica</li>
                        <li>Empresa e iniciativa emprendedora</li>
                        <li>Formaci\xF3n en Centros de Trabajo</li></ul></div>
            `}</div></div></section>
</main>`;
});
export { Telecomunicaciones as default };
