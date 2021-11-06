
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


var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {

    var promptFight = window.prompt(" Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSKIP = window.confirm (" Are you sure you'd like to quit?");

        if(confirmSKIP) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye! ");
            playerInfo.money = Math.max(0, playerInfo.money -10);
            console.log("playerMoney", playerInfo.money);
            break;
        }
    }
var damage =randomNumber(playerInfo.attack -3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
        playerInfo.name + " attacked " + enemy.name + '. ' + enemy.name + " now has " + enemy.health + " health remaining. "
        );

    if(enemy.health <= 0) {
        window.alert(enemy.name + " has died! ");
        playerInfo.money = playerInfo.money + 20;
        break;
    } else {
        window.alert(enemy.name + ' still has ' + enemy.health + " health left .");
    }
var damage = randomNumber(enemy.attack -3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
        enemy.name + " Attacked " + playerInfo.name + ' .' + playerInfo.name + " now has " + playerInfo.health + " health remaining. "
    );

    if(playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died! ");
        break;
    } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + " health left. " );
    }
}
};

var startGame = function() {
    playerInfo.reset();
    // // playerInfo.health = 100;
    // playerInfo.attack = 10;
    // playerInfo.money = 10;

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert( "Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            var storeConfirm = window.confirm( "The fight is over, visit the store before the next round?" );
            if(storeConfirm){
            shop();
            }
        }
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
    if (playerInfo.health > 0) {
        window.alert(" Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert(" You've lost your robot in battle. ");
    }
        var playAgainConfirm = window.confirm( " Would you like to play again?" );
        if (playAgainConfirm) {
            startGame();
        }
        else {
            window.alert( "Thank you for playing Robot Gladiators! Come back soon." );
        }
};

var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}


var shop = function() {
    var shopOptionPrompt = window.prompt(
        " Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice. "
    );
        switch (shopOptionPrompt) {
            case "refill":
                case "REFILL":
                    playerInfo.refillHealth();
                    break;

                case "upgrade":
                    case "UPGRADE":
                        playerInfo.upgradeAttack();
                    break;
                    case "leave":
                        case "LEAVE":
                    window.alert("Leaving the store." );
                    break;
                    default:
                        window.alert("You did not pick a valid option. Try again.");
                        shop();
                        break;
    }
};

var getPlayerName = function() {
    var name = "";
    while (name === ""|| name === null) {
        name = prompt("What is your robot's name?");
    }
    //add loop here with prompt and condition
    console.log("Your robot's name is" + name);
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if(this.money >= 7) {
            window.alert(" Refilling player's health by 20 for 7 dollars. ");
        this.health += 20;
        this.money -= 7;
        }
        else {
            window.alert ( "You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if(this.money >= 7) {
            window.alert(" Upgrading player's attack by 6 for 7 dollars.");
        this.attack +=6;
        this.money -=7;
    }
    else {
        window.alert( "You don't have enough money!");
    }
    }
};

var enemyInfo = [
    {
    name: "Roberto",
    attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

startGame();
//Game States

//"WIN" - Player robot has defeted all enemy-robots
// *Fight all enemy-robots
// *Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less