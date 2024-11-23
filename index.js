const Player = require('./Player');
const Arena = require('./Arena');

// Create players
const player1 = new Player('Player A', 50, 5, 10);
const player2 = new Player('Player B', 100, 10, 5);

// Create arena and start the match
const arena = new Arena(player1, player2);
arena.startMatch();
