# data-driven-uid

Demo to showcase how powerful is to create data driven application, allowing you to modify data in your application without changing the code.

![demo](/niradler/data-driven-ui/tree/master/docs/demo.gif)

## Setup

server .env

```
PORT=4000
CLIENT=pg
DATABASE=ddui
PG_USER=postgres
PASSWORD=postgres
HOST=localhost
PG_PORT=5432
```

```
npm i
npm run server:migrate
npm run server:watch
npm run client:start
```
