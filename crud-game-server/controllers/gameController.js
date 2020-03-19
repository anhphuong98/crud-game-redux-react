const db = require('../models');

const index = (req, res) => {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);

    const limit = pageSize ? pageSize : 20;
    const offset = page ? (limit * page) : 0; 
    db.game.findAndCountAll({limit : limit, offset : offset}).then(function(data){
        data.page = page ? page : 0,
        data.pageSize = limit
        res.json({
            sucess : true,
            games : data
        });
    })
    // db.game.findAll({}).then(function(games){
    //     res.json(games);
    // })
}

const show = (req, res) => {
    db.game.findOne({
        where : {
            id : req.params.id
        }
    }).then(function(game){
        if(game) {
            res.status(200).json({
                success : true,
                data : game
            })
        }else{
            res.status(500).json({
                success : false,
                message : 'Invalid game'
            })
        }
    })
}

const store = (req, res) => {
    db.game.create({
        title : req.body.title,
        url : req.body.url
    }).then(function(game){
        if(!game){
            res.status(500).json({
                success : false,
                message : 'Add game fail'
            })
        }
        else {
            res.status(201).json({
                success : true,
                data : game
            })
        }
    })
}

const update = (req, res) => {
    db.game.findOne({
        where : {
            id : req.params.id
        }
    }).then(function(game){
        if(!game){
            res.status(500).json({
                success : false,
                message : 'Invalid game'
            })
        }else{
            game.update({
                title : req.body.title,
                url : req.body.url
            });
            res.status(200).json({
                    success : true,
                    data : game
            });
        }
    })
}

const destroy = (req, res) => {
    db.game.findOne({
        where : {
            id : req.params.id
        }
    }).then(function(game){
        if(!game) {
            res.status(500).json({
                success : false,
                message : 'Invalid game'
            })
        }else{
            game.destroy().then(function(){
                res.status(200).json({
                    success : true, 
                    message : 'Deleted game'
                })
            })
        }
    })
}
const gameController = {};

gameController.index = index;
gameController.show = show;
gameController.store = store;
gameController.update = update;
gameController.destroy = destroy;

module.exports = gameController;