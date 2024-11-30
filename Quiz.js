import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";

const socket = io("http://localhost:5000");

function Quiz() {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([]);
  const [teamName, setTeamName] = useState("Team 1");
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("newQuestion", (data) => {
      setQuestion(data.question);
      setChoices(data.choices);
    });

    socket.on("quizEnd", (teamScores) => {
      navigate("/results", { state: { teamScores } });
    });

    socket.emit("startQuiz");

    return () => {
      socket.disconnect();
    };
  }, []);

  const submitAnswer = (answer) => {
    socket.emit("submitAnswer", { team: teamName, answer });
  };

  return (
    <div>
      <h2>{question}</h2>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => submitAnswer(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
}

export default Quiz;