/*
 * @Author: Sydney
 * @Date:   2017-03-30 17:43:02
 * @Last Modified by:   Sydney
 * @Last Modified time: 2017-03-30 20:09:19
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static('public'));
routes(app);
app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
module.exports = app;