# Producción de Endpoints

## Funcionalidad

El comando BRAGE toma las consultas definidas en el archivo queries.sql de la carpeta app y construye una función javascript de enrutador Express que usará el ***punto de entrada***.

## Ejemplo

Cada consulta en el **queries.sql** puede tener un endpoint de metadato con el patrón `-- !`.

***Este comentario opcional será agregado en la ruta del endpoint dentro del enrutador***

### `entrada`

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

### `salida`

> ***server / routes / clients / clients.router.js***

:::info
Notá que las consultas sin el metadato `-- ! endpoint` tendrán el título de la consulta ( comentario principal ) como ruta del endpoint.
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