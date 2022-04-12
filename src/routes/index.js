const express = require("express");
const produtoController = require('../controllers/controllerProdutos')

const routes = express.Router();


routes.get("/produto/lista", produtoController.listarProduto)
routes.post("/produto", produtoController.cadastrarProduto)


module.exports = routes;