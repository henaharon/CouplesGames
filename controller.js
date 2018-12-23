
const mongoose = require('mongoose');
const consts = require('./const');
const Game = require('./game');

const { MLAB_URL, DB_USER, DB_PASS } = consts
const url = MLAB_URL
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    user: DB_USER,
    pass: DB_PASS
};

module.exports = {
    getAllGames(req, res, next){ // middleWare
        mongoose
            .connect(url, options)
            .then(async() => {
                const result = await Game.find({})

                if(result) res.json(result);
                else res.status(404).send('not found');

                mongoose.disconnect();

            })

            .catch(err => {
                console.error('some error occurred' , err)
                res.status(500).send(err.message)
            })

    },
    getGameByTypeDate(req, res, next){
        mongoose
        .connect(url, options)
        .then(async() => {
            const {type = null} = req.params;
            const{date = null} = req.params;
            const result = await Game.find({type,date});

            if(result) res.json(result);
            else res.status(404).send('not found');

            mongoose.disconnect();

        })

        .catch(err => {
            console.error('some error occurred' , err)
            res.status(500).send(err.message)
        })

    },
    editGame(req, res, next){
        mongoose
        .connect(url, options)
        .then(async() => {
            const {id = null} = req.params;
            const {winner = null} = req.body;
            const result = await Game.updateOne({id},{winner});
            
            if(result) res.json(result);
            else res.status(404).send('not found');

            mongoose.disconnect();

        })

        .catch(err => {
            console.error('some error occurred' , err)
            res.status(500).send(err.message)
        })

    }
}