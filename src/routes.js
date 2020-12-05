const express = require('express')
const Carscontrollers = require('./controllers/Carscontrollers')



const routes = express.Router()

routes.get('/car', Carscontrollers.consultaAll)
routes.get('/cars/:id', Carscontrollers.consulta)
routes.put('/cars/:id', Carscontrollers.update)
routes.post('/cars', Carscontrollers.create)
routes.delete('/cars/:id', Carscontrollers.destroy)

module.exports = routes