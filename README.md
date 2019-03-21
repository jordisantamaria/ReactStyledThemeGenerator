Prettier:

yarn pretty-quick

Sequelize basado en la plantilla
https://github.com/sequelize/express-example

**Tecnologias usadas:**

Nextjs: SSR
React: SPA
Graphql: Per demanar nomes les dades necesaries a la api, una millor forma de treballar que api Rest
AUTH0: Per a autentificar els usuaris de la forma mes segura possible
Redux: Per a compartir la info de usuari en la app, es podria mirar de optimitzar perque no fos falta
Lodash: Utilitats per fer servir amb arrays i objectes.
Typescript: Per afegir tipat a javascript, sobretot util per a generar interficies de dades
Babel: Transcriure el codi a javascript vanilla xk el navegador pugui interpretar-ho
Nodemon: actualiza el servidor cuando hay algun cambio.
jest: Testear el codi.

**Com pujar a produccio:**

brew install heroku/brew/heroku
heroku login
heroku create nomProjecte
en Procfile definir la comanda per a executar la app
git push heroku master
heroku open

**Per executar la web:**

npm install
npm start
