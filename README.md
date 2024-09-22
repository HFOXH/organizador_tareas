# README - Educational task Ruby on Rails Project with a Platzi course

This project is built using Ruby on rails, it is an educational project, it's about a kanban where you can manage the tasks in three columns: to_do, doing and done. And also you can delete the tasks.

## Project Set up

You will find in the migrations two tables: user table with devise and tasks

```bash
  rails db:migrate
  
  rails s
```

## Other educational process
It is the information that I learned about the general architecture of a ruby on rails project.

### Arquitecture 
my_app/<br>
├── app/<br>
│   ├── assets/<br>
│   │   ├── images/<br>
│   │   ├── javascripts/<br>
│   │   └── stylesheets/<br>
│   ├── controllers/<br>
│   ├── helpers/<br>
│   ├── models/<br>
│   ├── views/<br>
│   ├── mailers/<br>
│   ├── channels/<br>
│   └── jobs/<br>
├── bin/<br>
├── config/<br>
│   ├── environments/<br>
│   ├── initializers/<br>
│   ├── locales/<br>
│   └── credentials.yml.enc<br>
├── db/<br>
│   ├── migrate/<br>
│   └── seeds.rb<br>
├── lib/<br>
│   ├── tasks/<br>
│   └── assets.rb<br>
├── log/<br>
├── public/<br>
├── storage/<br>
├── test/ (o spec/ para RSpec)<br>
│   ├── fixtures/<br>
│   ├── models/<br>
│   └── controllers/<br>
├── tmp/<br>
├── vendor/<br>
├── Gemfile<br>
├── Gemfile.lock<br>
├── Rakefile<br>
└── README.md<br>

### Explication about the Arquitecture 
Dentro de app se encuentra la mayor estructura del proyecto, se puede ver el modelo MVC.<br>
<b>controllers/:</b> Contiene los controladores que manejan las solicitudes del usuario y determinan qué vistas se deben renderizar.<br>
    <b>models/:</b> Contiene las clases que representan los modelos de la aplicación y la lógica de negocio.<br>
    <b>views/:</b> Contiene las plantillas que muestran la información al usuario.<br>
    <b>assets/:</b> Contiene archivos estáticos como JavaScript, CSS y las imágenes que usará la aplicación.<br>
    <b>helpers/:</b> Contiene módulos de ayuda que proporcionan métodos adicionales que se pueden usar en las vistas.<br>
    <b>mailers/:</b> Define la lógica para enviar correos electrónicos.<br>
    <b>channels/:</b> Gestiona la lógica de los WebSockets para características en tiempo real.<br>
    <b>jobs/:</b> Define las tareas que se ejecutan en segundo plano (background jobs).<br>

Dentro de <b>bin</b> se encuentra scripts ejecutables, por consola.

Dentro de <b>config</b> se encuentra toda la configuración de la aplicación, incluyendo las rutas (routes.rb), la configuración de los entornos (development, test, production), inicializadores (código que se ejecuta al arrancar la aplicación), y locales.

<b>db</b> Contiene la base de datos y sus archivos asociados, como las migraciones y el esquema de la base de datos (schema.rb).

Dentro de <b>lib</b> hay bibliotecas extendidas y modulos que no pertenecen directamente al mvc

<b>logs</b> son archivos de registros

<b>public</b> van todos los archivos estaticos, como html, imagenes y otros.

<b>Storage</b>, active storage guarda los archivos que se sube en la aplicación

<b>test</b> contiene pruebas automatizadas.

<b>tmp</b> archivos temporales.

<b>vendor</b> aqui se agregan las dependencias externas que no se obtienen con bundler.

<b>Gemfile</b> define las gemas necesarias para la aplicación.

<b>Gemfile lock</b> define las versiones exactas de la gema.

El <b>rakefile</b> define las tareas que se ejecutan con rake.

<b>Rake:</b> Automatizador de tareas escrito en ruby.