# Queries Output

## Functionality

The BRAGE command takes the queries defined on the queries.sql file of the app folder and place them on a javascript object that is gonna be used by the ***route model***.

## Example

Each query on the **queries.sql** must have a title on a comment above it to identify it.

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