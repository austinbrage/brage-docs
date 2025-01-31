# Inicio Rápido

## Andá y conseguilo

Primero, conseguí el paquete en la página [Bragetools](https://brage.pages.dev).

## Instalación

#### Requisitos previos

- [Node.js](https://nodejs.org/) versión 18 o superior.  
- [Pnpm](https://pnpm.io/installation) instalado localmente.  
- [Brage](https://brage.pages.dev) ya comprado.  

Una vez adquirido el paquete, descomprimí el archivo `.zip` y, indica el README, ejecutá los siguientes comandos en la carpeta del paquete para instalarlo localmente.  

```sh
$ pnpm install
```

```sh
$ pnpm start
```

El **Comando START** instalará localmente en tu computadora 2 comandos: uno para crear un proyecto de API y el otro para generar las rutas de la API. ***Verificalos con estos comandos***.

```sh
$ create-brage-js -v
```

```sh
$ brage-js -v
```

## Creación de Templates 

BRAGE funciona de una manera similar a ***VITE***, con un comando para crear el template adecuado para la herramienta y otro comando para generar el código necesario de la app.

::: info Comando para template de Brage ***[Ver documentación](./create-brage)***
Elegí un directorio donde querés crear tu proyecto de API y ejecutá el siguiente comando.
:::

```sh
$ create-brage-js
```

## Generación de Rutas

BRAGE es un comando para generar todos los endpoints de la API. Este comando lee el contenido ***SQL*** de la carpeta **APP** y crea los archivos en la carpeta **SERVER**.

::: info Comando para la app de Brage ***[Ver documentación](./brage)***
En el directorio donde creaste el template, ejecutá este comando para generar las rutas de la API.
:::


```sh
$ brage-js
```