const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    question.addEventListener('click', function() {
        question.classList.toggle('active');
        const answer = question.nextElementSibling.querySelector('.answer');
        if (answer) {
            answer.classList.toggle('hidden');
        }
    });
});