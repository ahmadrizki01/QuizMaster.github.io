const quizData = [
    {
        question: "Berapakah hasil dari 3^4 - 2^5?",
        options: ["17", "41", "81", "1"],
        correct: 1,
        explanation: "3^4 = 81 dan 2^5 = 32. Jadi, 81 - 32 = 49."
    },
    {
        question: "Selesaikan untuk x: 2x + 5 = 13",
        options: ["3", "4", "5", "6"],
        correct: 1,
        explanation: "Mengurangi 5 dari kedua sisi: 2x = 8. Membagi kedua sisi dengan 2: x = 4."
    },
    {
        question: "Berapakah akar kuadrat dari 169?",
        options: ["11", "12", "13", "14"],
        correct: 2,
        explanation: "13 * 13 = 169, jadi akar kuadrat dari 169 adalah 13."
    },
    {
        question: "Jika a = 3 dan b = 4, berapakah nilai a^2 + b^2?",
        options: ["25", "49", "7", "5"],
        correct: 0,
        explanation: "a^2 = 3^2 = 9, b^2 = 4^2 = 16. Jadi, a^2 + b^2 = 9 + 16 = 25."
    },
    {
        question: "Berapakah angka berikutnya dalam urutan: 2, 6, 12, 20, ...",
        options: ["30", "28", "32", "26"],
        correct: 0,
        explanation: "Selisih antara setiap angka meningkat sebesar 2. Polanya adalah +4, +6, +8, jadi berikutnya adalah +10, sehingga menjadi 30."
    },
    {
        question: "Berapakah 15% dari 80?",
        options: ["10", "12", "15", "18"],
        correct: 1,
        explanation: "15% = 15/100 = 0.15. Jadi, 0.15 * 80 = 12."
    },
    {
        question: "Jika x + y = 10 dan x - y = 4, berapakah x?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explanation: "Menambahkan persamaan: 2x = 14. Membagi dengan 2: x = 7."
    },
    {
        question: "Berapakah luas segitiga dengan alas 6 cm dan tinggi 8 cm?",
        options: ["24 cm²", "48 cm²", "12 cm²", "36 cm²"],
        correct: 0,
        explanation: "Luas segitiga adalah (alas * tinggi) / 2. Jadi, (6 * 8) / 2 = 24 cm²."
    },
    {
        question: "Sederhanakan: (3x² + 6x) ÷ 3x",
        options: ["x + 2", "x + 3", "3x + 2", "x + 6"],
        correct: 0,
        explanation: "Mengeluarkan faktor 3x dari pembilang: 3x(x + 2) ÷ 3x. 3x dibatalkan, sehingga tersisa x + 2."
    },
    {
        question: "Berapakah peluang mendapatkan jumlah 7 dengan dua dadu?",
        options: ["1/6", "1/8", "5/36", "1/12"],
        correct: 2,
        explanation: "Ada 6 cara untuk mendapatkan angka 7 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) dari 36 kemungkinan. Jadi, 6/36 = 5/36."
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