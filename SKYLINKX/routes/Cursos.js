const express = require("express")
const routes = express.Router()
const {getItems, createItem, getItem, updateItem, deleteItem} = require("../controller/Cursos")
const customHeader = require("../middleware/customHeader")
const {validatorCreateItem, validatorGetItem} = require("../validators/Cursos")

routes.get("/" , getItems)

routes.get("/:id" , validatorGetItem, getItem)

routes.post("/", validatorCreateItem, createItem)

routes.put("/:id" , validatorGetItem, validatorCreateItem, updateItem)

routes.delete("/:id" , validatorGetItem, deleteItem)

module.exports = routes 