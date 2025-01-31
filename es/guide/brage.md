# BRAGE ***comando***

## Descripción

El comando brage lee las carpetas y archivos .sql en la carpeta app, para luego crear las rutas en la carpeta server. Logeando información, advertencias y errores en el camino.

***Sin ninguna opción el comando observará cualquier cambio en la carpeta app.***

```sh
$ brage-js
```

## Opciones

La versión completa del software incluye un conjunto de opciones para el comando brage.

| Opciones                 | Atajos              |                                                                                               |
| ------------------------ | ------------------- | --------------------------------------------------------------------------------------------- |
| `--once`                 | `-o`                | Ejecuta el comando una vez son el "watchmode"                                                 |
| `--check`                | `-c`                | Chequea la sintaxis SQL en los archivos de la carpeta app                                     |
| `--showexpected`         | `-s`                | Muestra la sintaxis esperada en los errores dados por --check                                 |
| `--dbcreate`             | `-d`                | Recrea las bases de datos con las tablas de la carpeta app                                    |
| `--env`                  | `-e`                | Especifica el entorno para la opción en --dbcreate (`string`)                                 |

#### Ejemplos

Similar a hacer `brage-js -c -s` ejecuta la funcionalidad SQL para corroborar la sintaxis correcta en todos los archivos .sql de la carpeta app. La opción -s mustra el sql esperado.

```sh
$ brage-js --check --showexpected
```

Similar a hacer `brage-js -d -e test` ejecuta el generador de la DB con el comando mysql usando las tablas de la carpeta app. La opción -e acepta valores de `dev | test | prod`.

```sh
$ brage-js --dbcreate --env test
```

## Directorio App

El comando `brage-js` trabaja directamente con la carpeta **APP**.

### Rutas en App

Cada carpeta en el directorio app corresponde a una ruta en el servidor api. 

::: warning ADVERTENCIA
Sólo las rutas en el directorio raiz de app estan disponibles. NO se permiten RUTAS ANIDADAS.
:::

> Entrada
```
.
├─ app
│  ├─ clients
│  │  └─ **
│  ├─ orders
│  │  └─ **
│  ├─ README.md
```

> Salida
```
.
├─ server
│  ├─ global
│  │  └─ **
│  ├─ routes
│  │  └─ clients
│  │  |  └─ **
│  │  └─ orders
│  │  |  └─ **
│  ├─ README.md
```

### Tablas en App

Cada carpeta en el directorio app tiene que tener ***table.sql*** que generará las validaciones.

::: warning ADVERTENCIA
El código de la tabla SQL debe estar escrito para MySQL. Cada campo entre `comillas invertidas`

El orden de la definición en los campos debe ser | `TIPO` | `VALOR NULL` | `VALOR POR DEFECTO` |
:::

> ***app \ clients \ table.sql***

```sql
CREATE TABLE `clients` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `first_name` VARCHAR(200) NOT NULL,
  `last_name` VARCHAR(200) NOT NULL,
  `email` VARCHAR(250) NOT NULL UNIQUE,
  `phone` VARCHAR(250) NOT NULL UNIQUE,
  `address` VARCHAR(250) NOT NULL UNIQUE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Consultas en App

Cada carpeta en el directorio app tiene que tener ***queries.sql*** que generará los endpoints.

::: warning ADVERTENCIA
Cada solicitud debe terminar con punto y coma, además de tener un espacio en blanco entre ellas

Cada título de solicitud debe empezar con ***get***, ***add***, ***change*** o ***remove***

Cada campo en la solicitud debe estar entre `comillas invertidas`
:::

> ***app \ clients \ queries.sql***

```sql
-- getAll
-- ! endpoint: all
    SELECT * FROM `clients`
    WHERE `id` = ?;

-- addNew
-- ! message: Todos los clientes del usuario solicitados
    INSERT INTO `clients` (`first_name`, `last_name`, `email`, `phone`, `address`)
    VALUES (?, ? ,?, ?, ?);

-- changeAddress
    UPDATE `clients`
    SET `address` = ?,
    WHERE `id` = ?;

-- remove
    DELETE FROM `clients`
    WHERE `id` = ?;

```