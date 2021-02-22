const nodemon = require('nodemon')
const express = require ('express')
const app = express()
require ('./db/mongoose')
const userRouter = require ('./routers/user')


app.use(express.json())
app.use(userRouter)

module.exports = app
/*const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const app = express()


app.use(express.json())
app.use(userRouter)



module.exports = app*/