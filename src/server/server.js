/** basic nodejs server */

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 7000;
var environment = process.env.NODE_ENV;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

console.log('About to start up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

console.log("*** DEV SERVER ***");
app.use(express.static('./src/client/'));
app.use(express.static('./'));
app.use(express.static('./tmp'));
app.use('/*', express.static('./src/client/index.html'));

app.listen(port, function(){
    console.log('Running server on port ' + port);
    console.log('env = ' + app.get('env') +
                '\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd());
});