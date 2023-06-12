let userClickedPattern = [];
let gamePattern = [];

const buttonColours = ['red', 'blue', 'green', 'yellow'];

const randomChosenColour = buttonColours[nextSequence()];

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    return randomNumber;
}

gamePattern.push(randomChosenColour);

$(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

switch (randomChosenColour) {
    case 'red':
        const red = new Audio('./sounds/red.mp3');
        red.play();
        break;
    case 'blue':
        const blue = new Audio('./sounds/blue.mp3');
        blue.play();
        break;
    case 'green':
        const green = new Audio('./sounds/green.mp3');
        green.play();
        break;
    case 'yellow':
        const yellow = new Audio('./sounds/yellow.mp3');
        yellow.play();
        break;
    default:

        break;
}

$('.btn').on('click', function() {
    const userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})


