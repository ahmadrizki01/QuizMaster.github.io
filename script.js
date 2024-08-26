
// index page
const logo = document.getElementById('logo');
const logoText = logo.querySelector('.logo-text');
const letters = logoText.querySelectorAll('span');

logo.addEventListener('mouseenter', () => {
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.05}s`;
    });
});

logo.addEventListener('mouseleave', () => {
    letters.forEach(letter => {
        letter.style.animationDelay = '0s';
    });
});

logo.addEventListener('click', () => {
    const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    logoText.style.color = randomColor;
    logoText.style.setProperty('--underline-color', randomColor);
});

// login page

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');

showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Login submitted');
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Signup submitted');
});

// QuizMaster page
  const loggedInUser = {
    name: "John Doe"
};


document.getElementById('userName').textContent = loggedInUser.name;

function startQuiz(quizType) {
    alert(`Starting ${quizType} quiz.`);
}


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignupLink = document.getElementById('showSignup');

    loginForm.addEventListener('submit', function(event) {
        if (!loginForm.checkValidity()) {
            event.preventDefault(); // Mencegah form disubmit
            alert('Mohon isi semua field yang diperlukan.');
        }
    });

    showSignupLink.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah link berfungsi
        signupForm.style.display = 'block'; // Menampilkan form signup
    });
});

