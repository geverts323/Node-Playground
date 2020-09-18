const Clean = require('./cleanData');
const Pokedex = require('pokedex-promise-v2');
const fs = require('fs');

const P = new Pokedex();


function getSingleMon(monNum) {
    P.getPokemonByName(monNum)
        .then(function (response) {
            writeMon(Clean.cleanData(response));
        })
        .catch(function (error) {
            console.log('There was an ERROR: ', error);
        });
}

function writeMon(monData) { 
    fs.writeFile('./data/mon/gen8/' + monData.name + '.json', JSON.stringify(monData), function(err) {
        if (err) throw err;
        console.log('Saved Mon');
    });
}


for (let i = 810; i <= 893; i++) {
    getSingleMon(i);
}
