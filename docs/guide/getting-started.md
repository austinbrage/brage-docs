# Getting Started

## Go and get it

First get the package on this landing page [Bragetools](https://brage.pages.dev).

## Installation

#### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.
- [Pnpm](https://pnpm.io/installation) package install locally.
- [Brage](https://brage.pages.dev) already bought.

Once you have purchased the package, unzip the .zip file and as described in the README, execute the following commands in the package folder to install the package locally.

```sh
$ pnpm install
```

```sh
$ pnpm start
```

The **START command** will install locally on your machine 2 commands, one to create an api project and another to create the api routes. ***Verify them with these commands***.

```sh
$ create-brage-js -v
```

```sh
$ brage-js -v
```

## Template creation

BRAGE works in a similar way to ***VITE***, with a command to create the conditioned template for the tool to work and another command to generate the code necessary for the app.

::: info Brage template command ***[See docs](./create-brage)***
Choose a directory where you want to create your API project and run the following command.
:::

```sh
$ create-brage-js
```

## Routes Generation

BRAGE has a command to generate all the endpoints routed on the api with a command that reads the ***SQL*** content on the APP folder and creates the files on the SERVER folder.

::: info Brage app command ***[See docs](./brage)***
On the directory where the template was created run this command to generate the api routes.
:::


```sh
$ brage-js
```