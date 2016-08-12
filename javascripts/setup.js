var Gauntlet = (function(gauntlet) {
  //create player
  var player = new gauntlet.Combatants.Human();

  //create enemy
  var badGuy = new gauntlet.Combatants.ImposterSyndrome();
  badGuy.setClass(badGuy);
  badGuy.setWeapon(badGuy);
  //set badGuy name for testing

  badGuy.nameImgObj = {
      'Bill Lumbergh': 'boss.jpeg',
      'Nick Petty': 'nick.png',
      'Guil Hernandez': 'guil.png',
      'Andrew Chalkley': 'andrew.png'
  }

  //get player
  gauntlet.getPlayer = function(){
    return player;
  }

  //get badGuy
  gauntlet.getBadGuy = function(){
    return badGuy;
  }

  return gauntlet;

})(Gauntlet || {})
