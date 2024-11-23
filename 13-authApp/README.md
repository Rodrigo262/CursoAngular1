# AuthApp

En el fichero de `environments` contiene el despliegue en localhost y en railway (Prod).

En el `app-routing-module` hay una modificación
` imports: [RouterModule.forRoot(routes, { useHash: true })],`

el uso del hash se usa para poder recargar la página y que no de un 404 por quere intentar acceder a una ruta, con esta modificación se accede desde el root.

La app está desplegada en Netlify.

Para desplegar en Netlify hay que hacer `ng build` y desplegar manualmente, es decir dejar caer la carpeta de `dist/browser` y automáticamente se desplegará, te dará una dirección del sitio donde se encuentre.
