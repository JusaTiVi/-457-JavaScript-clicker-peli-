//damage dealt to the current box + amount of damage dealt per click
damage = 0
breakspd = 1

bounty = 0
bountymult = 1
boxhp = 3

//shop item base prices
morehp = 5
document.getElementById("strongerbox").textContent = morehp
tooldmg = 15
document.getElementById("strongertools").textContent = tooldmg
hammercost = 50
document.getElementById("autohammer").textContent = hammercost

//autohammer stats
hammerspd = 0
hammerdmg = 0

//pixel art correction
const canvas = document.getElementById("GameCanvas");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
const img = new Image();

//box models
img.src = "woodenbox.png";

img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
}

//starting bounty
document.getElementById("currency").textContent = Math.round(bounty * 10) / 10

function nappi() {
    canvas.classList.add("shrink");
    setTimeout(() => {
        canvas.classList.remove("shrink");
    }, 140);

    //calculates the amount of damage required and dealt + how much bounty is granted
    damage += breakspd
    if (damage >= boxhp) {
        damage = 0
        bounty += bountymult
        document.getElementById("currency").textContent = Math.round(bounty * 10) / 10
    }
}
//makes the box stronger, in turn returning a greater bounty
function strbox() {
    if (bounty >= morehp) {
        bounty -= morehp
        bountymult = bountymult * 2
        //more hp is the upgrade price, while boxhp marks the actual hp
        morehp = morehp * 2.2
        boxhp = boxhp * 1.5
        document.getElementById("strongerbox").textContent = Math.round(morehp * 10) / 10
        document.getElementById("currency").textContent = Math.round(bounty * 10) / 10
    }
}
//makes the player's main tool stronger, breaking boxes in less hits
function bettertool() {
    if (bounty >= tooldmg) {
        bounty -= tooldmg
        //tooldmg marks the price of the upgrade, spd the actual damage dealt
        breakspd = breakspd * 1.7
        tooldmg = tooldmg * 1.86
        document.getElementById("strongertools").textContent = Math.round(tooldmg * 10) / 10
        document.getElementById("currency").textContent = Math.round(bounty * 10) / 10
    }
}
//automatically damages bose for you!
function autohammer() {
    if (bounty >= hammercost) {
        bounty -= hammercost

    }
}
