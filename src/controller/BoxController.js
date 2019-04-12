const Box = require('../model/Box');

class BoxController{
    async store(req, res){

        req.body.title

        const box = await Box.create(req.body);

        return res.json(box);
    }
}

module.exports = new BoxController();