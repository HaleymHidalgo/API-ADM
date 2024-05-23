const express = require("express");
const app = express();
const port = 3002;

const { getVehiculoID } = require("./controllers/getVehiculoID");
const { getVehiculos } = require("./controllers/getVehiculos");
const { getVehiculosMarca } = require("./controllers/getVehiculosMarca");


app.get("/", getVehiculos);
app.get("/id/:id", getVehiculoID);
app.get("/marca/:marca", getVehiculosMarca);

app.listen(port , ()=> {
    console.log(`Runing web service in port: ${port}`);
})