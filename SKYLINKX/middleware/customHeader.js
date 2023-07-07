const {handleHttpError} = require("../utils/handleError")
const customHeader = (req, res, next) => {
    // console.log(req.body)
    // console.log(req.headers)
    // next()
    try {
        const apikey = req.headers.api_key
        if (apikey === "SkiLink") {
            next()
        }else{
            handleHttpError(res, "API_KEY_INVALIDA", 403)
        }
    } catch (e) {
        handleHttpError(res, "ALGO_OCURRIO_EN_CUSTOMHEADER" , 403)
    }
}

module.exports = customHeader