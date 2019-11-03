const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');
const exphbs = require('express-handlebars');

//Configuracion
app.set('port', process.env.PORT | 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	layoutsDir: path.join(app.get('views'), 'layouts'),
	partialsDir: path.join(app.get('views'), 'partials'),
	extname: '.hbs'
}));
app.set('view engine', '.hbs');
//Middlewares (intermediarios)
app.use( (req,res,next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});

app.use(routes);

app.listen(app.get('port'), () => { console.log("Servidor encendido en el puerto "+app.get('port'))});