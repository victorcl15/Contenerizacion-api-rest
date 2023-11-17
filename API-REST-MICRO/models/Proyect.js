const { Schema, model } = require("mongoose");
const crypto = require("crypto");
//Definición de esquema / plantilla de datos
const proyectSchema = new Schema(
  {
    number: {
      type: String,
      required: [true, "Requiere un identificador"],
      unique: [true, "debe ser un identificador único"],
      default: crypto.randomUUID(),
    },
    title: {
      type: String,
      required: [true, "titulo requerido"],
    },
    initiation_date: {
      type: Date,
      required: [true, "Fecha de comienzo requerida"],
      validate: {
        validator: function (date) {
          // Verificar si la fecha tiene la parte de la hora
          const isoString = date.toISOString();
          const datePart = isoString.includes("T")
            ? isoString.split("T")[0]
            : isoString;

          // Validar que la fecha tiene el formato deseado (año, mes, día)
          return /^\d{4}-\d{2}-\d{2}$/.test(datePart);
        },
        message: (props) =>
          `${props.value} no tiene el formato esperado (YYYY-MM-DD)`,
      },
    },
    delivery_date: {
      type: Date,
      required: [true, "Fecha de entrega requerida"],
      validate: {
        validator: function (date) {
          // Verificar si la fecha tiene la parte de la hora
          const isoString = date.toISOString();
          const datePart = isoString.includes("T")
            ? isoString.split("T")[0]
            : isoString;

          // Validar que la fecha tiene el formato deseado (año, mes, día)
          return /^\d{4}-\d{2}-\d{2}$/.test(datePart);
        },
        message: (props) =>
          `${props.value} no tiene el formato esperado (YYYY-MM-DD)`,
      },
    },
    value: {
      type: Number,
      required: [true, "valor del proyecto requerido"],
      validate: {
        validator: function (v) {
          // Validar que el valor sea un número
          return typeof v === "number";
        },
        message: (props) => `${props.value} no es un número válido`,
      },
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: "Client",
        required: [true, "Se requiere un id valido de cliente"],
      },
      type_proyect: {
        type: Schema.Types.ObjectId,
        ref: "TypeProyect",
        required: [true, "Se requiere un id valido de tipo de proyecto"],
      },
      university: {
        type: Schema.Types.ObjectId,
        ref: "University",
        required: [true, "Se requiere un id valido de universidad"],
      },
      phase: {
        type: Schema.Types.ObjectId,
        ref: "Phase",
        required: [true, "Se requiere un id valido de etapa"],
      },
  },
  { timestamps: true }
);

proyectSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

//crear modelo, que permite crear una clase para tener instancias
const Proyect = model("Proyect", proyectSchema);

module.exports = Proyect;
