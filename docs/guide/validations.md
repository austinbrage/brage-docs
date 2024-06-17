# Validation Output

## Functionality

The BRAGE command takes both the queries.sql file and the table.sql of the app folder and builds a javascript class for Zod validations that is gonna be used by the ***controllers***.

## Example

Each field on the table command will defined an atribute on the object zod schema.

Each query on the queries commands will defined a validation method.

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

> ***server / routes / clients / clients.validations.js***


:::info
Two validation classes are gonna be created, one according to the types of the table schema and the other only for string arguments for the query parameters on the get requests.
:::
```js
import { z } from 'zod';

export class ClientsValidation {

   schema = z.object({
      id: z.number(),
      user_id: z.number(),
      first_name: z.string(),
      last_name: z.string(),
      email: z.string(),
      phone: z.string(),
      address: z.string(),
      created_at: z.union([z.date(), z.null()]),
   })

   getAll = (data) => this.schema.pick({ id: true }).safeParse(data)
   addNew = (data) => this.schema.pick({ first_name: true, last_name: true, email: true, phone: true, address: true }).safeParse(data)
   changeAddress = (data) => this.schema.pick({ address: true, id: true }).safeParse(data)
   remove = (data) => this.schema.pick({ id: true }).safeParse(data)
}

export class ClientsStringValidation {

   schema = z.object({
      id: z.string(),
      user_id: z.string(),
      first_name: z.string(),
      last_name: z.string(),
      email: z.string(),
      phone: z.string(),
      address: z.string(),
      created_at: z.string(),
   })

   getAll = (data) => this.schema.pick({ id: true }).safeParse(data)
}
```