import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [teamName, setTeamName] = useState("");

  return (
    <div>
      <h1>Don't Gamble!!</h1>
      <p>도박 예방 퀴즈에 도전하세요!</p>
      <input 
        type="text" 
        placeholder="팀 이름을 입력하세요" 
        value={teamName} 
        onChange={(e) => setTeamName(e.target.value)} 
      />
      <Link to="/quiz">
        <button>퀴즈 시작</button>
      </Link>
    </div>
  );
}

export default Home;