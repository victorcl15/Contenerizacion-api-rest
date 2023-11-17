const {Schema, model} = require("mongoose")
//Definición de esquema / plantilla de datos
const phaseSchema = new Schema({
    name: {
        type: String,
        required: [true, "Nombre requerido"]
    }
}, { timestamps: true })


phaseSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

//crear modelo, que permite crear una clase para tener instancias 
const Phase = model("Phase", phaseSchema)


module.exports = Phase