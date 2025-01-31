# Middlewares Output

## Functionality

The BRAGE command takes both the queries.sql file and the table.sql of the app folder and builds a javascript class for Express middlewares to sanitized the data on the ***get routers***.

## Example

On the get requests that received non string data according to the table definitions, middlewares are gonna be created to convert the data type before reaching the controller.

### `input`

> ***app / clients / table.sql***

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

> ***server / routes / clients / clients.middlewares.js***

:::info
Here the id data is converted to a number since the controller and model expect a number on the id value on the get request ***(this is needed since all the query parameters come as string values)***.
:::

```js
import { createErrorResponse } from './../../global/utils/responses.js';
import { ClientsStringValidation } from './clients.validations.js';

class SanitizeGetRequests {

    constructor() {
        this.validateStringClients = new ClientsStringValidation();
    }

    validationErr(res, validationError) {
        return res.status(400).json(createErrorResponse({
            message: 'Validation data error',
            error: validationError.format()
        }));
    }

    getAll = (req, res, next) => {
        const validation = this.validateStringClients.getAll(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //id goes from string to number
        req.sanitizedData.id = parseInt(validation.data.id, 10);

        next();
    }

}

export default SanitizeGetRequests;
```