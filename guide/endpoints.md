# Endpoints Output

## Functionality

The BRAGE command takes the queries defined on the queries.sql file of the app folder and builds a javascript function for an Express router that is gonna be used by the ***entry point***.

## Example

Each query on the **queries.sql** can have an endpoint metadata after the pattern `-- !`.

***This optional comment will be added to the endpoint path on the router***

### `input`

> ***app / clients / queries.sql***

```sql 
-- getAll
-- ! endpoint: all/byId
    SELECT * FROM `clients`
    WHERE `id` = ?;

-- addNew
    INSERT INTO `clients` (`first_name`, `last_name`, `email`, `phone`, `address`)
    VALUES (?, ? ,?, ?, ?);

-- changeAddress
-- ! endpoint: address
    UPDATE `clients`
    SET `address` = ?,
    WHERE `id` = ?;

-- remove
    DELETE FROM `clients`
    WHERE `id` = ?;
     
```

### `output`

> ***server / routes / clients / clients.router.js***

:::info
Note that the queries without the `-- ! endpoint` metadata will have the name of the query ( main comment ) as the endpoint path.
:::

```js
import { Router } from "express";
import SanitizeGetRequests from './clients.middlewares.js';
import ClientsController from './clients.controllers.js';

const createClientsRouter = ({ clientsModel }) => {
   const clientsRouter = Router();

   const sanitize = new SanitizeGetRequests();
   const clientsController = new ClientsController({ clientsModel });

   clientsRouter.get('/all/byId', sanitize.getAll, clientsController.getAll);
   clientsRouter.post('/addNew', clientsController.addNew);
   clientsRouter.put('/address', clientsController.changeAddress);
   clientsRouter.delete('/remove', clientsController.remove);

   return clientsRouter;
}

export default createClientsRouter;
```