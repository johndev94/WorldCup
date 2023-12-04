import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';


interface TeamsPool {
    id: number;
    name: string;
    pool: string;
}

const Teams: React.FC = () => {
    const [teams, setTeams] = useState<TeamsPool[]>([]);

    useEffect(() => {
        axios.get<TeamsPool[]>('http://localhost:3000/teamPools')
            .then((response) => {
                console.log(response.data);
                setTeams(response.data);
            })
            //catches errors
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Teams</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Pool</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={team.id}> {/* Unique id for row*/}
                            <td><img src={`/icons/${team.id}.png`} width="20px"></img></td>
                            <td>{team.name}</td>
                            <td>{team.pool}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Teams;
