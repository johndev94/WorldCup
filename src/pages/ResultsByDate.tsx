import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { addDays, format } from "date-fns"; // Make sure to install date-fns

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
  const [currentDate, setCurrentDate] = useState<Date>(
    new Date("2023-09-09T00:00:00.000Z")
  );

  useEffect(() => {
    axios
      .get<Result[]>(
        `http://localhost:3000/resultsByDate/${format(currentDate, "yyyy-MM-dd" )}/` )
      .then((response) => {
        setResults(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentDate]);

  const handlePrevDay = () => {
    setCurrentDate((current) => addDays(current, -1));
  };

  const handleNextDay = () => {
    setCurrentDate((current) => addDays(current, 1));
  };

  const filteredResults = results.filter(
    (result) => result.date === format(currentDate, "yyyy-MM-dd")
  );

  return (
    <div>
      <h1>Results by Date</h1>

      <div>
        <button onClick={handlePrevDay}>{"<"}</button>
        <span>{format(currentDate, "yyyy-MM-dd")}</span>
        <button onClick={handleNextDay}>{">"}</button>
      </div>

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
          {results.map((result, index) => (
            <tr key={index}>
              <td>{format(result.date, "yyyy-MM-dd")}</td>
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
    </div>
  );
};

export default Results;
