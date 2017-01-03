var express = require('express')
var app = express()
var path = require('path')
var bodyparser = require('body-parser')
var db = require('./models')
var router = express.Router();


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
// what does this do??
app.use(express.static(path.join(__dirname, '../bundle')));

const routes = require('./routes/index').routes;

app.use('/api/artists', routes.artist)
app.use('/api/songs', routes.song)
app.use('/api/votes', routes.vote)
app.use('/api/comments', routes.comment)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})



db.sequelize.sync({force: true}).then(function() {
  console.log('successful')
  app.listen(3000)
})
