const handleHttpError = (res, message = 'Ups! Algo salio mal', code = 403) =>{
    res.status(code)
    res.send({error: message})
}

module.exports = {handleHttpError} // Llaves para exportar varias 