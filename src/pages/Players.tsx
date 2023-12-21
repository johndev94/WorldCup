import React, { useEffect, useState } from "react";
import axios from "axios";

interface Player {
  tId: number;
  pId: number;
  pname: string;
  tname: string;
}

const Players: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [uniqueTeams, setUniqueTeams] = useState<string[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>("");

  useEffect(() => {
    axios
      .get<Player[]>("http://localhost:3000/playersTeams")
      .then((response) => {
        setPlayers(response.data);
        const teamNames: string[] = response.data.map((player) => player.tname);
        const uniqueTeamSet = new Set(teamNames);
        setUniqueTeams(Array.from(uniqueTeamSet));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Players</h1>
      <hr />
      <div>
        Team:
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          <option value="">All Teams</option>
          {uniqueTeams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Player</th>
            <th>Team</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {players
            .filter(
              (player) => selectedTeam === "" || player.tname === selectedTeam
            )
            .map((player) => (
              <tr key={player.pId}>
                <td>
                  <img
                    src={`/icons/${player.tId}.png`}
                    width="20px"
                    alt={player.tname}
                  />
                </td>
                <td>{player.pname}</td>
                <td>{player.tname}</td>
                <td>
                  <a
                    href={`https://www.rugbyworldcup.com/2023/teams/${player.tname}/player/${player.pId}`}
                  >
                    Info...
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Players;
