const express = require('express')
const app = express()
const mongoose = require('mongoose')
// importar modelos
const Usuario = require('./models/userModel')
app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");
app.use( express.static( "public" ) );
app.use(express.json());

// rutas
app.get('/',(req,res)=>{
res.render("index1", {titulo:"inicio EJS"})
})

app.get('/grupo',(req,res)=>{
    res.render("grupo", {titulo:"inicio EJS"})
    })

app.get('/form', async (req, res) => {
    console.log("res", req.query)
    
   try {
    const user = await Usuario.create(req.query);
    res.status(200).json(user);
   } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
    
   }
})

mongoose.connect ('mongodb+srv://ritchs:X3cBt78g89AAL7se@cluster0.kdolw.mongodb.net/blog?retryWrites=true&w=majority')
//mongoose.connect ('mongodb+srv://admin:admin@cluster0.9msb6zl.mongodb.net/?retryWrites=true&w=majority')

    .then(() => {
    console.log("Conectado a MONGODB")
    app.listen(3000,()=>{
        console.log("Node API corriendo en puerto 3000")
    })
}).catch((e)=>{
    console.log(e)
})