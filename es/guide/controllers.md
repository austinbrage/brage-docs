# Producción de Controladores

## Funcionalidad

El comando BRAGE tomará las consultas definidas en el archivo queries.sql y construye una clase javascript para un controlador de Express que se usarán en las ***rutas***.

## Ejemplo

Cada consulta en el **queries.sql** puede tener un mensaje de metadato con el patrón `-- !`.

***Este comentario opcional será agregado en la respuesta OK del controlador***

### `entrada`

> ***app / clients / queries.sql***

```sql 
-- getAll
-- ! message: todos los datos del cliente solicitados
    SELECT * FROM `clients`
    WHERE `id` = ?;

-- addNew
-- ! message: nuevo cliente agregado
    INSERT INTO `clients` (`first_name`, `last_name`, `email`, `phone`, `address`)
    VALUES (?, ? ,?, ?, ?);

-- changeAddress
-- ! message: dirección del cliente modificada
    UPDATE `clients`
    SET `address` = ?,
    WHERE `id` = ?;

-- remove
-- ! message: cliente eliminado
    DELETE FROM `clients`
    WHERE `id` = ?;
    
```

### `salida`

> ***server / routes / clients / clients.controllers.js***

```js
import { ClientsValidation } from './clients.validations.js';
import { asyncErrorHandler } from './../../global/handlers/asyncError.js';
import { createOkResponse, createErrorResponse } from './../../global/utils/responses.js';

class ClientsController {

    constructor({ clientsModel }) {
        this.clientsModel = clientsModel;
        this.validateClients = new ClientsValidation();
    }

    validationErr(res, validationError) {
        return res.status(400).json(createErrorResponse({
            message: 'Validation data error',
            error: validationError.format()
        }));
    }

    getAll = asyncErrorHandler(async (req, res) => {
        const validation = this.validateClients.getAll(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.clientsModel.getAll(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'todos los datos del cliente solicitados',
            data
        }));
    })

    addNew = asyncErrorHandler(async (req, res) => {
        const validation = this.validateClients.addNew(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.clientsModel.addNew(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'nuevo cliente agregado',
            data: [data]
        }));
    })

    changeAddress = asyncErrorHandler(async (req, res) => {
        const validation = this.validateClients.changeAddress(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.clientsModel.changeAddress(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'dirección del cliente modificada',
            data: [data]
        }));
    })

    remove = asyncErrorHandler(async (req, res) => {
        const validation = this.validateClients.remove(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.clientsModel.remove(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'cliente eliminado',
            data: [data]
        }));
    })

}

export default ClientsController;
```