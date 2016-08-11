
var Gauntlet = (function(gauntlet){


  gauntlet.Combatants.ImposterSyndorome = function() {
  this.health = this.health + 20;
  this.species = "ImposterSyndorome";
  this.allowedClasses = ["StartupCeo"];

  Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();

  }


Gauntlet.Combatants.ImposterSyndorome.prototype = new Gauntlet.Combatants.Monster();

  return gauntlet;


})(Gauntlet || {})
