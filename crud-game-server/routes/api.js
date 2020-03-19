const gameController = require('../controllers/gameController');

module.exports = (app) => {
    app.get('/api/game', gameController.index);
    app.get('/api/game/:id', gameController.show);
    app.post('/api/game', gameController.store);
    app.put('/api/game/:id', gameController.update);
    app.delete('/api/game/:id', gameController.destroy);
}