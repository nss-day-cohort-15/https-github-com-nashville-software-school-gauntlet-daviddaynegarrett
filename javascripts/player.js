
var Gauntlet = (function(gauntlet) {
  gauntlet.Combatants = {};

  /*
    Define the base object for any player of gauntlet,
    whether a human player or a monster.
   */
  gauntlet.Combatants.Player = function(name) {
    this.species = null;
    this.class = null;
    this.weapon = null;

    this.playerName = name || 'Player 1';
    this.health = Math.floor(Math.random() * 40 + 50);

    // this.health = 1
    this.strength = 90;
    this.intelligence = 90;

    this.toString = function() {
      var output = [this.playerName,
        " is a ",
        // this.skinColor,
        // " skinned ",
        this.species,
        " ",
        this.class,
        " with ",
        this.health,
        " health. ",
        (this.class.magical) ? "Able to cast " : " Wielding a ",
        this.weapon.toString(),
        "!"
      ].join("");
      return output;
    };
  };

  gauntlet.Combatants.Player.prototype.attack = function(enemyObj){

    var randomDamage = Math.ceil(Math.random() * this.weapon.damage);
    enemyObj.health = enemyObj.health - randomDamage;

    gauntlet.displayPlayers();

    var enemyId = (this === gauntlet.getPlayer()) ? 1 : 0;

    var $health = $(`#health${enemyId}`);
    var $image = $(`#img${enemyId}`);
    var enemyName = (enemyId === 1) ? enemyObj.playerName.substr(0,enemyObj.playerName.indexOf(' ')).toLowerCase() : 'player';

    $image.attr('src', `img/${enemyName}1.png`);
    $health.addClass('flash');
    $image.addClass('shake');



    //remove classes after attack
    setTimeout(removeClasses, 2000);

    function removeClasses(){
      $health.removeClass('flash');
      $image.removeClass('shake');
      $image.attr('src', `img/${enemyName}.png`);
    }

    swal({
            title:`${this.playerName} attacks!`,
            html:`<span class="bold">${enemyObj.playerName}</span> was attacked <br />by <span class="bold">${this.playerName}</span> with <span class="bold">${this.weapon}</span><br />causing <span class="red bold">${randomDamage} damage</span>!`,
            type: "warning",
            showCancelButton: false,
            showConfirmButton: false,
            timer: 2000
        });

    if(gauntlet.getPlayer().health <= 0){youLose();}

    if (gauntlet.getBadGuy().health <= 0){youWin();}
  }

  function youWin(){

    swal({
      title: "You Win!",
      text: "You might actually make a career out of this!",
      type: "success",
      showCancelButton: false,
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false
    });

  }

  function youLose(){

    gauntlet.lost();

    swal({
      title: "You lose!",
      text: "Maybe this isn't for you after all",
      type: "error",
      showCancelButton: false,
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false
    });
  }

    gauntlet.Combatants.Player.prototype.nssMode = function(enemyObj){
      enemyObj.health = 0;

      gauntlet.displayPlayers();


      swal({
        title: "You Win!",
        text: "NSS is a great shortcut! Strong choice!",
        type: "success",
        showCancelButton: false,
        showConfirmButton: false,
        allowEscapeKey: false,
        allowOutsideClick: false
      });
    }



  gauntlet.Combatants.Player.prototype.setWeapon = function(selectedWeapon) {
    this.weapon = new gauntlet.Arsenal[selectedWeapon]();
  }

  gauntlet.Combatants.Player.prototype.setClass = function(SelectedClass) {

  // Get a random index from the allowed classes array
  console.log(SelectedClass)
  this.class = new gauntlet.GuildHall[SelectedClass]();
  }
  /*
    Define the base properties for a human in a
    constructor function.
   */
  gauntlet.Combatants.Human = function() {
    var randomSkin;

    this.species = "Human";
    this.intelligence = this.intelligence + 20;

    this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
  };
  gauntlet.Combatants.Human.prototype = new gauntlet.Combatants.Player();



  /*
    Define the base properties for a monster in a
    constructor function.
   */
  gauntlet.Combatants.Monster = function() {
    this.health = this.health - 30;
    this.intelligence = this.intelligence - 20;
    this.strength = this.strength + 30;
  };
  gauntlet.Combatants.Monster.prototype = new gauntlet.Combatants.Player();

  gauntlet.Combatants.Monster.prototype.setClass = function(obj) {
    //generates random allowed class for enemy
    generateHelperFunction('allowedClasses','class','GuildHall', obj);
  }

  gauntlet.Combatants.Monster.prototype.setWeapon = function(obj){
    //generates random allowed weapon for enemy
    generateHelperFunction('allowedWeapons','weapon','Arsenal', obj);
  }

  function generateHelperFunction(array, prop, construct, obj) {
      var random = Math.round(Math.random() * (obj[array].length - 1));
      var randomItem = obj[array][random];
      obj[prop] = new gauntlet[construct][randomItem]();
      return obj[prop];
  }

  //function to change human health
  gauntlet.changeHealth = function(updateHealth){
    gauntlet.getPlayer().health = updateHealth;
  }

  return gauntlet

})(Gauntlet || {});
