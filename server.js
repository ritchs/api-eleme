const express = require('express')
const app = express()
const mongoose = require('mongoose')
// importar modelos
const Usuario = require('./models/userModel')

app.use(express.json());

// rutas
app.get('/',(req,res)=>{
res.send('Formulario')
})

app.post('/form', async(req,res)=>{
   try {
    const user = await Usuario.create(req.body);
    res.status(200).json(user);
   } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
    
   }
})

mongoose.connect ('mongodb+srv://admin:admin@cluster0.9msb6zl.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("Conectado a MONGODB")
    app.listen(3000,()=>{
        console.log("Node API corriendo en puerto 3000")
    })
}).catch(()=>{
    console.log(error)
})