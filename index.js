const express = require('express');
const morgan = require('morgan');
const ctrl = require('./controller');

const app = express();
const port = process.env.PORT || 3000 

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

app.get('/game', ctrl.getAllGames);
app.get('/game/:type&:date', ctrl.getGameByTypeDate);
app.post('/game/:id', ctrl.editGame);

app.listen(port, 
    () => console.log(`listening on port ${port}`)
    )



