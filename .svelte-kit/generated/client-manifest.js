export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\centro\\documentos-secretaria\\index.svelte"),
	() => import("..\\..\\src\\routes\\centro\\matriculacion\\index.svelte"),
	() => import("..\\..\\src\\routes\\escuela\\erasmus\\erasmus.svelte"),
	() => import("..\\..\\src\\routes\\escuela\\erasmus\\index.svelte"),
	() => import("..\\..\\src\\routes\\escuela\\excelencia\\index.svelte"),
	() => import("..\\..\\src\\routes\\escuela\\fp-dual\\index.svelte"),
	() => import("..\\..\\src\\routes\\escuela\\metodo\\index.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\asir.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\carroceria.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\electromecanica.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\eso.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\mantenimiento.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\telecomunicaciones.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\noticias\\2022\\listados-fp-2022\\index.svelte"),
	() => import("..\\..\\src\\routes\\noticias\\index.svelte"),
	() => import("..\\..\\src\\routes\\pastoral\\lema-curso.svelte"),
	() => import("..\\..\\src\\routes\\pastoral\\mision.svelte"),
	() => import("..\\..\\src\\routes\\pastoral\\pastoral.svelte"),
	() => import("..\\..\\src\\routes\\privacidad\\index.svelte")
];

export const dictionary = {
	"": [[0, 15], [1]],
	"noticias": [[0, 17], [1]],
	"privacidad": [[0, 21], [1]],
	"centro/documentos-secretaria": [[0, 2], [1]],
	"centro/matriculacion": [[0, 3], [1]],
	"escuela/erasmus": [[0, 5], [1]],
	"escuela/excelencia": [[0, 6], [1]],
	"escuela/fp-dual": [[0, 7], [1]],
	"escuela/metodo": [[0, 8], [1]],
	"estudios/asir": [[0, 9], [1]],
	"estudios/carroceria": [[0, 10], [1]],
	"estudios/electromecanica": [[0, 11], [1]],
	"estudios/eso": [[0, 12], [1]],
	"estudios/mantenimiento": [[0, 13], [1]],
	"estudios/telecomunicaciones": [[0, 14], [1]],
	"pastoral/lema-curso": [[0, 18], [1]],
	"pastoral/mision": [[0, 19], [1]],
	"pastoral/pastoral": [[0, 20], [1]],
	"escuela/erasmus/erasmus": [[0, 4], [1]],
	"noticias/2022/listados-fp-2022": [[0, 16], [1]]
};