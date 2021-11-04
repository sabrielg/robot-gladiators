var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[2]);


var fight = function(enemyName) {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt(" Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked" + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining."
        );

        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining."
        );

        if(playerHealth <=0) {
            window.alert(playerName + " has died! ");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left. ");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player want to skip
        var confirmSKIP = window.confirm(" Are you sure you'd like to quit?");

        if(confirmSKIP) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney -2;
        }

        else {
            fight (enemyName);
        }

    } else {
        window.alert("You need to choose a valid option. Try again!");
        fight (enemyName);
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

//Game States

//"WIN" - Player robot has defeted all enemy-robots
// *Fight all enemy-robots
// *Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less
