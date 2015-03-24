# ja222qm-webbramverk-yo-client

# Setup

## Getting started

1. Clone the repository
2. Requires Node and npm https://nodejs.org/
3. Requires Bower http://bower.io/
4. Requires Grunt http://gruntjs.com/
5. Requires Api running in the background: https://github.com/juhaniaa/ja222qm-webbramverk-api
6. Locate the root folder in you command line tool
7. run "bower install"
8. run "grunt serve"

## Alternative Setup

1. Do step 1 above
2. Skip steps 2-4 above and instead start up an easyPhp server on the "dist" folder found in root of project
3. Do step 5 above
4. Navigate to your running easyPhp server in browser

## These are the changes I made to the api during development

1. Added gem with support for CORS so I could make requests from my client application
2. Changed tagName to name in the Tag-class so it would have the same naming as the Hunter-class for easier filtering of events
3. Changed authorization header to x-jwt since it was a bad practice to have two authorization headers with the same name
4. Added sorting to events to get latest first according to creation date
5. Added support for signing up as a new hunter which was needed for anyone to actually use the application

## Yeoman

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.
