let gameData = {
    mass: 0,
    energy: 0,
    energyPerClick: 1,
    energyLinearUpgradeCost: 10
}

let increment = (element) => {
    gameData[element.dataset.resource] += gameData[element.dataset.upgrade];
}

let linearUpgrade = (element) => {
    if (gameData[element.dataset.resource] >= gameData[element.dataset.upgradeCost]) {
        gameData[element.dataset.resource] -= gameData[element.dataset.upgradeCost];
        gameData[element.dataset.upgrade] += 1;
        gameData[element.dataset.upgradeCost] *= 2;
      }
}

let gameUpdate = window.setInterval(function() {
    document.getElementById("spaceEnergyStat").innerHTML = `${gameData.energy}  Joules`;
    document.getElementById("upgradeEnergyCollection").innerHTML = `Upgrade Energy Collection (Currently Level ${gameData.energyPerClick}) <br> Cost: ${gameData.energyLinearUpgradeCost} Joules`;
    drawShip();
}, 100)

let savegame = JSON.parse(localStorage.getItem("terraformerSave"))
if (savegame !== null) {
    gameData = savegame
}

let saveGameLoop = window.setInterval(function() {
  localStorage.setItem("terraformerSave", JSON.stringify(gameData))
}, 15000)

let wipeProgress = () => {
    gameData = {
        mass: 0,
        energy: 0,
        energyPerClick: 1,
        energyLinearUpgradeCost: 10
    }
}
