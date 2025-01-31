# Producción de Modelos

## Funcionalidad

El comando BRAGE toma las consultas definidas en el archivo queries.sql de la carpeta app y construye una clase javascript para un modelo MySQL que usarán los ***controladores***.

## Ejemplo

Cada consulta en el **queries.sql** debe tener un `?` en las inserciones de datos para que el modelo funcione.

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

> ***server / routes / clients / clients.model.mysql.js***

```js
import clientsQueries from './clients.queries.js';
import { ConnectionHandler } from '../../global/handlers/connection.js';

class ClientsMysql {

    constructor({ clientsPool }) {
        const connectionHandler = new ConnectionHandler('clients');

        this.pool = clientsPool;
        this.connectionHandler = connectionHandler.connect;
    }

    getAll = async ({ id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               clientsQueries.getAll,
               [id]
            );

            return rows;
        })
    }

    addNew = async ({ first_name, last_name, email, phone, address }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               clientsQueries.addNew,
               [first_name, last_name, email, phone, address]
            );

            return rows;
        })
    }

    changeAddress = async ({ address, id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               clientsQueries.changeAddress,
               [address, id]
            );

            return rows;
        })
    }

    remove = async ({ id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               clientsQueries.remove,
               [id]
            );

            return rows;
        })
    }

}

export default ClientsMysql;
```