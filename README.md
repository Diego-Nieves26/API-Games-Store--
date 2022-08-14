## Decripcion

Aplicación sobre videojuegos, en esta se puede registrar consolas, usuarios y juegos.

Los juegos pueden pertenecer a diferentes consolas, y cada consola puede tener diferentes videojuegos, a la vez, los usuarios pueden dejar comentarios sobre los juegos.

## Funciones o datos del proyecto

/api/v1/users

- POST "/signup" Crear usuario (enviar username, email, y password por req.body)
- POST "/login" Iniciar sesión (enviar email y password por req.body)
- PATCH "/:id" Actualizar perfil de usuario (name y email)
- DELETE "/:id" Deshabilitar cuenta de usuario
- GET "/" Obtener la lista de usuarios con cuentas sigan activas

/api/v1/games

- POST "/" Crear un nuevo juego (enviar title, genre por req.body)
- GET "/" Obtener todos los juegos registrados (con comentarios y consolas disponibles)
- PATCH "/:id" Actualizar el título de un juego (title)
- DELETE "/:id" Deshabilitar un juego
- POST "/reviews/:gameId" Escribir una reseña sobre un juego (enviar comment por req.body)

/api/v1/consoles

- POST "/" Crear una nueva consola (enviar name, company por req.body)
- GET "/" Obtener todas las consolas registradas (traer también los juegos que están disponibles para dicha consola)
- PATCH "/:id" Actualizar el título de una consola (name)
- DELETE "/:id" Deshabilitar una consola

## Lenguajes o Herramientas

- Express-validator
- PostgreSql
- Zequelize
- Bcryptjs
- Express
- Postman
- Dotenv
- NodeJs
- JWT

## Autor

** Diego Nieves **

- [LinkedIn](https://www.linkedin.com/in/diego-nieves-04b409242/)
- [Portafolio web](https://nvs-dlc.netlify.app)

## Contratación

Si quieres contratarme puedes escribirme a nieves.diego0426@gmail.com 👍.
