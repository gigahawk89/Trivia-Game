var correctAnswers = $('[name="optionst"]').attr('checked', true);
console.log (correctAnswers)
var incorrectAnswers = $('[name="optionsf"]').attr('checked',false);
console.log (incorrectAnswers)
var resetGame = function() {
    var questionsContainer = $('.questions')
    $("[name='options']").val("")
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            // call function timeUp
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};

