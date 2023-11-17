const {Schema, model} = require("mongoose")
//Definición de esquema / plantilla de datos
const clientSchema = new Schema({
    name: {
        type: String,
        required: [true, "Nombre requerido"]
    },
    email: {
        type: String,
        required: [true, "Email requerido"],
        unique: [true, "Email debe ser único"]
    }
}, { timestamps: true })


clientSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

//crear modelo, que permite crear una clase para tener instancias 
const Client = model("Client", clientSchema)


module.exports = Client