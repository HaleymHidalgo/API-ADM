const { vehiculos } = require("../vehiculos");
const { request , response } = require("express");

const getVehiculos = (req = request , res = response) => {
    return res.json({
        ok:true,
        statusCode:200,
        vehiculos
    })
}

module.exports = {
    getVehiculos
}