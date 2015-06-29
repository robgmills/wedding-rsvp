# MEAN RSVP
A basic RSVP application built with the MEAN stack: MongoDB, ExpressJS, AngularJS, NodeJS.

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

### Start the application
```sh
npm start
```