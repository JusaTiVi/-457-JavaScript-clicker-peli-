pisteet = 0
rikki = 0

const canvas = document.getElementById("GameCanvas");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
const img = new Image();
img.src = "woodenbox.png";

img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
}
function nappi() {
    pisteet += 1
    if (pisteet === 3) {
        pisteet = 0
        rikki += 1
        document.getElementById("rikotut").textContent =
        rikki
    }
}