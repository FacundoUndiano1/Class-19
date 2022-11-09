const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routers/mainRouter')

let PORT = process.env.PORT || 3030;
app.listen(PORT, (req, res) => {
  console.log('Servidor corriendo en puerto ' + PORT);
})

app.use(express.static(path.resolve(__dirname, './public')));

app.use('/', mainRouter)