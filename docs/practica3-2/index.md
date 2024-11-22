**Autor: Manuel Gómez Ruiz**

**Asignatura: Despliegue de Aplicaciones Web**

**Fecha: 21/11/2024**

**Curso: 2º de Desarrollo de Aplicaciones Web**

## Práctica 3.2: Despliegue de aplicaciones con Node Express

### Introducción

Detén el servicio de Tomcat para evitar problemas, con el comando **sudo systemctl stop tomcat10.service**.

![Detener el servicio Tomcat](./img/Captura-1.JPG)

### Instalación de Node.js, Express y test de la primera aplicación

Actualizamos los repositorios de la máquina virtual, con el comando **sudo apt update**.

![Terminal para actualizar repositorios](./img/Captura-2.JPG)

Instalamos los repositorios **nodejs** y **npm** para poder después instalar y utilizar el plugin **express.js**, para ello usa el comando **sudo apt -y install nodejs npm**.

![Terminal que instala el repositorio nodejs y npm](./img/Captura-3.JPG)

Comprobación de que se han instalado correctamente.

![Muestra la version de node y npm](./img/Captura-4.JPG)

Usando **npm** instalamos el plugin **express**, comando **sudo npm install -g express**.

![Instala el plugin express](./img/Captura-5.JPG)

Crea un nuevo repositorio, accede a él e inicializa un nuevo proyecto usando npm.

![Comandos para inicializar repositorio](./img/Captura-6.JPG)

Instala **express** para este proyecto local, comando **npm install express**.

![Comando para instalar express](./img/Captura-7.JPG)

