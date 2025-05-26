const correctSound = new Audio("https://www.higherlowerkorea.com/sounds/yes.mp3");
const wrongSound = new Audio("https://www.higherlowerkorea.com/sounds/no.mp3");

const questions = [
            { text: "대한민국의 수도는 서울인가?", correct: true },
            { text: "파이썬은 고급언어인가?", correct: true },
            { text: "거짓", correct: false }
        ];

        let currentQuestionIndex = 0;

        function loadQuestion() {
            document.getElementById("question").innerText = questions[currentQuestionIndex].text;
        }

        function nextQuestion(userAnswer) {
            const correctAnswer = questions[currentQuestionIndex].correct;
            
            if (userAnswer === correctAnswer) {
                correctSound.currentTime = 0;
                correctSound.play();
            } else {
                wrongSound.currentTime = 0;
                wrongSound.play();
            }

            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
            loadQuestion();
        }

        window.onload = loadQuestion;
