const express = require ('express')
const connectdb = require ('./database/db')
const app = express();
const studentRoute = require('./routes/studentRoute')
const bodyparser = require('body-parser')


require("dotenv").config()
const port = process.env.PORT



app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(studentRoute)






connectdb()








app.listen(port,() =>{
    console.log(`server started successfully. click http://localhost:${port} to open website`)
})