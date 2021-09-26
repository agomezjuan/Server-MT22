const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Se recomienda usar los middleware antes de las rutas
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json()); // Este middleware viene por defecto en express
app.use(express.urlencoded({ extended: true }));

//Rutas
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// Asignación manual del puerto
/*
app.listen(3000, function () {
  console.log("El servidor escucha por el puerto 3000");
});
*/

// Asignación del puerto automaticamente con nodemon
app.set("puerto", process.env.PORT || 5000);
app.listen(app.get("puerto"), function () {
  console.log("App de ejemplo escuchando por el puerto " + app.get("puerto"));
});
