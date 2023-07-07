const express = require("express")
const routes = express.Router()
const {getItems, createItem, getItem, updateItem, deleteItem} = require("../controller/Componentes")
const customHeader = require("../middleware/customHeader")
const {validatorCreateItem, validatorGetItem} = require("../validators/Componentes")

routes.get("/" , getItems)

routes.get("/:id" , validatorGetItem, getItem)

routes.post("/", validatorCreateItem, createItem)

routes.put("/:id" , validatorGetItem, validatorCreateItem, updateItem)

routes.delete("/:id" , validatorGetItem, deleteItem)

module.exports = routes 