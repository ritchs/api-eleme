const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Introduzca nombre"]
        },
        email: {
            type: String,
            required: [true, "Introduzca email"]
        },
        phone: {
            type: Number,
            required: [true, "Introduzca telefono"]
        }

    },
    {
        timestamps: true
    }
)

const Usuario = mongoose.model('users', userSchema);
module.exports= Usuario;