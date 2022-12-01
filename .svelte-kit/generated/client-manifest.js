export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\carroceria.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\eso.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\mantenimiento.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\noticias\\index.svelte"),
	() => import("..\\..\\src\\routes\\privacidad\\index.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"noticias": [[0, 6], [1]],
	"privacidad": [[0, 7], [1]],
	"estudios/carroceria": [[0, 2], [1]],
	"estudios/eso": [[0, 3], [1]],
	"estudios/mantenimiento": [[0, 4], [1]]
};