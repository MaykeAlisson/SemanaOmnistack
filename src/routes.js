module.exports = function(app){

    const multer = require('multer');
    const multerConfig = require('./config/multer');


    const BoxController = require('./controller/BoxController');
    const FileController = require('./controller/FileController');

    app.post('/boxes', BoxController.store);
    app.get('/boxes/:id', BoxController.show);

    app.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);
}
