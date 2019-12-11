# EcoWebApp 

This application is a single place for creating Events, Fundraisers, Starting Petitons and Signing them, as well as updating a status with any work that you did that reduced your carbon footprint

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

##Motivation

While it can seem like a hippy-dippy thing to say, protecting the environment is of the utmost importance. We all need to work together to make protecting our planet a priority within society and within our individual lives

We are trying to achieve this by building this application. Be proud of the things you do to protect the environment at the same time, create awareness.


## Technology/ Framework used
FrontEnd - Angular 8

Backend - ExpressJs, NodeJS

Database - MongoDB

Style: SASS, CSS, Bootstrap, Angular Material and Google Material Icons

Authentication/Authorization: Auth0 with JWT tokens. (Algorithm Rs256 following OIDC specifications)


External APIs connected to the app: Google Maps for Event Location, Flutterwave for Payment using Angular Rave, Air Quality Info, News API for Blog.


## Features
1. Live Air Quality Index on Home page
3. Read blogs related to climate change
2. Create, manage and attend events
3. Create and Manage Fundraisers
4. Donate to various fundraisers
5. A platform to share activities that reduce carbon footprint
6. Create and Manage Petitions
7. Sign Petitions

##API Endpoints
Events:
1. GET: v1/eco/events
2. POST: v1/eco/events
3. GET: v1/eco/events/:id
4. PUT: v1/eco/events/:id
5. DELETE: v1/eco/events/:id

Attendees:
1. GET: v1/eco/attendees
2. POST: v1/eco/attendees
3. GET: v1/eco/attendees/:id
4. PUT: v1/eco/attendees/:id
5. DELETE: v1/eco/attendees/:id

Fundraisers:
1. GET: v1/eco/fundraisers
2. POST: v1/eco/fundraisers
3. GET: v1/eco/fundraisers/:id
4. PUT: v1/eco/fundraisers/:id
5. DELETE: v1/eco/fundraisers/:id

Donations:
1. GET: v1/eco/donations
2. POST: v1/eco/donations

Social Feeds:
1. GET: v1/eco/socialfeeds
2. POST: v1/eco/socialfeeds
3. GET: v1/eco/socialfeeds/:id
4. PUT: v1/eco/socialfeeds/:id
5. DELETE: v1/eco/socialfeeds/:id

Petitions:
1. GET: /petitions
2. POST: /petitions
3. PUT: /petitions/:id
4. DELETE: /petitions/:id
5. GET: /petitions/:id
6. GET: /petitions/:emailId

Signature:
1. GET: /signature
2. POST: /signature
3. GET: /signature/:petitionId
4. GET: /signature/:emailId
5. GET: /signature/count/:emailId

## Running the app
Prerequisites:
1. MongoDB should be installed
2. NodeJS and Angular CLI

Step1: Run `npm install` on both frontend and backend folders

Step2: On backend folder, run `node server.js`

Step3: On frontend folder run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Contributors
Pavan Kalyan - srkantarao.p@husky.neu.edu

Floyed Pinto - pinto.fl@husky.neu.edu

Aisswaryya Murugananth - murugananth.a@husky.neu.edu

Thushanth Bengre - bengre.t@husky.neu.edu
