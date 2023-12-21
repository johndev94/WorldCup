import React, { useEffect, useState } from "react";
import axios from "axios";

interface Player {
  player_id: number;
  player_name: string;
  team_name: string;
  statValue: number;
  points: number;
  tackles: number; // Points or Tackles value
}

const PlayerStats: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [statType, setStatType] = useState<string>("points"); // "points" or "tackles"

  useEffect(() => {
    const endpoint = statType === "points" ? "/playerPoints" : "/playerTackles";
    axios
      .get<Player[]>(`http://localhost:3000${endpoint}`)
      .then((response) => {
        const mappedData = response.data.map((item) => ({
          player_id: item.player_id,
          player_name: item.player_name,
          team_name: item.team_name,
          points: item.points,
          tackles: item.tackles,
          statValue: statType === "points" ? item.points : item.tackles,
        }));
        setPlayers(mappedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [statType]);

  const handleStatTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStatType(event.target.value);
  };

  return (
    <div>
      <h1>Player Stats</h1>
      <hr />

      <div>
        Stat:<br />
        <select
          id="statTypeSelect"
          value={statType}
          onChange={handleStatTypeChange}
        >
          <option value="points">Points</option>
          <option value="tackles">Tackles</option>
        </select>
        <br />
      </div>
      <br />

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Player</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player.player_id}>
              <td>{index + 1}</td>
              <td>{player.player_name}</td>
              <td>{player.team_name}</td>
              <td>{player.statValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerStats;
