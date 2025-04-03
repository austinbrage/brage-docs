# ¿Qué es Brage?

Dado por las siglas de [Backend Revolutionary Architecture Generation Engine](https://brage.app) o ***Motor de Generación de Arquitectura Revolucionaria Backend***, es un conjunto de herramientas diseñadas para crear API REST rápidas y confiables.

Lee las tablas y consultas de tu base de datos y genera automáticamente todos los modelos, validaciones, controladores y enrutadores necesarios para manejar esas consultas en una API completa.

<div class="tip custom-block" style="padding-top: 8px">

¿Solo querés probarlo? Saltá directamente a el [Inicio Rápido](./getting-started).

</div>

## ¿Cómo funciona?

A través del poder de un algoritmo confiable, ***SIN inteligencia artificial***, Brage es una herramienta idempotente donde, para ciertas tablas y consultas SQL, siempre se obtiene la misma API REST como resultado.

<div class="tip custom-block" style="padding-top: 8px">

¿Solo querés verlo en acción? Saltá a los [Ejemplos](./queries).

</div>

## Casos de uso

- **Ingenieros frontend sin experiencia en backend**

  > Un uso común de las herramientas de Brage es la creación de un Backend for Frontend (BFF) por parte de ingenieros frontend con poca o ninguna experiencia en la creación de servidores.  
  
  > ***¿Cómo?: Solo se necesitan las tablas y consultas SQL que determinan la lógica de negocio que manejará la app. [BRAGE toma el SQL y devuelve el código de la API]***

- **APIs grandes con esquemas de bases de datos complejos**

  > Otro uso común es por parte de ingenieros backend en la creación de grandes APIs que manejan bases de datos con muchas tablas diferentes.

  > ***¿Por qué?: Cuando hay varias tablas en una base de datos, la API deberá tener un endpoint para manejar lecturas y modificaciones en cada una. [BRAGE lo hace automáticamente]***

- **APIs REST de demostración**

  > Otro uso frecuente es la creación rápida de demos en casos donde se requiere una API de demostración para probar un proyecto o funcionalidad.

  > ***¿Cómo?: A veces trabajamos con clientes o equipos que necesitan ver una aplicación funcionando antes de comenzar el desarrollo. [BRAGE lo hace todo de una vez]***

## Descripción

Es un paquete desarrollado en NodeJS instalable con pnpm, que actualmente trabaja en la creación de APIs REST con el framework **Express** y el paquete **MySQL2**.

::: warning Solo bases de datos MySQL

***Actualmente solo funciona con `BASES DE DATOS MYSQL`, por lo que solo lee e interpreta el lenguaje SQL diseñado para estas bases de datos.***
:::
