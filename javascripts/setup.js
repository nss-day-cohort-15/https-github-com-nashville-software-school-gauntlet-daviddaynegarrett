var Gauntlet = (function(gauntlet) {
  //create player
  var player = new gauntlet.Combatants.Human();
  var name = '';
  console.log(name)



  //create enemy
  var badGuy = new gauntlet.Combatants.ImposterSyndrome();
  badGuy.setClass(badGuy);
  badGuy.setWeapon(badGuy);
  //set badGuy name for testing

  badGuy.nameImgObj = {
      'Bill Lumbergh': 'bill.png',
      'Nick Petty': 'nick.png',
      'Guil Hernandez': 'guil.png',
      'Andrew Chalkley': 'andrew.png',
      'Hans Gruber': 'hans.png'
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
