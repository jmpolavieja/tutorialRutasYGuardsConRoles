# TutoRutas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

Se trata de hacer un proyecto con el que demostrar el uso de _login_ + _guards_ + _canActivated_ con **roles**.

## Primeros pasos

Hemos iniciado el proyecto con angular material, ng-bootstrap y angular/fire, cambiando al modo compat la configuración de este último.

Comandos:

`ng add @angular/material`

`ng add @ng-bootstrap/ng-bootstrap`

`ng add "angular/fire`

Seguidamente hemos importado en app.module reactiveforms.
Para gestionar todos los módulos o componentes de angular material hemos creado un módulio en la carpeta shared.

`ng g m shared/material`

### Creación del servicio firebase

Comando: `ng g s shared/services/firebase`

Luego entramos y configuramos los métodos de acceso: _getIncidencias_, _getDetailIncidencia_, _updateIncidencia_, _newIncidencia_, _deleteIncidencia_ y _queryIncidencia_.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
