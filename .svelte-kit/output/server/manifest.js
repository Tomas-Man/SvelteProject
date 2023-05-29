export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","fonts/DecimaNovaPro.otf","fonts/DecimaNovaProBold.otf","fonts/DecimaNovaProBoldItal.otf","fonts/DecimaNovaProHeavy.otf","fonts/DecimaNovaProHeavyItal.otf","fonts/DecimaNovaProItal.otf","fonts/DecimaNovaProLight.otf","fonts/DecimaNovaProLightItal.otf","img/centro/2022-InformacionSolicitudes-FP.jpg","img/centro/FP-2021-online.jpg","img/centro/Listado-CFGM-Y-CFGS.jpg","img/centro/Listado-CGB.jpg","img/centro/documentos-fondo.jpg","img/ciclos/asir/asir00.jpg","img/ciclos/asir/asir01-larga.jpg","img/ciclos/asir/asir01.jpg","img/ciclos/asir/asir02-larga.jpg","img/ciclos/asir/asir02.jpg","img/ciclos/asir/asir03-larga.jpg","img/ciclos/asir/asir03.jpg","img/ciclos/asir/asir04-larga.jpg","img/ciclos/asir/asir04.jpg","img/ciclos/asir/basesdedatos.svg","img/ciclos/asir/fondo-asir.jpg","img/ciclos/asir/gestionredes.svg","img/ciclos/asir/seguridadyredes.svg","img/ciclos/asir/sistemas.svg","img/ciclos/asir/webapp.svg","img/ciclos/carroceria/carroceria00.jpg","img/ciclos/carroceria/carroceria01.jpg","img/ciclos/carroceria/carroceria02.jpg","img/ciclos/carroceria/carroceria03.jpg","img/ciclos/carroceria/carroceria04.jpg","img/ciclos/carroceria/embellecimiento.svg","img/ciclos/carroceria/fondo-carroceria.jpg","img/ciclos/carroceria/mecanica.svg","img/ciclos/carroceria/reparacion.svg","img/ciclos/electromecanica/electricidad.svg","img/ciclos/electromecanica/electromecanica00.jpg","img/ciclos/electromecanica/electromecanica01-larga.jpg","img/ciclos/electromecanica/electromecanica01.jpg","img/ciclos/electromecanica/electromecanica02-larga.jpg","img/ciclos/electromecanica/electromecanica02.jpg","img/ciclos/electromecanica/electromecanica03-larga.jpg","img/ciclos/electromecanica/electromecanica03.jpg","img/ciclos/electromecanica/electromecanica04-larga.jpg","img/ciclos/electromecanica/electromecanica04.jpg","img/ciclos/electromecanica/fondo-electromecanica.jpg","img/ciclos/eso/acompanamiento.png","img/ciclos/eso/aprendizColab.png","img/ciclos/eso/attDiversidad.png","img/ciclos/eso/coches.jpg","img/ciclos/eso/croma.jpg","img/ciclos/eso/ensenanzaValores.png","img/ciclos/eso/eso01.jpg","img/ciclos/eso/eso02.jpg","img/ciclos/eso/eso03.jpg","img/ciclos/eso/eso04.jpg","img/ciclos/eso/eso05.jpg","img/ciclos/eso/eso06.jpg","img/ciclos/eso/eso07.jpg","img/ciclos/eso/eso08.jpg","img/ciclos/eso/excelEdu.png","img/ciclos/eso/fondo-eso.jpg","img/ciclos/eso/valores.jpg","img/ciclos/mantenimiento/fpb01-larga.jpg","img/ciclos/mantenimiento/fpb01.jpg","img/ciclos/mantenimiento/fpb02-larga.jpg","img/ciclos/mantenimiento/fpb02.jpg","img/ciclos/mantenimiento/fpb03-larga.jpg","img/ciclos/mantenimiento/fpb03.jpg","img/ciclos/puntolista.svg","img/ciclos/requisitos.png","img/ciclos/salidas.png","img/ciclos/teleco/domotica.png","img/ciclos/teleco/fondo-teleco.jpg","img/ciclos/teleco/infraestructurastelco.png","img/ciclos/teleco/sistemasaudio.png","img/ciclos/teleco/sistemasinformaticos.png","img/ciclos/teleco/teleco00.jpg","img/ciclos/teleco/teleco01.jpg","img/ciclos/teleco/teleco02.jpg","img/ciclos/teleco/teleco03.jpg","img/ciclos/teleco/teleco04.jpg","img/escuela/erasmus/erasmus_SEPIe.jpeg","img/escuela/erasmus/europa.jpg","img/escuela/excelencia/FP_excelencia.jpeg","img/escuela/excelencia/fp-excelencia.jpg","img/escuela/excelencia/textura1.jpg","img/escuela/fpdual/dual.svg","img/escuela/fpdual/estudio-dual.jpg","img/escuela/fpdual/europa-impulsa.png","img/escuela/fpdual/informacionalumnado.jpg","img/escuela/fpdual/logo-junta.png","img/escuela/fpdual/solicitudfp.jpg","img/escuela/metodo/1a1.jpg","img/escuela/metodo/aprender.jpg","img/escuela/metodo/asir-rol.jpg","img/escuela/metodo/como-casa.jpg","img/escuela/metodo/familias.jpg","img/escuela/metodo/idea.jpg","img/escuela/metodo/lazo.jpeg","img/escuela/metodo/peatones.jpg","img/escuela/metodo/proyecto1.jpg","img/escuela/metodo/salto.jpg","img/estudios/asir.jpg","img/estudios/carroceria.jpg","img/estudios/electromecanica.jpg","img/estudios/eso.jpg","img/estudios/fpb.jpg","img/estudios/teleco.jpg","img/facebook.svg","img/flickr.svg","img/fondo.jpg","img/indeximg/cercanos.jpg","img/indeximg/implicados.jpg","img/indeximg/innovadores.jpg","img/indeximg/motivados.jpg","img/instagram.svg","img/left-arrow-svgrepo-com-white.svg","img/logo-grande.svg","img/mapa.jpg","img/markx.png","img/meritos/dual.svg","img/meritos/erasmus-plus.png","img/meritos/excelencia.svg","img/meritos/tic5.png","img/noticias/admision.jpg","img/noticias/admisiones-ESO.jpeg","img/noticias/cartel-1-mayo.jpeg","img/noticias/cartel-jornadas-innovacion.jpg","img/noticias/graduacion-22-00.jpg","img/noticias/info-solicitudes-fp.jpg","img/noticias/premio-innovacion.jpg","img/noticias/puertas-abiertas.jpg","img/noticias/video-excelencia.jpg","img/pastoral/n-mision.png","img/pastoral/n-valores.png","img/pastoral/n-vision.png","img/right-arrow-svgrepo-com-white.svg","img/servicios/casita.svg","img/servicios/educamos.png","img/servicios/google-classroom.svg","img/servicios/office.svg","img/servicios/teams.svg","img/twitter.svg","img/youtube.svg"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf",".jpg":"image/jpeg",".svg":"image/svg+xml",".jpeg":"image/jpeg"},
	_: {
		entry: {"file":"start-22126adf.js","js":["start-22126adf.js","chunks/index-1795299a.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "noticias",
				pattern: /^\/noticias\/?$/,
				names: [],
				types: [],
				path: "/noticias",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "privacidad",
				pattern: /^\/privacidad\/?$/,
				names: [],
				types: [],
				path: "/privacidad",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "centro/documentos-secretaria",
				pattern: /^\/centro\/documentos-secretaria\/?$/,
				names: [],
				types: [],
				path: "/centro/documentos-secretaria",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "centro/matriculacion",
				pattern: /^\/centro\/matriculacion\/?$/,
				names: [],
				types: [],
				path: "/centro/matriculacion",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "escuela/erasmus",
				pattern: /^\/escuela\/erasmus\/?$/,
				names: [],
				types: [],
				path: "/escuela/erasmus",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "escuela/excelencia",
				pattern: /^\/escuela\/excelencia\/?$/,
				names: [],
				types: [],
				path: "/escuela/excelencia",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "escuela/fp-dual",
				pattern: /^\/escuela\/fp-dual\/?$/,
				names: [],
				types: [],
				path: "/escuela/fp-dual",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "escuela/metodo",
				pattern: /^\/escuela\/metodo\/?$/,
				names: [],
				types: [],
				path: "/escuela/metodo",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "estudios/asir",
				pattern: /^\/estudios\/asir\/?$/,
				names: [],
				types: [],
				path: "/estudios/asir",
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				id: "estudios/carroceria",
				pattern: /^\/estudios\/carroceria\/?$/,
				names: [],
				types: [],
				path: "/estudios/carroceria",
				shadow: null,
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				id: "estudios/electromecanica",
				pattern: /^\/estudios\/electromecanica\/?$/,
				names: [],
				types: [],
				path: "/estudios/electromecanica",
				shadow: null,
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				id: "estudios/eso",
				pattern: /^\/estudios\/eso\/?$/,
				names: [],
				types: [],
				path: "/estudios/eso",
				shadow: null,
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				id: "estudios/mantenimiento",
				pattern: /^\/estudios\/mantenimiento\/?$/,
				names: [],
				types: [],
				path: "/estudios/mantenimiento",
				shadow: null,
				a: [0,15],
				b: [1]
			},
			{
				type: 'page',
				id: "estudios/telecomunicaciones",
				pattern: /^\/estudios\/telecomunicaciones\/?$/,
				names: [],
				types: [],
				path: "/estudios/telecomunicaciones",
				shadow: null,
				a: [0,16],
				b: [1]
			},
			{
				type: 'page',
				id: "pastoral/lema-curso",
				pattern: /^\/pastoral\/lema-curso\/?$/,
				names: [],
				types: [],
				path: "/pastoral/lema-curso",
				shadow: null,
				a: [0,17],
				b: [1]
			},
			{
				type: 'page',
				id: "pastoral/mision",
				pattern: /^\/pastoral\/mision\/?$/,
				names: [],
				types: [],
				path: "/pastoral/mision",
				shadow: null,
				a: [0,18],
				b: [1]
			},
			{
				type: 'page',
				id: "pastoral/pastoral",
				pattern: /^\/pastoral\/pastoral\/?$/,
				names: [],
				types: [],
				path: "/pastoral/pastoral",
				shadow: null,
				a: [0,19],
				b: [1]
			},
			{
				type: 'page',
				id: "escuela/erasmus/erasmus",
				pattern: /^\/escuela\/erasmus\/erasmus\/?$/,
				names: [],
				types: [],
				path: "/escuela/erasmus/erasmus",
				shadow: null,
				a: [0,20],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
