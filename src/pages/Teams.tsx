import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
                {/* ... table headers ... */}
                <tbody>
                    {teams.map((team) => (
                        <tr key={team.id}>
                            <td><img src={`/icons/${team.id}.png`} width="20px" alt={team.name} /></td>
                            <td>{team.name}</td>
                            <td>
                                <Link to={`/pool/${team.pool}`}>{team.pool}</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Teams;
