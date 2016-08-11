/*
  Test code to generate a spell
 */
//var spell = new gauntlet.SpellBook.Sphere();
//console.log("spell: ", spell.toString());

var Gauntlet = (function(gauntlet) {

  //create enemy (will need to make random)
  var badGuy = new gauntlet.Combatants.ImposterSyndrome();
  badGuy.setClass(badGuy);
  badGuy.setWeapon(badGuy);
  //set badGuy name for testing
  badGuy.playerName = 'Andrew Chalkley';
  console.log(badGuy.toString());

  console.log(badGuy);

  //create player
  var player = new gauntlet.Combatants.Human();

  $(document).ready(function() {
    //get selected name and add to player
    $("#select-name").on('click', () => player.playerName = $('#player-name').val());

    // get selected class and add to player
    $('#class-card').on('click', evt => player.setClass(evt.target.innerHTML.replace(/\W/g,'')));

    //get selected weapon and add to player
    $('#weapon-card').on('click', function(evt){
       player.setWeapon(evt.target.innerHTML.replace(/\W/g,''));
       displayPlayers();
       console.log(player);
     });

     $('.attack').on('click', function(){
       $(this).prop('disabled', true);
       $('.nssMode').prop('disabled', true);
       player.attack(badGuy);
       displayPlayers();

         setTimeout(function(){
           badGuy.attack(player);
           displayPlayers();
           $('.attack').prop('disabled', false);
           $('.nssMode').prop('disabled', false);

         },3000);

     });

     $('.nssMode').on('click', function () {
        player.nssMode(badGuy);
        displayPlayers();
     });

     function displayPlayers(){

       player.image = 'leadOfficeSpace.jpg';
       badGuy.image = 'boss.jpeg';

       var domStats = ``;

       [player, badGuy].forEach(function(e){
        domStats += `<div class="col-md-6 player-stats">
                        <img class="m-x-auto combatPicture" src="img/${e.image}" alt="${e}">
                        <div>
                          <div>Name: <span>${e.playerName}</span></div>
                          <div>Health: <span>${e.health}</span></div>
                          <div>Class: <span>${e.class.name}</span></div>
                          <div>Weapon: <span>${e.weapon}</span></div>
                         </div>
                      </div>`;
       });

        $('#all-stats').html(domStats);
     }



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
          swal("Oops!", "You must make a selection to fight!", "error");

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

  gauntlet.getPlayer = function(){
    return player;
  }

  gauntlet.getBadGuy = function(){
    return badGuy;
  }

  return gauntlet

})(Gauntlet || {});
