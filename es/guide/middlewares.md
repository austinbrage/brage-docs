# Producción de Intermediarios

## Funcionalidad

El comando BRAGE toma tanto el archivo queries.sql como el table.sql en la carpeta app y construye una clase javascript para un intermediario de Express que sanitice los datos en las ***rutas get***.

## Ejemplo

En las solicitudes get que reciben datos no-string de acuerdo a las definiciones en la tabla, los intermediarios se crearán para convertir los tipos de datos antes del controlador.

### `entrada`

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

### `salida`

> ***server / routes / clients / clients.middlewares.js***

:::info
Acá el dato id se convierte a un número ya que el controlador y el modelo esperan un número en el valor del id en la solicitud get ***(necesario porque los parámetros de consulta son strings)***.
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

        // Inicializar req.sanitizedData
        req.sanitizedData = {};

        //id va de "string" a "number"
        req.sanitizedData.id = parseInt(validation.data.id, 10);

        next();
    }

}

export default SanitizeGetRequests;
```