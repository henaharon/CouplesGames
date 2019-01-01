const express = require('express');
const ctrl = require('./controller');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000 

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));



app.get('/api', (req,res) => {
    res.redirect("https://documenter.getpostman.com/view/5677398/Rzn6v2mb")
});

app.get('/game', ctrl.getAllGames);
app.get('/game/:type&:date', ctrl.getGameByTypeDate);
app.post('/game/:id', ctrl.editGame);

app.all('*',(req,res,next) => {
    res.send("Wrong route");
});



app.listen(port, 
    () => console.log(`listening on port ${port}`)
    )



