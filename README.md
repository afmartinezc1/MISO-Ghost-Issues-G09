# MISO-Ghost-Issues-G09
Repositorio para reportar errores de la herramienta Ghost v3.14.1

En la seccion de la [wiki](https://github.com/afmartinezc1/MISO-Ghost-Issues-G09/wiki) encontrara enlaces a los diferentes documentos en los cuales explicamos 
nuestra experiencia con las herramientas propuestas, asi como sus pros y sus contras. 

Admeas encontrara las estrategias de pruebas usadas en las diferentes semanas, y la justificacion del cambio realizado en la semana 4

### Entrega Semana 5

Versiones:
Cypres: 12.11.0
Node: 14.21.3
Ghost: 3.41.1

Antes de empezar:
1. Tener instalada la version de ghost que se menciona arriba
2. Haber ejecutado la aplicacion la primera vez y tener un usuario administrador definido para poder ingresar
3. Ingresar a los archivos de configuracion de cada proyecto 
    - Kraken: EntregaSemana5\Kraken\properties.json
    - Cypress: EntregaSemana5\Cypress\cypress.config.js
4. En ambos archivos configurar las propiedades del json (USERNAME, PASSWORD)
5. En ambos archivos configurar el puerto de las propiedades (URL, EXISTING_URL, BLOG) para que coincida con el puerto en el que esta corriendo su version de ghost

Pasos para correr el proyecto de Kraken: 
1. Ingresar a la carpeta **EntregaSemana5\Kraken\**
2. Ejecutar el comando ```npm install kraken-node```
3. Correr el test usando el comando ```npx kraken-node run```

Pasos para correr el proyecto de Cypress: 
1. Ingresar a la carpeta **EntregaSemana5\Cypress\**
2. Ejecutar el comando ```npm install cypress --save-dev```
3. Correr cypres usando el comando ```npx cypress open```
4. ejecutar una a una las pruebas e2e

