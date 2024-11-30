// script.js

const quizData = [
    {
        question: "대한민국 청소년 중 최근 1년간 도박 경험이 있는 비율은 몇 %로 추정되는가?",
        options: ["약 1%", "약 5%", "약 10%", "약 20%"],
        answer: 2 // 약 10%
    },
    {
        question: "도박에서 '판돈'이란 무엇을 의미하는가?",
        options: ["도박에 참여하는 사람", "도박에 건 돈이나 재화", "도박이 이루어지는 장소", "도박 규칙"],
        answer: 1 // 도박에 건 돈이나 재화
    },
    {
        question: "‘하우스 엣지’란 무엇을 뜻하는가?",
        options: [
            "도박에서 참가자가 항상 이길 확률",
            "도박 게임을 주최하는 쪽의 수익률",
            "도박 규칙을 변경하는 행위",
            "카드 게임에서 사용하는 전략"
        ],
        answer: 1 // 도박 게임을 주최하는 쪽의 수익률
    },
    {
        question: "‘배팅’이란 어떤 행위를 뜻하는가?",
        options: ["승리를 기념하는 행위", "돈이나 물건을 거는 행위", "도박 규칙을 설정하는 행위", "도박 게임을 시작하는 신호"],
        answer: 1 // 돈이나 물건을 거는 행위
    },
    {
        question: "2024년 기준으로 도박 중독으로 형사 입건된 청소년 수는 10년 전과 비교해 몇 배 증가했는가?",
        options: ["약 2배", "약 3배", "약 4배", "약 5.5배"],
        answer: 3 // 약 5.5배
    },
    {
        question: "온라인 도박에 가장 쉽게 노출되는 플랫폼은 무엇인가?",
        options: ["텔레그램과 같은 메신저", "SNS 광고", "학교 내 전단지", "전통적인 오프라인 카지노"],
        answer: 0 // 텔레그램과 같은 메신저
    },
    {
        question: "2024년 경찰에 적발된 청소년 온라인 도박 운영 사례에서 판돈은 약 얼마였는가?",
        options: ["1천만 원", "1억 원", "2억 원", "10억 원"],
        answer: 2 // 약 2억 원
    },
    {
        question: "청소년이 도박을 접하는 주된 이유로 가장 많이 보고된 것은?",
        options: ["돈을 쉽게 벌고 싶어서", "친구의 권유", "부모의 압력", "공부 스트레스 해소"],
        answer: 0 // 돈을 쉽게 벌고 싶어서
    },
    {
        question: "도박 중독으로 인해 빚을 지는 청소년이 감당해야 하는 평균 채무액은?",
        options: ["10만 원 이하", "50만 원", "수백만 원 이상", "천만 원 이상"],
        answer: 2 // 수백만 원 이상
    },
    {
        question: "도박에 빠진 청소년의 가정이 겪는 경제적 문제로 가장 많이 보고된 것은?",
        options: ["부모와의 갈등 증가", "생활비 부족", "형사 처벌", "학비 부족"],
        answer: 1 // 생활비 부족
    },
    {
        question: "도박 중독으로 인해 발생할 수 있는 심리적 문제는?",
        options: ["행복감 증가", "우울증과 불안", "호기심 증가", "스트레스 감소"],
        answer: 1 // 우울증과 불안
    },
    {
        question: "도박 중독자가 겪는 경제적 문제는?",
        options: ["수입 증가", "빚과 재산 손실", "소비 감소", "은퇴 자금 증가"],
        answer: 1 // 빚과 재산 손실
    },
    {
        question: "우리나라에서 합법적으로 허용된 도박은?",
        options: ["불법 온라인 카지노", "복권, 경마, 스포츠 토토", "사설 포커 게임", "외국인 전용 카지노"],
        answer: 1 // 복권, 경마, 스포츠 토토
    },
    {
        question: "청소년이 도박에 참여할 경우 법적으로 어떻게 되는가?",
        options: [
            "전혀 문제가 되지 않는다",
            "가벼운 처벌만 받는다",
            "처벌 대상이 되며 보호처분 또는 형사 입건될 수 있다",
            "부모가 대신 책임진다"
        ],
        answer: 2 // 처벌 대상이 되며 보호처분 또는 형사 입건될 수 있다
    },
    {
        question: "도박 중독을 치료할 수 있는 방법으로 올바른 것은?",
        options: [
            "혼자 극복하려고 노력한다",
            "전문가 상담과 치료 프로그램에 참여한다",
            "더 작은 판돈으로 도박한다",
            "친구와 도박을 한다"
        ],
        answer: 1 // 전문가 상담과 치료 프로그램에 참여한다
    },
    {
        question: "도박 중독으로 이어지는 주요 원인은?",
        options: ["가족의 권유", "초기 승리 경험", "친구와의 대화", "스포츠 관람"],
        answer: 1 // 초기 승리 경험
    },
    {
        question: "청소년이 도박에 쉽게 빠지는 이유는?",
        options: ["법적 보호를 받기 위해", "재미와 빠른 보상에 대한 기대감", "성취감을 얻기 위해", "성인의 권유로 인해"],
        answer: 1 // 재미와 빠른 보상에 대한 기대감
    },
    {
        question: "청소년이 온라인 도박에 쉽게 노출되는 이유는?",
        options: ["정보 접근성 부족", "인터넷과 스마트폰의 보급", "오프라인 도박의 증가", "법적 제한"],
        answer: 1 // 인터넷과 스마트폰의 보급
    },
    {
        question: "청소년이 주로 접하는 온라인 도박의 형태는?",
        options: ["오프라인 카지노", "온라인 스포츠 베팅 및 게임 도박", "친구들과의 내기", "주식 투자"],
        answer: 1 // 온라인 스포츠 베팅 및 게임 도박
    },
    {
        question: "도박 중독은 뇌의 어떤 호르몬 과다 분비와 관련이 있나요?",
        options: ["도파민", "세로토닌", "옥시토신", "엔도르핀"],
        answer: 0 // 도파민
    },
    {
        question: "‘빚을 갚기 위해 도박을 한다’는 심리를 무엇이라고 하나요?",
        options: ["추격 도박(Chasing)", "회복 도박", "확률 도박", "도전 도박"],
        answer: 0 // 추격 도박(Chasing)
    },
    {
        question: "우리나라에서 합법적으로 구매 가능한 도박 형태는 무엇인가요?",
        options: ["복권", "사설 토토", "인터넷 카지노", "불법 스포츠 베팅"],
        answer: 0 // 복권
    },
    {
        question: "청소년 도박 문제를 방치할 경우 생길 수 있는 장기적인 결과는 무엇인가요?",
        options: ["도박 중독", "재산 증가", "사회적 인식 개선", "심리적 안정"],
        answer: 0 // 도박 중독
    },
    {
        question: "우리나라의 도박문제관리센터의 전화번호는?",
        options: ["119", "1336", "1541", "110"],
        answer: 1 // 1336
    },
    {
        question: "판에 한번 내어놓은 패는 물리기 위하여 다시 집어들이지 못함을 뜻하는 용어는?",
        options: ["낙장불입", "올인", "플랍", "리레이즈"],
        answer: 0 // 낙장불입
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const finalScoreElement = document.getElementById("final-score");
const restartButton = document.getElementById("restart-btn");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => checkAnswer(index));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const correctAnswer = quizData[currentQuestionIndex].answer;

    if (selectedIndex === correctAnswer) {
        score++;
    }

    nextButton.disabled = false;
    Array.from(optionsElement.children).forEach((btn, index) => {
        btn.disabled = true;
        if (index === correctAnswer) {
            btn.style.backgroundColor = "#5cb85c";
        } else if (index === selectedIndex) {
            btn.style.backgroundColor = "#d9534f";
        }
    });
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestion();
});

function showScore() {
    document.getElementById("quiz").style.display = "none";
    scoreContainer.style.display = "block";
    finalScoreElement.textContent = `당신의 점수는 ${score} / ${quizData.length}입니다.`;
}

// 초기화
loadQuestion();
nextButton.disabled = true;