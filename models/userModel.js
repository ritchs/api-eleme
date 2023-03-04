const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, "Introduzca nombre"]
        },
        email: {
            type: String,
            required: [true, "Introduzca email"]
        },
        telefono: {
            type: Number,
            required: [true, "Introduzca telefono"]
        }

    },
    {
        timestamps: true
    }
)

const Usuario = mongoose.model('User', userSchema);
module.exports= Usuario;