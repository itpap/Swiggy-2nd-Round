class Arena {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
  
    // Decide turn order: player with lower health attacks first
    decideTurnOrder() {
      return this.player1.health < this.player2.health
        ? [this.player1, this.player2]
        : [this.player2, this.player1];
    }
  
    // Start the match between two players
    startMatch() {
      let [attacker, defender] = this.decideTurnOrder();
  
      while (this.player1.isAlive() && this.player2.isAlive()) {
        this.playTurn(attacker, defender);
        [attacker, defender] = [defender, attacker]; // Switch turns
      }
  
      const winner = this.player1.isAlive() ? this.player1 : this.player2;
      console.log(`${winner.name} wins the match!`);
    }
  
    // Play one turn of the match
    playTurn(attacker, defender) {
      attacker.attackOpponent(defender);
    }
  }
  
  module.exports = Arena;
  