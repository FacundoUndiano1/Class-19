
const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routers/mainRouter');

let PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log('Servidor corriendo en puerto ' + PORT);
})

app.use(express.static(path.resolve(__dirname, '../public')));
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', mainRouter); //All routes starting with / are going to be answered by mainRouter


