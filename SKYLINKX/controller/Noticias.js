const {newsModel} = require("../models/")
const { handleHttpError } = require("../utils/handleError")
const  {matchedData}  = require("express-validator")
const news = require("../models/NoSql/Noticias")

const getItems = async (req, res) => { 
    try {
        const data = await newsModel.find({}) //Await no puede existir sin el async
        res.send({data})
    } catch (e) {
       handleHttpError(res, 'ERROR_EN_GET_ITEMS' ,  302) 
    }
}

const getItem = async (req, res) => {
    try {
        req = matchedData(req) 
        const {id} = req
        const data = await newsModel.findById(id)
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEM" , 402)
    }
}

const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await newsModel.create(body)
        res.send({data})

    } catch (e) {
        handleHttpError(res, 'ERROR_EN_METODO_CREATE_ITEM', 400)
    }
}

const updateItem = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req) 
        console.log(id)
        console.log(body)
        const data = await newsModel.findOneAndUpdate (
            id, body
        )
        res.send({data})
    } catch (e) {
        handleHttpError(res, 'ERROR_UPDATE_PRODUCT' , 402)
    }
}

const deleteItem = async (req, res) => {
    try{
        req  = matchedData(req)
        const {id} = req
        const data = await newsModel.delete({_id: id})
        res.send ({data})

    } catch (e) {
        handleHttpError(res, 'ERROR_DELETE_PRODUCT' , 402)
    }
}

module.exports = {getItem, getItems, createItem, updateItem, deleteItem}
