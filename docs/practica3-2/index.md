**Autor: Manuel Gómez Ruiz**

**Asignatura: Despliegue de Aplicaciones Web**

**Fecha: 21/11/2024**

**Curso: 2º de Desarrollo de Aplicaciones Web**

## Práctica 3.2: Despliegue de aplicaciones con Node Express

Detén el servicio de Tomcat para evitar problemas, con el comando **sudo systemctl stop tomcat10.service**.

![Detener el servicio Tomcat](./img/Captura-1.JPG)

Actualizamos los repositorios de la máquina virtual, con el comando **sudo apt update**.

![Terminal para actualizar repositorios](./img/Captura-2.JPG)

Instalamos los repositorios **nodejs** y **npm** para poder después instalar y utilizar el plugin **express.js**, para ello usa el comando **sudo apt -y install nodejs npm**.

![Terminal que instala el repositorio nodejs y npm](./img/Captura-3.JPG)

Comprobación de que se han instalado correctamente.

![Muestra la version de node y npm](./img/Captura-4.JPG)

Usando **npm** instalamos el plugin **express**, comando **sudo npm install -g express**.

![Instala el plugin express](./img/Captura-5.JPG)

Crea un nuevo repositorio, accede a él e inicializalo usando npm.

![Comandos para inicializar repositorio](./img/Captura-6.JPG)

Vuelve a instalar express, comando **npm install express**.

![Comando para instalar express](./img/Captura-7.JPG)

Accede al archivo **app.js** que se habrá creado al inicializar el repositorio y añade el contenido que aparece en la imagen.

![Contenido de app.js](./img/Captura-8.JPG)

Despliega el proyecto con el comando **node app.js** y visualiza los resultados.

![Comando de despliegue](./img/Captura-9.JPG)

![Resultado](./img/Captura-10.JPG)

Clona el siguiente repositorio.

![Comando clonación](./img/Captura-11.JPG)

Instala npm.

![Comando instalación](./img/Captura-12.JPG)

Despliega la página web con el comando **npm run start:dev**.

![Despliegue](./img/Captura-14.JPG)

![Resultado despliegue](./img/Captura-15.JPG)

Package.json

![Contenido archivo package.json](./img/Captura-16.JPG)

Crea un nuevo directorio con tres archivos.

![Creación nuevo directorio](./img/Captura-17.JPG)

El primer archivo será llamado **head.html** y tendrá el siguiente contenido:

![Archivo principal](./img/Captura-18.JPG)

El segundo **tail.html**.

![Archivo secundario](./img/Captura-19.JPG)

El script será llamado **aplicacion.js**.

![Script JS](./img/Captura-20.JPG)

Inicializamos el proyecto, con el comando **npm init**.

![Inicialización proyecto](./img/Captura-21.JPG)

Corremos el programa con el comando **node aplicacion.js**.

![Correr el programa](./img/Captura-22.JPG)

Comprobación de resultados.

![Resultado en navegador de head.html](./img/Captura-23.JPG)

![Resultado de tail.html](./img/Captura-24.JPG)

Sustituye la línea dentro de script añadiendo la línea de **start node aplicacion.js** para evitar problemas.

![Sustituición package.json](./img/Captura-25.JPG)

Clonamos el repositorio **color-shades-generator**.

![Comando clonación](./img/Captura-26.JPG)

Instalamos el plugin **netlify-cli**.

![Comando instalación](./img/Captura-27.JPG)

Iniciamos sesión en Netlify.

![Imagen proceso](./img/Captura-28.JPG)

Creamos clave de acceso por OAuth.

![Imagen token generado](./img/Captura-29.JPG)

Copiamos y guardamos el token devuelto.

![Imagen exportación](./img/Captura-30.JPG)

Exportamos el token.

![Comando exportación](./img/Captura-31.JPG)

Volvemos a iniciar sesión.

![Inicio de sesión](./img/Captura-32.JPG)

Instalamos npm, comando **npm install**.

![Comando instalación](./img/Captura-33.JPG)

Comando **npm run build**.

![Resultado ejecución del comando](./img/Captura-34.JPG)

Desplegamos el proyecto usando netlify con el comando **netlify deploy**.

![Despliegue con Netlify](./img/Captura-35.JPG)

Accede a la URL del final.

![Enlace de nuestro proyecto en Netlify](./img/Captura-36.JPG)

Resultado.

![Resultado en navegador](./img/Captura-37.JPG)

Desplegamos de nuevo, pero esta vez usando **netlify deploy --prod**.

![Comando despliegue](./img/Captura-38.JPG)

Resultado.

![Nuevo resultado](./img/Captura-39.JPG)

Borramos nuestro sitio de Netlify.

![Eliminamos sitio](./img/Captura-40.JPG)

Eliminamos nuestro directorio personal **color-shades-generator**.

![Eliminar directorio personal](./img/Captura-41.JPG)

Clonar nuevo proyecto con **wget**.

![Resultado clonación](./img/Captura-42.JPG)

Crea un nuevo repositorio y descomprime lo descargado anteriormente con **wget**.

![Nuevo proyecto](./img/Captura-43.JPG)

Crea un nuevo repositorio en GitHub.

![Proyecto Git](./img/Captura-44.JPG)

Inicializa el repositorio personal descargado.

![Comando realización](./img/Captura-45.JPG)

Sube los cambios.

![Git init y add](./img/Captura-46.JPG)

![Git Push](./img/Captura-47.JPG)

![Git push](./img/Captura-48.JPG)

Importa el repositorio desde Netlify.

![Captura](./img/Captura-49.JPG)

![Captura](./img/Captura-50.JPG)

![Captura](./img/Captura-52.JPG)

Una vez importado cambia su nombre.

![Captura](./img/Captura-53.JPG)



![](./img/Captura-54.JPG)

![](./img/Captura-55.JPG)

![](./img/Captura-56.JPG)

![](./img/Captura-57.JPG)

![](./img/Captura-58.JPG)