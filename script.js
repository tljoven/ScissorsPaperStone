//user inputs 'scissors', 'paper', or 'stone' as string
//When user submits, the computer generates a scissors, paper or stone randomly
//Objective: compare user input and computer generated input to return to the user if they win or lose or if its a draw
//Rules of the game: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
//S, C and P, stands for scissors, paper and stone respectively.

//function to call computer results for the game
let computerChoice = function () {
  //place SCP in the array
  let array = ["paper", "scissors", "stone"];
  //Generate a random number to represent S,C or P via array indexing.
  //the index of the array 0,1,2 will be randomly generated
  let number = Math.round(Math.random() * 2);
  console.log(number);
  //assign the computer results based on the randomly generated array index and calling the element in the array.
  let computer = array[number];
  //return computer randomly generated results
  return computer;
};

var main = function (input) {
  //create object instances to store results for SCP cases
  let paper = {
    paper: "draw",
    stone: "win",
    scissors: "lose",
  };

  let stone = {
    paper: "lose",
    stone: "draw",
    scissors: "win",
  };

  let scissors = {
    paper: "win",
    stone: "lose",
    scissors: "draw",
  };

  //call the computer results
  let computerResults = computerChoice();

  //Default output to user
  var myOutputValue = `You have either typed an invalid option or have forgotten to type an input. Please type in either scissors, paper or stone.`;

  //compare computer results and user input by calling the object that matches the input and then calling the computer results as the object property to get the property value AKA the results stored
  if (input == "paper") {
    let results = paper[computerResults];
    myOutputValue = `You have input ${input}. The computer choice is ${computerResults}. Game results: ${results}.`;
    //console.log(results);
  }

  if (input == "stone") {
    let results = stone[computerResults];
    myOutputValue = `You have input ${input}. The computer choice is ${computerResults}. Game results: ${results}.`;
    //console.log(results);
  }

  if (input == "scissors") {
    let results = scissors[computerResults];
    myOutputValue = `You have input ${input}. The computer choice is ${computerResults}. Game results: ${results}.`;
    //console.log(results);
  }

  //return the results to the user
  return myOutputValue;
};

//-----------------------------------------------------------------------------------------------------------------------
//Project part 2: Reversed SCP
//for the reverse game, create 3 new objects storing the reversed results of SCP
//create 3 more if loops to call the object and object property based on input and computer results
//edit default output message to include reversed options
//IM SORRY YQ LAZY TO TYPE OUT.
