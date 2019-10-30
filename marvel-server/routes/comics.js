'use strict'

const express = require('express');

const comicsControlador = require('../controladores/comics');

let api = express.Router();

api.get('/comics', comicsControlador.obtenerComics);//Funciona en Postman y Angular
api.get('/comics/:idComic', comicsControlador.obtenerComic);//Funciona en Postman y Angular (no del todo)
api.post('/comics', comicsControlador.anadirComic); //Funciona en Postman y Angular
api.put('/comics/:idComic', comicsControlador.modificarComic); //Funciona en Postman
api.delete('/comics/:idComic', comicsControlador.borrarComic);//Funciona en Postman y Angular

module.exports = api;