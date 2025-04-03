# Create BRAGE ***command***

## Description

The create-brage command scafolds a complete API project template on a folder with the name of the project provided.

***This is strongly based on the create-vite command functionality and appearence.***

```sh
$ create-brage
```

## Structure

After running the command, the tool will scafolds the following folder structure.

> Its the codebase for Node REST API with the main dependencies express - mysql2 - zod 

> ***The server / global folder comes with all the boiler plate to run an express server conected to a mysql database.***

```
.
├─ app
│  ├─ articles
│  │  └─ queries.sql
│  │  └─ table.sql
│  ├─ README.md
├─ server
│  ├─ global
│  │  └─ **
│  ├─ routes
│  │  └─ **
│  ├─ index.js
└─ .gitignore
└─ .env
└─ .eslintrc.cjs
└─ package.json
└─ README.md
```

::: details APP folder
The BRAGE tool reads the SQL content on the directories inside this folder in order to work. ***At creating the template the app folder comes with an articles folder to test the brage command***.
:::

::: details SERVER folder
The BRAGE tool writes the JAVASCRIPT content on the routes directory inside this folder when it runs. ***At creating the template the server folder comes with a healthcare route to test the api***.
:::

::: details Other configurations
The **.env** file comes already with default values for the needed environment variables and secrets.

The **package.json** comes already with the scripts to work with node and brage at the same time.
:::