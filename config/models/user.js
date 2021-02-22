const mongoose = require ("mongoose")
const validator = require ("validator")
//cree un schema de la base
const userSchema = new mongoose.Schema ({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    address : {type:String},

    password : {
        type : String,
        minlength : 7,
        validate(value){
            if (value.toLowerCase().includes("passeword"))
                throw new Error("passeword cannot contain passeword")
        }
    },
    email : {
        type : String,
        unique : true,
        lowerCase : true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    } ,
        
    age : {
        type: Number,
        dafault : 0,
        validate(value){
            if (value<0){
                throw new Error("Age can not be less then 0")
            }
        }
    }
},{timestamps : true 

})

//cree un modele pour le schema de la base
const User = mongoose.model("User", userSchema)
module.exports = User

