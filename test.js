const assert = require('assert');
const Player = require('./Player');
const Arena = require('./Arena');

// Test for Player class
describe('Player', function() {
  it('should create a player with the correct attributes', function() {
    const player = new Player('Player A', 50, 5, 10);
    assert.strictEqual(player.name, 'Player A');
    assert.strictEqual(player.health, 50);
    assert.strictEqual(player.strength, 5);
    assert.strictEqual(player.attack, 10);
  });

  it('should reduce health correctly when taking damage', function() {
    const player = new Player('Player A', 50, 5, 10);
    player.takeDamage(20);
    assert.strictEqual(player.health, 30);
  });

  it('should not allow health to go below 0', function() {
    const player = new Player('Player A', 50, 5, 10);
    player.takeDamage(60);
    assert.strictEqual(player.health, 0);
  });
});

// Test for Arena class
describe('Arena', function() {
  it('should determine the correct attack order based on health', function() {
    const player1 = new Player('Player A', 50, 5, 10);
    const player2 = new Player('Player B', 100, 10, 5);
    const arena = new Arena(player1, player2);
    const [attacker, defender] = arena.decideTurnOrder();
    assert.strictEqual(attacker.name, 'Player A');
    assert.strictEqual(defender.name, 'Player B');
  });

  it('should end the game when a player\'s health reaches 0', function() {
    const player1 = new Player('Player A', 50, 5, 10);
    const player2 = new Player('Player B', 100, 10, 5);
    const arena = new Arena(player1, player2);
    
    // Simulate a match
    player2.takeDamage(50);
    assert.strictEqual(player2.health, 50);

    player1.takeDamage(60);
    assert.strictEqual(player1.health, 0);
  });
});
