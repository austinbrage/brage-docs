# Controller Output

## Functionality

The BRAGE command takes the queries defined on the queries.sql file of the app folder and builds a javascript class for an Express controller that is gonna be used by the ***routers***.

## Example

Each query on the **queries.sql** can have a message metadata after the pattern `-- !`.

***This optional comment will be added to the OK response on the controller***

### `input`

> ***app / clients / queries.sql***

```sql 
-- getAll
-- ! message: all data from clients requested
    SELECT * FROM `clients`
    WHERE `id` = ?;

-- addNew
-- ! message: new client added
    INSERT INTO `clients` (`first_name`, `last_name`, `email`, `phone`, `address`)
    VALUES (?, ? ,?, ?, ?);

-- changeAddress
-- ! message: client address modified
    UPDATE `clients`
    SET `address` = ?,
    WHERE `id` = ?;

-- remove
-- ! message: client removed
    DELETE FROM `clients`
    WHERE `id` = ?;
    
```

### `output`

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
            message: 'all data from clients requested',
            data
        }));
    })

    addNew = asyncErrorHandler(async (req, res) => {
        const validation = this.validateClients.addNew(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.clientsModel.addNew(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'new client added',
            data: [data]
        }));
    })

    changeAddress = asyncErrorHandler(async (req, res) => {
        const validation = this.validateClients.changeAddress(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.clientsModel.changeAddress(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'client address modified',
            data: [data]
        }));
    })

    remove = asyncErrorHandler(async (req, res) => {
        const validation = this.validateClients.remove(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.clientsModel.remove(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'client removed',
            data: [data]
        }));
    })

}

export default ClientsController;
```