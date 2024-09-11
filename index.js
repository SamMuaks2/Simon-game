const userClickedPattern = [];

const gamePattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    // Generate a random number
    const randomNumber = Math.floor(Math.random() * 4);

        console.log("random number:", randomNumber);

        
        // Use random number to randomly select a colour
        const randomChosenColour = buttonColours[randomNumber];
    
        console.log("Colour:", randomChosenColour);
    
        gamePattern.push(randomChosenColour);
    
        console.log("pattern:", gamePattern);

        // Use the colour as an id to select the button randomly and play its sound
        $("#" + randomChosenColour).effect("pulsate", { times:2 }, 1000);

        playSound(randomChosenColour);
    };


// Detect button clicks
$(document).ready(function() {
    $(".btn").click(function() {
        const userChosenColour = $(this).attr("id");
        console.log("Button clicked:", userChosenColour);

userClickedPattern.push(userChosenColour);
console.log("Pattern:", userClickedPattern);

playSound(userChosenColour);
animatePress(userChosenColour);
    });
});

// Sound function
function playSound(name) {
    var colour = name;
    userChosenColour = name;
        const audio = new Audio("./sounds/" + colour + ".mp3");
        
        audio.play();
}

function animatePress(currentColour) {
    userChosenColour = currentColour;
    $("#" + currentColour).addClass("pressed");
    
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
};