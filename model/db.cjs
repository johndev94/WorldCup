var mysql = require('mysql');

///////////////////////////////////////////////////////////////////////////////////////////

// Setup MySQL connection
// timezone is very NB

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rwc2023',
    timezone: 'utc+0'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(`Sucessfully connected to MySQL database teamsDB`);
});

///////////////////////////////////////////////////////////////////////////////////////////

// GET /teams
exports.getVenues = function (req, res) {

    connection.query(`SELECT * FROM venues ORDER by name`, function (err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });
}


// GET /teams
exports.getTeams = function (req, res) {

    connection.query(`SELECT * FROM teams`, function (err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });
}

exports.getPlayers = function (req, res) {

    connection.query(`SELECT * FROM players`, function (err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });
}

// GET /team/ID
exports.getTeam = function (req, res) {

    connection.query(`SELECT * FROM teams WHERE id=${req.params.id}`, function (err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });
}

// GET /pool/pool
exports.getPool = function (req, res) {

    connection.query(`SELECT * FROM pools WHERE pool="${req.params.id}"`, function (err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });
}

// GET /teams
exports.getTeamsPool = function (req, res) {

    connection.query(`SELECT * FROM teams, pools where teams.name = pools.team_name ORDER BY teams.name`, function (err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });
}
