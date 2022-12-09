export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\centro\\documentos-secretaria\\index.svelte"),
	() => import("..\\..\\src\\routes\\centro\\matriculacion\\index.svelte"),
	() => import("..\\..\\src\\routes\\escuela\\fp-dual\\index.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\asir.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\carroceria.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\electromecanica.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\eso.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\mantenimiento.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\telecomunicaciones.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\noticias\\index.svelte"),
	() => import("..\\..\\src\\routes\\privacidad\\index.svelte")
];

export const dictionary = {
	"": [[0, 11], [1]],
	"noticias": [[0, 12], [1]],
	"privacidad": [[0, 13], [1]],
	"centro/documentos-secretaria": [[0, 2], [1]],
	"centro/matriculacion": [[0, 3], [1]],
	"escuela/fp-dual": [[0, 4], [1]],
	"estudios/asir": [[0, 5], [1]],
	"estudios/carroceria": [[0, 6], [1]],
	"estudios/electromecanica": [[0, 7], [1]],
	"estudios/eso": [[0, 8], [1]],
	"estudios/mantenimiento": [[0, 9], [1]],
	"estudios/telecomunicaciones": [[0, 10], [1]]
};