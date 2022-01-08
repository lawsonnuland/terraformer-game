let gameData = {
    mass: 0,
    energy: 0,
    energyPerClick: 1,
    energyBasicUpgradeCost: 10
}

let increaseEnergy = () => {
    gameData.energy += gameData.energyPerClick;
    document.getElementById("spaceEnergyStat").innerHTML = gameData.energy + " Joules";
}

let upgradeEnergy = () => {
    if (gameData.energy >= gameData.energyBasicUpgradeCost) {
        gameData.energy -= gameData.energyBasicUpgradeCost;
        gameData.energyPerClick += 1;
        gameData.energyBasicUpgradeCost *= 2;
        document.getElementById("spaceEnergyStat").innerHTML = gameData.energy + " Joules";
        document.getElementById("upgradeEnergyCollection").innerHTML = "Upgrade Energy Collection (Currently Level " + gameData.energyPerClick + ") Cost: " + gameData.energyBasicUpgradeCost + " Joules";
      }
}

let gameUpdate = window.setInterval(function() {
    document.getElementById("spaceEnergyStat").innerHTML = gameData.energy + " Joules";
    document.getElementById("upgradeEnergyCollection").innerHTML = "Upgrade Energy Collection (Currently Level " + gameData.energyPerClick + ") Cost: " + gameData.energyBasicUpgradeCost + " Joules";
}, 1000)

var savegame = JSON.parse(localStorage.getItem("terraformerSave"))
if (savegame !== null) {
    gameData = savegame
}

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("terraformerSave", JSON.stringify(gameData))
}, 15000)