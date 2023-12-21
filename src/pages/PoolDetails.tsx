import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface TeamsPool {
  id: number;
  name: string;
  pool: string;
}

const PoolDetails: React.FC = () => {
  const [teams, setTeams] = useState<TeamsPool[]>([]);
  const { poolId } = useParams<{ poolId: string }>();

  useEffect(() => {
    axios
      .get<TeamsPool[]>("http://localhost:3000/teamPools")
      .then((response) => {
        const filteredTeams = response.data.filter(
          (team) => team.pool === poolId
        );
        setTeams(filteredTeams);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [poolId]);

  return (
    <div>
      <h1>Pool {poolId} Teams</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Pool</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.id}</td>
              <td>{team.name}</td>
              <td>{team.pool}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <a href="/teams">{"<<Teams"}</a>
    </div>
  );
};

export default PoolDetails;
