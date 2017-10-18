// put code here!
confirm("Are you ready to play?");
var character = prompt("What character do you want to play as? Steve or Bob");
if (character === "steve"){
    console.log("Great Choice");
    var secondQuestion= prompt("Steve is a magical unicorn who is having a problem with his horn. It seemed to chip when he was out fixing his garden. If you want to explore the dark scary forest to find a place to fix his horn type: explore. If you want to stay at home and work on the garden type: home ");
}
else if (character === "bob") {
    alert("Great Choice");
    var bobQuestion1 = prompt("Bob is a nasty swamp creature, Do you want to stay in the swamp and sleep? type: sleep! Do you want bob to explore the swamp? type: explore!");
}
else {
    console.log("Why didn't you chose a character?");
}
//bob
if (bobQuestion1 === "explore") { alert("You fell into a hole and died.");}
else if (bobQuestion1 === "sleep"){ alert("You died in your sleep. End of game!");}
else {console.log ("Start over and pick steve because bob is just a filler character! ");}

//steve
    if (secondQuestion === "explore") { var forest = prompt( "The dark scary forest it is then! The forest is always full of evil, if you want to go back and grab a flash light type: light. If you want to continue on in the dark type: dark ");}
    else if (secondQuestion === "home"){ var home = prompt("The flowers need to be watered! If you want to go grab the hose and water the flowers type: water. If you want to stay in the garden and sleep type: sleep.");}
    else {console.log ("Start over and pick something");}

if (forest === "light") { var forest2= prompt("Oh no! On the way back to your house a giant wolf came and tried to attack you. Do you want to attack the wolf? Type: attack. Do you want to run away? Type: run");}
else if (forest === "dark"){ var steveQuestion4 = prompt("The dark started to fill with random noises. If you want to investigate the noise type: noise. If you want to stay on the path you're on type: path");}
else {console.log ("Start over and pick something");}

if( steveQuestion4 === "noise"){ var lost = prompt(" You followed the noise for three hours and it ended up being a bunny. You tried to play with the bunny but it ran away from you. After looking around you realized you were quit lost and that you didn't know how to get home. You notice two paths that could lead you home. Do you want to go on the right path or the left one?");}
else if (steveQuestion4 === "path"){alert("You found the shop to fix your horn and went home and lived happily ever after!!");}
else {console.log("you're probably really annoyed by starting over huh?");}


if (lost === "right") {alert("You ended up finding your way back to the path but the shop was burnt down by a gas fire and you ended up going home with a chipped horn.");}
else if (lost === "left") {alert("This was the wrong path and you ended up walk further from home.");}
else{console.log ("Stop picking options that don't exist man.");}


//wolf

if(forest2 === "attack"){alert("You and the wolf rap battled and you won! Good job!");}
else if (forest2=== "run"){alert("The wolf chased you and ended up capturing you in a pokemon ball and you were forever forced to be his slave. ");}
else {console.log("Start over and pick something!");}


if(home === "water"){var yellow = prompt("There was a giant snake hiding in the hose and wanted to battle. Do you want to capture the snake and keep it as a pet? type: Capture. Do you want to fight it off? Type: fight.");}
else if (home === "sleep"){alert("You feel into a peaceful sleep. And you spent the rest of your days happy and content.");}
else {console.log("Start over. ");}


if(yellow === "capture"){alert("You spent many hours trying to tame the snake. You succeeded and you and the snake lived a happy life together.");}
else if (yellow === "fight"){ var fix= prompt("The snake gave up after wounding you majorly. He left your garden and you stayed there with a nasty wound. Do you want to fix your wound and use the last of your horn powers on becoming well and forever be mortal? type: mortal. Or do you want to lay there and hope its get better? Type: better");}
else{console.log("Start over.");}

if (fix === "mortal"){alert("You lived forever mortal and ended up having a miserable life.");}
else if (fix === "better"){var number= prompt("It's your lucky day!! A magical fairy flew by and fixed your wound. And you lived out your days on candy mountain as a happy unicorn. Do you want 1 or 2 houses on candy cane lane?");}
else{ console.log("this is the end of the game anyways so just give up. don't even bother restarting.");}

if (number === 1){alert("Great choice!");}
else if (number === 2){alert("Great choice!");}
else{console.log("go back to the beginning. ");}