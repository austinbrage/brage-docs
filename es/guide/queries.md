# Producción de Consultas

## Funcionalidad

El comando BRAGE toma las consultas definidas en el archivo queries.sql de la carpeta app y los coloca en un objeto javascript que se usarán en los ***modelos***.

## Ejemplo

Cada consulta en el **queries.sql** debe tener un titulo en un comentario arriba de este para identificarlo.

### `entrada`

> ***app / clients / queries.sql***

```sql 
-- getAll
    SELECT * FROM `clients`
    WHERE `id` = ?;
    
-- addNew
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

### `salida`

> ***server / routes / clients / clients.queries.js***

```js
const clientsQueries = {
  "getAll": "SELECT * FROM `clients` WHERE `id` = ?; ",
  "addNew": "INSERT INTO `clients` (`first_name`, `last_name`, `email`, `phone`, `address`) VALUES (?, ? ,?, ?, ?); ",
  "changeAddress": "UPDATE `clients` SET `address` = ?, WHERE `id` = ?; ",
  "remove": "DELETE FROM `clients` WHERE `id` = ?; "
};

export default clientsQueries;
```