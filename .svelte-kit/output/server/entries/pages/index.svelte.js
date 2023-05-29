import { c as create_ssr_component, b as createEventDispatcher, a as add_attribute, d as each, e as escape, n as null_to_empty, v as validate_component } from "../../chunks/index-ff6ac367.js";
import "siema";
var portada_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".tabNews.svelte-f52e85.svelte-f52e85{position:absolute;top:30px;right:50px;width:500px;height:200px;border:1px solid white}.tabNews.svelte-f52e85 h2.svelte-f52e85{background-color:white;color:rgba(0,0,0,0.5);text-align:center;height:1.5em;line-height:1.5em;font-family:'Decima Nova Pro', sans-serif}.lema.svelte-f52e85.svelte-f52e85{position:absolute;top:320px;left:75px;font-family:'Decima Nova Pro', sans-serif;color:#FFF;letter-spacing:1px}.lema.svelte-f52e85 h1.svelte-f52e85{padding:0 0 30px;font-size:4em;font-weight:300}.lema.svelte-f52e85 h2.svelte-f52e85{font-size:2em;font-weight:300}",
  map: null
};
const Portada = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<div class="${"tabNews svelte-f52e85"}"><h2 class="${"svelte-f52e85"}">\xDALTIMAS NOTICIAS</h2></div>
<div class="${"lema svelte-f52e85"}"><h1 class="${"svelte-f52e85"}">Excelencia adaptada <br>a cada estudiante</h1>
    <h2 class="${"svelte-f52e85"}">En b\xFAsqueda permanente de nuevos caminos que permitan el \xE9xito educativo</h2>
</div>`;
});
var carousel_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".carousel.svelte-18ji6s.svelte-18ji6s{position:relative;left:10%;width:80%;justify-content:center;align-items:center}button.svelte-18ji6s.svelte-18ji6s{position:absolute;width:40px;height:40px;top:50%;z-index:50;margin-top:-20px;border:none;background-color:transparent}button.svelte-18ji6s.svelte-18ji6s:focus{outline:none}.left.svelte-18ji6s.svelte-18ji6s{left:2vw}.right.svelte-18ji6s.svelte-18ji6s{right:2vw}ul.svelte-18ji6s.svelte-18ji6s{list-style-type:none;position:absolute;display:flex;justify-content:center;width:100%;margin-top:-30px;padding:0}ul.svelte-18ji6s li.svelte-18ji6s{margin:6px;border-radius:100%;background-color:rgba(255,255,255,0.5);height:8px;width:8px}ul.svelte-18ji6s li.svelte-18ji6s:hover{background-color:rgba(255,255,255,0.85)}ul.svelte-18ji6s li.active.svelte-18ji6s{background-color:rgba(255,255,255,1)}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pips;
  let currentPerPage;
  let totalDots;
  let { perPage = 4 } = $$props;
  let { loop = true } = $$props;
  let { autoplay = 0 } = $$props;
  let { duration = 500 } = $$props;
  let { easing = "ease-out" } = $$props;
  let { startIndex = 0 } = $$props;
  let { draggable = false } = $$props;
  let { multipleDrag = false } = $$props;
  let { dots = false } = $$props;
  let { controls = true } = $$props;
  let { threshold = 20 } = $$props;
  let { rtl = false } = $$props;
  let currentIndex = startIndex;
  let siema;
  let controller;
  let timer;
  createEventDispatcher();
  function isDotActive(currentIndex2, dotIndex) {
    if (currentIndex2 < 0)
      currentIndex2 = pips.length + currentIndex2;
    return currentIndex2 >= dotIndex * currentPerPage && currentIndex2 < dotIndex * currentPerPage + currentPerPage;
  }
  function left() {
    controller.prev();
  }
  function right() {
    controller.next();
  }
  function go(index) {
    controller.goTo(index);
  }
  function pause() {
    clearInterval(timer);
  }
  function resume() {
    if (autoplay) {
      timer = setInterval(right, autoplay);
    }
  }
  if ($$props.perPage === void 0 && $$bindings.perPage && perPage !== void 0)
    $$bindings.perPage(perPage);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0)
    $$bindings.autoplay(autoplay);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.easing === void 0 && $$bindings.easing && easing !== void 0)
    $$bindings.easing(easing);
  if ($$props.startIndex === void 0 && $$bindings.startIndex && startIndex !== void 0)
    $$bindings.startIndex(startIndex);
  if ($$props.draggable === void 0 && $$bindings.draggable && draggable !== void 0)
    $$bindings.draggable(draggable);
  if ($$props.multipleDrag === void 0 && $$bindings.multipleDrag && multipleDrag !== void 0)
    $$bindings.multipleDrag(multipleDrag);
  if ($$props.dots === void 0 && $$bindings.dots && dots !== void 0)
    $$bindings.dots(dots);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.rtl === void 0 && $$bindings.rtl && rtl !== void 0)
    $$bindings.rtl(rtl);
  if ($$props.isDotActive === void 0 && $$bindings.isDotActive && isDotActive !== void 0)
    $$bindings.isDotActive(isDotActive);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  if ($$props.resume === void 0 && $$bindings.resume && resume !== void 0)
    $$bindings.resume(resume);
  $$result.css.add(css$7);
  pips = [];
  currentPerPage = perPage;
  totalDots = [];
  return `

