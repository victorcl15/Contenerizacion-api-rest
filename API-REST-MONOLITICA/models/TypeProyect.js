const {Schema, model} = require("mongoose")
//Definición de esquema / plantilla de datos
const typeProyectSchema = new Schema({
    name: {
        type: String,
        required: [true, "Nombre requerido"]
    }
}, { timestamps: true })


typeProyectSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

//crear modelo, que permite crear una clase para tener instancias 
const TypeProyect = model("TypeProyect", typeProyectSchema)


module.exports = TypeProyect