class Player {
    constructor(name, health, strength, attack) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.attack = attack;
    }
  
    // Check if player is alive
    isAlive() {
      return this.health > 0;
    }
  
    // Roll a 6-sided die (1-6)
    rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    }
  
    // Calculate and apply damage to the player
    takeDamage(damage) {
      const effectiveDamage = Math.max(0, damage);
      this.health -= effectiveDamage;
      this.health = Math.max(0, this.health); // Prevent health from going below 0
    }
  
    // Attack the opponent and calculate damage
    attackOpponent(opponent) {
      const attackRoll = this.rollDice();
      const defenseRoll = opponent.rollDice();
  
      const attackDamage = this.attack * attackRoll;
      const defenseValue = opponent.strength * defenseRoll;
  
      const damage = Math.max(0, attackDamage - defenseValue);
      opponent.takeDamage(damage);
  
      console.log(`${this.name} attacks (roll: ${attackRoll}) for ${attackDamage} damage.`);
      console.log(`${opponent.name} defends (roll: ${defenseRoll}) for ${defenseValue} defense.`);
      console.log(`${opponent.name}'s health is now: ${opponent.health}`);
    }
  }
  
  module.exports = Player;
  