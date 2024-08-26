const quizData = [
    {
        question: "Pada tahun berapa Christopher Columbus pertama kali mencapai Amerika?",
        options: ["1492", "1507", "1521", "1776"],
        correct: 0,
        explanation: "Christopher Columbus pertama kali mencapai Amerika pada tahun 1492, menandai awal eksplorasi dan kolonisasi Eropa yang berkelanjutan di Amerika."
    },
    {
        question: "Siapa Kaisar pertama Roma?",
        options: ["Julius Caesar", "Augustus", "Nero", "Konstantinus"],
        correct: 1,
        explanation: "Augustus (lahir dengan nama Octavianus) menjadi Kaisar pertama Roma pada tahun 27 SM, mengubah Republik Romawi menjadi Kekaisaran Romawi."
    },
    {
        question: "Keajaiban kuno mana yang terletak di Alexandria, Mesir?",
        options: ["Taman Tergantung", "Kolossus dari Rodos", "Mercusuar Alexandria", "Kuil Artemis"],
        correct: 2,
        explanation: "Mercusuar Alexandria, juga dikenal sebagai Pharos Alexandria, adalah salah satu dari Tujuh Keajaiban Dunia Kuno, dibangun pada abad ke-3 SM."
    },
    {
        question: "Apa penyebab utama Revolusi Prancis?",
        options: ["Invasi asing", "Kegagalan panen", "Ketidaksetaraan sosial", "Konflik agama"],
        correct: 2,
        explanation: "Penyebab utama Revolusi Prancis adalah ketidaksetaraan sosial, dengan sistem kelas yang kaku dan krisis keuangan yang menyebabkan ketidakpuasan luas di kalangan kelas bawah."
    },
    {
        question: "Siapa pemimpin Uni Soviet selama Perang Dunia II?",
        options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nikita Khrushchev"],
        correct: 1,
        explanation: "Joseph Stalin adalah pemimpin Uni Soviet selama Perang Dunia II, memimpin dari pertengahan 1920-an hingga kematiannya pada tahun 1953."
    },
    {
        question: "Pada tahun berapa Tembok Berlin runtuh?",
        options: ["1985", "1989", "1991", "1993"],
        correct: 1,
        explanation: "Tembok Berlin runtuh pada 9 November 1989, menandai momen penting dalam akhir Perang Dingin dan reunifikasi Jerman."
    },
    {
        question: "Siapa wanita pertama yang terbang solo melintasi Samudra Atlantik?",
        options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
        correct: 0,
        explanation: "Amelia Earhart adalah wanita pertama yang terbang solo melintasi Samudra Atlantik, menyelesaikan penerbangan tersebut pada tahun 1932."
    },
    {
        question: "Peradaban mana yang membangun kota kuno Machu Picchu?",
        options: ["Maya", "Aztec", "Inca", "Olmec"],
        correct: 2,
        explanation: "Machu Picchu dibangun oleh peradaban Inca pada abad ke-15 dan terletak di Peru modern."
    },
    {
        question: "Siapa yang menulis 'Manifesto Komunis'?",
        options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Karl Marx dan Friedrich Engels"],
        correct: 3,
        explanation: "'Manifesto Komunis' ditulis oleh Karl Marx dan Friedrich Engels pada tahun 1848, yang menguraikan gagasan dasar komunisme."
    },
    {
        question: "Perjanjian mana yang secara resmi mengakhiri Perang Dunia I?",
        options: ["Perjanjian Versailles", "Perjanjian Tordesillas", "Perjanjian Westphalia", "Perjanjian Brest-Litovsk"],
        correct: 0,
        explanation: "Perjanjian Versailles, yang ditandatangani pada tahun 1919, secara resmi mengakhiri Perang Dunia I dan memberlakukan hukuman berat terhadap Jerman."
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const nextQuizButton = document.getElementById('nextQuiz');
const goHomeButton = document.getElementById('goHome');

function loadQuestion() {
    const question = quizData[currentQuestion];
    let html = `<div class="question">
                    <h2>Pertanyaan ${currentQuestion + 1}</h2>
                    <p>${question.question}</p>
                    <div class="options">`;
    
    for (let i = 0; i < question.options.length; i++) {
        html += `<button onclick="checkAnswer(${i})">${question.options[i]}</button>`;
    }
    
    html += `</div>
             <div class="explanation" id="explanation"></div>
             </div>`;
    
    quizContainer.innerHTML = html;
}

function checkAnswer(answer) {
    const question = quizData[currentQuestion];
    const explanationDiv = document.getElementById('explanation');
    
    if (answer === question.correct) {
        score++;
        explanationDiv.innerHTML = `<strong>Benar!</strong> ${question.explanation}`;
    } else {
        explanationDiv.innerHTML = `<strong>Salah.</strong> Jawaban yang benar adalah "${question.options[question.correct]}". ${question.explanation}`;
    }
    
    explanationDiv.style.display = 'block';
    
    document.querySelectorAll('.options button').forEach(button => {
        button.disabled = true;
    });

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 3000);
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.innerHTML = `<h2>Kuis Selesai!</h2>
                                 <p>Skor Anda: ${score} dari ${quizData.length}</p>`;
    nextQuizButton.style.display = 'block';
    goHomeButton.style.display = 'block';
}

nextQuizButton.addEventListener('click', () => {
    window.location.href = 'math.html'; 
});

goHomeButton.addEventListener('click', () => {
    window.location.href = 'Quizmaster.html'; 
});

loadQuestion();