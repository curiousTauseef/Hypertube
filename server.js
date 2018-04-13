const express		=	require("express");
const app			=	express();
const http			=	require('http');
const path			=	require('path');
const bodyParser	=	require('body-parser');
const database		=	require('./Model/SQL.class.js');
const Session       =	require('express-session');
const cookieParser 	=	require('cookie-parser');


var session = Session({secret: 'pass', resave: true, saveUninitialized: true});

const index 		=	require('./Controllers/index.js');
const connexion		=	require('./Controllers/connexion.js');
const inscription	=	require('./Controllers/inscription.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session);

app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'ejs');

app.use('/', index);
app.use('/connexion', connexion);
app.use('/inscription', inscription);

http.createServer(app).listen(3001);
