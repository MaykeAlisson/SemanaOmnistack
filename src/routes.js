module.exports = function(app){

    const BoxController = require('./controller/BoxController');

    app.post('/boxes', BoxController.store);
}
