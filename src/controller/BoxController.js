const Box = require('../model/Box');

class BoxController{
    async store(req, res){

        req.body.title

        const box = await Box.create(req.body);

        return res.json(box);
    }

    async show(req, res){
        const box = await Box.findById(req.params.id).populate('files');

        return res.json(box);
    }
}

module.exports = new BoxController();