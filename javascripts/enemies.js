
var Gauntlet = (function(gauntlet){


  gauntlet.Combatants.ImposterSyndrome = function() {
  this.health = this.health + 20;
  this.species = "ImposterSyndorome";
  this.allowedClasses = ["StartupCeo", "JavaScriptDeveloper", "PythonDeveloper"];
  this.allowedWeapons = ["Atom","Vim", "Sublime", "Intern", "RulesAndRegulations", "Nagging"];

  }


Gauntlet.Combatants.ImposterSyndrome.prototype = new Gauntlet.Combatants.Monster();

  return gauntlet;


})(Gauntlet || {})
