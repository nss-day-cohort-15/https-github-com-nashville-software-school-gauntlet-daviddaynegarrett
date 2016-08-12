
var Gauntlet = (function(gauntlet) {

  $(document).ready(function() {

    //local player & badGuy
    var player = Gauntlet.getPlayer();
    var badGuy = Gauntlet.getBadGuy();
    var playerName2 = '';


    //get selected name and add to player
    $("#select-name").on('click', function(){
        playerName2 = $('#player-name').val();
        player.playerName = playerName2;
      });

    // get selected class and add to player
    $('#class-card').on('click', evt => player.setClass(evt.target.innerHTML.replace(/\W/g,'')));

    //get selected weapon and add to player
    $('#weapon-card').on('click', (evt) => player.setWeapon(evt.target.innerHTML.replace(/\W/g,'')));

    //on click to battleground display player stats
    $('.battle').on('click', () => gauntlet.displayPlayers());

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
     nssSoundEffect.setAttribute('src', "https://raw.githubusercontent.com/nss-day-cohort-15/https-github-com-nashville-software-school-gauntlet-daviddaynegarrett/tree/gh-pages/sounds/sfm_mp3_street_fighter_hadouken_sound_effect.mp3");


var jabSoundEffect = document.createElement('audio');
    jabSoundEffect.setAttribute('src', "https://raw.githubusercontent.com/nss-day-cohort-15/https-github-com-nashville-software-school-gauntlet-daviddaynegarrett/tree/gh-pages/sounds/Jab-SoundBible.com-1806727891.mp3")

var MKThemeSong = document.createElement('audio');
    MKThemeSong.setAttribute('src','https://raw.githubusercontent.com/nss-day-cohort-15/https-github-com-nashville-software-school-gauntlet-daviddaynegarrett/tree/gh-pages/sounds/Mortal%20Kombat%20Theme%20Song.mp3')
    $(document).ready( function() {
      MKThemeSong.play();
    })
var victorySong = document.createElement('audio');
    victorySong.setAttribute('src', 'https://raw.githubusercontent.com/nss-day-cohort-15/https-github-com-nashville-software-school-gauntlet-daviddaynegarrett/tree/gh-pages/sounds/Final%20Fantasy%20VII%20-%20Victory%20Fanfare.mp3')

     $('.nssMode').on('click', function () {
        player.nssMode(badGuy);
        // displayPlayers();
        nssSoundEffect.play();
        MKThemeSong.pause();
        victorySong.play();
     });

     $('.attack').on('click', function() {
        jabSoundEffect.play();
        MKThemeSong.volume = 0.3;
        if (gauntlet.getBadGuy().health <= 0) {
          MKThemeSong.pause();
          victorySong.play();
        }

     })




     var randomProperty = function (obj) {
         var keys = Object.keys(obj)
         var num = keys.length * Math.random() << 0;
         badGuy.playerName = keys[num];
         return obj[keys[num]];
     };

      player.image = 'player.png';
      badGuy.image = randomProperty(badGuy.nameImgObj);


      var startingHealth = [player.health, badGuy.health];


     gauntlet.displayPlayers = function(){

       var domStats = ``;

       [player, badGuy].forEach(function(e,i){
        domStats += `<div class="col-md-6 player-stats">
                        <img id="img${i}" class="m-x-auto combatPicture" src="img/${e.image}" alt="${e}">
                        <div>
                        <progress value="${e.health}" max="${startingHealth[i]}"></progress>
                          <div>Name: <span>${e.playerName || "Player 1"}</span></div>
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
