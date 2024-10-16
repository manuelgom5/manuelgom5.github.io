***Autor: Manuel Gómez Ruiz***

***Asignatura: Despliegue de Aplicaciones Web***

***Fecha: 15/10/2024***

***Curso: 2º de Desarrollo de Aplicaciones Web***

## Práctica 2.2 - Autenticación en un servidor Nginx.

### Objetivo de la práctica: Aprender a configurar el acceso a páginas web.

***Paquetes necesarios para realizar la práctica.***

Utiliza el comando **dpkg -l | grep openssl**, en caso de que el resultado no muestre el paquete **openssl**, 
instalalo con el comando **sudo apt install openssl**

![Paquetes necesarios para empezar la práctica](./img/Captura-1.JPG)

El comando **dpkg -l** lista todos los paquetes instalados en el sistema con información detallada, mientras que 
**grep openssl** busca el nombre del paquete openssl dentro de nuestro sistema.

### Creación de usuarios y contraseñas para el acceso web

A continuación, vamos a crear los usuarios de nuestra página web con sus respetivas contraseñas, las cuales se 
guardarán encriptada en un fichero llamado **.htpasswd**

Utiliza el comando **sudo sh -c "echo -n 'usuario-web:' >> /etc/nginx/.htpasswd**, el cual creara el fichero 
**.htpasswd** y le agregará el nombre del usuario.

![Creamos carpeta .htpasswd y adjuntamos usuario](./img/Captura-2.JPG)

Haz lo mismo con las contraseñas, para ello usa el comando **sudo sh -c "openssl passwd -apr1 >> /etc/nginx/.htpasswd"**, 
este comando será el encargado de guardar las contraseñas encriptadas, gracias al **openssl passwd -apr1**.

![Adjuntamos contraseña](./img/Captura-3.JPG)

- Crea dos usuarios, uno con tu nombre y otro con tu primero apellido.

Debes de realizar el mismo proceso que antes, pero ahora crea un usuario con tu propio nombre, comando  
**sudo sh -c "echo -n 'tu-nombre:' >> /etc/nginx/.htpasswd** para añadir al usuario y 
**sudo sh -c "openssl passwd -apr1 >> /etc/nginx/.htpasswd"** para la contraseña.

![Captura creación de usuairo autentificado](./img/Captura-4.JPG)

Usuario con mi apellido.

![Captura creación de usuario autentificado](./img/Captura-5.JPG)

- Comprueba que el usuario y la contraseña aparecen cifrados en el fichero:

Para ello debemos revisar el archivo donde se almacenan las contraseña de nuestro servidor, en mi caso voy a utilizar un 
comando que visualiza lo que hay dentro del archivo sin necesidad de abrirlo con un editor, comando **sudo cat /etc/nginx/.htpasswd**

![Captura que muestra los usuarios y sus contraseñas encriptadas](./img/Captura-6.JPG)

### Configurando el servidor Nginx para usar una autentificación básica

Añadimos la autenticación en el fichero **/etc/nginx/sites-availables/nombre-web**, para ello utilizamos la 
directiva **auth_basic** que solicita la autenticación a los usuarios que intentar acceder a un recurso protegido 
y enlazamos el fichero **.htpasswd** con los usuarios y contraseñas a la directiva **auth_basic_user_file** 

![Autenticación en la raíz del servidor](./img/Captura-7.JPG)

Reiniciamos el servidor con el comando **sudo systemctl restart nginx** para así aplicar los cambios del archivo de 
configuración **/etc/nginx/sites-available/nombre-web** y comprobamos que no haya ningún error con un **sudo systemctl status nginx**

![Reiniciamos y comprobamos estado del servidor](./img/Captura-8.JPG)

### Probando la nueva configuración

**Comprobación 1**: Comprueba desde tu máquina física/anfritiona que puedes acceder a https://nombre-sitio-web y que se 
solicita la autenticación.

Entra en la página web e introduce un usuario incorrecto.

![Inicio de Sesión Incorrecto](./img/Captura-9.JPG)

El resultado será que te volverán a pedir las credenciales de acceso.

![Inicio de Sesión Incorrecto](./img/Captura-10.JPG)

Ahora metemos un usuario que esté dentro del fichero **.htpasswd** con su correspondiente contraseña correcta.

![Inicio de Sesión Correcto](./img/Captura-11.JPG)

Como ves nos deja acceder a la página web.

![Inicio de Sesión Correcto](./img/Captura-12.JPG)

Esta configuración hace que con un solo acceso correcto, ya no tengas que volver a loguearte más en ese navegador, por lo que no 
es demasiado segura.

**Comprobación 2**: Comprueba que si decides cancelar la autenticación, se te negará el acceso al sitio con un error. 
¿Qué error es?

**Error 401: Authorization required**, es un código de estado HTTP que indica que la solicitud realizada por el cliente no tiene las 
credenciales de autenticación necesarias para acceder al recurso solicitado.

