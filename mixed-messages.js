const genderArr = ["man", "woman", "nonbinary", "agender"];
const pronounsArr = [["he", "him", "his"], ["she", "her", "hers"], ["they", "them", "theirs"], ["it", "it", "its"]];

const callingArr = ["apostle", "arconaut", "greybeard", "gunslinger", "marauder", "pilgrim", "nomad", "scholar", "tinker", "warden", "water merchant", "watervine farmer", ""];
const limbTypeArr = ["arm", "claw", "hoof", "wing", "tentacle", "fin", "fungal outcrop"];

const locationArr = ["Asphalt Mines", "Bethesda Susa", "Bey Lah", "Eyn Roj", "Ezra", "Garden of Geth", "Golgotha", "Grit Gate", "Gyl", "Joppa", "Kyakukya", "Omonporch", "Red Rock", "ruins of Joppa", "Rust Wells", "Rusted Archway", "Six Day Stilt", "Stiltgrounds", "the hydropon", "Thin World", "Tomb of the Eaters", "Trembling Dunes", "waterlogged tunnel", "Yd Freehold"];
const factionArr = ["Children of Mamon", "Consortium of Phyta", "Chavvah", "Cult of the Coiled Lamb", "Daughters of Exile", "dromad merchants", "cannibals", "Barathrumites", "Farmer's Guild", "Fellowship of Wardens", "Glow-Wights", "grazing hedonists", "Gyre wights", "hindren of Bey Lah", "Issachari tribe", "Mechanamists", "Merchants' Guild", "Naphtaali tribe", "pariahs", "Putus Templar", "Seekers of the Sightless Way", "Sultan cult", "water barons"];
const affinityArr = ["friendly", "neutral", "hostile"];
const healthStatusArr = ["perfect", "fine", "injured", "wounded", "badly wounded"];
const statusEffectsArr = ["asleep", "blind", "cleaved", "confused", "covered in liquid", "dazed", "deep dreaming", "dioriented", "emboldened", "frenzied", "frozen", "gleaming", "greased", "hobbled", "inspired", "lost", "lovesick", "mutating", "overburdened", "paralyzed", "phased", "phosphorescent", "prone", "proselytized", "psionocially cleaved", "shaken", "shamed", "shimmering", "sitting", "sluggish", "sprinting", "stained by liquid", "stuck", "stunned", "stunned by gas", "submerged", "syphoned", "terrified", "wakeful"];
const difficultyArr = ["Easy", "Average", "Tough", "Very Tough", "Impossible"];

const meleeWeaponArr = ["pickaxe", "hand axe", "vinereaper", "battle axe", "mace", "staff", "hammer", "club", "wrench", "baton", "war hammer", "maul", "long sword", "great sword", "dagger", "kris", "utility knife", "kukri", "butcher knife", "cleaver", "wristblade"];
const weaponMaterialArr = ["bronze", "iron", "steel", "carbide", "fullerite", "crysteel", "zetachrome"];
const rangedWeaponArr = ["short bow", "compound bow", "musket", "Issachar rifle", "combat shotgun", "pump shotgun", "sniper rifle", "carbine", "laser rifle", "freeze ray", "eigenrifle", "hypertractor", "light rail", "spaser rifle", "dart gun", "booster gun", "chrome revolver", "grappling gun", "semi-automatic pistrol", "laser pistol", "chain pistol", "arc winder", "eigenpistol", "nullray pistol", "di-thermo beam", "hand rail", "high-voltage arc winder", "psychal fleshgun", "space inverter", "spaser pistol", "grenade launcher", "fungicide pump", "defoilant pump", "chaingun", "mortar tube", "missile launcher", "flamerthrower", "arc cannon", "chain laser", "blast cannon", "linear cannon", "swarm rack", "phase cannon"];


const characterFactory = (gender, pronouns, calling, limbType, location, faction, affinity, healthStatus, statusEffects, difficulty, weaponArr, equipmentArr) => {
    return {
        gender,
        pronouns,
        calling,
        limbType,
        location,
        faction,
        affinity,
        healthStatus,
        statusEffects,
        difficulty,


        titleCase(str) {
            return str.toLowerCase().split(' ').map(function (word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        },

        randomNumber(range) {
            return Math.floor(Math.random() * (range + 1));
        },

        getRandomElement(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        },

        generateTitle() {
            return `${this.calling} of the ${this.faction}`;
        },

        generateDifficulty() {
            return `${titleCase(this.affinity)}, ${titleCase(difficulty)}`;
        },
        
        generateEquipment() {
            let equipMessage = "Equipped: ";
            const equipRangedWeapon = getRandomElement(rangedWeaponArr);

            const equipMeleeArr = [];
            const numMelee = randomNumber(2);
            for (let i = 0; i < numMelee; i++){
                const material = getRandomElement(weaponMaterialArr);
                const meleeWeapon = getRandomElement(meleeWeaponArr);
                equipMeleeArr.push([material, meleeWeapon]);
                
                equipMessage += "" + material + " " + meleeWeapon + ", ";
            }

            equipMessage += "" + equipRangedWeapon;
            return equipMessage;
        },

        generateStatusEffects() {
            let statusEffectMessage = "";
            const activeStatusEffects = [];
            const numEffects = randomNumber(5);

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

            return statusEffectMessage;
        }
    }
}

//console.log('hello');