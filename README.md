<br />
<h3 align="center">API REST - STORE</h3>
  </p>
</p>



<details open="open">
  <summary>Tabla de contenido</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre el proyecto</a>
      <ul>
        <li><a href="#built-with">Construido con</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Empezando</a>
      <ul>
        <li><a href="#installation">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#contact">Contacto</a></li>
    <li><a href="#acknowledgements">Agradecimientos</a></li>
  </ol>
</details>



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
```
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
```
```
## Crear producto
Petición de tipo POST a (http://localhost:3900/products)
```sh
{
    "name": "Producto ejemplo",
    "price": 300
}
```
Respuesta:
```
```
## Modificar producto
Petición de tipo PATCH a (http://localhost:3900/products/idDelProducto)
``` sh
[
    {"propName": "name", "value": "Nuevo nombre del producto"}
]
```
Respuesta:
```
```
## Obtener productos
Petición de tipo GET a (http://localhost:3900/products)
Respuesta que devolverá todos los productos:
```
```
Para obtener un producto especifico realizar una petición de tipo GET a (http://localhost:3900/products/idDelProducto)
Respuesta:
```
```
## Eliminar producto
Petición de tipo DELETE a (http://localhost:3900/products/idDelProducto)
Respuesta:
```
```
## Realizar una orden 📃
Petición de tipo POST a (http://localhost:3900/orders) indicando el Id del producto que quiere llevar y su respectiva cantidad.
```sh
{
    "productId": "456IdDelProducto123",
    "quantity": 2
}
```
## Listar todas las ordenes
Petición de tipo GET a (http://localhost:3900/orders)
```
```
## Mostrar detalles de una orden especifica
Petición GET a (http://localhost:3900/orders/idDeLaOrden)
```
```
## Eliminar una orden
Petición DELETE a (http://localhost:3900/orders/idDeLaOrden)
Respuesta:
```
```


## Contacto

Sacudato Virginia - [@virginiasacudato](https://www.instagram.com/virginiasacudato/) - virginiasacudato@gmail.com



## Agradecimientos

A *Franco Di Leo* profesor de UTN, por su dedicación y tiempo a la enseñanza y la formación de desarrolladores.
