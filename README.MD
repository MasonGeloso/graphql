# __GraphQL dockerized__ - A GraphQL sample project #

This project should demonstrate how to work with Facebook's query language for APIs [_GraphQL_](http://graphql.org/)

_GraphQL_ is a query language for your API. This app just runs a simple _GraphQL_ endpoint providing an API to fetch simple blog data. You can query e.g for posts or with their authors or users and their posts.
You can also create new users and add new posts. This project should just demonstrate the handling of _GraphQL_.

The app is running within a [_Docker_](https://www.docker.com) container assembled with _docker-compose_. As a database it uses [_MongoDB_](https://www.mongodb.com/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```
cd $(project-root)
npm install
npm run app:start
```

This will automatically start the application within a Docker container. If you run it the first time it may take a while.

When the application has started successfully, go to [http://localhost:3000/graphql](http://localhost:3000/graphql) in your favorite browser. This link will open up the [_GraphiQL_](https://github.com/graphql/graphiql) client where you can discover the API.

```
npm run app:stop
```

This will stop the application again and all its dependent Docker containers.

## Prerequisites
Before you can use this project make sure that you fullfill the following prerequisites. In order to run the application the following must be installed on your machine:

### Node & NPM
Make sure you have installed Node and NPM installed on you machine. If you need to install it, have a look at [https://nodejs.org/en/](https://nodejs.org/en/). Node comes together with NPM.

### Docker
In order to run the the dockerized application you need to instal Docker. If you want to install Docker, may visit the [Docker docs](https://docs.docker.com/).

## Build & Run

```
npm run app:start
```

Use this command to build and run the app at once. At first it will build the application and run it afterwards within a _Docker_ container.

```
npm run app:stop
```

With this you can shutdown all containers again.

### Build app alone

`npm run build`

If you just want to build the app, run `npm run build` in the root directory to build the application. After that, the _dist_ folder contains all required assets to start the app.

### Run app alone

```
npm start
```

If you want to run the app alone, without running it in a Docker container just type `npm start`. But make sure that a _MongoDB_ instance is up and running (localhost:27017).

## Run Docker containers

```
npm run docker:up
```

If you want to run the application within a Docker container run `npm run docker:up`. You could also just type `docker-compose up` within the base directory to start the application and its database container.

## Stop Docker containers

```
npm run docker:down
```

This command will shutdown the _GraphQL_ container an all its dependend database containers again. If all containers has stopped successfully you can see with `docker ps`.