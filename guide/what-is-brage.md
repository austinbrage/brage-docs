# What is Brage?

Stands for [Backend Revolutionary Architecture Generation Engine](https://brage.pages.dev), a set of tools designed for creating fast and reliable REST APIs.

It reads your Database tables and queries and automatically generates all the models, validations, controllers and routers needed to handle those queries on a complete API.

<div class="tip custom-block" style="padding-top: 8px">

Just want to try it out? Skip to the [Quickstart](./getting-started).

</div>

## How it works?

Through the power of reliable algorithm, ***with NO artificial intelligence***, it results in an idempontent tool where for certain tables and SQL queries the same REST API results.

<div class="tip custom-block" style="padding-top: 8px">

Just want to see it in action? Skip to the [Examples](./queries).

</div>


## Use Cases

- **Frontend engineers with no backend experience**

  > A common use for brage tools is Backend for Frontend (BFF) creation by frontend engineers with little or no server creation experience. 
  
  > ***How?: Only needing the tables and SQL queries that determine the business logic that the application will handle. [BRAGE takes the SQL, returns the API code]***

- **Big APIs with a huge Database schemas**

  > Another common use is by backend engineers in creating large APIs that handle databases with several different tables.

  > ***Why?: When having several tables on a database, the API will have to have an endpoint to handle reads an mutations on each one. [BRAGE does it automatically]***

- **Demo REST APIs**

  > Another common use is the creation of demos quickly in cases where an API DEMO is required to test a project or functionality.

  > ***How?: Sometimes we work with clients or teams that need to see a previous application working before starting to develop. [BRAGE does it all at once]***

## Description

It is a package made in NodeJS installable with pnpm, which currently works on the creation of REST APIs with the **Express** framework and the **MySQL2** package.

::: warning Only MySQL databases

***Currently it only works with `MYSQL DATABASES`, therefore it only reads and interprets SQL language made for these databases.***
:::