# Model Output

## Functionality

The BRAGE command takes the queries defined on the queries.sql file of the app folder and builds a javascript class for a MySQL model that is gonna be used by the ***route controller***.

## Example

Each query on the **queries.sql** must have a `?` on the data inserts so the model can work.

### `input`

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

### `output`

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