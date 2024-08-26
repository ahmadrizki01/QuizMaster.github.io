const quizData = [
    {
        question: "Negara mana yang memenangkan Piala Dunia FIFA pada tahun 2018?",
        options: ["Brasil", "Jerman", "Prancis", "Argentina"],
        correct: 2,
        explanation: "Prancis memenangkan Piala Dunia FIFA 2018, mengalahkan Kroasia 4-2 dalam pertandingan final yang diadakan di Moskow, Rusia."
    },
    {
        question: "Dalam olahraga apa Anda akan melakukan 'slam dunk'?",
        options: ["Bola Voli", "Basket", "Tenis", "Sepak Bola"],
        correct: 1,
        explanation: "'Slam dunk' adalah gerakan mencetak poin yang kuat dalam bola basket di mana pemain melompat tinggi dan dengan kuat memasukkan bola ke dalam ring dengan tangan di atas rim."
    },
    {
        question: "Berapa banyak pemain dalam tim hoki es standar selama permainan berlangsung?",
        options: ["5", "6", "7", "8"],
        correct: 1,
        explanation: "Tim hoki es standar memiliki 6 pemain di atas es selama permainan: tiga penyerang, dua bek, dan satu penjaga gawang."
    },
    {
        question: "Petenis mana yang memenangkan gelar Grand Slam tunggal terbanyak di Era Terbuka (hingga 2023)?",
        options: ["Roger Federer", "Serena Williams", "Rafael Nadal", "Novak Djokovic"],
        correct: 3,
        explanation: "Hingga 2023, Novak Djokovic memegang rekor gelar Grand Slam tunggal terbanyak di Era Terbuka dengan 24 gelar."
    },
    {
        question: "Dalam olahraga Olimpiade mana Anda akan melakukan 'Fosbury Flop'?",
        options: ["Menyelam", "Senam", "Lompat Tinggi", "Lompat Jauh"],
        correct: 2,
        explanation: "'Fosbury Flop' adalah teknik yang digunakan dalam lompat tinggi di mana atlet melewati mistar dengan posisi punggung ke bawah, yang dipopulerkan oleh Dick Fosbury di Olimpiade 1968."
    },
    {
        question: "Berapa jarak perlombaan maraton penuh dalam kilometer?",
        options: ["21,1 km", "42,2 km", "50 km", "100 km"],
        correct: 1,
        explanation: "Perlombaan maraton penuh adalah sepanjang 42,2 kilometer atau 26,2 mil."
    },
    {
        question: "Negara mana yang memenangkan medali emas Olimpiade terbanyak dalam sejarah Olimpiade Musim Panas?",
        options: ["Uni Soviet", "China", "Amerika Serikat", "Jerman"],
        correct: 2,
        explanation: "Amerika Serikat memenangkan medali emas Olimpiade terbanyak dalam sejarah Olimpiade Musim Panas, dengan lebih dari 1.000 medali emas hingga tahun 2021."
    },
    {
        question: "Dalam kriket, apa kepanjangan dari 'LBW'?",
        options: ["Long Ball Wide", "Leg Before Wicket", "Last Batsman Walking", "Loose Bowling Warning"],
        correct: 1,
        explanation: "Dalam kriket, 'LBW' adalah singkatan dari 'Leg Before Wicket'. Ini adalah cara untuk menyingkirkan seorang pemukul jika bola akan mengenai stumps tetapi dicegah oleh bagian tubuh pemukul kecuali tangan yang memegang tongkat."
    },
    {
        question: "Petinju terkenal mana yang dikenal sebagai 'The Greatest' dan 'The Louisville Lip'?",
        options: ["Mike Tyson", "Floyd Mayweather", "Muhammad Ali", "George Foreman"],
        correct: 2,
        explanation: "Muhammad Ali, lahir dengan nama Cassius Clay, dikenal sebagai 'The Greatest' dan 'The Louisville Lip' karena keterampilan tinjunya dan kepribadiannya yang vokal."
    },
    {
        question: "Pada tahun berapa wanita pertama kali diizinkan untuk berkompetisi dalam Olimpiade modern?",
        options: ["1900", "1920", "1936", "1952"],
        correct: 0,
        explanation: "Wanita pertama kali diizinkan berkompetisi dalam Olimpiade modern pada tahun 1900 di Paris, meskipun dalam jumlah yang sangat terbatas dan acara yang jauh lebih sedikit dibandingkan pria."
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