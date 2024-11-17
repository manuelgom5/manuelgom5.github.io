***Autor: Manuel Gómez Ruiz***

***Asignatura: Despliegue de Aplicaciones Web***

***Fecha: 17/11/2024***

***Curso: 2º de Desarrollo de Aplicaciones Web***

## Práctica 3.1 - Instalación de Tomcat

### Instalación y configuración de Tomcat

Antes de empezar, usa el comando **sudo ufw allow 8080** que permite el tráfico a través del puerto 8080, el cual es el puerto predeterminado en el que Apache Tomcat escucha las solicitudes HTTP, después usa **sudo ufw enable** para habilitar el firewall **ufw** y configurarlo para que se inicie automáticamente al arrancar el sistema, por último, instala el paquete **openjdk-17-jdk**, que contiene el kit de Desarrollo de Java, necesario para ejecutar aplicaciones Java.

![Imagen 1](./img/Captura-1.JPG)

Instala el paquete que contiene Tomcat, con el comando **sudo apt install tomcat10**.

![Imagen 2](./img/Captura-2.JPG)

Ahora crea un nuevo grupo para Tomcat que puede ser usado para gestionar permisos de acceso y ejecutar el servicio de manera segura, y crea un nuevo usuario que no puede iniciar sesión, que pertenecerá al grupo creado anteriomente añadiendole como directorio de inicio **/etc/tomcat10** y especificando que el usuario no puede iniciar sesión.

Ya puedes poner el marcha el servidor Tomcat.

![Imagen 3](./img/Captura-3.JPG)

Accede al fichero **tomcat-users.xml** perteneciente a la ruta **/etc/tomcat10/** y añade al nuevo usuario con los roles que aparecen en la imagen para otorgarle permisos administrativos y de gestión en Tomcat.

![Imagen 4](./img/Captura-4.JPG)

### Acceso a Tomcat

Comprobamos que podemos acceder a Tomcat, introduciendo en el navegador **localhost:8080**.

![Imagen 5](./img/Captura-5.JPG)

Para poder acceder a la aplicación web de administración de Tomcat, necesitamos descargar el paquete **tomcat-admin**.

![Imagen 6](./img/Captura-6.JPG)

Comprobamos que ahora podemos acceder a la interfaz administrativa introduciendo en el navegador **localhost:8080/manager/html**.

![Imagen 7](./img/Captura-7.JPG)

Accedamos a la aplicación web de administración de host virtuales, introduciendo en el navegador **localhost:8080/host-manager/html**.

![Imagen 8](./img/Captura-8.JPG)

![Imagen 9](./img/Captura-9.JPG)

### Despliegue

Subimos el archivo **sample.war** en **localhost:8080/manager/html** y pulsamos el botón **Desplegar**, el contenido de sample.war será descomprimido y sus contenidos se copiarán en un nuevo directorio bajo **webapps** de Tomcat, ejecutando también el archivo **web.xml** para inicializar y configurar la aplicación web según las especificaciones de **sample.war**.

![Imagen 10](./img/Captura-10.JPG)

Resultado

![Imagen 11](./img/Captura-11.JPG)

### Despliegue con Maven

Ejecuta el comando **sudo apt install maven** para instalar el paquete maven, utilizado como herramienta de gestión y comprensión de proyectos Java, para gestionar dependencias.

![Imagen 12](./img/Captura-12.JPG)

Muestra que Maven ha sido instalado correctamente con el comando **mvn --v**.

![Imagen 13](./img/Captura-13.JPG)

Creamos un nuevo usuario en el archivo de configuración **tomcat-user.xml** que será utilizado para scripts de administración.

![Imagen 14](./img/Captura-14.JPG)

Entra al fichero **settings.xml** dentro de **/etc/maven** y define un perfil de autenticación para Maven, que será utilizado cuando Maven quiera conectarse a servidores remotos.

![Imagen 15](./img/Captura-15.JPG)

Creamos un proyecto com POM.

![Imagen 19](./img/Captura-19.JPG)

Modificamos el POM.

![Imagen 20](./img/Captura-20.JPG)

### Tareas

Instala y configura GitHub, ya que lo vas a necesitar para clonar un repositorio.

![Imagen 16](./img/Captura-16.JPG)

![Imagen 17](./img/Captura-17.JPG)

Clonamos el repositorio.

![Imagen 18](./img/Captura-18.JPG)

### Cuestiones

**Habéis visto que los archivos de configuración que hemos tocado contienen contraseñas en texto plano, por lo que cualquiera con acceso a ellos obtendría las credenciales de nuestras herramientas.**

**En principio esto representa un gran riesgo de seguridad, ¿sabrías razonar o averigüar por qué esto está diseñado de esta forma?**

Debido a la facilidad de uso y configuración que el texto plano aporta, y su alta compatibilidad con sistemas.