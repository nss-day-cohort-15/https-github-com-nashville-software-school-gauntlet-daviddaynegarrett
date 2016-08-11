/*
  Test code to generate a spell
 */
//var spell = new gauntlet.SpellBook.Sphere();
//console.log("spell: ", spell.toString());

var Gauntlet = (function(gauntlet) {

  //create enemy (will need to make random)
  var orc = new gauntlet.Combatants.Orc();
  orc.setClass(orc);
  orc.setWeapon(orc);
  console.log(orc.toString());

  console.log(orc);

  //create player
  var player = new gauntlet.Combatants.Human();

  $(document).ready(function() {
    //get selected name and add to player
    $("#select-name").on('click', () => player.playerName = $('#player-name').val());

    // get selected class and add to player
    $('#class-card').on('click', evt => player.setClass(evt.target.innerHTML));

    //get selected weapon and add to player
    $('#weapon-card').on('click', function(evt){
       player.setWeapon(evt.target.innerHTML)
       console.log(player);
     });

    /*
      Show the initial view that accepts player name
     */
    $("#player-setup").show();

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
