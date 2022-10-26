const express = require('express')
const request = require('request')
const UserRouter = require('./route/userroute')
require('./db/connection')
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(UserRouter)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  app.get('/allusers', (req, res) => {
    request(
      { url: 'https://localhost:4000/allusers' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
  });









app.listen(port, () => {
    console.log(`Server on port ${port}`) 
})