## Build
1. Please make sure you have installed the latest version of nodejs before running this application. This solution was developed with nodejs version v12.12.0

2. Inside the root project folder where package.json is located, run npm install to install dependencies.
Core Dependencies include Angular 11.0.4 and PrimeNG Angular component library.

3. Once all dependencies are installed in the root folder run npm start to build and launch the Angular application.

4. The Single Page Application should be served on the default port of 4200 at http://localhost:4200/  


## Using the app

This app acts as a feed and query web app for the popular hacker news article aggregator. To use this web app, please navigate to http://localhost:4200/ and enter a search query which will retrieve the latest entries for that topic

The two endpoints used for this are http://hn.algolia.com/api/v1/search_by_date?tags=story on initial load which will retrieve the latest stories and http://hn.algolia.com/api/v1/search?query=foo&tags=story which will retrieve the latest stories by search query.  

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

