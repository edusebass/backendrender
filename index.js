const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send("Landing page - Grupo #1")
})

app.get('/integrantes',(req,res)=>{
    res.json([
        {
            "numero":"1",
            "nombre":"Eduardo",
            "apellido":"Almachi",
        },
        {
            "numero":"2",
            "nombre":"Bryan",
            "apellido":"Delgado",
        },
        {
            "numero":"3",
            "nombre":"Brittany",
            "apellido":"Espinel",
        },
        {
            "numero":"4",
            "nombre":"Mateo",
            "apellido":"Mino",
        },
        {
            "numero":"5",
            "nombre":"Melany",
            "apellido":"Sangucho",
        },
        {
            "numero":"6",
            "nombre":"David",
            "apellido":"Vallejo",
        },
        {
            "numero":"7",
            "nombre":"Erick",
            "apellido":"Villaroel",
        },
        {
            "numero":"8",
            "nombre":"Danny",
            "apellido":"Yanacallo",
        },
    ])
})

app.get('/products',(req,res)=>{
    res.send(`
            <h1>Catálogo de productos</h1>
                <p>Bienvenidos</p>
                <ul>
                <li>Computadoras</li>
                <li>Laptop</li>
                <li>Tablet</li>
            </ul>
    `)
})



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});