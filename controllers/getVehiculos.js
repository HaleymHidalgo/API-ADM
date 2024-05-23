const { vehiculos } = require("../vehiculos");
const { request , response } = require("express");

const getVehiculos = (req = request , res = response) => {
    return res.json({
        ok:true,
        vehiculos,
        statusCode:200
    })
}

module.exports = {
    getVehiculos
}