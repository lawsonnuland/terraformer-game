/*let gameData = {
    space.mass.amount: 0,
    energy: 0,
    processing; 0
}
/*
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
        processing: 0
    }
}
/*
const space = (() => {
    const spaceTab = document.querySelector('#spacetab');

    const spaceResource = (name, upgradeCost, upgradeName, exponent, amount) => {
        ** Inits your resource in the DOM *
        const _initDOM = () => {
          let resource = document.createElement('div');
            const spaceTab = document.querySelector('#spacetab');
            resource.classList.add('resource');
            resource.innerHTML= `
            <button class="increment${name}">Increase ${name}</button>
            <button class="upgrade${name}">${upgradeName} ${upgradeCost}</button>
            <p>${name}: <span id="value${name}">${amount}</span></p>
            `
            ;
            spaceTab.appendChild(resource);
        };
      
        ** Updates your resource's value specifically in the DOM. *
        const _updateDOM = () => {
         document.getElementById(`value${name}`).innerText = amount;
        } 
    
        ** Initializes this spaceResource's event listener. *
        const _init = () => {
          _initDOM();
          
          document.addEventListener('click', (e) => {
             if (e.target.classList.contains(`increment${name}`)) {
               amount+=100000;
             }
          });

          document.addEventListener('click', (e) => {
            if (e.target.classList.contains(`upgrade${name}`)) {
              if (amount >= upgradeCost) {
                amount+=100000;
            }
          }});
        };

        const update = () => {
            amount+=10;
            _updateDOM();
            return (amount);
        };
      
        // Run the init function
        _init();
            
        return {name, upgradeCost, upgradeName, exponent, amount, update}
    };

    const energy = spaceResource("Energy", 10, "Micro Solar Panel", 1.01,0);
    const mass = spaceResource("Mass", 10, "Filament Net", 1.02,0);
    const process = spaceResource("Processing", 20, "Logical Structure", 1.05,0);

    const updateSpace = () => {
        energy.update();
        mass.update();
        process.update();
    }

    return {energy, mass, process, updateSpace};
})(); */
/*
let gameUpdate = window.setInterval(function() {
    space.updateSpace();
   // drawShip();
}, 100)
*/