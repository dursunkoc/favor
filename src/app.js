var express = require('express');
var log4js = require('log4js');
var log = log4js.getLogger('app');
log4js.configure(__dirname+'/../config/log4js.json');

var app = express();
app.use(express.static('public'));
var authRouter = require('./routers/authRouter')(app);

app.listen(process.env.PORT, function(){
	log.debug('Server Started on ', process.env.PORT);
});