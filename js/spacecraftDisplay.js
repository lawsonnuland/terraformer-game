function drawShip() {
let c = document.getElementById("spacecraftDisplay");
let ctx = c.getContext("2d");

ctx.fillStyle = "#FFFFFF";
if (gameData.mass <= 100) {
    ctx.fillRect(98, 98, 2, 2);
}
}