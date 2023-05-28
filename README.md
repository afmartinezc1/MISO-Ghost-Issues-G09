## Ejecución de la estrategia de pruebas - G09

Este repositorio sirve de insumo para ejecución de pruebas automatizadas E2E sobre la aplicación Ghost v3.14.1. Las pruebas que realizamos durante el sprint las hemos dividido en tres carpetas principales:

*   **E2E-DatosAleatorios:** Contiene las pruebas e2e sobre varias de las funcionalidades de Ghost 3.14.1, haciendo uso de datos aleatorios durante su ejecución
*   **RegresionVisual:** Contiene una comparativa de la versión bajo pruebas vs. una versión más reciente para validar que cambios ha sufrido la interfaz de usuario.
*   **PruebasExploratorias:** Contiene las pruebas exploratorias realizadas durante la semana dos, para familiarizarse con el flujo de la aplicacion. 

En la [wiki](https://github.com/afmartinezc1/MISO-Ghost-Issues-G09/wiki) encontrará diferentes observaciones con respecto a las herramientas usadas en esta estrategia y enlaces a los diferentes documentos en los cuales explicamos nuestra experiencia durante las semanas que duro el sprint. Además, también encontrará los **inventarios de pruebas manuales** que se realizaron las primeras semanas del sprint por cada uno de los grupos. 

El video con la explicacion de la estrategia, los pros y contras, y los resultados, es el siguiente: [Estrategia final de pruebas](https://uniandes-my.sharepoint.com/:v:/g/personal/s_nader21_uniandes_edu_co/Eclad7OxDr9OkmT_aXnwCVgB20wB9own2yjNpbTuMw25jQ?e=qs0gay)

### Consideraciones:

Las versiones del aplicativo y de las herramientas para poder ejecutar estas pruebas son las siguientes:

*   Cypres: 12.11.0
*   Node: 14.21.3
*   Ghost: 3.41.1 
*   Ghost: 3.41.1 - (Para poder realizar las pruebas de regresion visual)
*   Npm: 6.14.18
*   Chai: 4.3.7
*   Kraken-node: 1.0.24
*   Node-fetch: 2.6.11
*   Faker-js: 8.0.1

Antes de empezar:

1.  Tener instaladas las versiones de ghost que se mencionan arriba
2.  Haber ejecutado la aplicacion por primera vez y tener definido un usuario administrador para poder ingresar.
3.  Ingresar a los archivos de configuración de las siguientes carpetas de pruebas (**E2E-DatosAleatorios/**, **RegresionVisual/Ghost3.41.1/**, y **RegresionVisual/Ghost4.44.0/**) 
    *   Kraken: ..\\Kraken\\properties.json
    *   Cypress: ..\\Cypress\\cypress.config.js
4.  En esos archivos configurar las propiedades del json (USERNAME, PASSWORD) segun corresponda, con su usuario y su contraseña de administrador
5.  En ambos archivos configurar el puerto de las propiedades (URL, EXISTING\_URL, BLOG) para que coincida con el puerto en el que está corriendo sus versiones de Ghost

**Nota:** Se sugiere borrar la BD de Ghost antes de realizar las suites de prueba en cada herramienta y para hacerlo se debe ingresar (con Ghost detenido) a la carpeta **ghost/content/data** y eliminar el archivo **ghost-local.db**. Una vez hecho esto, se debe correr `ghost start` para crear un usuario administrador. Lo anterior para realizar las pruebas en un entorno limpio.

### Pasos para ejecutar las pruebas con Kraken:

1.  Ingresar a la carpeta de pruebas que desee ejecutar (**E2E-DatosAleatorios/**, **RegresionVisual/Ghost3.41.1/**, y **RegresionVisual/Ghost4.44.0/**), y realizar los siguientes pasos sobre la carpeta **\\Kraken**
2.  Ejecutar el comando `npm install kraken-node`
3.  Ejecutar el comando `npm install chai`
4.  Ejecutar el comando `npm install node-fetch@2`
5.  Asegurarse que en la raíz de la carpeta **/Kraken/features** solo exista un archivo con extensión (**.feature**) que es el archivo que contiene el escenario de la prueba. Solo se debe correr un escenario a la vez.
6.  Todos los escenarios se encuentran en la carpeta **/Kraken/features/scenarios**
7.  Correr el test usando el comando `npx kraken-node run` desde la carpeta **/Kraken**

### Pasos para correr el proyecto de Cypress:

1.  Ingresar a la carpeta de pruebas que desee ejecutar (**E2E-DatosAleatorios/**), y realizar los siguientes pasos sobre la carpeta **\\Cypress**
2.  Ejecutar el comando `npm install cypress --save-dev`
3.  Ejecutar el comando `npm install @faker-js/faker --save-dev`
4.  Correr cypres usando el comando `npx cypress open`
5.  Escoger la opción **E2E testing** en la interfaz de cypress
6.  Escoger **Chrome** como el navegador
7.  Ejecutar una a una las pruebas E2E en la vista **Specs**

**Nota:** En caso de ejecutar las pruebas con generación de datos aleatorios (**E2E-DatosAleatorios/**) tenga en cuenta que:

*   En cypress para cada funcionalidad se tiene una carpeta adentro de la carpeta cypress/e2e. En dicha carpeta se tienen implementados 3 escenarios, 1 por cada estrategia de generación de datos.
*   En kraken para cada funcionalidad se tiene una carpeta adentro de la carpeta features/scenarios. En dicha carpeta se tienen implementados 3 escenarios, 1 por cada estrategia de generación de datos. No olvidar que el escenario que se quiera correr se debe sacar de cada carpeta y ponerlo en la raiz de la carpeta feature.

**Notas de la regresion visual:** En caso de ejecutar las pruebas de regresion visual (**RegresionVisual/Ghost3.41.1/**, y **RegresionVisual/Ghost4.44.0/**) tenga en cuenta que:

*   Se implementaron 10 de los escenarios en la nueva version de ghost (4.44.0) usando la herramienta kraken
    *   filterPost
    *   addItemNavBarWithoutSave
    *   addTagToPage
    *   addTagToPost
    *   createPagePublish
    *   deletePageDraft
    *   deleteTag
    *   editPostDraft
    *   editSitePreferences
    *   editUser
*   Se implementó un script de comparacion VRT con la herramienta **resemble.js** que genera un reporte con las diferencias encontradas en cada versión
*   Las diferencias visuales se encuentran reportadas con el tag (Visual) en las issues del repositorio
*   **IMPORTANTE** Asegurarse de haber corrido los test antes de generar el reporte, y que se hayan creado las capturas de pantalla en la carpeta **RegresionVisual\\\[VersionGhost\]\\Kraken\\customReports\[feature\]** en ambas versiones de ghost.

### Pasos para generar el reporte de resemble:

1.  Ingresar a la carpeta **RegresionVisual\\Regresion**
2.  Correr el comando `npm install resemblejs`
3.  Ejecutar el reporte mediante el comando `node index.js`
4.  Una vez finalizada la ejecución, ingresar en la carpeta **RegresionVisual\\Regresion\\results** y en la subcarpeta con la fecha en la que ejecuto el reporte
5.  Dentro encontrará una carpeta por cada "feature" (escenario) que contiene los screenshots y un reporte .html en el cual podrá ver las diferencias encontradas por resemble.

### Pasos para ejecutar las pruebas exploratorias:

#### Monkeys
1.  Ingresar a la carpeta **PruebasExploratorias\\ghost-mokeys**
2.  Configurar la url de la página de ghost en el archivo **monkey.config.json** y **smart-monkey.config.json**
3.  En el archivo **monkey.cy.js** y **smart-monkey.cy.js** se deben configurar las credenciales del administrador en la función **login()**
4.  Correr el comando `npm install`
5.  Para ejecutar monkeys aleatorios se debe correr el comando `cypress run --config-file .\monkey.config.js` y para ejecutar smart mokeys se debe correr el comando `cypress run --config-file .\smart-monkey.config.js`
6.  Una vez finalizada la ejecución, ingresar en la carpeta **PruebasExploratorias\\ghost-mokeys\\results** para revisar el video con los resultados de la prueba

#### Rippers

1.  Ingresar a la carpeta **PruebasExploratorias\\ghost-ripper**
2.  Configurar la url de la página de ghost y credenciales en el archivo **config.json** 
3.  Correr el comando `npm install`
4.  Para ejecutar el ripper se debe correr el comando `node index.js`
5.  Una vez finalizada la ejecución, ingresar en la carpeta **PruebasExploratorias\\ghost-ripper\\results** para revisar los screenshoot de las pruebas
6.  Para ver el reporte, ingresar en al archivo **index.html** 


### Funcionalidades y escenarios de prueba:

| Funcionalidad | Escenario de pruebas |
| --- | --- |
| Agregar items al NavBar | Como usuario inicio sesion en ghost, creo un nuevo item para el navbar, reviso que se vea reflejado en la página, lo elimino, y reviso que efectivamente ya no se encuentre |
| Agregar items al NavBar sin guardar | Como usuario inicio sesion en ghost, creo un nuevo item para el navbar, trato de salir sin guardar los cambios, cancelo la accion y válido que los cambios no se descarten, luego intento de nuevo, descarto la accion y válido que los cambios se hayan descartado |
| Modificar ajustes generales | Como usuario inicio sesion en ghost, entro en las opciones generales del sitio, cambio el título y la descripción, guardo cambios y válido que estos se vean reflejados en el blog |
| Editar Staff | Como usuario inicio sesion en ghost, entro a staff, y modifico algunos de los atributos del usuario. Luego valido que estos atributos se hayan modificado correctamente |
| Cambiar contraseña de un usuario del Staff | Como usuario inicio sesion en ghost, entro a staff, y modifico la contraseña de un usuario, me deslogueo e ingreso con la nueva contraseña |
| Crear Page | Como usuario inicio sesion en ghost, creo una page, reviso que sea el primero en la lista de draft pages, entro a esa page y reviso que título y contenido sean los ingresados previamente |
| Crear Post | Como usuario inicio sesion en ghost, creo un post, reviso que sea el primero en la lista de draft posts, entro a ese post y reviso que título y contenido sean los ingresados previamente |
|   | Como usuario inicio sesion en ghost, creo un post, incluyo un enlace de un video de youtube, reviso que sea el primero en la lista de draft posts, entro a ese post y reviso que el título sea el ingresado previamente y que ademas haya quedado el video de youtube en un iframe |
| Editar Page | Como usuario inicio sesion en ghost, creo una page, reviso que esté en la lista de draft pages, entro de nuevo a la page, edito su título y su contenido, reviso que el título editado sea el que aparece en la primera page de la lista de drafs, entro a ese page y valido que su título y contenido sean los editados |
| Editar Post | Como usuario inicio sesion en ghost, creo un post, reviso que esté en la lista de draft posts, entro de nuevo al post, edito su título y su contenido, reviso que el título editado sea el que aparece en el primer post de la lista de drafs, entro a ese post y valido que su título y contenido sean los editados |
| Borrar Page | Como usuario inicio sesion en ghost, creo una page, reviso que esté en la lista de draft pages, creo otra page, reviso que esté en la lista de draft pages, borro esta page, y valido que la primera page de la lista de draft pages sea la primera que cree, con lo cual me cercioro que la segunda page efectivamente fue borrada |
| Borrar Post | Como usuario inicio sesion en ghost, creo un post, reviso que esté en la lista de draft posts, creo otro post, reviso que esté en la lista de draft posts, borro este post, y valido que el primer post de la lista de draft posts sea el primero que cree, con lo cual me cercioro que el segundo post efectivamente fue borrado |
| Crear post y publicarlo | Como usuario inicio sesion en ghost, creo un post, lo publico y verifico que la url del post exista como publicado |
| Crear post y publicarlo | Como usuario inicio sesion en ghost, creo una page, la publico y verifico que la url de la page exista como publicada |
| Crear post y programar publicación | Como usuario inicio sesion en ghost, creo un post, le programo para que se publique en 5 minutos. Luego me regreso a la viewsite de post y verifico que este de tipo sheduled |
| Filtrar posts | Como usuario inicio sesion en ghost, entro a viewsite de posts, filtro por tipo utilizando los estados(Draft y published) y verifico que solo filtra de estos dos estados. Luego limpio el filtro de tipo y usando el filtro de Author filltramos por el autor Ghost y verificamos que solo esten los post con author Ghost |
| Filtrar pages | Como usuario inicio sesion en ghost, entro a viewsite de pages, filtro por tipo utilizando los estados(Draft y published) y verifico que solo filtra de estos dos estados. Luego limpio el filtro de tipo y usando el filtro de Author filltramos por el autor Ghost y verificamos que solo esten las pages con author Ghost |
| Crear tag | Como usuario inicio sesión en ghost, entro a la sección de tags, selecciono a crear un nuevo tag, ingreso los datos del nuevo tag, confirmo la creación y verifico que el tag se haya creado correctamente en la lista de tags |
| Editar tag | Como usuario inicio sesión en ghost, entro a la sección de tags, selecciono a crear un nuevo tag, ingreso los datos del nuevo tag, confirmo la creación, verifico que el tag se haya creado correctamente en la lista de tags, edito la información del tag y verifico que el tag se haya acualizado correctamente |
| Eliminar tag | Como usuario inicio sesión en ghost, entro a la sección de tags, selecciono a crear un nuevo tag, ingreso los datos del nuevo tag, confirmo la creación, verifico que el tag se haya creado correctamente en la lista de tags, elimino el tag y verifico que el tag se haya eliminado correctamente |
| Agregar un tag a un post | Como usuario inicio sesión en ghost, creo un tag y un post, selecciono el post, le agrego el tag al post correspondiente y verifico que el tag se haya agregado correctamente |
| Agregar un tag a un page | Como usuario inicio sesión en ghost, creo un tag y un page, selecciono el page, le agrego el tag al page correspondiente y verifico que el tag se haya agregado correctamente |
