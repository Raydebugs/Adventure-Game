/*
    Adventure Game
    This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/
const readline = require("readline-sync");

// display game title
console.log("Welcome to the Adventure Game!");

// Add a wellcome message
console.log("Get ready for an exciting journey!");

//Creating Player 
let playerName = "";

//Get Player Name using readline-sync
playerName = readline.question("Enter your name: ");

//Create a wellcome message with player name
console.log("wellcome " + playerName + " to the Adventure Game!");

//starting stats and inventory
console.log("Starting gold: 100");