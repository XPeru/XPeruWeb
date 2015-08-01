# XPeruWeb - Sitio web piloto para X Pérou
Este manual describe el procedimento a seguir para poder instalar las herramientas y poder colaborar en la 
codificacion de este proyecto, este ha sido probado para instalaciones en Linux(Ubuntu 14.10), OS X (Yosemite), y Windows 7/8.
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
el archivo bower.json y ejecutar el commando bower install desde un terminal (en el directorio del proyecto).

bower install 
npm install

# Partes del sitio web
Hemos divido la pagina en diferentes modulos, cada uno es independiente, es decir cada colaborador puede trabajar en un modulo, sin bloquear el trabajo de los demas. Estos modulos son:

##NavBar
Esta es la barra de navegacion que aparece en la parte superior, angularjs permite incluirla en todas los html de los otros modulos usando solo una linea.

##Home
Pagina de bienvenida, una breve explicacion de que es polytechnique, la diferencia del sistema de educacion peruano y frances, y una descripcion del resto de la web?

##Agenda
La idea es poner la informacion de contacto de cada uno de los X peruanos, estudiantes y anciens X. Ademas de un pequeño CV donde se resuma que han hecho, me parece buena idea poner un link al LinkedIn de cada uno.

##Anuncios
Uhmm

##Contact
Un pequeño formulario para que nos envien sus preguntas o dudas, basicamente esto deberia reenviar un mail a alguna cuenta de correo, la idea es mantener toda la informacion en un solo sitio.

##Postular
Toda la informacion necesaria para postular a polytechnique, rendir los examenes de manera satisfactoria y estar listo para el tronco comun.

##La vida en Polytechnique?
Titre de séjour, sécurité sociale, 4A, etc etc.
