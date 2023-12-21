import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResultsByTeam: React.FC = () => {
  const [teamResults, setTeamResults] = useState<any[]>([]);
  const { teamId } = useParams();
  const { teamName } = useParams(); // Get the team ID and name from the URL

  useEffect(() => {
    // Fetch the team-specific results (update the URL as needed)
    axios
      .get(`http://localhost:3000/results/${teamId}/`)
      .then((response) => {
        setTeamResults(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [teamId]);

  return (
    <div>
      <h1>
        <img src={`/icons/${teamId}.png`} width="40px" alt={teamName} />{" "}
        {teamName} Results
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Stage</th>
            <th>Team</th>
            <th>Score</th>
            <th>Team</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {teamResults.map((result, index) => (
            <tr key={index}>
              <td>{result.date}</td>
              <td>{result.stage}</td>
              <td>
                <img
                  src={`/icons/${result.team1_id}.png`}
                  width="20px"
                  alt={result.team1_name}
                />
                {result.team1_name}
              </td>
              <td>
                {result.team1_score}-{result.team2_score}
              </td>
              <td>
                <img
                  src={`/icons/${result.team2_id}.png`}
                  width="20px"
                  alt={result.team2_name}
                />
                {result.team2_name}
              </td>
              <td>{result.venue_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <a href="/results">{"<<Results"}</a>
    </div>
  );
};

export default ResultsByTeam;
