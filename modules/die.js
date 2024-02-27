export class RIWhite extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

/** @override */
    static DENOMINATION = "i";
     /** @override */
    getResultLabel(result) {
        return {
			"1": '<img src="modules/the-winter-king-csb/assets/Dice/Dice1_inCHAT.webp" />',
            "2": '<img src="modules/the-winter-king-csb/assets/Dice/Dice2_inCHAT.webp" />',
            "3": '<img src="modules/the-winter-king-csb/assets/Dice/Dice3_inCHAT.webp" />',
            "4": '<img src="modules/the-winter-king-csb/assets/Dice/Dice4_inCHAT.webp" />',
			"5": '<img src="modules/the-winter-king-csb/assets/Dice/Dice5_inCHAT.webp" />',			
            "6": '<img src="modules/the-winter-king-csb/assets/Dice/Dice6_inCHAT.webp" />'
        }[result.result];
    }
}