import React from "react";
import { useLocation } from "react-router-dom";

function Results() {
  const { state } = useLocation();
  const { teamScores } = state;

  return (
    <div>
      <h1>퀴즈 결과</h1>
      <ul>
        {Object.entries(teamScores).map(([team, score], index) => (
          <li key={index}>
            {team}: {score}점
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;