![Cancelar autenticación](./img/Captura-13.JPG)

### Tareas

**Tarea 1**

- Intenta entrar primero con un usuario erróneo y luego con otro correcto. Puedes ver todos los sucesos y registros en los 
logs access.log y error.log

- Adjunta una captura de pantalla de los logs donde se vea que intentas entrar primero con un usuario inválido y con otro válido. 
Indica dónde podemos ver los errores de usuario inválido o no encontrado, así como donde podemos ver el número de error que os aparecía antes

Archivo log error.log, para verlo he utilizado el comando **sudo cat /var/log/nginx/access.log**, y he marcado con rojo los últimos 
errores generados por usuarios incorrectos, aunque sería más correcto utilizar **sudo tail -n 3 /var/log/access.log**, esto proporcionaría 
solo los 3 últimos errores generados en **error.log** haciendo la salida por pantalla mucho más limpia.

![Archivo log error.log](./img/Captura-14.JPG)

Archivo log access.log, comando **sudo tail -n 5 /var/log/nginx/access.log**

![Archivo log access.log](./img/Captura-15.JPG)

**Tarea 2**

- Borra las dos líneas que hacen referencia a la autenticación básica en el location del directorio raíz. Tras ello, añade un nuevo location 
debajo con la autenticación básica para el archivo/sección contact.html únicamente.

Lo primero de todo es crear el archivo **contact.html**, para ello voy a copiar el **index.html** para meterlo dentro del archivo 
**contact.html** y voy a cambiar un poco el fichero, comandos: **sudo cp ./index.html contact.html** y **sudo nano contact.html**.

(A pesar de que en la imagen se ve como creo el archivo **contacto.html** en vez de **contact.html**, posteriormente modifico su nombre)

![Creamos la página contacto.html](./img/Captura-16.JPG)

Modificamos el archivo de configuración, quitando la autenticación en la raíz del servidor, y añadiendosela a **contact.html**.

![Añadimos nuevo location](./img/Captura-17.JPG)

Después de esto, reiniciamos el servidor Nginx para aplicar los cambios, **sudo systemctl restart nginx**.

Probamos los cambios en nuestro equipo anfitrión, accediendo a **contact.html**, como se puede apreciar, debido a los cambios en el 
archivo de configuración, al entrar nos pide la autenticación.

![Accediendo a contact.html con autentificación](./img/Captura-18.JPG)

### Combinación de la autenticación básica con la restricción de acceso por IP.

La autenticación básica HTTP puede ser combinada de forma efectiva con la restricción de acceso por dirección IP. Se pueden 
implementar dos escenario:

- Un usuario debe estar ambas cosas, autenticado y tener una IP válida

- Un usuario debe o bien estar autenticado, o bien tener una IP válida

Veamos cómo lo haríamos:

1. Como permitir o denegar acceso sobre una IP concreta (directivas allow y deny, respectivamente). Dentro del block server o 
archivo de configuración del dominio web, que recordad está en el directorio **sites-available**:

He cambiado de red, por eso cambiaron mis IPs, el servidor ahora tiene la IP 192.168.116.128, si te pasa algo parecido solo cambia la 
IP del archivo hosts y añade las nuevas IPs al archivo de configuración del servidor.

En este primer caso, voy a permitir el acceso a la página web al cliente con la IP 192.168.116.121 , el acceso estará rechazado para 
todos los demás, tanto en **index.html** como en **contact.html**. Si permitiese la puerta de enlace de mi red con la directiva 
**allow mi-red/24;** estaría permitiendo el acceso a todo dispositivo de mi red local que tuviese configurado en el archivo **hosts** 
el DNS del servidor.

![Debe tener IP válida](./img/Captura-19.JPG)

Haz un restart para guardar los cambios.

2. Combinar la restricción IP y la autenticación HTTP con la directiva satisfy.

En este caso, la directiva **satisfy** nos permite definir si queremos el acceso para todo tipo de usuarios, si debe tener una IP 
válida o usuario válido o si ambas cosas deben ser válidas para acceder, podemos combinarlo con las directivas **deny** y **allow** 
para tener más control.

En mi caso, he usado estas directivas para permitir a todos los usuarios de mi subred menos el servidor, acceder a la página web, 
siempre y cuando tengan configurado el DNS en el archivo **hosts** (se hizo en la práctica anterior), para ello he añadido mi puerta 
de enlace como IPs permitidas.

![Debe tener IP y usuario válido](./img/Captura-20.JPG)

### Tareas (2)

**Tarea 1** - Configura Nginx para que no deje acceder con la IP de la máquina anfitriona al directorio raíz de una de tus dos webs. 
Modifica su server block o archivo de configuración. Comprueba como se deniega el acceso:

Accede al archivo de configuración **/etc/nginx/sites-available/sitio-web**

![Denegar todas las IPs](./img/Captura-21.JPG)

- Muestra la página de error en el navegador.

