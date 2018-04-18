var express = require('express');
var app = express();
var path = require('path');
var i18n = require("i18n");
const cookieParser = require('cookie-parser');
const expressHelpers = require('express-helpers');

app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/fonts/', express.static(path.join(__dirname, '/node_modules/bootstrap/fonts')));

expressHelpers(app);
app.set('view engine', 'ejs');

i18n.configure({
  locales: ['en', 'fr', 'srb'],
  defaultLocale: 'srb',
  cookie: 'locale',
  directory: __dirname + '/locales'
});

app.use(cookieParser());

app.use((req, res, next) => {
  i18n.init(req, res, next);
});

app.get('/', function (req, res) {
  res.cookie('locale', 'srb');
  res.render(path.join(__dirname + '/public/index.ejs'));
});
app.get('/contact', function (req, res) {
  res.render(path.join(__dirname + '/public/contact.ejs'));
});
app.get('/index', function (req, res) {
  res.render(path.join(__dirname + '/public/index.ejs'));
});
app.get('/field', function (req, res) {
  res.render(path.join(__dirname + '/public/field.ejs'));
});
app.get('/main', function (req, res) {
  res.render(path.join(__dirname + '/public/main.ejs'));
});
app.get('/aboutus', function (req, res) {
  res.render(path.join(__dirname + '/public/aboutus.ejs'));
});
app.get('/reference', function (req, res) {
  res.render(path.join(__dirname + '/public/reference.ejs'));
});

app.get('/srb', function (req, res) {
  res.cookie('locale', 'srb');
  res.redirect('/main')
});
app.get('/fr', function (req, res) {
  res.cookie('locale', 'fr');
  res.redirect('/main')
});
app.get('/en', function (req, res) {
  res.cookie('locale', 'en');
  res.redirect('/main')
});

var port = process.env.PORT || 6001
app.listen(port, function () {
  console.log('Listening on port ' + port + '!')
});
