import React, { useEffect, useState } from "react";
import axios from "axios";

interface Player {
  player_id: number;
  player_name: string;
  team_name: string;
  statValue: number;
  points: number;
  tackles: number;
}

const PlayerStats = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [statType, setStatType] = useState("points");

  function fetchPlayers() {
    const endpoint = statType === "points" ? "/playerPoints" : "/playerTackles";
    axios
      .get(`http://localhost:3000${endpoint}`)
      .then(function (response) {
        const mappedData = response.data.map(function (item: { player_id: any; player_name: any; team_name: any; points: any; tackles: any; }) {
          return {
            player_id: item.player_id,
            player_name: item.player_name,
            team_name: item.team_name,
            points: item.points,
            tackles: item.tackles,
            statValue: statType === "points" ? item.points : item.tackles,
          };
        });
        setPlayers(mappedData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function handleStatTypeChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setStatType(event.target.value);
  }

  useEffect(
    function () {
      fetchPlayers();
    },
    [statType]
  );

  return (
    <div>
      <h1>Player Stats</h1>
      <hr />

      <div>
        Stat:
        <br />
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
          {players.map(function (player, index) {
            return (
              <tr key={player.player_id}>
                <td>{index + 1}</td>
                <td>{player.player_name}</td>
                <td>{player.team_name}</td>
                <td>{player.statValue}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerStats;
