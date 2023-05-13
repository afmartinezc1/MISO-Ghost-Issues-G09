# MISO-Ghost-Issues-G09
Repositorio para realizar pruebas automatizadas E2E sobre la aplicación Ghost v3.14.1

En la seccion de la [wiki](https://github.com/afmartinezc1/MISO-Ghost-Issues-G09/wiki) encontrara enlaces a los diferentes documentos en los cuales explicamos 
nuestra experiencia con las herramientas propuestas, asi como sus pros y sus contras. 

Admeas encontrará las estrategias de pruebas usadas en las diferentes semanas, y la justificacion del cambio realizado en la semana 4

### Entrega Semana 6
Los cambios de esta semana respecto a la semana 5 son:
- Se implementa en cada uno de los 40 escenarios (20 kraken / 20 cypress) de la antigua version de ghost (3.41.1), las capturas de pantalla luego de cada paso.
- Se implentan 10 de los escenarios en la nueva version de ghost (4.44.0) usando la herramienta kraken
    - filterPost
    - addItemNavBarWithoutSave
    - addTagToPage
    - addTagToPost
    - createPagePublish
    - deletePageDraft
    - deleteTag
    - editPostDraft
    - editSitePreferences
    - editUser
- Se implementa el script de comparacion VRT con la herramienta resemble.js


Antes de empezar:
1. Instalar las dependencias (chai, kraken, cypress) al igial que se menciona en la semana 5, pero en las carpetas de la semana 6 (ambas versiones de ghost)
2. Haber corrido los test de cada una de las versiones de ghost con la herramienta kraken **EntregaSemana6\[VersionGhost]\Kraken**
3. Asegurarse de que luego de correr los test se hayan creado las capturas de pantalla en la carpeta **EntregaSemana6\[VersionGhost]\Kraken\customReports\[feature]** en ambas versiones de ghost

Pasos para correr el proyecto reporte de resemble: 
1. Ingresar a la carpeta **EntregaSemana6\Regresion**
2. Correr el comando ```npm install resemblejs```
3. Ejecutar el reporte mediante el comando ```node index.js```
4. Una vez finalizada la ejecucion, ingresar en la carpeta **EntregaSemana6\Regresion\results** y en la subcarepta con la fecha en la que ejecuto el reporte
5. Dentro encontrara una carpeta por cada "feature" (escenario) que contiene los screenshots y un reporte .html en el cual podra ver las diferencias encontradas por resemble.

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
| Crear post y publicarlo | Como usuario inicio sesion en ghost, creo un post, lo publico y verifico que la url del post exista como publicado|
| Crear post y publicarlo | Como usuario inicio sesion en ghost, creo una page, la publico y verifico que la url de la page exista como publicada|
| Crear post y programar publicación | Como usuario inicio sesion en ghost, creo un post, le programo para que se publique en 5 minutos. Luego me regreso a la viewsite de post y verifico que este de tipo sheduled|
| Filtrar posts | Como usuario inicio sesion en ghost, entro a viewsite de posts, filtro por tipo utilizando los estados(Draft y published) y verifico que solo filtra de estos dos estados. Luego limpio el filtro de tipo y usando el filtro de Author filltramos por el autor Ghost y verificamos que solo esten los post con author Ghost|
| Filtrar pages | Como usuario inicio sesion en ghost, entro a viewsite de pages, filtro por tipo utilizando los estados(Draft y published) y verifico que solo filtra de estos dos estados. Luego limpio el filtro de tipo y usando el filtro de Author filltramos por el autor Ghost y verificamos que solo esten las pages con author Ghost|
| Crear tag | Como usuario inicio sesión en ghost, entro a la sección de tags, selecciono a crear un nuevo tag, ingreso los datos del nuevo tag, confirmo la creación y verifico que el tag se haya creado correctamente en la lista de tags |
| Editar tag | Como usuario inicio sesión en ghost, entro a la sección de tags, selecciono a crear un nuevo tag, ingreso los datos del nuevo tag, confirmo la creación, verifico que el tag se haya creado correctamente en la lista de tags, edito la información del tag y verifico que el tag se haya acualizado correctamente |
| Eliminar tag | Como usuario inicio sesión en ghost, entro a la sección de tags, selecciono a crear un nuevo tag, ingreso los datos del nuevo tag, confirmo la creación, verifico que el tag se haya creado correctamente en la lista de tags, elimino el tag y verifico que el tag se haya eliminado correctamente |
| Agregar un tag a un post | Como usuario inicio sesión en ghost, creo un tag y un post, selecciono el post, le agrego el tag al post correspondiente y verifico que el tag se haya agregado correctamente |
| Agregar un tag a un page | Como usuario inicio sesión en ghost, creo un tag y un page, selecciono el page, le agrego el tag al page correspondiente y verifico que el tag se haya agregado correctamente |




