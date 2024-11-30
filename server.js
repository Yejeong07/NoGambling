const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",  // React 앱의 URL
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

const teamScores = {}; // 팀 점수 저장
let currentQuestionIndex = 0;
const questions = [
  {
    question: "도박의 정의는 무엇인가요?",
    choices: ["운에 기반한 돈이나 물건의 내기", "게임의 일종", "가족 활동", "스포츠 이벤트 참여"],
    answer: "운에 기반한 돈이나 물건의 내기",
  },
  {
    question: "도박 중독의 주요 증상은 무엇인가요?",
    choices: ["통제력 상실", "운동 능력 향상", "기억력 강화", "휴식"],
    answer: "통제력 상실",
  },
  // 추가 문제들을 여기에 더할 수 있습니다.
];

io.on("connection", (socket) => {
  console.log(`사용자 연결됨: ${socket.id}`);

  // 퀴즈 시작 요청을 받으면 첫 번째 문제 전송
  socket.on("startQuiz", () => {
    currentQuestionIndex = 0;
    io.emit("newQuestion", questions[currentQuestionIndex]);
  });

  // 정답 제출 받기
  socket.on("submitAnswer", ({ team, answer }) => {
    const isCorrect = answer === questions[currentQuestionIndex].answer;

    if (isCorrect) {
      if (!teamScores[team]) teamScores[team] = 0;
      teamScores[team] += 10; // 점수 추가
    }

    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
      io.emit("newQuestion", questions[currentQuestionIndex]);
    } else {
      io.emit("quizEnd", teamScores);
    }
  });

  // 연결 해제
  socket.on("disconnect", () => {
    console.log(`사용자 연결 해제: ${socket.id}`);
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});