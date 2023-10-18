# Descarga y configuración


<ul>
  <li>Clona el proyecto</li>
  <li>Abre el front con VS o tu editor favorito y ejecuta npm install</li>
  <li>Crea el contenedor postgres con este comando

docker run --name responsive -e POSTGRES_USER=responsive -e POSTGRES_PASSWORD=1234 -p 5432:5432 -d postgres</li>
<li>Abre el back con IntelliJ y ejecútalo</li>
</ul>

# Objetivos

El principal objetivo de este ejercicio es adaptar tanto el login como la pantalla Home cuando no se está logueado y cuando si y, si es posible, usar una convención de nomenclatura como BEM. 

# Puntos de ruptura

Para este ejercicio usaremos los siguientes puntos de ruptura:

<ul>
  <li>1400px</li>
  <li>992px</li>
  <li>576px</li>
</ul>
