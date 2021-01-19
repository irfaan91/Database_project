var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');




//GET FUNCTIONS

//defualt page
//makes login homepage
app.get('/', function (req, res) {
		res.redirect('/login');
});

//main login page
app.get('/login', function (req, res) {
    res.render('login', { title: 'Please Login' });
});




//LISTENER
app.listen(app.get('port'), function() {
	console.log('Server listening on port ' + app.get('port'));
});




//POST FUNCTIONS

//post login
//returns to the login page for now. TODO: make check for login credentials and if account exists
app.post('/login', function (req, res) {
	res.render('login', { title: 'Login' });
});