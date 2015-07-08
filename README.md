# MEAN RSVP
A simple application built with the MEAN (MongoDB, ExpressJS, AngularJS, NodeJS) stack to collect RSVPs for my wedding.

## Tools
In order to build/run this application, it is assumed that you have the following tools installed on your system:
- MongoDB
- NodeJS
- NPM
- Bower

## Instructions
### Install dependencies
This project depends on supporting packages provided by NPM and Bower.  Install those libraries:
```sh
npm update
npm install
bower update
```

### Start Mongo
On a Mac, using MongoDB installed through Homebrew:
```sh
mongod --config /usr/local/etc/mongod.conf
```

### Configure App->DB Connection
The application uses environment variables to configure connections to dependencies like MongoDB for storing data.  
Simply set the `DB_URL` environment variable before starting the application:
```sh
export DB_URL=mongodb://localhost/news
```

### Start the application
```sh
npm start
```
