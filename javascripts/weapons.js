
var Gauntlet = Gauntlet || {};
Gauntlet.Arsenal = {};



Gauntlet.Arsenal.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

Gauntlet.Arsenal.Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Gauntlet.Arsenal.Dagger.prototype = new Gauntlet.Arsenal.Weapon();

Gauntlet.Arsenal.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
Gauntlet.Arsenal.BroadSword.prototype = new Gauntlet.Arsenal.Weapon();

Gauntlet.Arsenal.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
Gauntlet.Arsenal.WarAxe.prototype = new Gauntlet.Arsenal.Weapon();
