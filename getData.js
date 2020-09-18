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
    fs.writeFile('./data/mon/genOne.json', JSON.stringify(monData), function(err) {
        if (err) throw err;
        console.log('Saved Mon');
    });
}

let array = []

for (let i = 1; i <= 10; i++) {
    array.push(getSingleMon(i))
}

writeMon(array);
