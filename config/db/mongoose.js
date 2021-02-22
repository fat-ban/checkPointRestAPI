const mongoose = require("mongoose")//utiliser le package mongoose
//utiliser les variables d'env
require("dotenv").config()
//creation et connexion a la bas user-db
const MONGODB_URL = `mongodb://${process.env.DATABASE_HOST}:
${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`

console.log(MONGODB_URL)

mongoose.connect(MONGODB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
