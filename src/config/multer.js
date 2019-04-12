const multer = require('multer');
const path = require('path');
const crypto = require('crypto')

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'temp'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'temp'));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash))
        }
    })
};