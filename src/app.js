const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');


app.set('port', process.env.PORT || 2900);
app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');
app.set('')

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));


app.use(require('./routes/app'))


//Start

app.listen(app.get('port'),()=> {
    console.log("server en escucha",app.get('port'))
}
);