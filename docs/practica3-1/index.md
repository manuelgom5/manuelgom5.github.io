***Autor: Manuel Gómez Ruiz***

***Asignatura: Despliegue de Aplicaciones Web***

***Fecha: 17/11/2024***

***Curso: 2º de Desarrollo de Aplicaciones Web***

## Práctica 3.1 - Instalación de Tomcat

### Instalación y configuración de Tomcat

Antes de empezar, usa el comando **sudo ufw allow 8080** que permite el tráfico a través del puerto 8080, el cual es el puerto predeterminado en el que Apache Tomcat escucha las solicitudes HTTP, después usa **sudo ufw enable** para habilitar el firewall **ufw** y configurarlo para que se inicie automáticamente al arrancar el sistema, por último, instala el paquete **openjdk-17-jdk**, que contiene el kit de Desarrollo de Java, necesario para ejecutar aplicaciones Java.

![Activamos el puerto 8080 que usará Tomcat](./img/Captura-1.JPG)

![Activamos el firewall](./img/Captura-2.JPG)

Instala el paquete que contiene Tomcat, con el comando **sudo apt install tomcat10**.

![Instalación el servidor Tomcat](./img/Captura-3.JPG)

Instala **Java Runtime Environment (JRE)** que incluye el entorno necesario para ejecutar aplicaciones y programas desarrollados en Java, utiliza el comando **sudo apt install default-jre**.

![Instalación de la herramienta para ejecutar aplicaciones Java](./img/Captura-4.JPG)

Comprobamos que se hayan instalado correctamente tanto Tomcat como Java JRE, para ello utiliza los comandos **java -version** y **sudo systemctl status tomcat**.

![Comprobando funcionamiento de Java y Tomcat](./img/Captura-5.JPG)

Accede al fichero **tomcat-users.xml** perteneciente a la ruta **/etc/tomcat10/** y añade al nuevo usuario con los roles que aparecen en la imagen para otorgarle permisos administrativos y de gestión en Tomcat.

![Modificando archivo de configuración tomcat-users.xml](./img/Captura-6.JPG)

### Acceso a Tomcat

Para poder acceder a la aplicación web de administración de Tomcat, necesitamos descargar el paquete **tomcat-admin**.

![Descargar paquete tomcat-admin desde terminal](./img/Captura-7.JPG)

Comprobamos que ahora podemos acceder a la interfaz administrativa introduciendo en el navegador **localhost:8080/manager/html**.

![Acceso a interfaz administrativa de Tomcat](./img/Captura-8.JPG)

Accedemos al gestor de aplicaciones web de Tomcat, introduciendo en el navegador **localhost:8080/manager/html**.

![Acceso a directorio manager en localhost](./img/Captura-9.JPG)

Si intentamos entrar al gestor de host virtuales con este usuario, nos encontraremos el siguiente error, por falta del rol **admin-gui**.

![Error por falta de roles](./img/Captura-10.JPG)

### Despliegue

Subimos el archivo **sample.war** en **localhost:8080/manager/html** y pulsamos el botón **Desplegar**, el contenido de sample.war será descomprimido y sus contenidos se copiarán en un nuevo directorio bajo **webapps** de Tomcat, ejecutando también el archivo **web.xml** para inicializar y configurar la aplicación web según las especificaciones de **sample.war**.

![Desplegamos el archivo sample.war en el directorio manager](./img/Captura-12.JPG)

Resultado

![Resultado del despliegue](./img/Captura-13.JPG)

### Despliegue con Maven

Ejecuta el comando **sudo apt install maven** para instalar el paquete **Maven**, utilizado como herramienta de gestión y comprensión de proyectos Java, para gestionar dependencias.

![Instala el paquete Maven](./img/Captura-14.JPG)

Muestra que Maven ha sido instalado correctamente con el comando **mvn --v**.

![Muestra su versión si está instalada](./img/Captura-15.JPG)

Creamos un nuevo usuario en el archivo de configuración **tomcat-user.xml** que será utilizado para scripts de administración.

![Agregamos un nuevo usuario al script de configuración con rol manager-script](./img/Captura-16.JPG)

Entra al fichero **settings.xml** dentro de **/etc/maven** y define un perfil de autenticación para Maven, que será utilizado cuando Maven quiera conectarse a servidores remotos.

![Agregamos un usuario a los ajustes de Maven](./img/Captura-17.JPG)

Ve al directorio donde deseas crear tu proyecto y utiliza el comando **mvn archetype:generate -DgroupId=com.ejemplo -DartifactId=mi-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false** que generará un proyecto Maven, es decir, un nuevo proyecto Java con una estructura básico, incluyendo el archivo **pom.xml**.

![Generación de proyecto Java con archivo pom.xml en Documentos](./img/Captura-18.JPG)

Modifica el archivo **pom.xml** para incluir las dependencias y plugins necesarios.

![Mi archivo de configuración pom.xml](./img/Captura-19.JPG)

![Mi archivo de configuración pom.xml 2](./img/Captura-20.JPG)

Nos movemos a la raíz del proyecto y ejecutamos el comando **tomcat7:deploy** para desplegarlo.

![Realizamos el despliegue del proyecto](./img/Captura-21.JPG)

![Imagen que muestra el despliegue realizado con éxito](./img/Captura-22.JPG)

El directorio nos aparecerá en las aplicaciones de **localhost8080:manager/html** y podremos acceder a él, visualizando su resultado.

![Entra al localhost y comprueba que el nuevo proyecto aparece como aplicación](./img/Captura-23.JPG)

![Comprueba el resultado al ejecutarlo](./img/Captura-24.JPG)

### Tareas

Instala Git, ya que lo vas a necesitar para clonar un repositorio, comando **sudo apt install git**

![Instalación de Git por terminal](./img/Captura-25.JPG)

Enlazamos con nuestro GitHub.

![Comandos para enlazar con nuestro GitHub](./img/Captura-26.JPG)

Clonamos un repositorio, comando **git clone**.

![Clonación de un nuevo repositorio](./img/Captura-27.JPG)

Cambiamos a la rama **patch-1** dentro del repositorio clonado, comando **git checkout patch-1**.

![Comando checkout para cambiar de rama](./img/Captura-28.JPG)

Editamos el archivo **pom.xml** del repositorio clonado y añadimos la configuración para que se pueda desplegar la nueva aplicación.

![Visualizando código pom.xml](./img/Captura-29.JPG)

![Modificando el código](./img/Captura-30.JPG)

Desplegamos la nueva aplicación, con el comando **mvn tomcat7:deploy**.

![Comando tomcat7:deploy para despliegue de aplicaciones](./img/Captura-31.JPG)

![Resultado del despliegue correcto](./img/Captura-32.JPG)

Revisamos que la nueva aplicación aparece junto a las aplicaciones despegadas y la probamos.

![Visualización de los programas desplegados](./img/Captura-33.JPG)

![Ejecución del programa](./img/Captura-34.JPG)

### Cuestiones

**Habéis visto que los archivos de configuración que hemos tocado contienen contraseñas en texto plano, por lo que cualquiera con acceso a ellos obtendría las credenciales de nuestras herramientas.**

**En principio esto representa un gran riesgo de seguridad, ¿sabrías razonar o averigüar por qué esto está diseñado de esta forma?**

Debido a la facilidad de uso y configuración que el texto plano aporta, y su alta compatibilidad con sistemas.