Crea el archivo de muestra **app.js** y accede al archivo que se habrá creado al inicializar el proyecto y añade el contenido que aparece a continuación.

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello. Welcome to this blog')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
```

![Contenido de app.js](./img/Captura-8.JPG)

Despliega el proyecto con el comando **node app.js** y visualiza los resultados.

![Comando de despliegue](./img/Captura-9.JPG)

![Resultado](./img/Captura-10.JPG)

### Despliegue de una nueva aplicación

Vamos ahora a realizar el despliegue de una aplicación de terceros para ver cómo es el proceso.

Clonar el repositorio a nuesta máquina, con el comando **git clone https://github.com/contentful/the-example-app.nodejs.git**:

![Comando clonación](./img/Captura-11.JPG)

Instalamos las librerias necesarias, para ello introduce el comando **npm install** y vuelve en 10 minutos.

![Comando instalación](./img/Captura-12.JPG)

Despliega la aplicación web con el comando **npm run start:dev**.

![Despliegue](./img/Captura-14.JPG)

![Resultado despliegue](./img/Captura-15.JPG)

### Cuestiones

Cuando ejecutáis el comando npm run start:dev, lo que estáis haciendo es ejecutar un script:

**¿Donde podemos ver que script se está ejecutando?**

En el archivo **package.json** de tu proyecto.

**¿Qué comando está ejecutando?**

Esta ejecutando el comando **node ./bin/www**.

![Contenido archivo package.json](./img/Captura-16.JPG)

### Práctica 3.4: Despliegue de una aplicación React en Netlify (PaaS)

Nos crearemos un directorio para albergar la aplicación con el nombre que queramos. En ese directorio, crearemos los 3 archivos (dos .html y un .js) que conformarán nuestra sencilla aplicación de ejemplo:

![Creación nuevo directorio](./img/Captura-17.JPG)

### Creación de nuestra aplicación

Al primer archivo lo llamaré **head.html** y tendrá el siguiente contenido:

![Archivo principal](./img/Captura-18.JPG)

El segundo será llamado **tail.html**.

![Archivo secundario](./img/Captura-19.JPG)

El script será llamado **aplicacion.js**.

![Script JS](./img/Captura-20.JPG)

Como hacemos siempre a la hora de crear una apliación usando **Node.js**, inicializamos el proyecto, con el comando **npm init**.

![Inicialización proyecto](./img/Captura-21.JPG)

Corremos el programa para probar en local que funciona perfectamente, comando **node aplicacion.js**.

![Correr el programa](./img/Captura-22.JPG)

![Resultado en navegador de head.html](./img/Captura-23.JPG)

![Resultado de tail.html](./img/Captura-24.JPG)

En **package.json** sustituye la línea dentro del bloque **script** añadiendo la línea de **"start": "node aplicacion.js"** para evitar problemas y que nos funcione en la plataforma PaaS.

![Sustituición package.json](./img/Captura-25.JPG)

### Aplicación para Netlify

Puesto que el interés en este módulo radica en el proceso de despliegue, suponiendo que la parte de desarrollo ya es abordada en otros módulos, vamos a utilizar una aplicación de ejemplo que nos ahorre tiempo para centrarnos en el despliegue.

Clonamos el repositorio **color-shades-generator**.

![Comando clonación](./img/Captura-26.JPG)

### Proceso de despliegue en Netlify

### Despliegue mediante CLI

Instalamos el CLI de Netlify **netlify-cli**.

![Comando instalación](./img/Captura-27.JPG)

Iniciamos sesión en Netlify, comando **netlify login**.

![Imagen proceso](./img/Captura-28.JPG)

Vete a tu perfil, entra en OAuth y crea una nueva clave de acceso.

![Imagen token generado](./img/Captura-29.JPG)

Copiamos y guardamos el token devuelto.

![Imagen exportación](./img/Captura-30.JPG)

Exportamos el token y lo establecemos como variable de entorno.

![Comando exportación](./img/Captura-31.JPG)

Volvemos a iniciar sesión.

![Inicio de sesión](./img/Captura-32.JPG)

Bueno, tenemos el código de nuestra aplicación, tenemos nuestra cuenta en Netlify y tenemos el CLI necesario para ejecutar comandos desde el terminal en esa cuenta... ¿Podemos proceder al despliegue sin mayores complicaciones?

La respuesta es NO, como buenos desarrolladores y en base a experiencias anteriores, ya sabéis que hay que hacer un build de la aplicación para, posteriormente, desplegarla. Vamos a ello.

En primer lugar, como sabemos, debemos instalar todas las dependencias que vienen indicadas en el archivo **package.json**:

Instalamos npm, comando **npm install**.

![Comando instalación](./img/Captura-33.JPG)

Creamos una versión del proyecto optimizada para producción, con el comando **npm run build**.

![Resultado ejecución del comando](./img/Captura-34.JPG)

Desplegamos el proyecto usando Netlify con el comando **netlify deploy**.

![Despliegue con Netlify](./img/Captura-35.JPG)

Accede a la URL que aparece en **Website draft URL**.

![Enlace de nuestro proyecto en Netlify](./img/Captura-36.JPG)

![Resultado en navegador](./img/Captura-37.JPG)

Desplegamos de nuevo, pero esta vez usando **netlify deploy --prod**, para obtener una url más clara.

![Comando despliegue](./img/Captura-38.JPG)

Accede a la URL que aparece en **Website URL**.

![Nuevo resultado despliegue](./img/Captura-39.JPG)

### Despliegue mediante conexión con Github

Borramos nuestro sitio de Netlify para evitar cualquier problema o conflicto.

![Eliminamos sitio](./img/Captura-40.JPG)

Eliminamos nuestro directorio personal **color-shades-generator**, para así poder empezar de 0, comando **rm -rf**.

![Borramos nuestro directorio](./img/Captura-42.JPG)

Clonar nuevo proyecto con **wget https://github.com/StackAbuse/color-shades-generator/archive/refs/heads/main.zip**.

![Clonamos el nuevo repositorio](./img/Captura-43.JPG)

Crea un nuevo repositorio y descomprime lo descargado anteriormente con **wget**, comando **unzip** para descomprimir.

![Proyecto Git](./img/Captura-44.JPG)

Crea un nuevo repositorio en GitHub.

![Comando realización](./img/Captura-45.JPG)

Inicializa el repositorio personal descargado.

![Git init y add](./img/Captura-46.JPG)

Haz un nuevo commit con los cambios.

![Git commit](./img/Captura-47.JPG)

Referencia la carpeta local con el repositorio recién creado en github, con el comando **git remote add** y después introduce **git push -u origin main** para subir el contenido del commit.

![Git push](./img/Captura-48.JPG)

Importa el repositorio creado en Github desde Netlify.

![Importar desde Git](./img/Captura-49.JPG)

Le indicamos que no acceda a todos nuestros repositorios sino sólo al repositorio que necesitamos.

![Instalación Netlify en Git](./img/Captura-50.JPG)

Introducimos el nombre de nuestro sitio y desplegamos la aplicación.

![Cambio de nombre del sitio web](./img/Captura-51.JPG)

![Despliegue](./img/Captura-52.JPG)

Cuando finalice el despliegue cambia el nombre de tu sitio web añadiéndole tu nombre.

![Cambio de nombre](./img/Captura-53.JPG)

Lo que hemos conseguido de esta forma es que, cualquier cambio que hagamos en el proyecto y del que hagamos commit y push en Github, automáticamente genere un nuevo despliegue en Netlify. Es el principio de lo que más adelante veremos como despliegue continuo.

Comprueba si puedes acceder al archivo **robots.txt** desde el navegador utilizando la URL de tu sitio en Netlify.

![Visualización en navegador de robots.txt](./img/Captura-54.JPG)

Modificar archivo **robots.txt** para que incluya tu nombre, este archivo está dentro de la carpeta **public**.

![Modificación robots.txt](./img/Captura-55.JPG)

Haz un nuevo **commit** y **push**, para subir los cambios realizados en el archivo **robot.txt** a tu repositorio de GitHub.

![Git add, push y commit](./img/Captura-56.JPG)

Comprueba en el dashboard de Netlify que se ha producido un nuevo deploy de la aplicación hace escasos segundos

![Dashboard Netlify](./img/Captura-57.JPG)

Accede a **robots.txt** desde el navegador y comprueba que, efectivamente, se ve reflejado el cambio.

![Acceso a robots.txt desde navegador](./img/Captura-58.JPG)