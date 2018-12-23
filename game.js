const mongoose = require('mongoose');
//const review = require('./review');

const schema = {
    id : {type: String, required: true},
    date: {type: String, required: true},
    type: { type: String, required: true },
    winner: { type: String, required: true },
    playerID : [String],
    refereeReview : [Object]
   }
   const game_schema = new mongoose.Schema(schema)

   const Game = mongoose.model('Match', game_schema);

   module.exports = Game;

