document.addEventListener("DOMContentLoaded", function() {
    const quizForm = document.getElementById('quizForm');
    const quizResult = document.getElementById('quizResult');

    showFireworks();
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const selectedAnswer = document.querySelector('input[name="answer"]:checked');

        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;

            if (userAnswer === 'paris') {
                quizResult.textContent = 'Correct! Paris is the capital of France.';
            } else {
                quizResult.textContent = 'Incorrect. Please try again!';
            }
        } else {
            quizResult.textContent = 'Please select an answer.';
        }
    });

    function animateWrongAnswer() {
        console.log("Animating wrong answer");
        const options = document.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.classList.add('wrong');
            setTimeout(() => {
                option.classList.remove('wrong');
            }, 500); // Adjust the duration of the animation
        });

        submitButton.classList.add('wrong');
        setTimeout(() => {
            submitButton.classList.remove('wrong');
        }, 500); // Adjust the duration of the animation
    }

    function showParticles() {
        console.log("Showing particles for correct answer");

        particlesJS('particles-js', {
            particles: {
                number: { value: 50 },
                color: { value: '#4CAF50' },
                shape: { type: 'circle' },
                opacity: { value: 0.5 },
                size: { value: 3 },
                move: { enable: true, speed: 2 }
            },
            interactivity: { events: { onhover: { enable: true, mode: 'repulse' } } }
        });
    }
    function showFireworks() {
    
        particlesJS('particles-js', {
            particles: {
                number: { value: 3 }, // Number of particles in the burst
                color: { value: ['#FFD700', '#FF6347', '#00FFFF', '#FF69B4', '#7FFF00'] }, // Random colors
                shape: { type: 'circle' },
                opacity: { value: 0.8 },
                size: { value: 75 },
                move: {
                    enable: true,
                    speed: 5,
                    direction: 'top',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    gravity: { enable: false }
                },
            }
        });
    }
});
