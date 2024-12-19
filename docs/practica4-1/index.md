**Autor: Manuel Gómez Ruiz**

**Asignatura: Despliegue de Aplicaciones Web**

**Fecha: 12/12/2024**

**Curso: 2º de Desarrollo de Aplicaciones Web**

#   Práctica 4.1: Configuración de un servidor Nginx con Host Virtuales y directorios de usuario

El objetivo de esta práctica está en la configuración de un servidor Nginx que utilice host virtuales para alojar múltiples sitios web en un solo servidor y que cada host virtual apunte al directorio public_hml de distintos usuarios del sistema operativo Debian. De esta manera, cada usuario podrá gestionar su propio sitio web desde su carpeta personal.

Lo primero que debemos hacer es instalar el servidor **Nginx** y comprobar que su servicio está funcionando correctamente.

![Captura de estado Nginx](./img/Captura-1.JPG)

A continuación, permitimos el tráfico en los puertos 80 (HTTP) y 22 (SSH) para permitir el acceso a las páginas web.

![Captura de apertura de puertos](./img/Captura-2.JPG)

##  Conexión al servidor

Para conectarnos por SSH desde nuestra máquina anfitriona, debemos de instalar el paquete **openssh-server** en nuestro servidor virtual Debian.

![Instalación openssh](./img/Captura-3.JPG)

Una vez instalado, abrimos la terminal y nos conectamos a ella, mediante el comando **ssh nombre-usuario@IP**.

![Nos conectamos por SSH](./img/Captura-4.JPG)

##  Usuarios y carpetas

### Creación de usuarios, carpetas y página web estática

Añadimos los dos usuarios y le introducimos su nueva contraseña segura, comandos **sudo useradd -m -s /bin/bash nombre-usuario** y **sudo passwd nombre-usuario**, la opción -m crea un directorio home para el nuevo usuario, mientras que -s crea una shell de inicio.

![Crear usuarios y sus contraseñas](./img/Captura-5.JPG)

Accedemos con el primer usuario, creamos su carpeta y le asignamos sus permisos correspondientes sobre esa carpeta, el último comando es para validar los permisos sobre la carpeta.

![Creación de carpeta y permisos](./img/Captura-6.JPG)

Creamos una página web básica en formato HTML dentro de la carpeta recién creada. Esta página se utilizará como sitio web estático del usuario.

![Creación index.html](./img/Captura-7.JPG)

### Repetición de los mismos pasos para el segundo usuario

Repetimos el proceso de creación de carpeta, asignación de permisos y creación de la página web estática para el segundo usuario.

![Creación de carpeta y permisos](./img/Captura-8.JPG)

![Creación index.html](./img/Captura-9.JPG)

Comprobamos que nuestra página web se visualiza correctamente con nuestro archivo de configuración.

![Visualización archivo de configuración](./img/Captura-10.JPG)

Resultado.

![Visualización página web](./img/Captura-11.JPG)

## Configuración de certificados SSL

Para mejorar la seguridad de las páginas web de los usuarios, creamos certificados SSL para ambos sitios web.

![Certificado SSL primer usuario](./img/Captura-12.JPG)

![Certificado SSL segundo usuario](./img/Captura-13.JPG)

##  Archivos de Configuración de Nginx

Configuramos los archivos correspondientes para que Nginx sirva correctamente los sitios web de los usuarios. A continuación, mostramos las configuraciones realizadas para cada usuario:

![Archivo de config del primer usuario](./img/Captura-14.JPG)

![Archivo de config del segundo usuario](./img/Captura-15.JPG)

## Creación de Enlaces Simbólicos y Reinicio del Servidor

Creamos los enlaces simbólicos para que Nginx apunte a los directorios de los usuarios y sus respectivas páginas web. Después de crear los enlaces, comprobamos la sintaxis de la configuración y reiniciamos el servidor para aplicar los cambios.

![Enlaces simbólicos](./img/Captura-16.JPG)

También permitimos el tráfico en el puerto 443, que es utilizado para HTTPS.

![Apertura del puerto 443](./img/Captura-17.JPG)

##  Resultados

Una vez completada la configuración, verificamos el funcionamiento de las páginas web de ambos usuarios:

Resultado con el usuario Antonio.

![Visualización entrada a página](./img/Captura-18.JPG)

![Resultado de la página web](./img/Captura-19.JPG)

![Certificado](./img/Captura-20.JPG)

Resultado con el usuario Sergio.

![Visualización entrada a página](./img/Captura-21.JPG)

![Resultado de la página web](./img/Captura-22.JPG)

![Certificado](./img/Captura-23.JPG)