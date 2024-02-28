import {RIWhite} from './die.js';
import {RId6} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["i"] = RIWhite;
	CONFIG.Dice.terms["d"] = RId6;
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"RIDice",name:"Winter King Dice"},"preferred");
    dice3d.addDicePreset({
      type:"di",
      labels:[
        'modules/the-winter-king-csb/assets/Dice/Dice1.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice2.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice3.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice4.webp',
        'modules/the-winter-king-csb/assets/Dice/Dice5.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice6.webp'
      ],
      bumpMaps:[
        'modules/the-winter-king-csb/assets/Dice/Dice1_Bump.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice2_Bump.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice3_Bump.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice4_Bump.webp',
        'modules/the-winter-king-csb/assets/Dice/Dice5_Bump.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice6_Bump.webp'
      ],
	  colorset:"whiteRI",
      system: "RIDice"
    });
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        'modules/the-winter-king-csb/assets/Dice/Dice1.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice2.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice3.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice4.webp',
        'modules/the-winter-king-csb/assets/Dice/Dice5.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice6.webp'
      ],
      bumpMaps:[
        'modules/the-winter-king-csb/assets/Dice/Dice1_Bump.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice2_Bump.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice3_Bump.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice4_Bump.webp',
        'modules/the-winter-king-csb/assets/Dice/Dice5_Bump.webp', 
        'modules/the-winter-king-csb/assets/Dice/Dice6_Bump.webp'
      ],
	  colorset:"whiteRI",
      system: "RIDice"
    });
dice3d.addColorset({
    name: 'whiteRI',
    description: 'White',
    category: 'Winter King Dice',
    foreground: '#FFFFFF',
    background: '#FFFFFF',
    outline: 'white',
    texture: 'none',
    material: 'plastic'
});
});
