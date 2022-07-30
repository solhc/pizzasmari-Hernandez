# :large_orange_diamond: Pizzasmari :large_orange_diamond:

La presente aplicación es una tienda virtual de pizzas y se presenta como  proyecto final en el curso de  React Js de CODERHOUSE

Se trata de una aplicación para vender pizzas. Creada con 'Create-React-app'.

La aplicación cuenta con el siguiente diseño:

## Barra de navegación: 
Es la barra de opciones visible durante toda la navegación, al pasar el mouse sobre cada menú se activa un hover del mouse desplegando una línea debajo de cada menú. Los enlaces que contiene son:

   - Logo del negocio (clickeable para regresar al inicio de la página)
   - Inicio
   - Categorías de los tipos de pizzas: tradicionales, extranjeras y vegetarianas
   - Carrito de compras


## Página de inicio
Muestra  un mensaje de bienvenida y el catálogo de productos.

## Categoría de productos:

Al seleccionar alguna categoría  se activa el Loading para presentar  los tipos de pizzas de la categoría seleccionada.

## Detalle de cada producto: 
Puede acceder directamente desde el catálogo de productos o dentro de cada una de las categorías. En cualquiera de los dos casos se activa un loading para indicar que se está cargando la información, posteriormente se muestra el detalle de cada producto como la imagen, el precio y el link para agrgarlo al carrito.

## Carrito de compras:
Muestra el resumen de los productos agregados con opción a eliminar alguno de estos o concluir la compra.
Realizada la compra manda un mensaje de confirmación indicando al cliente el código de la orden.
Cada orden registrada se almacena en la base de datos de firestore.

* PÁGINA NOTFOUND: se presenta en caso de acceder a una ruta no definida en el proyecto

## Dependencias
- Bootstrap para dar formato a la aplicación.
- React 
- React Dom para actualizar el DOM para igualar los elementos de React.
- React Router Dom para la navegación.
- Firebase-Firestore para almacenar los productos y ordenes solicitadas.

## Gif animado de la página
 [Ver gif animado con el recorrido de una compra](https://drive.google.com/file/d/1IA1_Bjzu0rDA1Y2lYzlMmUhezuFnH8rD/view)








