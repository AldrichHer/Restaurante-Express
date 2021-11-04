const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT;

//servir contenido estatico 
//sirve por defecto en "/"
app.use(express.static('public'))

app.get('/mundo', (req, res) => {
    res.send('Hello World desde mundo')
  })
  app.get('/menu', (req, res) => {
    res.sendFile(__dirname + '/public/menu.html')
  })
  app.get('*', (req, res) => {
    // res.send('404 PAGINA NO ENCONTRADA')
    res.sendFile(__dirname + '/public/404.html')
  })
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })