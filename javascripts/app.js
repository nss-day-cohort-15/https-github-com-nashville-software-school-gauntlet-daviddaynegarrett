/*
  Test code to generate a spell
 */
//var spell = new gauntlet.SpellBook.Sphere();
//console.log("spell: ", spell.toString());

var Gauntlet = (function(gauntlet) {

  //create player
  var player = new gauntlet.Combatants.Human();
  var classCards;

  player.allowedClasses.forEach((e,i) => classCards += buildCard(e,i));

    $('#class-card').append(classCards);


  //DOM builder
  function buildCard(allowedClass, count){
    return `${count % 4 === 0 ? '<div class="col-sm-4">': ''}
              <div class="card__button">
                <a class="class__link btn btn--big btn--blue" href="#">
                  <span class="btn__prompt">></span>
                  <span class="btn__text">${allowedClass}</span>
                </a>
              </div>
            ${(count % 4 === 0 && count !== 0) ? '</div>': ''}`;
  }

  //create enemy (will need to make random)
  var orc = new gauntlet.Combatants.Orc();
  orc.setClass(orc);
  orc.setWeapon(orc);
  console.log(orc.toString());

  console.log(orc);

  $(document).ready(function() {
    //get selected name and add to player
    $("#select-name").on('click', () => player.playerName = $('#player-name').val());

    // get selected class and add to player
    $('#class-card').on('click', evt => player.setClass(evt.target.innerHTML.replace(/\W/g,'')));

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
