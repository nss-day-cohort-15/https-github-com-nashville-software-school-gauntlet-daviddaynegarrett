var Gauntlet = (function(gauntlet){

  gauntlet.Combatants.Orc = function() {
    this.health = this.health + 20;
    this.species = "Orc";
    //array used to determine classes for enemy
    this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
    //array used to determine weapon for enemy
    this.allowedWeapons = ["Dagger", "BroadSword"];
  };

  Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();

  return gauntlet;

})(Gauntlet || {})
