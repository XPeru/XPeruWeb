#Angular JS

Angular JS es un frameworks javascript desarrollado por Google para la creacion de paginas web.
Este simplifica en gran medida el tiempo de codificacion, el tamaño de los archivos, y la implementacion de animaciones.

Angular extiende el lenguaje html.

Nuestro proyecto esta organizado como sigue:

## Index.html

Al momento de mostrar la pagina web, index.html sera el unico archivo html, todos los otros archivos html son incrustados o
eliminados dinamicamente por AngujarJS.

Al ser este el archivo principal, debe contener TODAS las dependencias, es decir : 
- las librerias (angular.js x ejm)
- Los archivos javascript de cada modulo del proyecto
- El archivo app.js (muy importante)
- Los archivos css del proyecto (idealmente debe de haber un css por modulo)

Observacion : Considerar los nombres de los subdirectorios en los paths como "case sensitive" sino en linux no funcionara bien.

##App.js

Archivo javascript principal, el contiene la logica de router: escoge el html a incrustar dentro de index.html segun el url.
Este archivo debe incluir la declaracion de todos los modulos del proyecto.

Observacion: al crear un modulo, este debe ser incluido tanto como en el archivo index.html como en el app.js


