//This function generates a randomized, three word username in the form adverb-adjective-noun

function mkname() {

//Database of random words to choose from 
const nouns = ["jelly", "glass", "lettuce", "turkey", "glove", "surprise", "plant", "asteroid", "galaxy", "nebula", "neutron", "proton", "electron", "flare", "blunt", "comet", "corona"];

const adj = ["boiled", "petite", "fresh", "fuschia", "ludicrous", "disastrous", "bewildered", "cloudy", "holistic", "glossy", "fluffy", "abiding", "rolled"];

const adv = ["keenly", "majestically", "overconfidently", "questionably", "brightly", "utterly", "simply", "almost", "fataly", "fiercely"];

//Generate 3 random numbers. For each array we need a whole number between 0 and Array.length()
const getRand = (arr) => Math.floor( Math.random() * arr.length );
let seeds = [getRand(adv), getRand(adj), getRand(nouns)];
//Use the random numbers to pick one value from each array. Concatenate the three words with a dash "-"
    //let username = `${}-${}-${}`;
    //Return value is a string of form {adverb}-{adjective}-{noun}
    return `${adv[seeds[0]]}-${adj[seeds[1]]}-${nouns[seeds[2]]}`;
}

console.log(mkname());