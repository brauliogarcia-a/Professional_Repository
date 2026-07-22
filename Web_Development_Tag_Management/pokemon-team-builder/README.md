# Pokemon Team Builder

This is my final project for WDD 430. It is a small MEAN stack application that keeps Pokemon data in MongoDB.

## What the project uses

- Angular components
- Angular service
- Node and Express web services
- MongoDB database
- CRUD methods for Pokemon data

## Versions used

- Node.js 14.21.3
- npm 6.14.18
- Angular CLI 12.2.18
- Angular 12.2.17

## MongoDB connection

The server connects to:

```text
mongodb://127.0.0.1:27017/cms
```

The Pokemon documents are stored in the `pokemons` collection.

## Run the project

Install the packages:

```bash
npm install
```

Run Angular:

```bash
ng serve
```

Run the Node server in another terminal:

```bash
npm run server
```

If nodemon gives problems, run:

```bash
npm run server-node
```

Angular runs at:

```text
http://localhost:4200
```

The API runs at:

```text
http://localhost:3000/pokemons
```
