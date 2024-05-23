const { vehiculos } = require("../vehiculos");
const { request , response } = require("express");

const getVehiculosMarca = (req = request , res = response) => {
    let marca = req.params.marca;

    let vehFiltrados = vehiculos.filter((vehiculo) => {
        return vehiculo.marca === marca;
    })

    if(vehFiltrados){
        return res.json({
            ok:true,
            vehFiltrados,
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
    getVehiculosMarca
}