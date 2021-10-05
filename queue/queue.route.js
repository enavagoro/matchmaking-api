const queueController = require('./controllers/queue.controller');

exports.routesConfig = (app)=>{
    app.post('/enterToQueue', [
        queueController.addPlayerToQueue
    ]);

    app.post('/leaveQueue', [
        queueController.removePlayerFromQueue
    ]);
}
