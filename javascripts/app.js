/*
  Test code to generate a human player and an orc player
 */




var Gauntlet = (function(gauntlet) {

var player = new gauntlet.Combatants.Human();

function createPlayer(){
   player.playerName = $('#player-name').val();
   player.setWeapon(new gauntlet.Arsenal.BroadSword());
   //player.generateClass();
   console.log('Player on click: ', player.toString());
   return player;
}

/*
  Test code to generate a spell
 */
var spell = new gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());


$(document).ready(function() {
  $('.classCard').on('click', function(evt){
     player.generateClass(evt.target.innerHTML);
     console.log(player);
   });
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  $("#select-name").on('click', createPlayer);
  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});
return gauntlet
})(Gauntlet || {});
