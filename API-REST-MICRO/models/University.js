const {Schema, model} = require("mongoose")
//Definición de esquema / plantilla de datos
const universitySchema = new Schema({
    name: {
        type: String,
        required: [true, "Nombre requerido"]
    },
    adress: {
        type: String,
        required: [true, "Requiere dirección"]
    },
    phone: {
        type: Number,
        required: [true, "Requiere un telefono"]
    }
}, { timestamps: true })


universitySchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

//crear modelo, que permite crear una clase para tener instancias 
const University = model("University", universitySchema)


module.exports = University