<div class="${"carousel svelte-18ji6s"}"><div class="${"slides"}"${add_attribute("this", siema, 0)}>${slots.default ? slots.default({}) : ``}</div>
    ${controls ? `<button class="${"left svelte-18ji6s"}" aria-label="${"left"}">${slots["left-control"] ? slots["left-control"]({}) : ``}</button>
        <button class="${"right svelte-18ji6s"}" aria-label="${"right"}">${slots["right-control"] ? slots["right-control"]({}) : ``}</button>` : ``}
    ${dots ? `<ul class="${"svelte-18ji6s"}">${each({ length: totalDots }, (_, i) => {
    return `<li class="${escape(null_to_empty(isDotActive(currentIndex, i) ? "active" : ""), true) + " svelte-18ji6s"}"></li>`;
  })}</ul>` : ``}
</div>`;
});
var carruselnoticias_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: `@font-face{font-family:"Decima Nova Pro", sans-serif;src:url('/fonts/DecimaNovaPro.otf')}.carrusel.svelte-1eq7uvi.svelte-1eq7uvi{width:280px;height:70vh;background-color:rgb(255,255,255);opacity:0.7;border-radius:10px;margin-left:10%;transition:opacity 1s}.carrusel.svelte-1eq7uvi.svelte-1eq7uvi:hover{opacity:1;cursor:pointer}.fotoC.svelte-1eq7uvi.svelte-1eq7uvi{position:relative;top:10px;width:calc(100% - 20px);height:calc(50% - 20px);margin:10px}.fotoC.svelte-1eq7uvi img.svelte-1eq7uvi{image-resolution:normal;width:100%;height:100%;border-radius:10px 10px 0 0}.contResumen.svelte-1eq7uvi.svelte-1eq7uvi{position:relative;top:0;left:0;width:100%;height:100%}.tituloN.svelte-1eq7uvi.svelte-1eq7uvi{position:relative;top:10px;margin:0 10px;height:100px}.tituloN.svelte-1eq7uvi h2.svelte-1eq7uvi{font-size:1.5em;font-weight:bolder}.noticiaResumen.svelte-1eq7uvi.svelte-1eq7uvi{position:relative;top:20px;left:5%;width:90%;height:20%;text-align:left}.noticiaResumen.svelte-1eq7uvi>p.svelte-1eq7uvi{color:black}.irNoticia.svelte-1eq7uvi.svelte-1eq7uvi{position:relative;top:30px;left:15%;text-align:center;width:70%;height:10%;background-color:#51626f;border-radius:10px;line-height:1em}.irNoticia.svelte-1eq7uvi>p.svelte-1eq7uvi{font-size:1.3em;line-height:3em;color:white}.flechaIzq.svelte-1eq7uvi.svelte-1eq7uvi{position:relative;top:0;left:-100px;width:70px;display:inline-block;margin-top:0;opacity:0.5;transition:opacity 1s}.flechaDcha.svelte-1eq7uvi.svelte-1eq7uvi{position:relative;top:0;left:60px;width:70px;display:inline-block;margin-top:0;opacity:0.5;transition:opacity 1s}.flechaIzq.svelte-1eq7uvi.svelte-1eq7uvi:hover,.flechaDcha.svelte-1eq7uvi.svelte-1eq7uvi:hover{opacity:1;cursor:pointer}.flechaIzq.svelte-1eq7uvi>img.svelte-1eq7uvi{width:100%;fill:#dc001b}`,
  map: null
};
const Carruselnoticias = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const imgN = [
    {
      path: "/img/noticias/admision.jpg",
      alt: "admision.jpg",
      id: "imageN1",
      ruta: "../estudios/eso",
      titulo: "Listados con las admisiones en ciclos de FP",
      resumen: "Acceso a las admisiones (a fecha de 21 de julio) en los Ciclos Formativos de Formaci\xF3n Profesional"
    },
    {
      path: "/img/noticias/admisiones-ESO.jpeg",
      alt: "admisiones-ESO.jpeg",
      id: "imageN2",
      ruta: "../privacidad",
      titulo: "Periodo de admisiones ESO",
      resumen: "Abierto el periodo de admisiones para la ESO. Del 18 de marzo al 6 de abril, en la secretar\xEDa del Centro Don Bosco de 9:30h a 13:30h. Tel\xE9fono: 979777270"
    },
    {
      path: "/img/noticias/cartel-1-mayo.jpeg",
      alt: "noticiaImg3",
      id: "imageN3",
      ruta: "../noticias/2022/1-de-mayo",
      titulo: "XXXIX Peregrinaci\xF3n de Palencia a Villamuriel",
      resumen: "Despu\xE9s de estos dos a\xF1os de pandemia retomamos con muchocari\xF1o el Homenaje a Mar\xEDa Auxiliadora el s\xE1bado 30 de abril y laXXXIX Fiesta-peregrinaci\xF3n el 1 de mayo"
    },
    {
      path: "/img/noticias/cartel-jornadas-innovacion.jpg",
      alt: "noticiaImg4",
      id: "imageN4",
      ruta: "",
      titulo: "Jornadas de Innovaci\xF3n empresarial",
      resumen: "Los d\xEDas 25 y 26 de mayo hemos celebrado unas Jornadas Formativas de Innovaci\xF3n Empresarial para nuestros alumnos de Formaci\xF3n Profesional"
    },
    {
      path: "/img/noticias/graduacion-22-00.jpg",
      alt: "noticiaImg5",
      id: "imageN5",
      ruta: "",
      titulo: "Graduaci\xF3n, curso 2021/22",
      resumen: "El pasado 3 de Junio celebramos la graduaci\xF3n de nuestro alumnado tanto de secundaria como de ciclos formativos"
    },
    {
      path: "/img/noticias/info-solicitudes-fp.jpg",
      alt: "noticiaImg6",
      id: "imageN6",
      ruta: "",
      titulo: "Solicitudes para ciclos de FP",
      resumen: "Te explicamos como realizar la solicitud para estudiar un ciclo formativo de FP con nosotros y el material que se necesita para estudiar"
    }
  ];
  $$result.css.add(css$6);
  return `


${validate_component(Carousel, "Carousel").$$render($$result, { autoplay: "3000" }, {}, {
    "right-control": () => {
      return `<div class="${"flechaDcha svelte-1eq7uvi"}" slot="${"right-control"}"><img src="${"/img/right-arrow-svgrepo-com-white.svg"}" alt="${"noticia siguiente"}"></div>`;
    },
    "left-control": () => {
      return `<div class="${"flechaIzq svelte-1eq7uvi"}" slot="${"left-control"}"><img src="${"/img/left-arrow-svgrepo-com-white.svg"}" alt="${"noticia anterior"}" class="${"svelte-1eq7uvi"}"></div>`;
    },
    default: () => {
      return `${each(imgN, (imageN) => {
        return `<div class="${"carrusel svelte-1eq7uvi"}"><div class="${"fotoC svelte-1eq7uvi"}"><img${add_attribute("src", imageN.path, 0)}${add_attribute("alt", imageN.alt, 0)} class="${"svelte-1eq7uvi"}"></div>
            <div class="${"contResumen svelte-1eq7uvi"}"><div class="${"tituloN svelte-1eq7uvi"}"><h2 class="${"svelte-1eq7uvi"}">${escape(imageN.titulo)}</h2></div>
                <div class="${"noticiaResumen svelte-1eq7uvi"}"><p class="${"svelte-1eq7uvi"}">${escape(imageN.resumen)}</p></div>
                <div class="${"irNoticia svelte-1eq7uvi"}"><p class="${"svelte-1eq7uvi"}">ir a la noticia</p>
                </div></div>
        </div>`;
      })}`;
    }
  })}`;
});
var noticias_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "h1.svelte-cm3t7a{padding:50px;font-size:4em;font-family:'Decima Nova Pro', sans-serif;font-weight:300;color:white}.vertodasnoticias.svelte-cm3t7a{position:relative;top:75px;left:calc(50% - 150px);width:300px;height:70px;background-color:#51626f;border-radius:10px;line-height:70px;font-size:1.3em;color:white;letter-spacing:2px}.vertodasnoticias.svelte-cm3t7a:hover{background-color:#6d819a;cursor:pointer}",
  map: null
};
const Noticias = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<h1 class="${"svelte-cm3t7a"}">NOTICIAS</h1>
${validate_component(Carruselnoticias, "Carrusel").$$render($$result, {}, {}, {})}
<div class="${"vertodasnoticias svelte-cm3t7a"}"><p>VER TODAS LAS NOTICIAS</p>
</div>`;
});
var componentemetodo_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".vermasmetodo.svelte-fye2wb.svelte-fye2wb:hover{background-color:#6d819a;cursor:pointer}h1.svelte-fye2wb.svelte-fye2wb{text-align:center;position:relative;color:#51626f;font-size:4em;font-weight:lighter;line-height:2em}.filaMetodo.svelte-fye2wb.svelte-fye2wb{position:relative;display:flex;justify-content:center;align-items:center}.metodoIzq.svelte-fye2wb.svelte-fye2wb,.metodoDcha.svelte-fye2wb.svelte-fye2wb{display:flex;align-items:center}.metodoIzq.svelte-fye2wb.svelte-fye2wb{text-align:right}.filaMetodo.svelte-fye2wb img.svelte-fye2wb{width:150px;height:150px;margin:30px}.vermasmetodo.svelte-fye2wb.svelte-fye2wb{position:relative;left:calc(50% - 350px);width:700px;background-color:#51626f;text-align:center;border-radius:10px;font-size:2em;line-height:2em;margin:1em 0 2em ;color:white}",
  map: null
};
const Componentemetodo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<h1 class="${"svelte-fye2wb"}">\xBFQUI\xC9NES SOMOS?</h1>
<div class="${"filaMetodo svelte-fye2wb"}"><div class="${"metodoIzq svelte-fye2wb"}"><p>Eliminamos la barrera profesorr/alumno<br>Nos adelantamos a los problemas<br>Siempre estamos disponibles</p>
        <img src="${"/img/indeximg/cercanos.jpg"}" alt="${"Cercanos"}" class="${"svelte-fye2wb"}"></div>
    <div class="${"metodoDcha svelte-fye2wb"}"><img src="${"/img/indeximg/motivados.jpg"}" alt="${"Motivados"}" class="${"svelte-fye2wb"}">
        <p>Somos un equipo ilusionado<br>Rebosantes de entusiasmo<br>Creemos en lo que hacemos</p></div></div>
<div class="${"filaMetodo svelte-fye2wb"}"><div class="${"metodoIzq svelte-fye2wb"}"><p>Aplicamos metodolog\xEDas activas<br>Usamos la tecnolog\xEDa en nuestro provecho<br>Aplicamos las mejores t\xE9cnicas de ense\xF1anza</p>
        <img src="${"/img/indeximg/innovadores.jpg"}" alt="${"Innovadores"}" class="${"svelte-fye2wb"}"></div>
    <div class="${"metodoDcha svelte-fye2wb"}"><img src="${"/img/indeximg/implicados.jpg"}" alt="${"Implicados"}" class="${"svelte-fye2wb"}">
        <p>Creemos en lo que hacemos<br>Comprometidos a todos los niveles<br>Educamos en valores</p></div></div>
<div class="${"vermasmetodo svelte-fye2wb"}"><p>VER M\xC1S SOBRE NUESTRO M\xC9TODO EDUCATIVO</p>
</div>`;
});
var fichaoferta_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".contFichas.svelte-14z1tlt.svelte-14z1tlt{position:relative;display:flex;justify-content:center;align-items:center;margin:40px}.filaFichas.svelte-14z1tlt.svelte-14z1tlt{display:flex;align-items:center}.card.svelte-14z1tlt.svelte-14z1tlt{width:350px;height:360px;background-color:rgb(255,255,255);opacity:0.8;border-radius:15px;margin:0 15px;transition:opacity 500ms;color:#4a8089}.card.svelte-14z1tlt.svelte-14z1tlt:hover{opacity:1;cursor:pointer}.card.svelte-14z1tlt>img.svelte-14z1tlt{width:310px;margin:20px;border-radius:10px 10px 0 0 }.nombreOferta.svelte-14z1tlt.svelte-14z1tlt{margin:0 20px;text-align:center}.nombreOferta.svelte-14z1tlt>h2.svelte-14z1tlt{font-size:2em;font-weight:lighter}.nombreOferta.svelte-14z1tlt>h3.svelte-14z1tlt{margin-top:0.5em;line-height:1.5em;font-weight:lighter;font-size:1.3em}",
  map: null
};
let GM = "FP Grado Medio";
const Fichaoferta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ficha1 = [
    {
      src: "/img/estudios/eso.jpg",
      alt: "ESO",
      ruta: "../estudios/eso",
      tipo: "ESO",
      nombre: "Educaci\xF3n Secundaria Obligatoria"
    },
    {
      src: "/img/estudios/fpb.jpg",
      alt: "Mantenimientodeveh\xEDculos",
      ruta: "../estudios/mantenimiento",
      tipo: "FP B\xE1sica",
      nombre: "Mantenimiento de veh\xEDculos"
    },
    {
      src: "/img/estudios/electromecanica.jpg",
      alt: "Electromec\xE1nica de veh\xEDculos",
      ruta: "../estudios/electromecanica",
      tipo: GM,
      nombre: "Electromec\xE1nica de veh\xEDculos"
    }
  ];
  const ficha2 = [
    {
      src: "/img/estudios/carroceria.jpg",
      alt: "Carrocer\xEDa",
      ruta: "../estudios/carroceria",
      tipo: GM,
      nombre: "Carrocer\xEDa"
    },
    {
      src: "/img/estudios/teleco.jpg",
      alt: "Telecomunicaciones",
      ruta: "../estudios/telecomunicaciones",
      tipo: GM,
      nombre: "Telecomunicaciones"
    },
    {
      src: "/img/estudios/asir.jpg",
      alt: "ASIR",
      ruta: "../estudios/asir",
      tipo: "Grado Superior",
      nombre: "ASIR"
    }
  ];
  $$result.css.add(css$3);
  return `<div class="${"contFichas svelte-14z1tlt"}">${each(ficha1, (ficha) => {
    return `<div class="${"filaFichas svelte-14z1tlt"}"><div class="${"card svelte-14z1tlt"}"><img${add_attribute("src", ficha.src, 0)}${add_attribute("alt", ficha.alt, 0)} class="${"svelte-14z1tlt"}">
            <div class="${"nombreOferta svelte-14z1tlt"}"><h2 class="${"svelte-14z1tlt"}">${escape(ficha.tipo)}</h2>
                <h3 class="${"svelte-14z1tlt"}">${escape(ficha.nombre)}</h3>
            </div></div>
    </div>`;
  })}</div>
<div class="${"contFichas svelte-14z1tlt"}">${each(ficha2, (ficha) => {
    return `<div class="${"filaFichas svelte-14z1tlt"}"><div class="${"card svelte-14z1tlt"}"><img${add_attribute("src", ficha.src, 0)}${add_attribute("alt", ficha.alt, 0)} class="${"svelte-14z1tlt"}">
            <div class="${"nombreOferta svelte-14z1tlt"}"><h2 class="${"svelte-14z1tlt"}">${escape(ficha.tipo)}</h2>
                <h3 class="${"svelte-14z1tlt"}">${escape(ficha.nombre)}</h3>
            </div></div>
    </div>`;
  })}
</div>`;
});
var fichaservicio_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".fichasContenedor.svelte-1w21v7d.svelte-1w21v7d{position:relative;display:flex;justify-content:center;align-items:center;width:100%;overflow:hidden}.contFichasS.svelte-1w21v7d.svelte-1w21v7d{display:flex;align-items:center}.fichasServicio.svelte-1w21v7d.svelte-1w21v7d{position:relative;width:200px;height:340px;background-color:white;opacity:0.6;transition:opacity 500ms;border-radius:15px;margin:15px}.fichasServicio.svelte-1w21v7d.svelte-1w21v7d:hover{opacity:1;cursor:pointer}.imgS.svelte-1w21v7d>img.svelte-1w21v7d{width:160px;margin:20px}.plataforma.svelte-1w21v7d.svelte-1w21v7d{width:calc(100% - 40px);margin:0 20px;text-align:center}.plataforma.svelte-1w21v7d>h2.svelte-1w21v7d{text-transform:uppercase;margin-bottom:10px;color:#4a8089;font-weight:lighter}",
  map: null
};
const Fichaservicio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const servicios = [
    {
      src: "/img/servicios/educamos.png",
      alt: "Plataforma Educamos",
      desc: "Seguimineto de la actividad educativa",
      ruta: "https://sso2.educamos.com/Autenticacion/Acceder?ReturnUrl=%2fissue%2fwsfed%3fwa%3dwsignin1.0%26wtrealm%3dhttps%253a%252f%252fdonbosco-salesianos-villamurieldecerrato.educamos.com%252f%26wctx%3drm%253d0%2526id%253dpassive%2526ru%253d%25252f%26wct%3d2017-03-16T07%253a36%253a30Z&wa=wsignin1.0&wtrealm=https%3a%2f%2fdonbosco-salesianos-villamurieldecerrato.educamos.com%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252f&wct=2017-03-16T07%3a36%3a30Z"
    },
    {
      src: "/img/servicios/google-classroom.svg",
      alt: "Google Classroom",
      desc: "Plataforma de trabajo en la nube de Google",
      ruta: "https://classroom.google.com/?emr=0"
    },
    {
      src: "/img/servicios/teams.svg",
      alt: "Microsoft Teams",
      desc: "Aulas virtuales para la secci\xF3n de FP",
      ruta: "https://teams.microsoft.com/"
    },
    {
      src: "/img/servicios/office.svg",
      alt: "Microsoft Office",
      desc: "Plataforma de trabajo en la nube de Microsoft",
      ruta: "https://www.office.com/login?es=Click&ru=%2F"
    },
    {
      src: "/img/servicios/casita.svg",
      alt: "Agencia de colocaci\xF3n",
      desc: "B\xFAsqueda de empleo de la red Salesianos",
      ruta: "http://salesianosvillamuriel.redagenciadecolocacion.com/"
    }
  ];
  $$result.css.add(css$2);
  return `<div class="${"fichasContenedor svelte-1w21v7d"}">${each(servicios, (servicio) => {
    return `<div class="${"contFichasS svelte-1w21v7d"}"><div class="${"fichasServicio svelte-1w21v7d"}"><div class="${"imgS svelte-1w21v7d"}"><img${add_attribute("src", servicio.src, 0)}${add_attribute("alt", servicio.alt, 0)} class="${"svelte-1w21v7d"}"></div>
                <div class="${"plataforma svelte-1w21v7d"}"><h2 class="${"svelte-1w21v7d"}">${escape(servicio.alt)}</h2>
                    <p>${escape(servicio.desc)}</p>
                </div></div>
        </div>`;
  })}
</div>`;
});
var fichamerito_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".contFichaMerito.svelte-1vohg7e.svelte-1vohg7e{position:relative;display:flex;justify-content:center;align-items:center;margin:50px}.filaFichasM.svelte-1vohg7e.svelte-1vohg7e{display:flex;align-items:center}.fichaMerito.svelte-1vohg7e.svelte-1vohg7e{width:400px;background-color:rgb(255,255,255);opacity:0.8;border-radius:15px;margin:0 15px;transition:opacity 500ms;color:#4a8089}.fichaMerito.svelte-1vohg7e.svelte-1vohg7e:hover{opacity:1;cursor:pointer}.imgM.svelte-1vohg7e>img.svelte-1vohg7e{width:calc(100% - 40px);margin:20px 20px 0;border-radius:10px 10px 0 0 }.textoMerito.svelte-1vohg7e.svelte-1vohg7e{margin:0 20px 20px;text-align:center}",
  map: null
};
const Fichamerito = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fichaMerito1 = [
    {
      src: "/img/meritos/tic5.png",
      alt: "TIC 5",
      descr: "M\xE1xima certificaci\xF3n en TIC",
      ruta: ""
    },
    {
      src: "/img/meritos/dual.svg",
      alt: "FP Dual",
      descr: "Programa dual escuela/empresa",
      ruta: ""
    }
  ];
  let fichaMerito2 = [
    {
      src: "/img/meritos/erasmus-plus.png",
      alt: "Erasmus Plus",
      descr: "",
      ruta: ""
    },
    {
      src: "/img/meritos/excelencia.svg",
      alt: "Centro de Excelencia de Alto Nivel",
      descr: "Cerifiaci\xF3n m\xE1s alta comocentro de excelencia en FP",
      ruta: ""
    }
  ];
  $$result.css.add(css$1);
  return `<div class="${"contFichaMerito svelte-1vohg7e"}">${each(fichaMerito1, (fichaM1) => {
    return `<div class="${"filaFichasM svelte-1vohg7e"}"><div class="${"fichaMerito svelte-1vohg7e"}"><div class="${"imgM svelte-1vohg7e"}"><img${add_attribute("src", fichaM1.src, 0)}${add_attribute("alt", fichaM1.alt, 0)} class="${"svelte-1vohg7e"}"></div>
              <div class="${"textoMerito svelte-1vohg7e"}"><h2>${escape(fichaM1.alt)}</h2> <br>
                 <p>${escape(fichaM1.descr)}</p>
              </div></div>
        </div>`;
  })}</div>
<div class="${"contFichaMerito svelte-1vohg7e"}">${each(fichaMerito2, (fichaM2) => {
    return `<div class="${"filaFichasM svelte-1vohg7e"}"><div class="${"fichaMerito svelte-1vohg7e"}"><div class="${"imgM svelte-1vohg7e"}"><img${add_attribute("src", fichaM2.src, 0)}${add_attribute("alt", fichaM2.alt, 0)} class="${"svelte-1vohg7e"}"></div>
              <div class="${"textoMerito svelte-1vohg7e"}"><h2>${escape(fichaM2.alt)}</h2> <br>
                 <p>${escape(fichaM2.descr)}</p>
              </div></div>
        </div>`;
  })}
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:"Decima Nova Pro";src:url("/fonts/DecimaNovaPro.otf")}.svelte-12j68xu.svelte-12j68xu{font-family:"Decima Nova Pro", sans-serif}.fondo.svelte-12j68xu.svelte-12j68xu{position:fixed;top:0;left:0;width:100%;height:100vh;background-image:url("/img/fondo.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;z-index:-1}.portada.svelte-12j68xu.svelte-12j68xu{position:relative;top:0;left:0;width:100%;height:calc(100vh - 110px);background-color:rgba(0,0,0,.5)}.noticias.svelte-12j68xu.svelte-12j68xu{position:relative;top:0;left:0;width:100%;height:100%;text-align:center}.metodo.svelte-12j68xu.svelte-12j68xu{position:relative;top:145px;left:0 ;width:100%;padding-bottom:145px;background-color:#dad4cb}.ofertaedu.svelte-12j68xu.svelte-12j68xu{position:relative;top:145px;padding-bottom:145px}.ofertaedu.svelte-12j68xu h1.svelte-12j68xu{text-align:center;color:white;height:6em;font-size:6em;font-weight:lighter;display:grid;place-items:center}.servicios.svelte-12j68xu.svelte-12j68xu{position:relative;background-color:#dad4cb;width:100%;padding:80px 0}.servicios.svelte-12j68xu>h1.svelte-12j68xu{text-align:center;font-size:4em;font-weight:300;padding-bottom:50px;color:#51626f}.meritos.svelte-12j68xu h1.svelte-12j68xu{text-align:center;color:white;height:6em;font-size:6em;font-weight:lighter;display:grid;place-items:center}',
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"fondo svelte-12j68xu"}"></div>
    <section class="${"portada svelte-12j68xu"}">${validate_component(Portada, "Portada").$$render($$result, {}, {}, {})}</section>
    <section class="${"noticias svelte-12j68xu"}">${validate_component(Noticias, "Noticias").$$render($$result, {}, {}, {})}</section>
    <section class="${"metodo svelte-12j68xu"}">${validate_component(Componentemetodo, "Metodo").$$render($$result, {}, {}, {})}</section>
    <section class="${"ofertaedu svelte-12j68xu"}"><h1 class="${"svelte-12j68xu"}">OFERTA EDUCATIVA</h1>
        <div class="${"contOferta svelte-12j68xu"}">${validate_component(Fichaoferta, "FichaOferta").$$render($$result, {}, {}, {})}</div></section>
    <section class="${"servicios svelte-12j68xu"}"><h1 class="${"svelte-12j68xu"}">SERVICIOS</h1>
        ${validate_component(Fichaservicio, "FichaSeccionServicios").$$render($$result, {}, {}, {})}</section>
    <section class="${"meritos svelte-12j68xu"}"><h1 class="${"svelte-12j68xu"}">NUESTROS M\xC9RITOS</h1>
        ${validate_component(Fichamerito, "FichaMeritos").$$render($$result, {}, {}, {})}
    </section>`;
});
export { Routes as default };
