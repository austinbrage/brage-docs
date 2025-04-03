# Getting Started

The core of the project is OPEN SOURCE and is available publicly via NPM.

> For more advanced features check the premium versions of the pkg on
> [Brage Products](https://brage.app)

## Installation

#### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.

For a more convenient use it is recommended to install the packages globally

::: code-group

```bash [npm]
$ npm i -g create-brage brage-js
```

```bash [Yarn]
$ yarn global add create-brage brage-js
```

```bash [pnpm]
$ pnpm add -g create-brage brage-js
```

```bash [Bun]
$ bun add -g create-brage brage-js
```

::: 

This will install locally on your machine 2 commands, one to create an api project and another to create the api routes. ***Verify them with these commands***.

```bash
$ create-brage -v
```

```bash
$ brage -v
```

## Template creation

BRAGE works in a similar way to ***VITE***, with a command to create the conditioned template for the tool to work and another command to generate the code necessary for the app.

::: info Brage template command ***[See docs](./create-brage)***
Choose a directory where you want to create your API project and run the following command.
:::

```bash
$ create-brage
```

## Routes Generation

BRAGE has a command to generate all the endpoints routed on the api with a command that reads the ***SQL*** content on the APP folder and creates the files on the SERVER folder.

::: info Brage app command ***[See docs](./brage)***
On the directory where the template was created run this command to generate the api routes.
:::


```bash
$ brage
```