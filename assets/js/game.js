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

//wrap the game logic in a startGame() fucntion
//when the player is defeated or there are no more enemies, call an endGame() function that:
//*alerts the player's total stats
//*asks the player if they want to play again
//*if yes, call startGame() to restart the game

//After the player skips or defeats an enemy( and there are still more robots to fight):
//*Ask the player if they want to "shop"
//*If no, continue as normal
//*if yes, call the shop() function
//*In the shop() function ask player if they want to "refill" health, "upgrade attack", or "leave" shop
//* If refill, subtract money points from player and increase health
//*if upgrade subtract money points from player and increase attack power
//*If leave, alert goodbye and exit the function
//*If any other valid option, call shop() again


var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {

    var promptFight = window.prompt(" Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSKIP = window.confirm (" Are you sture you'd like to quit?");

        if(confirmSKIP) {
            window.alert(playerName + " has decided to skip this fight. Goodbye! ");
            playerMoney = playerMoney -10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + '. ' + enemyName + " now has " + enemyHealth + " health remaining. "
        );

    if(enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
        playerMoney = playerMoney + 20;
        break;
    } else {
        window.alert(enemyName + ' still has ' + enemyHealth + " health left .");
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " Attacked " + playerName + ' .' + playerName + " now has " + playerHealth + " health remaining. "
    );

    if(playerHealth <= 0) {
        window.alert(playerName + " has died! ");
    } else {
        window.alert(playerName + ' still has ' + playerHealth + " health left. " );
    }
}
};

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert( "Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);
        }
        else {
            window.alert( " You have lost your robot in battle! Game Over!" );
            break;
        }
    }
    endGame();
};
var endGame = function() {
    window.alert(" The game has now ended. Let's see how you did!" );
    if (playerHealth > 0) {
        window.alert(" Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert(" You've lost your robot in battle. ");
        var playAgainConfirm = window.confirm( " Would you like to play again?" );
        if (playAgainConfirm) {
            startGame();
        }
        else {
            window.alert( "Thank you for playing Robot Gladiators! Come back soon" );
        }
};
}
startGame();
//Game States

//"WIN" - Player robot has defeted all enemy-robots
// *Fight all enemy-robots
// *Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less