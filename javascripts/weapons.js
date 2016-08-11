//CHANGES DUE TO THEME
//Dagger was changed to Vim
//Broad Sword was changed to Atom
//War Axe was changed to Sublime

var Gauntlet = (function(gauntlet) {

gauntlet.Arsenal = {};



gauntlet.Arsenal.Weapon = function() {
  this.name = "nano";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

gauntlet.Arsenal.Vim = function() {
  this.name = "Vim";
  this.damage = 4;
  this.hands = 1;
};
gauntlet.Arsenal.Vim.prototype = new gauntlet.Arsenal.Weapon();

gauntlet.Arsenal.Atom = function() {
  this.name = "Atom";
  this.damage = 14;
  this.hands = 2;
};
gauntlet.Arsenal.Atom.prototype = new gauntlet.Arsenal.Weapon();

gauntlet.Arsenal.Sublime = function() {
  this.name = "Sublime";
  this.damage = 18;
  this.hands = 2;
};
gauntlet.Arsenal.Sublime.prototype = new gauntlet.Arsenal.Weapon();

//
gauntlet.Arsenal.Intern = function() {
  this.name = "Intern";
  this.damage = 4;
  this.hands = 1;
};
gauntlet.Arsenal.Intern.prototype = new gauntlet.Arsenal.Weapon();

gauntlet.Arsenal.RulesAndRegulations = function() {
  this.name = "Rules and Regulations";
  this.damage = 14;
  this.hands = 2;
};
gauntlet.Arsenal.RulesAndRegulations.prototype = new gauntlet.Arsenal.Weapon();

gauntlet.Arsenal.Nagging = function() {
  this.name = "Nagging";
  this.damage = 18;
  this.hands = 2;
};
gauntlet.Arsenal.Nagging.prototype = new gauntlet.Arsenal.Weapon();

return gauntlet

})(Gauntlet || {});
