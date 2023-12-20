import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Player {
  tId: number;
  pId: number;
  pname: string;
  tname: string;
}

const Players: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/playersTeams')
      .then(response => {
        console.log(response.data);
        setPlayers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Players</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Player</th>
            <th>Team</th>
            <th>Info *</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.pname}>
              <td><img src={`/icons/${player.tId}.png`} width="20px" alt={player.tname} /></td>
              <td>{player.pname}</td>
              <td>{player.tname}</td>
              <td><a href={`https://www.rugbyworldcup.com/2023/teams/${player.tname}/player/${player.pId}`}>Info...</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Players;
