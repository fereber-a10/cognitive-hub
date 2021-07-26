# Cognitive-Hub React App

Este proyecto fue creado con React [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles
En el directorio del proyecto correr los siguientes comandos en terminal:  


### `npm install`

### `npm start` ó `npm run start`

\
La app correrá en el puerto 3000.\


## Dependencias

Para el desarrollo de los estilos se usará Tailwind. Se tomaron los siguientes comandos para la instalación.


1. Instalar TailwindCSS con sus últimas actualizaciones. Posteriormente generar el archivo de tailwind.config.js 

```
npm install tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

2. Instalación de Craco

```
npm install @craco/craco
```

3. Realizar los siguientes cambios en package.json

```
  {
    "scripts": {
     "start": "craco start",
     "build": "craco build",
     "test": "craco test",
      "eject": "react-scripts eject"
    },
  }
```

4. Crear un archivo llamado craco.config.js y pasamos esta configuración: 

```
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

5. Desinstalar la última versión de Tailwind y generar el proceso de compatibilidad de versiones.

```
npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

6. Hacer el siguiente cambio en la línea de  `purge` para realizar el  y el `output` del preprocesamiento.

```
  // tailwind.config.js
  module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```
7. Incluir Tailwind dentro de `index.css` al inicio de la aplicación.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```