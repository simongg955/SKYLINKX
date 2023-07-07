const {check} = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateItem = [
    check("titulo").exists().notEmpty(),
    check("descripcion").exists().notEmpty(),
    check("imagen").exists().notEmpty(),
    check("Puntuacion").exists().notEmpty(),
]

const validatorGetItem = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = {validatorCreateItem, validatorGetItem}