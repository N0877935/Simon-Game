let userClickedPattern = [];
let gamePattern = [];

const buttonColours = ['red', 'blue', 'green', 'yellow'];

const randomChosenColour = buttonColours[nextSequence()];


$('.btn').on('click', function() {
    const userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
})


function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

}


