# Sismo project 

Esta es una aplicación web diseñada para proporcionar una interfaz interactiva y accesible para visualizar y comentar sobre eventos sismológicos alrededor del mundo. Utilizando datos en tiempo real del USGS (United States Geological Survey), esta plataforma permite a los usuarios explorar detalles significativos sobre terremotos recientes, incluyendo magnitud, ubicación y tiempo del evento.


## Tecnologías Utilizadas

- Ruby on Rails
- React
- Tailwind
- SQLite3

## Requisitos Previos

Asegúrate de tener instalado Ruby, Rails, Node.js y npm en tu sistema. Aquí están los enlaces para descargarlos si aún no los tienes:

- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [Rails](https://guides.rubyonrails.org/getting_started.html#installing-rails)
- [Node.js y npm](https://nodejs.org/en/download/)

## Configuración Local

### Configuración de Backend

1. Clona el repositorio:

   ```bash
   git clone URL_DEL_REPOSITORIO
   cd directorio_del_proyecto
   ```

2. Navega al directorio del backend:

   ```bash
   cd sismo_app
   ```
   

3. Instala las gemas necesarias:

   ```bash
   bundle install
   ```

4. Crea y migra la base de datos:

   ```bash
   rails db:create db:migrate
   ```

5. Carga datos iniciales para la base de datos:

   ```bash
   rake sismo:fetch_data
   ```

6. Inicia el servidor de Rails:

   ```bash
   rails server
   ```

### Configuración de Frontend

1. Navega al directorio del frontend:

   ```bash
   cd sismo_frontend
   ```

2. Instala las dependencias de Node.js:

   ```bash
   npm install
   ```

3. Inicia la aplicación React:

   ```bash
   npm start
   ```

   Esto debería abrir automáticamente la aplicación en tu navegador. Si no es así, puedes acceder a ella en `http://localhost:3001`.

## Uso

"Sismo Management" está diseñada para ser intuitiva y fácil de usar, permitiendo a los usuarios interactuar de manera efectiva con los datos sismológicos disponibles. A continuación, se describen las principales funcionalidades y cómo utilizarlas:

1. Visualización de Sismos: Al abrir la     aplicación, los usuarios serán recibidos con una lista de tarjetas que representan los sismos más recientes. Cada tarjeta muestra información clave como la magnitud, ubicación y el tiempo del evento.

2. Agregar Comentarios: En la vista detallada de cada sismo, los usuarios pueden agregar comentarios para discutir o dejar notas relevantes sobre el evento sismológico.

3. Paginación: Los usuarios pueden navegar entre diferentes páginas de resultados para explorar más eventos sismológicos.

## Contribuir

Si deseas contribuir a este proyecto, considera seguir estos pasos:

1. Fork el repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-caracteristica`).
3. Haz tus cambios y commítalos (`git commit -am 'Añadir alguna característica'`).
4. Push a la rama (`git push origin feature-nueva-caracteristica`).
5. Abre una Pull Request.



## Contacto

Bastian Rodriguez - [LinkedIn](https://www.linkedin.com/in/bastian-rodriguez-r-8b0781211/) - bastian3967a@gmail.com
