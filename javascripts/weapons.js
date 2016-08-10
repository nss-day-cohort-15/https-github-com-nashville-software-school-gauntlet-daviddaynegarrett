
var Gauntlet = (function(gauntlet) {
gauntlet.Arsenal = {};



gauntlet.Arsenal.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

gauntlet.Arsenal.Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
gauntlet.Arsenal.Dagger.prototype = new gauntlet.Arsenal.Weapon();

gauntlet.Arsenal.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
gauntlet.Arsenal.BroadSword.prototype = new gauntlet.Arsenal.Weapon();

gauntlet.Arsenal.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
gauntlet.Arsenal.WarAxe.prototype = new gauntlet.Arsenal.Weapon();
return gauntlet
})(Gauntlet || {});
