/*
  Test code to generate a spell
 */
//var spell = new gauntlet.SpellBook.Sphere();
//console.log("spell: ", spell.toString());


var Gauntlet = (function(gauntlet) {

    var player = new gauntlet.Combatants.Human();

    $(document).ready(function() {
      //get selected name and add to player
      $("#select-name").on('click', () => player.playerName = $('#player-name').val());

      // get selected class and add to player
      $('#class-card').on('click', evt => player.generateClass(evt.target.innerHTML.replace(/\W/g,'')));

      //get selected weapon and add to player
      $('#weapon-card').on('click', function(evt){
         player.setWeapon(evt.target.innerHTML.replace(/\W/g,''))
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
            moveAlong = (player.class != null);
            break;
          case 'card--battleground':
            moveAlong = (player.weapon != null);
            break;
        }

        if (moveAlong) {
          $(".card").hide();
          $("." + nextCard).show();
        } else {
          alert('Must make a selection to fight!');
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
