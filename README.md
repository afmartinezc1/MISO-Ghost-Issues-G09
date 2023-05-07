# MISO-Ghost-Issues-G09
Repositorio para realizar pruebas automatizadas E2E sobre la aplicación Ghost v3.14.1

En la seccion de la [wiki](https://github.com/afmartinezc1/MISO-Ghost-Issues-G09/wiki) encontrara enlaces a los diferentes documentos en los cuales explicamos 
nuestra experiencia con las herramientas propuestas, asi como sus pros y sus contras. 

Admeas encontrará las estrategias de pruebas usadas en las diferentes semanas, y la justificacion del cambio realizado en la semana 4

### Entrega Semana 5

Versiones:
- Cypres: 12.11.0
- Node: 14.21.3
- Ghost: 3.41.1
- Npm: 6.14.18
- Chai: 4.3.7
- Kraken-node: 1.0.24

Antes de empezar:
1. Tener instalada la version de ghost que se menciona arriba
2. Haber ejecutado la aplicacion la primera vez y tener un usuario administrador definido para poder ingresar
3. Ingresar a los archivos de configuracion de cada proyecto 
    - Kraken: EntregaSemana5\Kraken\properties.json
    - Cypress: EntregaSemana5\Cypress\cypress.config.js
4. En ambos archivos configurar las propiedades del json (USERNAME, PASSWORD)
5. En ambos archivos configurar el puerto de las propiedades (URL, EXISTING_URL, BLOG) para que coincida con el puerto en el que esta corriendo su version de ghost

Nota: Se sugiere borrar la BD de Ghost antes de realizar los suites de prueba en cada herramienta y para hacerlo se debe ingresar (con Ghost detenido) a la carpeta **ghost/content/data** y eliminar el archivo ghost-local.db. Una vez hecho esto, se debe correr ```ghost start``` para crear un usuario administrador. Lo anterior para realizar las pruebas en un entorno limpio.

Pasos para correr el proyecto de Kraken: 
1. Ingresar a la carpeta **EntregaSemana5\Kraken**
2. Ejecutar el comando ```npm install kraken-node```
3. Ejecutar el comando ```npm install chai```
4. Asegurarse que en la raíz de la carpeta **EntregaSemana5/Kraken/features** solo exista un archivo con extensión .feature que es el archivo que contiene el escenario de la prueba. Solo se debe correr un escenario a la vez.
5. Todas los escenarios se encuentran en la carpeta **EntregaSemana5/Kraken/features/scenarios**
6. Correr el test usando el comando ```npx kraken-node run``` desde la carpeta **EntregaSemana5/Kraken**

Pasos para correr el proyecto de Cypress: 
1. Ingresar a la carpeta **EntregaSemana5\Cypress**
2. Ejecutar el comando ```npm install cypress --save-dev```
3. Correr cypres usando el comando ```npx cypress open```
4. Escoger la opción E2E testing en la interfaz de cypress
5. Escoger Chrome como el navegador
4. Ejecutar una a una las pruebas E2E en la vista Specs

### Funcionalidades y escenarios de prueba

| Funcionalidad | Escenario de pruebas |
| --- | --- |
| Agregar items al NavBar | Como usuario inicio sesion en ghost, creo un nuevo item para el navbar, reviso que se vea reflejado en la página, lo elimino, y reviso que efectivamente ya no se encuentre |
| Agregar items al NavBar sin guardar | Como usuario inicio sesion en ghost, creo un nuevo item para el navbar, trato de salir sin guardar los cambios, cancelo la accion y válido que los cambios no se descarten, luego intento de nuevo, descarto la accion y válido que los cambios se hayan descartado |
| Modificar ajustes generales | Como usuario inicio sesion en ghost, entro en las opciones generales del sitio, cambio el título y la descripción, guardo cambios y válido que estos se vean reflejados en el blog |
| Editar Staff | Como usuario inicio sesion en ghost, entro a staff, y modifico algunos de los atributos del usuario. Luego valido que estos atributos se hayan modificado correctamente |
| Cambiar contraseña de un usuario del Staff | Como usuario inicio sesion en ghost, entro a staff, y modifico la contraseña de un usuario, me deslogueo e ingreso con la nueva contraseña |
| Crear Page | Como usuario inicio sesion en ghost, creo una page, reviso que sea el primero en la lista de draft pages, entro a esa page y reviso que título y contenido sean los ingresados previamente|
| Crear Post | Como usuario inicio sesion en ghost, creo un post, reviso que sea el primero en la lista de draft posts, entro a ese post y reviso que título y contenido sean los ingresados previamente|
|  | Como usuario inicio sesion en ghost, creo un post, incluyo un enlace de un video de youtube, reviso que sea el primero en la lista de draft posts, entro a ese post y reviso que el título sea el ingresado previamente y que ademas haya quedado el video de youtube en un iframe|
| Editar Page | Como usuario inicio sesion en ghost, creo una page, reviso que esté en la lista de draft pages, entro de nuevo a la page, edito su título y su contenido, reviso que el título editado sea el que aparece en la primera page de la lista de drafs, entro a ese page y valido que su título y contenido sean los editados|
| Editar Post |  Como usuario inicio sesion en ghost, creo un post, reviso que esté en la lista de draft posts, entro de nuevo al post, edito su título y su contenido, reviso que el título editado sea el que aparece en el primer post de la lista de drafs, entro a ese post y valido que su título y contenido sean los editados|
| Borrar Page | Como usuario inicio sesion en ghost, creo una page, reviso que esté en la lista de draft pages, creo otra page, reviso que esté en la lista de draft pages, borro esta page, y valido que la primera page de la lista de draft pages sea la primera que cree, con lo cual me cercioro que la segunda page efectivamente fue borrada|
| Borrar Post | Como usuario inicio sesion en ghost, creo un post, reviso que esté en la lista de draft posts, creo otro post, reviso que esté en la lista de draft posts, borro este post, y valido que el primer post de la lista de draft posts sea el primero que cree, con lo cual me cercioro que el segundo post efectivamente fue borrado|



