
var Gauntlet = (function(gauntlet) {

  $(document).ready(function() {

    //local player & badGuy
    var player = Gauntlet.getPlayer();
    var badGuy = Gauntlet.getBadGuy();


    //get selected name and add to player
    $("#select-name").on('click', () => player.playerName = $('#player-name').val());

    // get selected class and add to player
    $('#class-card').on('click', evt => player.setClass(evt.target.innerHTML.replace(/\W/g,'')));

    //get selected weapon and add to player
    $('#weapon-card').on('click', function(evt){
       player.setWeapon(evt.target.innerHTML.replace(/\W/g,''));
       gauntlet.displayPlayers();
     });

     $('.attack').on('click', function(){
       $(this).prop('disabled', true);
       $('.nssMode').prop('disabled', true);
       player.attack(badGuy);
      //  displayPlayers();

       if(badGuy.health >= 0 && player.health >= 0){
         setTimeout(function(){
           badGuy.attack(player);
            jabSoundEffect.play();

          //  displayPlayers();
           $('.attack').prop('disabled', false);
           $('.nssMode').prop('disabled', false);
         },3000);
       }

     });

     // Sound Effects
 var nssSoundEffect = document.createElement('audio');
     nssSoundEffect.setAttribute('src', "/sounds/sfm_mp3_street_fighter_hadouken_sound_effect.mp3");


var jabSoundEffect = document.createElement('audio');
    jabSoundEffect.setAttribute('src', "/sounds/Jab-SoundBible.com-1806727891.mp3")

var MKThemeSoung =

     $('.nssMode').on('click', function () {
        player.nssMode(badGuy);
        // displayPlayers();
        nssSoundEffect.play();
     });

     $('.attack').on('click', function() {
        jabSoundEffect.play();
     })



     var randomProperty = function (obj) {
         var keys = Object.keys(obj)
         var num = keys.length * Math.random() << 0;
         badGuy.playerName = keys[num];
         return obj[keys[num]];
     };

      player.image = 'leadOfficeSpace.jpg';
      badGuy.image = randomProperty(badGuy.nameImgObj);


      var startingHealth = [player.health, badGuy.health];


     gauntlet.displayPlayers = function(){

       var domStats = ``;

       [player, badGuy].forEach(function(e,i){
        domStats += `<div class="col-md-6 player-stats">
                        <img class="m-x-auto combatPicture" src="img/${e.image}" alt="${e}">
                        <div>
                        <progress value="${e.health}" max="${startingHealth[i]}"></progress>
                          <div>Name: <span>${e.playerName}</span></div>
                          <div>Health: <span id="health${i}"">${e.health}</span></div>
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

  return gauntlet;

})(Gauntlet || {});
