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

## Creación de los módulos y sus rutas (incluyendo lazyloading)

Creamos el módulo de administración:

`ng g m administracion -m app --route administracion`

Este comando crea el módulo en su carpeta, un componente con el nombre administracion y añade la ruta con lazy loading en el app-routing (por supuesto, crea el módulo de enrutamiento de administracion).

Hacemos lo mismo con el módulo de clientes:

`ng g m clientes -m app --route clientes`

### Creación del menú con los enlaces

`ng g c shared/menu`

## Siguiente paso: añadir servicio de usuarios

Creamos el servicio usuarios a través del cual comprobaremos si está logueado el usuario y cual es su rol en la aplicación:

`ng g s shared/services/users`

### Implementación del login

Sacado de [aquí](https://techriders.tajamar.es/log-in-firebase-angular/)

Primero creo un módulo (sin enrutamiento, para el login):

`ng g m login`

Dentro crearemos las diferentes vistas para el logín, el registro, etc...

`ng g c login/login`

Modifico el formulario para que sea reactivo, y elimino el módulo de login, declarando el login directamente en app module (_no me cogía bien el formGroup_).

`ng g c login/registro`

`ng g c login/logout`


## Implementación del Guard para acceder si el usuario ha hecho signin

### Crear el guard

`ng g guard shared/guards/guardSignIn`

********************************
********************************

Implementación de roles: estos se deben leer de la base de datos. El usuario administraador debería poder ver los usuarios registrados para asignarles un rol.
Para ello en el guard, extraigo el mail del usuario y consulto el rol a la base de datos.

14/02/2023
Hemos dado foramto a las páginas de login y registro.

Administración: En este caso, administración de usuarios, con la asignación de roles.
