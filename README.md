<p align="center">
  <img alt="angular-material-extensions's logo"
   height="256px" width="256px" style="text-align: center;" 
   src="https://cdn.rawgit.com/angular-material-extensions/algolia/master/assets/angular-material-extensions-logo.svg">
</p>

# @angular-material-extensions/algolia - Angular Library that enhances algolia instant search library - Material UI components and general services and directives

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Falgolia.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Falgolia)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/algolia)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/algolia/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/algolia?branch=master)
[![Build Status](https://travis-ci.org/angular-material-extensions/algolia.svg?branch=master)](https://travis-ci.org/angular-material-extensions/algolia)
[![CircleCI branch](https://img.shields.io/circleci/project/github/angular-material-extensions/algolia/master.svg?label=circleci)](https://circleci.com/gh/angular-material-extensions/algolia)
[![dependency Status](https://david-dm.org/angular-material-extensions/algolia/status.svg)](https://david-dm.org/angular-material-extensions/algolia)
[![devDependency Status](https://david-dm.org/angular-material-extensions/algolia/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/algolia#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/algolia.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/algolia.svg?style=flat-square)](https://github.com/angular-material-extensions/algolia/blob/master/LICENSE)



## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/google-maps-auto/issues)

If did you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Peer Dependencies](#peerDependencies)
- [Additional Requirements - material (Include a theme)](#additional-requirements-material-theme)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Run Demo App Locally](#run-demo-app-locally)
- [Development](#development)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## [Demo](https://angular-material-extensions.github.io/algolia)

View all the directives and components in action at [https://angular-material-extensions.github.io/algolia](https://angular-material-extensions.github.io/algolia)

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher | we are using already V9 ;)

for the directive as standalone you just need to install the following packages

- "algoliasearch": "^3.35.1",
- "angular-instantsearch": "^3.0.0-beta.5",
- "instantsearch.js": "^4.7.0",
- "@types/algoliasearch": "^3.34.10"

```bash
npm install algoliasearch@3 angular-instantsearch@beta instantsearch.js@3

npm install --save-dev @types/algoliasearch
```


<a name="installation"/>

##  [Installation](https://angular-material-extensions.github.io/algolia/getting-started)

## 1. Install via *ng add*. (Recommended)

If Angular Material Design is not setup, just run `ng add @angular/material` [learn more](https://material.angular.io/guide/getting-started)

Now add the library via the `angular schematics` and everything will be setup for you
```shell
ng add @angular-material-extensions/algolia
```


## 2. Install via *npm*. (Alternative) 

Now install `@angular-material-extensions/algolia` via:
```shell
npm install --save @angular-material-extensions/algolia
```

<a name="peerDependencies"/>

### Requirements (peer dependencies):

for the ui input component, please consider to install the following packages
- [angular animations v9.x](https://www.npmjs.com/package/@angular/animations)
- [angular material v9.x](https://www.npmjs.com/package/@angular/material)
- [angular cdk v9.x](https://www.npmjs.com/package/@angular/cdk)

```bash
npm i @angular/cdk @angular/material @angular/animations  
```

<a name="additional-requirements-material-theme"/>

### Additional requirements Theme (Material Design)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)

----

##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@angular-material-extensions/algolia`:
```js
{
  '@angular-material-extensions/algolia';: 'node_modules/@angular-material-extensions/algolia/bundles/algolia.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { MatAlgoliaModule } from '@angular-material-extensions/algolia';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MatAlgoliaModule.forRoot()`):
```js
import { MatAlgoliaModule } from '@angular-material-extensions/algolia';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [
     // important !!!
     
     MatAlgoliaModule, ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```


<a name="usage"/>

## Usage

### Components



### Directives

add `matAlgoliaRefresh` to a button component in order to trigger a refresh mechanism via algolia api automatically

```html
<button mat-icon-button matAlgoliaRefresh matTooltip="Aktualisieren">
    <mat-icon>refresh</mat-icon>
</button>
```


<a name="api"/>

### API - for more info please visit the official documentation [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/places-autocomplete?hl=en)

### `mat-algolia-menu-select`
| option | bind  |  type  |   default    | description  |
|:-------------------|:--------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|    
| attribute               | `Input()`   |  string ;      | - | key to filter  






<a name="documentation"/>

## [Documentation](https://angular-material-extensions.github.io/algolia/doc/index.html)

Please checkout the full documentation [here](https://angular-material-extensions.github.io//algolia/doc/index.html) 


<a name="run-demo-app-locally"/>

## Run Demo App Locally

- [clone this repo](https://github.com/angular-material-extensions/algolia.git) by running
```bash
$ git clone https://github.com/angular-material-extensions/algolia.git
```

- build the library 

- serve the demo app



<a name="development"/>

## Development

1. clone this [repo](https://github.com/angular-material-extensions/algolia.git)
2. Install the dependencies by running `npm i`
3. go to lib directory under `projects/angular-material-extensions/algolia`
4. build the library `npm run build`


<a name="other-angular-libraries"/>

## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/select-country](https://github.com/angular-material-extensions/select-country)
- [@angular-material-extensions/fab-menu](https://github.com/angular-material-extensions/fab-menu)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)

<a name="support"/>

## Support
+ or open an appropriate [issue](https://github.com/angular-material-extensions/algolia/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:


## License

Copyright (c) 2020 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT)

