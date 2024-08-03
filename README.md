# Aplicación Web para podcasts

### Principales bibliotecas utilizadas

- React 18
- React-router-dom
- @reduxjs/toolkit
- Redux-persist
- Typescript
- Sass
- Webpack
- Prettier
- Eslint

### Metodologías

- BEM CSS

### Como ejecutar la aplicación
La aplicación se puede ejecutar en dos modos: **development y production**

Antes de ejecutar la aplicación es necesario seguir estos pasos iniciales:
- Clonar el repositorio: `git clone`
- Instalar las dedendencias: `npm install`

#### Ejecución en modo development
Ejecutar el comando `npm start` para levantar el servidor de desarrollo de webpack. 
 
Una vez que el servidor este ejecutándose, automáticamente se abrirá una ventana en el navegador y se cargará la aplicación en la dirección http://localhost:8080/ 

#### Ejecución en modo production
Hay que seguir dos pasos:

- Ejecutar el comando `npm build`   
Como resultado se crearán los bundles optimizados y se guardaran en una nueva carpeta llamada **dist**

- Desplegar la carpeta **dist** en un servidor local, ejecutando estos comandos:  
 `npm install -g serve`   
`serve dist`   
Esto ejecutará la app de producción en la dirección http://localhost:3000    
Sólo queda abrir una ventana en chrome y probar la app en esa dirección.

#### Ejecución las pruebas
Se agregaron algunos tests unitarios y E2E.

Los tests unitarios se ejecutan con el comando `npm test`

Las pruebas E2E se desarrollaron con Cypress.   
Para ejecutarlas primero hay que levantar el servidor de desarrollo: `npm start`   
Después ejecutar el comando `npm run cypress:open` para abrir cypress y ejecutar las pruebas.