Primero entramos a la página web principal y comprobamos que funciona correctamente.

![Entramos a la web](./img/Captura-22.JPG)

Ahora accedemos a **contact.html**

Nos aparecerá **Error 403 Forbidden**, este código de estado HTTP indica que el servidor ha entendido la solicitud del cliente, pero se 
niega a autorizarla, es decir, el cliente está autenticado pero no tiene permisos para acceder.

![Error 403](./img/Captura-23.JPG)

- Muestra el mensaje de error de error.log, comando: **sudo tail -n 1 /var/log/nginx/error.log**

![Imprimimos por pantalla archivo error.log](./img/Captura-24.JPG)

**Tarea 2** - Configura Nginx para que desde tu máquina anfitriona se tenga que tener tanto una IP válida como un usuario válido, ambas 
cosas a la vez, y comprueba que sí puede acceder sin problemas.

Modificamos de nuevo el archivo de configuración **/etc/nginx/sites-available/sitio-web**, esta vez con la directiva **satisfy all** que 
hace que tengamos que tener tanto IP como autenticación correcta, para acceder a la página web, así que añade tu IP dentro de **location** 
usando la directiva **allow**

![Configuramos archivo de configuración](./img/Captura-25.JPG)

El resultado de esto es que debemos tener una IP válida (es decir, dentro de nuestra subred) y que la autenticación se realice correctamente.

![Acceso desde index.html](./img/Captura-26.JPG)

Lo mismo ocurrirá en **contact.html**, ya que la configuración de este también está en la raíz del proyecto.

![Acceso desde contact.html](./img/Captura-27.JPG)

Reinicia el servidor y haz una prueba de acceso.

![Resultado](./img/Captura-28.JPG)

Si quisieramos que nadie en tu red tuviera acceso simplemente cambia el **allow** por **deny**.

**Cuestión 1**

Supongamos que yo soy el cliente con la IP 172.1.10.15 e intento acceder al directorio web_muy_guay de mi sitio web, equivocándome al poner 
el usuario y contraseña. ¿Podré acceder?¿Por qué?

No, debido a que la directiva satisfy all necesita que las credenciales sean las correctas y la IP válida, en este caso solo se cumple uno 
de los dos requisitos, por lo que no podrías acceder. 

```
    location /web_muy_guay {
    #...
    satisfy all;    
    deny  172.1.10.6;
    allow 172.1.10.15;
    allow 172.1.3.14;
    deny  all;
    auth_basic "Cuestión final 1";
    auth_basic_user_file conf/htpasswd;
}
```

**Cuestión 2**

ask "Cuestión 1" Supongamos que yo soy el cliente con la IP 172.1.10.15 e intento acceder al directorio web_muy_guay de mi sitio web, 
introduciendo correctamente usuario y contraseña. ¿Podré acceder?¿Por qué?

Si, ya que cumples los dos requisitos, IP y autenticación válidos.

```
   location /web_muy_guay {
    #...
    satisfy all;    
    deny  all;
    deny  172.1.10.6;
    allow 172.1.10.15;
    allow 172.1.3.14;

    auth_basic "Cuestión final 2: The revenge";
    auth_basic_user_file conf/htpasswd;
} 
```

**Cuestión 3**

Supongamos que yo soy el cliente con la IP 172.1.10.15 e intento acceder al directorio web_muy_guay de mi sitio web, introduciendo 
correctamente usuario y contraseña. ¿Podré acceder?¿Por qué?

En el caso de la directiva **satisfy any**, en principio, el cumplimiento de cualquiera de las condiciones permitiría el acceso a la web. Sin embargo, dado que la dirección IP está denegada y esta condición tiene prioridad sobre la autenticación, el acceso será restringido.

```
    location /web_muy_guay {
    #...
    satisfy any;    
    deny  172.1.10.6;
    deny 172.1.10.15;
    allow 172.1.3.14;

    auth_basic "Cuestión final 3: The final combat";
    auth_basic_user_file conf/htpasswd;
}
```

**Cuestión 4**

A lo mejor no sabéis que tengo una web para documentar todas mis excursiones espaciales con Jeff, es esta: Jeff Bezos y yo

Supongamos que quiero restringir el acceso al directorio de proyectos porque es muy secreto, eso quiere decir añadir autenticación 
básica a la URL:Proyectos

Completa la configuración para conseguirlo:

```
    server {
        listen 80;
        listen [::]:80;
        root /var/www/freewebsitetemplates.com/preview/space-science;
        index index.html index.htm index.nginx-debian.html;
        server_name freewebsitetemplates.com www.freewebsitetemplates.com;
        location              {

            try_files $uri $uri/ =404;
        }
    }
```

Tendríamos que añadir un nuevo **location** con las líneas correspondientes a la autenticación:

```
    {
        location /Proyectos {
            auth_basic "Área restringida";
            auth_basic_user_file /etc/nginx/.htpasswd;  
        }
    }
```