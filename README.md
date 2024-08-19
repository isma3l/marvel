# Aplicación Web para los personajes de Marvel

### Descripción
Se desarrollo una webapp en React para obtener información sobre los personajes de Marvel.

La aplicación consta de dos vistas: 
- Vista principal: 

   - Muestra una lista de 50 heroes o el resultado de héroes buscados.  
   - Al hacer click en el icono superior de favoritos se muestran los heroes favoritos almacenados

- Detalle de héroes:  
  - Se muestra informacion de un héroe y un listado de comics en los que aparece.


### Bibliotecas o frameworks utilizados

- React 18
- React-router-dom
- Typescript
- Sass
- Webpack
- Prettier
- Eslint

### Metodología CSS

- BEM CSS

### Arquitectura y estructura del proyecto
Dado que la aplicacion es pequeña **se decidió organizar los archivos por tipo y funcionalidad**.  

La app cuenta con las siguientes carpetas:  

|── api/  
|── assets/  
|── components/  
|── context/  
|── domain/  
|── helper/  
|── hooks/  
|── layout/  
|── pages/  
|── repositories/  
|── routes/  
|── styles/  
|── test/  
|── types/  

- La carpeta **api** contiene la lógica encargada de consultar datos a la api de Marvel.

- La carpeta **components** agrupa los componentes comunes usados en diferentes partes de la aplicación.Cada componente contiene 3 archivos y una carpeta para el test del componente.  
Por ejemplo:
    
└─ searchBar/  
. . . .  └─ index.ts  
. . . .  └─ searchBar.tsx  
. . . .  └─ searchBar.module.scss  
. . . .  └─ test/  
. . . . . . . . └─ searchBar.test.tsx    

Algunos componentes pueden contener otros sub componentes, que no se usan en otra parte de la aplicación, por ejemplo el componente Header esta conformado por un par de componentes:

└─ header/  
. . . .  └─ favoriteCounter/  
. . . .  └─ Logo/

- La carpeta **domain** contiene las entidades del dominio y las interfaces del repositorio que sirven para separar el dominio de la capa de datos.   
 
└─ domain/  
. . . .  └─ model/  
. . . .  └─ repository/

- La carpeta **pages** contiene las paginas de la aplicacion:  

 └─ pages/  
. . . .  └─ home/  
. . . .  └─ favorites/  
. . . .  └─ details/

- La página **details** tambien dispone de una carpeta components donde aloja sus propios componentes.

- La carpeta **repositories** contiene las implementaciones de los repositorios.

└─ repositories/  
. . . .  └─ index.ts  
. . . .  └─ ApiComicRepository.ts  
. . . .  └─ ApiHeroRepository.ts

- La carpeta **styles** contiene diferentes archivos donde se definen variables CSS para los colores, tipos de fuentes y mixins.

- La carpeta **test** contiene utilidades para implementar los tests unitarios, como generadores de mocks y wrappers de provider y Router.


### Como ejecutar la aplicación
La aplicación se puede ejecutar en dos modos: **development y production**

Antes de ejecutar la aplicación es necesario seguir estos pasos:
- Clonar el repositorio: `git clone`
- Instalar las dedendencias: `npm install`

#### Ejecución en modo development
Para ejecutar la aplicación en modo desarrollo es necesario contar con el archivo **.env** donde se guardan las claves para hacer consultas a la api de marvel.

Ejecutar el comando `npm start` para levantar el servidor de desarrollo de webpack. 
 
Una vez que el servidor este ejecutándose, automáticamente se abrirá una ventana en el navegador y se cargará la aplicación en la dirección http://localhost:8080/ 
 

#### Ejecución en modo production
Hay que seguir dos pasos:

- Ejecutar el comando `npm run build`   
Como resultado se crearán los bundles optimizados y se guardaran en una nueva carpeta llamada **dist**

- Desplegar la carpeta **dist** en un servidor local, ejecutando estos comandos:  
 `npm install -g serve`   
`serve dist`   
Esto ejecutará la app de producción en la dirección http://localhost:3000    
Sólo queda abrir una ventana en chrome y probar la app en esa dirección.

#### Aplicación desplegada en Vercel
***Link*** a la aplicación web: https://marvel-gamma-liart.vercel.app/

#### Ejecución las pruebas

Los tests unitarios se ejecutan con el comando `npm test`




