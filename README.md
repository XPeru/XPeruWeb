# XPeruWeb - Sitio web piloto para X Pérou
Este manual describe el procedimento a seguir para poder instalar las herramientas y poder colaborar en la 
codificacion de este proyecto, Este ha sido probado para instalaciones en Linux(Ubuntu 14.10), IOS (Yosemite), y Windows 7/8.
## Instalacion de las herramientas
Instalar en este orden los siguientes programas:

- Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- Node.js: https://nodejs.org/
- Bower : http://bower.io/

Observaciones: 
- Al instalar node.js, npm (comando necesario para instalar bower) tambien es instalado.
- Para la instalacion en windows se recomienda reiniciar la computadora al finalizar la instalacion de cada programa (estos 
modifican las variables de entorno de windows, y estas a veces no son actualizadas sino hasta reiniciar la pc).
- Para la instalacion de bower, basta escribir los comandos indicados en su pagina web dentro de un terminal.

## Descripcion
- Git sirve de base para que la computadora (local) se comunique con los repositories publicos (descargas).
- Node.js sirve para emular un servidor de aplicacion y el comando npm para instalar dependencias (librerias).
- Bower sirve para la gestion de dependencias del proyecto, este verifica la compatibilidad de las librerias descargadas,
y ademas guarda esta informacion en el archivo bower.json, asi no es necesario poner en nuestro repository las librerias, solo
el archivo bower.json.
