<h1>Magical Arena Game<h1>

This is a simple game simulation of a Magical Arena where two players battle against each other in a turn-based match. Each player has three key attributes: health, strength, and attack. Players take turns attacking each other until one of the players' health reaches 0. The game simulates the attack and defense mechanics based on random dice rolls, and the match ends when a player's health drops to 0.

Features:

Player Attributes: Each player has health, strength, and attack.
Dice Rolls: Both players roll a dice on each turn to determine the damage dealt and defended.
Turn-Based System: The player with lower health attacks first.
Match Outcome: The game ends when a player's health reaches 0.

Problem Statement:

Players attack each other using dice rolls, and their attack damage is based on their attack attribute multiplied by the roll of the dice.
The defender's damage is determined by their strength attribute multiplied by the defending dice roll.
If the attacking player's damage exceeds the defending player's defense, the excess is subtracted from the defender’s health.
The game ends when one player's health reaches 0.

Installation and Setup:
To run this game, follow these steps:


Prerequisites:

Node.js: Ensure that Node.js is installed on your system. You can check if Node.js is installed by running the following command:

node -v

If Node.js is not installed, you can download and install.


Install Mocha (for testing): Mocha is used for running the unit tests. Install Mocha as a development dependency by running the following command:

npm install mocha --save-dev

Running the Game:

Clone the repository (or download the source code if given as a zip).

Install Dependencies (if necessary): If you're running the code for the first time and dependencies are not yet installed, run the following command:

npm install


Run the Game: To start the game simulation, run:

node index.js

This will start the game between two players and display the progress of the match in the console.

Running Tests:
To ensure that the implementation works correctly, you can run the unit tests.

Run Tests: Run the following command to execute the unit tests using Mocha:

npx mocha test.js
The tests will check the functionality of the Player and Arena classes and ensure that the game logic is working as expected.

Code Structure:

Player.js: Contains the Player class, which manages the player's attributes, dice rolling, and taking damage.
Arena.js: Contains the Arena class, which manages the match logic, including turn order and damage calculation.
index.js: The entry point that initializes players, creates an arena, and starts the match.
test.js: Contains unit tests for the Player and Arena classes using Mocha.

Classes and Methods:

1. Player Class:
Attributes:
name: The name of the player.
health: The health points of the player.
strength: The strength attribute of the player, used for defense.
attack: The attack attribute of the player, used for attacking.
Methods:
isAlive(): Checks if the player is still alive (i.e., health > 0).
rollDice(): Rolls a 6-sided die (random number between 1 and 6).
takeDamage(damage): Reduces the player's health by the specified amount of damage.
attackOpponent(opponent): Attacks the opponent and reduces their health based on the damage calculation.

2. Arena Class:
Attributes:
player1: The first player in the match.
player2: The second player in the match.
Methods:
decideTurnOrder(): Decides the attack order based on the players' health (the player with the lower health attacks first).
startMatch(): Starts the match, managing turns between the players.
playTurn(attacker, defender): Plays a single turn of the match by invoking the attackOpponent() method of the attacker.

Example:
Assuming we have the following two players:

Player A: 50 health, 5 strength, 10 attack.
Player B: 100 health, 10 strength, 5 attack.

Match Simulation:
Player A attacks first (since they have lower health), and rolls the attacking die (e.g., 5). Player B defends and rolls their own die (e.g., 2).
The damage dealt by Player A is calculated as:
Damage = Attack * Attack Die = 10 * 5 = 50 The defense value for Player B is:
Defense = Strength * Defense Die = 10 * 2 = 20 Player B's health is reduced by the excess damage:
Remaining Health = 100 - (50 - 20) = 70
The match continues in this way until one player's health reaches 0.
