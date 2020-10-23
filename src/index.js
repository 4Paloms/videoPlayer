const express = require('express');
const path = require('path');

const app = express();


app.set('port', process.env.PORT || 2900);
app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));


app.use(require('./routes/index'))

//Start

app.listen(app.get('port'),()=> {
    console.log("server en escucha",app.get('port'))
}
);