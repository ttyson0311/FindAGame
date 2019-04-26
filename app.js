const letterAs = document.querySelectorAll(".a");
const wrongLetters = document.querySelectorAll(".wrong");
const correctNumber = document.querySelector(".correct-number");
const winner = document.querySelector(".winner");
const findLetterA = document.querySelector(".find-letter");
const correctAudio = document.querySelector(".correct-audio");
const incorrectAudio = document.querySelector(".incorrect-audio");
const AllAsFoundAudio = document.querySelector(".Afound-audio");
const twinkleAudio = document.querySelector(".twinkle-audio");
// const playAgain = document.querySelector(".play-again");

const incorrectNumber = document.querySelector(".incorrect-number");

let correctClicked = 0;
let incorrectClicked = 0;

const totalAs = letterAs.length;
//add event listener to each one

letterAs.forEach(letter => {
  letter.addEventListener("click", aFound);

  function aFound() {
    //when clicked add a the pressed class
    letter.classList.add("pressed");

    //when clicked play correct chime sound
    correctAudio.currentTime = 0; //rewind to start
    correctAudio.play();

    //each time the letter a is clicked the clicked constant increases by one
    ++correctClicked;

    //add the clicked number to the site
    correctNumber.innerHTML = correctClicked;
    // getting  the total number of letter a's
    //if the number of a's clicked equals the total number a's add the class visible to winner
    letter.removeEventListener("click", aFound);

    if (correctClicked === totalAs) {
      winner.classList.add("visible");
      AllAsFoundAudio.play();
      twinkleAudio.play();

      //getting the wrong letters and disappear if game is over

      wrongLetters.forEach(wrongLetter => {
        wrongLetter.classList.add("disappear");
      });
    }
  }
});

wrongLetters.forEach(wrongLetter => {
  wrongLetter.addEventListener("click", notFound);
  function notFound() {
    wrongLetter.classList.add("disappear");

    //if wrong letter clicked play audio showing wrong
    incorrectAudio.currentTime = 0; //rewind to start
    incorrectAudio.play();
    //if wrong letter clicked play audio stating find letter a
    findLetterA.currentTime = 0; //rewind to start
    findLetterA.play();
    wrongLetter.removeEventListener("click", notFound);

    //each time the incorrect letter is clicked the incorrect counter increases by one

    ++incorrectClicked;
    incorrectNumber.innerHTML = incorrectClicked;
  }
});

//add you found all the letter a's to the header
//add sound when correct and souond when incorrect
// sound for find letter a

//how to remove the wrong letters//

// Array.from(wrongLetters).forEach(wrongLetter => {
//   wrongLetter.addEventListener("click", function() {
//     wrongLetter.remove();
//   });
// });
