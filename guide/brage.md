# BRAGE ***command***

## Description

The brage command reads the folders and .sql files on the app folder and then creates the routes on the server folder. Logging info, warnings and errors along the way.

***Without any options the command will watch any changes made on the app folder.***

```sh
$ brage
```

## Options

The complete version of the software includes a set of options on the brage command.

:::warning
So far only the --once option is available on the free version of the package
:::

| Options                  | Shortcuts           |                                                       |
| ------------------------ | ------------------- | ----------------------------------------------------- |
| `--once`                 | `-o`                | Run the command only once without watchmode           |
| `--check`                | `-c`                | Check the SQL syntax on files of the app folder       |
| `--showexpected`         | `-s`                | Show expected syntax on founded error on --check      |
| `--dbcreate`             | `-d`                | Recreates the databases with tables on the app folder |
| `--env`                  | `-e`                | Especifies one environment on --dbcreate (`string`)   |

#### Examples

Similar to do `brage -c -s` runs the SQL safer functionality at checking the right syntax in all the .sql files on the app folder. The -s flag shows the expected sql on the files.

```sh
$ brage --check --showexpected
```

Similar to do `brage -d -e test` runs the DB generator at running the mysql command with the tables on the app folder. The -e flag accepts the values of `dev | test | prod`.

```sh
$ brage --dbcreate --env test
```

## App directory

The `brage` command works directly with the **APP** folder.

### App Routes

Each folder on the app directory corresponds to a route on the api server. 

::: warning
Only the routes on the main app folder are available. No NESTED ROUTES are allowed
:::

> Input
```
.
├─ app
│  ├─ clients
│  │  └─ **
│  ├─ orders
│  │  └─ **
│  ├─ README.md
```

> Output
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

### App Tables

Each folder on the app directory has to have a ***table.sql*** that will generate the validations.

::: warning
The table SQL code must be written for MySQL, with each field name between `backticks`

The order of each field definition must be as follows | `TYPE` | `NULLABLE` | `DEFAULT VALUE` |
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

### App Queries

Each folder on the app directory has to have a ***queries.sql*** that will generate the endpoints.

::: warning
Each query must end with a semicolon and have a blank space between each other

Each query title must start with ***get***, ***add***, ***change*** or ***remove***

Each field on a query must be between `backticks`
:::

> ***app \ clients \ queries.sql***

```sql
-- getAll
-- ! endpoint: all
    SELECT * FROM `clients`
    WHERE `id` = ?;

-- addNew
-- ! message: All clients from user requested
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