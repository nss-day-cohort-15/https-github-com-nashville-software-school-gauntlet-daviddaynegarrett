/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = (function(gauntlet) {
gauntlet.GuildHall = {};

/*
  Base function for a player, or enemy, class (profession)
 */
gauntlet.GuildHall.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  }
};

/*
    Developer CLASSES
      - JavaScript/Warrior
      - RubyOnRails/Valkaryie
      - C#/Beserker
 */
gauntlet.GuildHall.Developer = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
gauntlet.GuildHall.Developer.prototype = new gauntlet.GuildHall.PlayerClass();


gauntlet.GuildHall.JavaScriptDeveloper = function() {
  this.name = "JavaScript Developer";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
gauntlet.GuildHall.JavaScriptDeveloper.prototype = new gauntlet.GuildHall.Developer();


gauntlet.GuildHall.RubyOnRailsDeveloper = function() {
  this.name = "RubyOnRails Developer";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
gauntlet.GuildHall.RubyOnRailsDeveloper.prototype = new gauntlet.GuildHall.Developer();


gauntlet.GuildHall.CSharpDeveloper = function() {
  this.name = "CSharp";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
gauntlet.GuildHall.CSharpDeveloper.prototype = new gauntlet.GuildHall.Developer();





/*
    MAGICAL/Designer Class
      - SASSDesigner/Shaman
      - WordpressDesigner/Wizard
      - AdobePhotoShopDesigner/Conjurer
 */
gauntlet.GuildHall.Designer = function() {
  this.name = "Designer";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
gauntlet.GuildHall.Designer.prototype = new gauntlet.GuildHall.PlayerClass();


gauntlet.GuildHall.SassDesigner = function() {
  this.name = "SassDesigner";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
gauntlet.GuildHall.SassDesigner.prototype = new gauntlet.GuildHall.Designer();


gauntlet.GuildHall.WordpressDesigner = function() {
  this.name = "WordpressDesigner";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
gauntlet.GuildHall.WordpressDesigner.prototype = new gauntlet.GuildHall.Designer();


gauntlet.GuildHall.AdobePhotoshopDesigner = function() {
  this.name = "AdobePhotoshop Designer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
gauntlet.GuildHall.AdobePhotoshopDesigner.prototype = new gauntlet.GuildHall.Designer();



/*
    STEALTH CLASSES/DevOps
      - Ninja/Start-upCEO
      - Assassin/HR Representative
      -Shadow Warrior/Customer Service Representative
 */


 gauntlet.GuildHall.DevOps = function() {
  this.name = "DevOps";
  this.healthBonus = this.healthBonus + 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
gauntlet.GuildHall.DevOps.prototype = new gauntlet.GuildHall.PlayerClass();

gauntlet.GuildHall.StartupCeo = function() {
  this.name = 'Start-up CEO';
  this.healthBonus = this.healthBonus + 5;
  this.intelligenceBonus = this.intelligenceBonus - 5;
  this.strengthBonus = this.strengthBonus + 5;
}
gauntlet.GuildHall.StartupCeo.prototype = new gauntlet.GuildHall.DevOps();

gauntlet.GuildHall.HRRepresentative = function () {
  this.name = "HR Representative";
  this.intelligenceBonus = this.intelligenceBonus + 10;
  this.strengthBonus = this.strengthBonus - 5;
}
gauntlet.GuildHall.HRRepresentative.prototype = new gauntlet.GuildHall.DevOps();

gauntlet.GuildHall.CustomerServiceRep = function () {
  this.name = "Customer Service Rep";
  this.healthBonus = this.healthBonus + 10;
  this.intelligenceBonus = this.intelligenceBonus - 10;
  this.strengthBonus = this.strengthBonus + 10;
}
gauntlet.GuildHall.CustomerServiceRep.prototype = new gauntlet.GuildHall.DevOps();


 return gauntlet
})(Gauntlet || {});

