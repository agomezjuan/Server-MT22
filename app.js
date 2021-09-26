const express = require("express");
const app = express();

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
