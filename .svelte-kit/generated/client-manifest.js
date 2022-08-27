export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\components\\carruselnoticias.svelte"),
	() => import("..\\..\\src\\routes\\components\\background.svelte"),
	() => import("..\\..\\src\\routes\\components\\cabecera.svelte"),
	() => import("..\\..\\src\\routes\\components\\carousel.svelte"),
	() => import("..\\..\\src\\routes\\components\\footer.svelte"),
	() => import("..\\..\\src\\routes\\components\\formulario.svelte"),
	() => import("..\\..\\src\\routes\\components\\noticiafoto.svelte"),
	() => import("..\\..\\src\\routes\\components\\noticiavideo.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\carroceria.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\eso.svelte"),
	() => import("..\\..\\src\\routes\\estudios\\mantenimiento.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\privacidad\\index.svelte")
];

export const dictionary = {
	"": [[0, 13], [1]],
	"privacidad": [[0, 14], [1]],
	"components/carruselnoticias": [[0, 2], [1]],
	"components/background": [[0, 3], [1]],
	"components/cabecera": [[0, 4], [1]],
	"components/carousel": [[0, 5], [1]],
	"components/footer": [[0, 6], [1]],
	"components/formulario": [[0, 7], [1]],
	"components/noticiafoto": [[0, 8], [1]],
	"components/noticiavideo": [[0, 9], [1]],
	"estudios/carroceria": [[0, 10], [1]],
	"estudios/eso": [[0, 11], [1]],
	"estudios/mantenimiento": [[0, 12], [1]]
};