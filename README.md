<br />
<h3 align="center">API REST - STORE</h3>
  </p>
</p>

## Sobre el proyecto

API REST dedicada a cualquier comercio. A través de un CRUD te encontrarás con herramientas para la gestión de productos y ordenes realizadas. En las próximas versiones se agregaran funciones como añadir imagen al producto, generar archivo PDF, entre otras cosas.

En las siguientes secciones te encontraras lo necesario para poner en marcha el proyecto.

### Construido con


* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/es/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)




## Empezando

A continuación siga las instrucciones para poner en funcionamiento el proyecto en su máquina local. Tener en cuen


### Instalación

1. Clonar el repositorio.
```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Instalar paquetes NPM.
    ```sh
   npm install
   ```
3. Crear un archivo *.env* en el directorio raíz del proyecto para las variables de entorno.
```sh
DB_HOST = ""
DB_PORT = ""
```


## Uso

En esta sección se encuentran ejemplos en formato JSON de las peticiones a realizar (GET, POST, PATCH y DELETE) y las respuestas que devolverá.

## Registro de usuario
Petición de tipo POST a (http://localhost:3900/users/signup)
```sh
{
    "email": "usuarioprueba@mail.com",
    "password": "passwordtest"
}
```
Respuesta:
```sh
{
message: "Usuario creado."
}
```

## Login y adquisición de JWT
Petición de tipo POST a (http://localhost:3900/users/login)
```sh
{
    "email": "usuarioprueba@mail.com",
    "password": "passwordtest"
}
```
Respuesta:
```sh
{
 "JWT": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZmFiNGY3OWNjNTdiNDIzOTAyZGYzNjAiLCJub21icmUiOiJmcmFuY28iLCJlbWFpbCI6ImFkbWluMTIxNUBnbWFpbG8uY29tIiwicm9sZSI6InZldGVyaW5hcmlhIiwiaWF0IjoxNjA4NjEwODY5fQ.E88Xbxwhf8AslK2F74OiUXERK8Mep00Zob6eaKz5JQw"
}
```
*Una vez realizado el registro, el login y haber obtenido el JSON Web Token podemos proceder a acceder a las demas rutas y hacer peticiones.*


## Contacto

Sacudato Virginia - [@virginiasacudato](https://www.instagram.com/virginiasacudato/) - virginiasacudato@gmail.com



## Agradecimientos

A *Franco Di Leo* profesor de UTN, por su dedicación y tiempo a la enseñanza y la formación de desarrolladores.
