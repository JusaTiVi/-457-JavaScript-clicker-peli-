
damage = 0 // current accumlated damage to the box
breakspd = 1 // damage dealt per click

bounty = 0 // player currency
bountymult = 1 // amount of bounty granted per box
boxhp = 3 //box health

//shop item base prices
morehp = 5
document.getElementById("strongerbox").textContent = morehp
tooldmg = 15
document.getElementById("strongertools").textContent = tooldmg
hammercost = 50
document.getElementById("autohammer").textContent = hammercost

//autohammer stats
hammerspd = 1000
hammerdmg = 0

//pixel art correction
const canvas = document.getElementById("GameCanvas");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
const img = new Image();

//starting box model
img.src = "assets/woodenbox.png";

img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
}

function updateUI() {
    document.getElementById("currency").textContent = Math.round(bounty * 10) / 10
    document.getElementById("strongerbox").textContent = Math.round(morehp * 10) / 10
    document.getElementById("strongertools").textContent = Math.round(tooldmg * 10) / 10
    document.getElementById("autohammer").textContent = Math.round(hammercost * 10) / 10
}

//starting bounty
document.getElementById("currency").textContent = Math.round(bounty * 10) / 10

function nappi() {
    canvas.classList.add("shrink");
    setTimeout(() => canvas.classList.remove("shrink"), 140);

    //calculates the amount of damage required and dealt + how much bounty is granted
    damage += breakspd
    if (damage >= boxhp) {
        damage = 0
        bounty += bountymult
        updateUI();
    }
}
//makes the box stronger, in turn returning a greater bounty
function strbox() {
    if (bounty >= morehp) {
        bounty -= morehp
        bountymult = bountymult * 2.9
        //more hp is the upgrade price, while boxhp marks the actual hp
        morehp = morehp * 3.2
        boxhp *= 2.1
        updateUI();
    }
}
//makes the player's main tool stronger, breaking boxes in less hits
function bettertool() {
    if (bounty >= tooldmg) {
        bounty -= tooldmg
        //tooldmg marks the price of the upgrade, spd the actual damage dealt
        breakspd *= 2
        tooldmg = tooldmg * 3.5
        updateUI();
    }
}
//automatically damages the box for you!
function autohammer() {
    if (bounty >= hammercost) {
        bounty -= hammercost
        hammercost = hammercost * 5
        hammerdmg += 3
        hammerdmg = hammerdmg * 1.05
        hammerspd = hammerspd * 0.97
        updateUI();
        
    }
}

//causes the autohammer to hurt the box after a given delay
function hammer() {
    damage += hammerdmg
    if (damage >= boxhp) {
        damage = 0
        bounty += bountymult
        updateUI();
    }
    
}

setInterval(hammer, hammerspd)
    


