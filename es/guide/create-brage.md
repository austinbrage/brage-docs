# Crear BRAGE ***comando***

## Descripción

El comando `create-brage` genera un template de proyecto de API completo en una carpeta con el nombre del proyecto proporcionado.  

***Está fuertemente basado en la funcionalidad y apariencia del comando create-vite.***  

```sh
$ create-brage
```

## Estructura

Después de ejecutar el comando, se generará la siguiente estructura de carpetas.

> Es una base de código para una API REST en Node con: **EXPRESS** - **MYSQL2** - **ZOD**.

> ***La carpeta server / global viene con todo el código base necesario para ejecutar un servidor Express conectado a una base de datos MySQL.***

```
.
├─ app
│  ├─ articles
│  │  └─ queries.sql
│  │  └─ table.sql
│  ├─ README.md
├─ server
│  ├─ global
│  │  └─ **
│  ├─ routes
│  │  └─ **
│  ├─ index.js
└─ .gitignore
└─ .env
└─ .eslintrc.cjs
└─ package.json
└─ README.md
```

::: details Carpeta APP
La herramienta BRAGE lee el contenido SQL dentro de los directorios de esta carpeta para funcionar. ***Al crear el template, la carpeta app viene con una carpeta articles para testear el comando brage***.
:::

::: details Carpeta SERVER
La herramienta BRAGE escribe el contenido en JavaScript dentro del directorio routes de esta carpeta cuando se ejecuta. ***Al crear el template, la carpeta server viene con una ruta healthcare para testear la API***.
:::

::: details Otras configuraciones
El archivo **.env** ya viene con valores predeterminados para las variables de entorno y claves necesarias.

El **package.json** ya incluye los scripts necesarios para trabajar con Node y Brage al mismo tiempo.
:::