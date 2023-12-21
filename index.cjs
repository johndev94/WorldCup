var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var model = require('./model/db.cjs');  //

var app = express();

app.use(cors({
  origin: 'http://127.0.0.1:5174'
}));

// serves files in public folder
app.use(express.static('public'));

// NB:: this must be included to get JSON content sent with requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

///////////////////////////////////////////////////////////////////////////////////////////

// Get results
app.route('/results/:id?/:teamName?')
  .get(function (req, res) {
    res.status(200);
    model.getResults(req, res);
    console.log(req.params.id);
  })

  app.route('/resultsByDate/:date?')
  .get(function (req, res) {
    res.status(200);
    model.getResultsByDate(req, res);
    console.log(req.params.id);
  })


// Get venues
app.route('/venues/')
  .get(function (req, res) {
    res.status(200);
    model.getVenues(req, res);
    console.log(req.params.id);
  })

app.route('/teamPools/')
  .get(function (req, res) {
    res.status(200);
    model.getTeamsPool(req, res);
    console.log(req.params.id);
  })

// REST API /teams GET route
app.route('/teams/:id?')
  .get(function (req, res) {
    res.status(200);
    model.getTeams(req, res);
    console.log(req.params.id);
  })

app.route('/teams/')
  .get(function (req, res) {
    res.status(200);
    model.getTeams1(req, res);
    console.log(req.params.id);
  })
// Get players
app.route('/players')
  .get(function (req, res) {
    res.status(200);
    model.getPlayers(req, res);
    console.log(req.params.id);
  })

app.route('/playersTeams')
  .get(function (req, res) {
    res.status(200);
    model.getPlayersTeams(req, res);
    console.log(req.params.id);
  })


///////////////////////////////////////////////////////////////////////////////////////////

// setup REST API /team route VERBS - GET, POST, PUT, DELETE
app.route('/team/:id?')
  .get(function (req, res) {
    res.status(200);
    model.getTeam(req, res);
    console.log(req.params.id);
  })
  .post(function (req, res) { // add
    res.status(201);
    res.send(`POST /team {${req.body.id}, ${req.body.name}} received.`);
    console.log(req.body);
  })
  .put(function (req, res) { // edit
    res.status(200);
    res.send(`PUT /team/${req.body.id} {${req.body.name}, ${req.body.name}} received.`);
    console.log(req.body);
  })
  .delete(function (req, res) { // delete
    res.status(200);
    res.send(`DELETE /team/${req.params.id} received.`);
    console.log(req.params.id);
  });

// setup REST API /pool route VERBS - GET, POST, PUT, DELETE
app.route('/pool/:id?')
  .get(function (req, res) {
    res.status(200);
    model.getPool(req, res);
    console.log(req.params.id);
  })
  .post(function (req, res) { // add
    res.status(201);
    res.send(`POST /pool {${req.body.id}, ${req.body.name}} received.`);
    console.log(req.body);
  })
  .put(function (req, res) { // edit
    res.status(200);
    res.send(`PUT /pool/${req.body.id} {${req.body.name}, ${req.body.name}} received.`);
    console.log(req.body);
  })
  .delete(function (req, res) { // delete
    res.status(200);
    res.send(`DELETE /pool/${req.params.id} received.`);
    console.log(req.params.id);
  });


var myServer = app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
