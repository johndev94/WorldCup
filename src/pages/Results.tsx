import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Result {
  date: string;
  time: string;
  stage: string;
  team1_id: number;
  team2_id: number;
  team1_name: string;
  team2_name: string;
  venue_name: string;
  team1_score: number;
  team2_score: number;
}

const Results: React.FC = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [stages, setStages] = useState<string[]>([]);
  const [selectedStage, setSelectedStage] = useState<string>("");

  useEffect(() => {
    axios
      .get<Result[]>("http://localhost:3000/results")
      .then((response) => {
        setResults(response.data);

        const uniqueStages = Array.from(
          new Set(response.data.map((r) => r.stage))
        );
        setStages(uniqueStages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleStageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStage(event.target.value);
  };

  const filteredResults = selectedStage
    ? results.filter((result) => result.stage === selectedStage)
    : results;

  return (
    <div>
      <h1>Results</h1>
      <select value={selectedStage} onChange={handleStageChange}>
        <option value="">All Stages</option>
        {stages.map((stage) => (
          <option key={stage} value={stage}>
            {stage}
          </option>
        ))}
      </select>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Stage</th>
            <th>Team</th>
            <th></th>
            <th>Team</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {filteredResults.map((result, index) => (
            <tr key={index}>
              <td>{result.date}</td>
              <td>{result.stage}</td>
              <td>
                <Link
                  to={`/resultsByTeam/${result.team1_id}/${result.team1_name}`}
                >
                  <img
                    src={`/icons/${result.team1_id}.png`}
                    width="20px"
                    alt={result.team1_name}
                  />
                  {result.team1_name}
                </Link>
              </td>
              <td>
                {result.team1_score}-{result.team2_score}
              </td>
              <td>
                <Link
                  to={`/resultsByTeam/${result.team2_id}/${result.team1_name}`}
                >
                  <img
                    src={`/icons/${result.team2_id}.png`}
                    width="20px"
                    alt={result.team2_name}
                  />
                  {result.team2_name}
                </Link>
              </td>
              <td>{result.venue_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
