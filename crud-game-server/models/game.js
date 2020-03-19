'use strict'

module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('game', {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        title : {
            type : DataTypes.STRING
        },
        url : {
            type : DataTypes.STRING
        }
    }, {
        timestamps : false
    });
    return Game;
}


