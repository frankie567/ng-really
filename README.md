# ng-really

[![Build Status](https://travis-ci.org/frankie567/ng-really.svg?branch=master)](https://travis-ci.org/frankie567/ng-really)

Modals and alerts are annoying. Opt for a simpler, more discreet and yet just as safe system: action button that morphs into a confirmation button.

## Installation

Install via bower

```shell
bower install ng-really
```

## Usage

Add `ng-really` as a dependency to your app:

```javascript
angular.module('yourApp',[
  'ng-really'
]);
```

Then, just set `ng-really` attributes on the element triggering the action you want a confirmation for (usually, a button):

```html
<button type="button" class="btn btn-danger" ng-really ng-really-confirm-label="'Really?'" ng-really-confirmed-action="confirmedAction()" ng-really-timeout="1000">Delete</button>
```

### Available attributes

* `ng-really-confirm-label` (Type: `string`, Example: `Really?`): Label showing when the user clicks the first time.
* `ng-really-confirmed-action`: Function to execute when the user clicks a second time.
* `ng-really-timeout`: (Type: `number`, Example: `1000`, optional): Number of milliseconds until the element returns to its initial state after first click. If not provided, the element waits forever for the second click.

## Development

Install Gulp via npm if you don't have it
```shell
npm install -g gulp
```

## Available commands

* `gulp`: build and test the project
* `gulp build`: build the project and make new files in `dist`
* `gulp serve`: start a server to serve the demo page and launch a browser then watches for changes in `src` files to reload the page
* `gulp test`: run tests
* `gulp serve-test`: runs tests and keep test browser open for development. Watches for changes in source and test files to re-run the tests
