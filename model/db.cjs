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
exports.getResults = function (req, res) {
    let query;

    if (req.params.id) {
        const teamId = req.params.id; 
        query = `SELECT * FROM results WHERE team1_id = ${teamId} OR team2_id = ${teamId} order by date`;
    } else {
        // If req.params.id is not provided select all teams
        query = 'SELECT * FROM results';
    }

    // Execute the query
    connection.query(query, function (err, rows) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });
};

exports.getResultsByDate = function (req, res) {

    const date = req.params.date;
    connection.query(`SELECT * FROM results WHERE date ="${date}"`, function (err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });
}

exports.getPlayerPoints = function (req, res) {

    connection.query(`SELECT * FROM player_points `, function (err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });
}

exports.getPlayerTackles = function (req, res) {

    connection.query(`SELECT * FROM player_tackles `, function (err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });
}

// GET /teams
exports.getTeams1 = function (req, res) {

    connection.query(`SELECT * FROM teams`, function (err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });
}

exports.getPlayersTeams = function (req, res) {

    connection.query(`SELECT players.id as pId, players.team_id as ptId, teams.id as tId, players.name as pname, teams.name as tname FROM players, teams WHERE players.team_id = teams.id`, function (err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });
}


exports.getVenues = function (req, res) {

    connection.query(`SELECT * FROM venues ORDER by name`, function (err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });
}


// GET /teams
exports.getTeams = function (req, res) {
    let query;

    if (req.params.id && typeof req.params.id === 'string') {
        const poolId = req.params.id; // Directly using the input without sanitization
        query = `SELECT id, pools.team_name as name, pools.pool FROM pools, teams WHERE teams.name = pools.team_name AND pool = "${poolId}" ORDER BY teams.name`;
    } else {
        // If req.params.id is not provided or invalid, select all teams
        query = 'SELECT * FROM teams';
    }

    // Execute the query
    connection.query(query, function (err, rows) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });
};

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
