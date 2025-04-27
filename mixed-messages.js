const genderArr = ["man", "woman", "nonbinary", "agender"];
const pronounsArr = [["he", "him", "his"], ["she", "her", "hers"], ["they", "them", "theirs"], ["it", "it", "its"]];

const callingArr = ["apostle", "arconaut", "greybeard", "gunslinger", "marauder", "pilgrim", "nomad", "scholar", "tinker", "warden", "water merchant", "watervine farmer", ""];
const limbTypeArr = ["arm", "claw", "hoof", "wing", "tentacle", "fin", "fungal outcrop"];

const locationArr = ["Asphalt Mines", "Bethesda Susa", "Bey Lah", "Eyn Roj", "Ezra", "Garden of Geth", "Golgotha", "Grit Gate", "Gyl", "Joppa", "Kyakukya", "Omonporch", "Red Rock", "ruins of Joppa", "Rust Wells", "Rusted Archway", "Six Day Stilt", "Stiltgrounds", "the hydropon", "Thin World", "Tomb of the Eaters", "Trembling Dunes", "waterlogged tunnel", "Yd Freehold"];
const factionArr = ["Children of Mamon", "Consortium of Phyta", "Chavvah", "Cult of the Coiled Lamb", "Daughters of Exile", "dromad merchants", "cannibals", "Barathrumites", "Farmer's Guild", "Fellowship of Wardens", "Glow-Wights", "grazing hedonists", "Gyre wights", "hindren of Bey Lah", "Issachari tribe", "Mechanamists", "Merchants' Guild", "Naphtaali tribe", "pariahs", "Putus Templar", "Seekers of the Sightless Way", "Sultan cult", "water barons"];
const affinityArr = ["friendly", "neutral", "hostile"];
const healthStatusArr = ["Perfect", "Fine", "Injured", "Wounded", "Badly Wounded"];
const statusEffectsArr = ["asleep", "blind", "cleaved", "confused", "covered in liquid", "dazed", "deep dreaming", "dioriented", "emboldened", "frenzied", "frozen", "gleaming", "greased", "hobbled", "inspired", "lost", "lovesick", "mutating", "overburdened", "paralyzed", "phased", "phosphorescent", "prone", "proselytized", "psionocially cleaved", "shaken", "shamed", "shimmering", "sitting", "sluggish", "sprinting", "stained by liquid", "stuck", "stunned", "stunned by gas", "submerged", "syphoned", "terrified", "wakeful"];
const difficultyArr = ["Easy", "Average", "Tough", "Very Tough", "Impossible"];

const characterFactory = (gender, pronouns, calling, limbType, location, faction, affinity, healthStatus, statusEffects, difficulty) => {
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

        generateTitle() {
            const title = `${this.calling}`;
        },

        generateDifficulty() {
            return `${titleCase(this.affinity)}, ${titleCase(difficulty)}`;
        }

    }
}