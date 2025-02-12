**Autor: Manuel Gómez Ruiz**

**Asignatura: Despliegue de Aplicaciones Web**

**Fecha: 11/02/2025**

#   Práctica 6.1: Dockerización del despliegue de una aplicación Node.js

El objetivo de esta práctica es aprender a **dockerizar y desplegar una aplicación Node.js** que gestiona un **libro de direcciones con PostgreSQL** como base de datos.

### Conexión por SSH

El primer paso es establecer una conexión **SSH** con nuestra máquina virtual, las conexiones **SSH** se utilizan para acceder de forma segura a otra máquina de manera remota a través de una red, para ello abre una terminal y escribe ``ssh NombreUsuario@SuIp``.

![Conexión mediante SSH](./img/Captura-0.JPG)

##  Despliegue con Docker

Para comenzar con la práctica, vamos a clonar un repositorio con el código fuente de una aplicación y el archivo **Dockerfile**, ejecutando el comando ``git clone https://github.com/raul-profesor/DAW_practica_6.1_2024.git``.

Este comando descargará todo el contenido del repositorio en nuestro equipo, permitiéndonos modificar y construir la aplicación.

![Clonación repositorio con Dockerfile](./img/Captura-1.JPG)

Antes de seguir adelante, se deberá tener instalado Docker en el sistema. Para ello, ejecuta el comando ``sudo apt install -y docker.io``.

![Instalación Docker](./img/Captura-2.JPG)

### Configuración dockerfile

Cuando se clone el repositorio, ya podremos navegar hasta su directorio con ``cd`` y listar su contenido con ``ls``. Entre los archivos, encontraremos el **Dockerfile**.

Si mostramos su contenido con ``cat``, veremos que está incompleto y necesita modificaciones para que funcione correctamente.

```
____ node:18.16.0-alpine3.17
____  mkdir -p /opt/app
_____ /opt/app
____ src/package.json src/package-lock.json .
___ npm install
____ src/ .
_______ 3000
___ [ "npm", "start"]
```

Así que vamos a acceder al archivo **Dockerfile** con ``nano`` y a modificarlo.

![Archivo dockerfile modificado](./img/Captura-3.JPG)

### Construcción de imagen

Una vez corregido el **Dockerfile**, procedemos a construir la imagen del Docker. Para ello, ejecutamos el comando: ``sudo docker build -t librodirecciones .``.

Este comando construirá la imagen asignándole el nombre **librodirecciones** en el directorio actual.

![Construcción de la imagen](./img/Captura-4.JPG)

### Ejecución del contenedor

Ya construida, podremos ejecutar la aplicación dentro de un contenedor con el comando ``docker run -p 3000:3000 -d librodirecciones``.

![Ejecución del contenedor](./img/Captura-5.JPG)

Este comando inicia un contenedor en segundo plano basado en la imagen **librodirecciones**, asignando el puerto 3000 del contenedor al puerto 3000 de nuestra máquina.

### Prueba desde el navegador

Después de iniciar el contenedor, intentamos acceder a la aplicación mediante su **dirección IP** y **puerto**.

Para ello, usa el comando ``ipconfig`` para visualizar tu IP, en mi caso es la **192.168.100.27**.

![Visualizando mi IP](./img/Captura-6.JPG)

Accede a tu máquina, abre el navegador e intenta acceder a **http://TU-IP:3000**, si te devuelve el mensaje **No se puede acceder a este sitio web**, abre el puerto 3000 con el comando ``sudo ufw allow 3000`` y vuelve a intentarlo.

![Acceso al contenedor desde el navegador](./img/Captura-7.JPG)

### Docker Compose

**Docker Compose** es una herramienta para gestionar aplicaciones multicontenedor, que sirve para iniciar y detener múltiples contenedores en secuencia, conectar contenedores utilizando una red virtual, construir o descargar imágenes de contenedores, etcétera.

Es posible que no lo tengas instalado, para comprobarlo introduce el comando ``docker-compose --version`` y si no encuentra la orden escribe ``sudo apt install -y docker-compose``.

![Instalación docker-compose](./img/Captura-8.JPG)

**Docker Compose** utiliza un archivo de definición YAML, que es un formato de serialización de datos para la configuración de aplicaciones.

![Configuración fichero docker-compose](./img/Captura-9.JPG)

Ya que el puerto 3000 está ocupado y lo estamos usando de nuevo en el archivo **docker-compose**, para el servicio **adressbook** asegurate de parar el contenedor anterior **librodirecciones** para evitar problemas, comando ``sudo docker stop librodirecciones``.

Para levantar nuestra aplicación basada en contenedores tendríamos que utilizar el comando ``docker-compose run adressbook npm run migrate``, el servicio **adressbook** es una base de datos definida en el archivo **docker-compose.yml** y el comando ``npm run migrate`` se usa para ejecutar migraciones de base de datos en una aplicación Node.js.

![Comando docker-compose](./img/Captura-10.JPG)

![Salida comando](./img/Captura-11.JPG)

Después utilizaremos **docker-compose up --build -d**, que construye las imágenes de los servicios definidos en el archivo **docker-compose.yml** y levanta los contenedores en segundo plano.

![Construir imagen](./img/Captura-12.JPG)

Comprobar el estado de los contenedores, comando **docker compose ps**, este comando muestra los contenedores que están siendo gestionados por **Docker Compose** y su estado actual.

![Estado contenedores](./img/Captura-13.JPG)

Y por último usamos **docker compose run addressbook npm test**, que ejecuta las pruebas de la aplicación dentro del contenedor **adressbook**. 

![Ejecución pruebas](./img/Captura-14.JPG)

**Resultado del test**

![Test pasado con éxito](./img/Captura-15.JPG)

### Tarea

Probad que la aplicación junto con la BBDD funciona correctamente. El funcionamiento de la API es:

Para ello desde la terminal de nuestra máquina física hacemos las siguientes peticiones:

-  ``PUT /persons/`` añade una persona al libro de direcciones, ``curl -X PUT http://192.168.100.27:3000/persons -H 'Content-Type: application/json' -d '{"id": 2, "firstName": "Alfonso", "lastName": "Mestaza"}'``.

![Ejemplo insercción de datos](./img/Captura-16.JPG)

-   ``GET /persons/all`` muestra todas las personas en el libro de direcciones, ``curl -X GET http://192.168.100.27:3000/persons/all -H 'Content-Type: application/json'``.

![Muestra todas las personas](./img/Captura-17.JPG)

-   ``GET /persons/1`` muestra la persona con el id 1, ``curl -X GET http://192.168.100.27:3000/persons/1 -H 'Content-Type: application/json'``.

![Muestra persona con id 1](./img/Captura-18.JPG)

-   ``DELETE /persons/1`` elimina la persona con el id 1.

![Elimina una persona del libro de direcciones](./img/Captura-19.JPG)