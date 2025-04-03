# Inicio Rápido

El núcleo del proyecto es de CÓDIGO ABIERTO y está disponible públicamente en NPM.

> Para características avanzadas, chequea las versiones premium en
> [Productos Brage](https://brage.app)

## Instalación

#### Requisitos previos

- [Node.js](https://nodejs.org/) versión 18 o superior.

Para un uso más conveniente, es recomendable instalar los paquetes globalmente

::: code-group

```bash [npm]
$ npm i -g create-brage brage-js
```

```bash [Yarn]
$ yarn global add create-brage brage-js
```

```bash [pnpm]
$ pnpm add -g create-brage brage-js
```

```bash [Bun]
$ bun add -g create-brage brage-js
```

::: 

Esto instalará localmente en tu computadora 2 comandos: uno para crear un proyecto de API y el otro para generar las rutas de la API. ***Verificalos con estos comandos***.

```sh
$ create-brage -v
```

```sh
$ brage -v
```

## Creación de Templates 

BRAGE funciona de una manera similar a ***VITE***, con un comando para crear el template adecuado para la herramienta y otro comando para generar el código necesario de la app.

::: info Comando para template de Brage ***[Ver documentación](./create-brage)***
Elegí un directorio donde querés crear tu proyecto de API y ejecutá el siguiente comando.
:::

```sh
$ create-brage
```

## Generación de Rutas

BRAGE es un comando para generar todos los endpoints de la API. Este comando lee el contenido ***SQL*** de la carpeta **APP** y crea los archivos en la carpeta **SERVER**.

::: info Comando para la app de Brage ***[Ver documentación](./brage)***
En el directorio donde creaste el template, ejecutá este comando para generar las rutas de la API.
:::


```sh
$ brage
```