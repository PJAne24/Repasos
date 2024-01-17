const express = require("express");
const cors = require("cors"); //npm install cors
const app = express();
const path = require("path");
app.get("/", (req, res) => {
    res.send("<h1>Hola mundo</h1>");
});

app.use(express.json());
app.use(cors());
app.get("/producto", (req, res) => {
    const datos = [{
        clase: "Seoul",
        curso: 2,
        ciclo: "DAW",
        planta: 3,
        alumnos: 11
    },{
        clase: "Pandora",
        curso: 2,
        ciclo: "DAM",
        planta: 3,
        alumnos: 10
    },{
        clase: "Jonia",
        curso: 2,
        ciclo: "ASIR",
        planta: 3,
        alumnos: 28
    }]
    res.json(datos);
});

app.listen(3000, () => {
    console.log("Escuchando puerto 3000");
});