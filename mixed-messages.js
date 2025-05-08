const genderArr = ["man", "woman", "nonbinary", "agender"];
const pronounsArr = [["he", "him", "his", "his"], ["she", "her", "her", "hers"], ["it", "it", "its", "its"]];

const callingArr = ["apostle", "arconaut", "greybeard", "gunslinger", "marauder", "pilgrim", "nomad", "scholar", "tinker", "warden", "water merchant", "watervine farmer", ""];
const limbTypeArr = ["arm", "claw", "hoof", "wing", "tentacle", "fin", "fungal outcrop"];

const locationArr = ["the Asphalt Mines", "Bethesda Susa", "Bey Lah", "Eyn Roj", "Ezra", "the Garden of Geth", "Golgotha", "the Grit Gate", "Gyl", "Joppa", "Kyakukya", "Omonporch", "Red Rock", "the ruins of Joppa", "the Rust Wells", "the Rusted Archway", "the Six Day Stilt", "the Stiltgrounds", "the hydropon", "the Thin World", "the Tomb of the Eaters", "the Trembling Dunes", "the waterlogged tunnel", "the Yd Freehold"];
const directionArr = ["north", "south", "east", "west"];
const environmentArr = ["salt dunes", "desert canyons", "salt marsh", "jungle", "flower fields", "hills", "mountains", "rust wells", "river", "ruins", "banana grove", "rainbow wood", "moon stair", "Palladium Reef"];
const factionArr = ["Children of Mamon", "Consortium of Phyta", "Chavvah", "Cult of the Coiled Lamb", "Daughters of Exile", "dromad merchants", "cannibals", "Barathrumites", "Farmer's Guild", "Fellowship of Wardens", "Glow-Wights", "grazing hedonists", "Gyre wights", "hindren of Bey Lah", "Issachari tribe", "Mechanamists", "Merchants' Guild", "Naphtaali tribe", "pariahs", "Putus Templar", "Seekers of the Sightless Way", "Sultan cult", "water barons"];
const affinityArr = ["friendly", "neutral", "hostile"];
const difficultyArr = ["Easy", "Average", "Tough", "Very Tough", "Impossible"];
const healthStatusArr = ["perfect", "fine", "injured", "wounded", "badly wounded"];

const statusEffectsArr = ["asleep", "blind", "cleaved", "confused", "covered in liquid", "dazed", "deep dreaming", "dioriented", "emboldened", "frenzied", "frozen", "gleaming", "greased", "hobbled", "inspired", "lost", "lovesick", "mutating", "overburdened", "paralyzed", "phased", "phosphorescent", "prone", "proselytized", "psionocially cleaved", "shaken", "shamed", "shimmering", "sitting", "sluggish", "sprinting", "stained by liquid", "stuck", "stunned", "stunned by gas", "submerged", "syphoned", "terrified", "wakeful"];

const meleeWeaponArr = ["pickaxe", "hand axe", "vinereaper", "battle axe", "mace", "staff", "hammer", "club", "wrench", "baton", "war hammer", "maul", "long sword", "great sword", "dagger", "kris", "utility knife", "kukri", "butcher knife", "cleaver", "wristblade"];
const weaponMaterialArr = ["bronze", "iron", "steel", "carbide", "fullerite", "crysteel", "zetachrome"];
const rangedWeaponArr = ["short bow", "compound bow", "musket", "Issachar rifle", "combat shotgun", "pump shotgun", "sniper rifle", "carbine", "laser rifle", "freeze ray", "eigenrifle", "hypertractor", "light rail", "spaser rifle", "dart gun", "booster gun", "chrome revolver", "grappling gun", "semi-automatic pistrol", "laser pistol", "chain pistol", "arc winder", "eigenpistol", "nullray pistol", "di-thermo beam", "hand rail", "high-voltage arc winder", "psychal fleshgun", "space inverter", "spaser pistol", "grenade launcher", "fungicide pump", "defoilant pump", "chaingun", "mortar tube", "missile launcher", "flamerthrower", "arc cannon", "chain laser", "blast cannon", "linear cannon", "swarm rack", "phase cannon"];

const getRandomElement = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const pick = getRandomElement;

const characterFactory = () => {
    return {
        gender: pick(genderArr),
        pronouns: pick (pronounsArr),
        calling: pick(callingArr),
        limbType: pick(limbTypeArr),
        location: pick(locationArr),
        direction: pick(directionArr),
        environment: pick(environmentArr),
        faction: pick(factionArr),
        affinity: pick(affinityArr),
        healthStatus: pick(healthStatusArr),
        difficulty: pick(difficultyArr),
        statusEffects: [],
        equipment: [],
        description: "",

        titleCase(str) {
            return str.toLowerCase().split(' ').map(function (word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        },

        randomNumber(range, start = 0) {
            return Math.floor(Math.random() * (range + 1) + start);
        },

        generateTitle() {
            return `${this.titleCase(this.calling)} of the ${this.titleCase(this.faction)}`;
        },

        generateDifficulty() {
            return `${this.titleCase(this.affinity)}, ${this.titleCase(this.difficulty)}`;
        },
        
        generateEquipment() {
            let equipMessage = "Equipped: ";
            const equipRangedWeapon = getRandomElement(rangedWeaponArr);

            const equippedItems = [];
            const numMelee = this.randomNumber(2, 1);
            for (let i = 0; i < numMelee; i++){
                const material = getRandomElement(weaponMaterialArr);
                const meleeWeapon = getRandomElement(meleeWeaponArr);
                equippedItems.push([material, meleeWeapon]);
                
                equipMessage += "" + material + " " + meleeWeapon + ", ";
            }

            equippedItems.push(equipRangedWeapon);
            this.equipment = equippedItems;

            equipMessage += "" + equipRangedWeapon;
            return equipMessage;
        },

        generateStatusEffects() {
            let statusEffectMessage = "";
            const activeStatusEffects = [];
            const numEffects = this.randomNumber(3);

            for (let i = 0; i < numEffects; i++){
                let currentEffect = getRandomElement(statusEffectsArr);
                while (activeStatusEffects.includes(currentEffect)) {
                    currentEffect = getRandomElement(statusEffectsArr);
                }

                activeStatusEffects.push(currentEffect);

                if (i == numEffects - 1) {
                    statusEffectMessage += "" + currentEffect;
                }
                else{
                    statusEffectMessage += "" + currentEffect + ", ";
                }
            }
            this.statusEffects = activeStatusEffects;
            return statusEffectMessage;
        },

        generateHealth() {
            return `${this.titleCase(this.healthStatus)}`;
        },

        generateDescription() {
            const characterDescription = `Across the ${this.environment}, the footsteps of the ${this.calling} reverberate like the lethargic chug of a machine. A lone wanderer from ${this.location} in the ${this.direction}, ${this.pronouns[2]} safe passage is affirmed only by the ${this.equipment[0][1]} clutched in ${this.pronouns[2]} grasping ${this.limbType}.`
            this.description = characterDescription;
            return characterDescription;
        },

        printMessage() {
            const title = this.generateTitle();
            const difficulty = this.generateDifficulty();
            const equipment = this.generateEquipment();
            const statusEffects = this.generateStatusEffects();
            const healthStatus = this.generateHealth();
            const description = this.generateDescription();

            console.log(title);
            console.log(difficulty);
            console.log(description);
            console.log(equipment);
            console.log(statusEffects);
            console.log(healthStatus);
        }
    }
}

const newCharacter = characterFactory();

newCharacter.printMessage();

console.log('hello');