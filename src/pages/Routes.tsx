import React, { useEffect } from 'react';
import $ from 'jquery';

const GetRoutes: React.FC = () => {

    useEffect(() => {
        $("#venuesBtn").click(function () {
            const url = `http://localhost:3000/venues`;
            console.log(url);
            $.get(url, function (data) {
                console.log(data);
                $("#JSONTextArea").text(JSON.stringify(data, null, 4));
            }, 'json');
        });
        // TEAMS BUTTON
        $("#teamsBtn").click(function () {
            const url = `http://localhost:3000/teams`;
            console.log(url);
            $.get(url, function (data) {
                console.log(data);
                $("#JSONTextArea").text(JSON.stringify(data, null, 4));
            }, 'json');
        });
        // PLAYERS BUTTON
        $("#playersBtn").click(function () {
            const url = `http://localhost:3000/players`;
            console.log(url);
            $.get(url, function (data) {
                console.log(data);
                $("#JSONTextArea").text(JSON.stringify(data, null, 4));
            }, 'json');
        });
        //POOL BUTTON
        $("#poolTeamsBtn").click(function () {
            var id = "A";
            console.log(`http://localhost:3000/pool/${id}`);
            $.get(`http://localhost:3000/pool/${id}`, function (data) {
                console.log(data);
                $("#JSONTextArea").text(JSON.stringify(data, null, 4));
            }, 'json');
        });
    }, []);

    return (
        <div>
            <h1>Routes</h1>
            <table className="table w-100">
                <tr>
                    <th>Description</th><th>Route</th><th></th>
                </tr>
                <tr>
                    <td>Get venues</td><td><a href="http://localhost:3000/venues">/venues</a></td><td><button className="btn btn-primary" id="venuesBtn">Get</button></td>
                </tr>
                <tr>
                    <td>Get teams</td><td><a href="http://localhost:3000/teams">/teams</a></td><td><button className="btn btn-primary" id="teamsBtn">Get</button></td>
                </tr>
                <tr>
                    <td>Get pool teams</td><td><a href="http://localhost:3000/teams/a">/teams/A</a></td><td><button className="btn btn-primary" id="poolTeamsBtn">Get</button></td>
                </tr>
                <tr>
                    <td>Get players</td><td><a href="http://localhost:3000/players">/players</a></td><td><button className="btn btn-primary" id="playersBtn">Get</button></td>
                </tr>
            </table>
            <hr />
            <p>JSON Response for route:</p>
            <br />
            <textarea id="JSONTextArea" className="wide-textarea"></textarea>
        </div>
    );
};

export default GetRoutes;