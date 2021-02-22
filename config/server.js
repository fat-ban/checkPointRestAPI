/*const app = require ("./app")

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("server is up in port " + port)
})*/
const app = require("./app")

const port = 3000



app.listen(port, ()=>{
    console.log("server is up on port " + port)
})