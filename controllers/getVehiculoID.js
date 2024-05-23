const { vehiculos } = require("../vehiculos");
const { request , response } = require("express");

const getVehiculoID = (req = request , res = response) => {
    let id = parseInt(req.params.id);

    let vehiculo = vehiculos.find((vehiculo) => {
        return vehiculo.id === id;
    })

    if(vehiculo){
        return res.json({
            ok:true,
            vehiculo,
            statusCode:200
        })
    }else{
        return res.json({
            ok:false,
            msg:"No hay vehiculos con ese ID",
            statusCode:404
        })
    }
}

module.exports = {
    getVehiculoID
}