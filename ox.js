const correctSound = new Audio("https://www.higherlowerkorea.com/sounds/yes.mp3");
const wrongSound = new Audio("https://www.higherlowerkorea.com/sounds/no.mp3");

const questions = [
    { text: "대한민국의 수도는 어디인가?", options: ["서울", "부산"], correct: "서울",
        background:['https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/19197793/pexels-photo-19197793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
    },
    { text: "고대 로마에서 사용된 고문 도구는?", options: ["장미가시", "염소"], correct: "염소",
        background:['https://images.pexels.com/photos/15239/flower-roses-red-roses-bloom.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/144240/goat-lamb-little-grass-144240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']
    },
    { text: "스위스에서 밤 10시 이후에 불법인 것은? ", options: ["변기 물 내리기", "색소폰 불기"], correct: "변기 물 내리기",
        background:['https://images.pexels.com/photos/7545637/pexels-photo-7545637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/1049690/pexels-photo-1049690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
     }
];

let QuestionNumber = 0;

function loadQuestion() {
  document.getElementById("question").innerText = questions[QuestionNumber].text;
  document.querySelector(".co").innerText = questions[QuestionNumber].options[0];
  document.querySelector(".cf").innerText = questions[QuestionNumber].options[1];
  
  // img1 배경 변경
  document.querySelector(".img1").style.background = `
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) 50% 50% / auto 100% no-repeat, 
    url(${questions[QuestionNumber].background[0]})
  `;
  document.querySelector(".img1").style.backgroundPosition = "50% 50%";

  // img2 배경 변경
  document.querySelector(".img2").style.background = `
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) 50% 50% / auto 100% no-repeat, 
    url(${questions[QuestionNumber].background[1]})
  `;
  document.querySelector(".img2").style.backgroundPosition = "50% 50%";
}

function nextQuestion(userAnswer) {
    const correctAnswer = questions[QuestionNumber].correct;

    if (userAnswer === correctAnswer) {
        correctSound.currentTime = 0;
        correctSound.play();
    } else {
        wrongSound.currentTime = 0;
        wrongSound.play();
    }

    QuestionNumber = (QuestionNumber + 1) % questions.length;
    loadQuestion();
}

window.onload = loadQuestion;
