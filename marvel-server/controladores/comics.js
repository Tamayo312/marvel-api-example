'use strict'

const Comic = require('../modelos/comic');

function obtenerComics(req, res){
    console.log('obtenerComics');
    Comic.find({}).exec((err, listadoComics) => {
        if(err){
            res.status(500).send({
                message: 'Error al recuperar comics'
            })
        } else {
            if(listadoComics){
                res.status(200).send({
                    listadoComics
                })
            } else {
                res.status(404).send({
                    message: 'No se ha conseguido recuperar el listado de comics'
                })
            }
        }
    })
}

function obtenerComic(req, res){
    console.log('mostrando comic: ' + req.params.title);
    Comic.find({'_id': req.params.idComic}).exec((err, comic) => {
        if(err){
            res.status(500).send({
                message: 'Error al obtener el comic'
            })
        } else {
            if(Comic){
                res.status(200).send({
                    comic
                })
            } else {
                res.status(404).send({
                    message: 'No se ha podido recuperar el comic'
                })
            }
        }
    })
}

function anadirComic(req, res){
    console.log('se comunican');
    let comic = new Comic(); //Instancia del modelo comic 
    let params = req.body;

    if(params.title){
        comic.title = params.title;
        comic.issueNumber = params.issueNumber;
        comic.description = params.description;
        comic.pages = params.pages;
        comic.img = params.img;
        comic.leido = false;

        console.log(`comic añadido: ${comic.title}`);

        comic.save((err, comicGuardado) => {
            if(err){
                res.status(500).send({
                    message: ' Error al guardar el comic'
                })
            } else {
                if(Comic){
                    res.status(200).send({
                        comic: comicGuardado
                    })
                } else {
                    res.status(404).send({
                        message: 'Error al anadir comic'
                    })
                }
            }
        })
    } else {
        res.status(200).send({
            message: 'Es necesario proporcionar el nombre del comic'
        })
    }
}

function modificarComic (req, res){
    let comic = new Comic();
    let params = req.body;
    comic.title = params.title;
    Comic.findOneAndUpdate(
        {'_id': req.params.idComic}, {$set: {'title': comic.title}},
        (err, comicActualizado) => {
            if(err){
                res.status(500).send({
                    message: 'Error al modificar comic'
                })
            } else {
                if(listadoComics){
                    res.status(200).send({
                        comic: comicActualizado
                    })
                } else {
                    res.status(404).send({
                        message: 'Error, no existe el comic'
                    })
                }
            }
        }
    )
}

function borrarComic(req, res){
    console.log('eliminando comic: ' + req.params.title);
    Comic.findOneAndDelete( //En appTareas se usa findOneAndRemove, pero da error por estar deprecated?
        {'_id': req.params.idComic},
        (err, comicEliminado) => {
            if(err){
                res.status(500).send({
                    message: 'Error al eliminar comic'
                })
            } else {
                if(comicEliminado){
                    res.status(200).send({
                        comic: comicEliminado
                    })
                } else {
                    res.status(404).send({
                        message: 'Error, no existe el comic'
                    })
                }
            }
        }
    )
}

module.exports = {
    obtenerComics,
    obtenerComic,
    anadirComic,
    modificarComic,
    borrarComic
}