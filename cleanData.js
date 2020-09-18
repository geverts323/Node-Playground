exports.cleanData = oneMon => {
    let cleanMon = {
        'name': oneMon['name'],
        'id': oneMon['id'],
        'order': oneMon['order'],
        'height': oneMon['height'],
        'stats': getStats(oneMon['stats']),
        'types': getMonTypes(oneMon['types']),
        'abilities': getMonAbil(oneMon['abilities']),
        'moves': getMonMoves(oneMon['moves']),
        'sprites': {
            'default_sprite': oneMon.sprites['front_default'],
            'shiny_sprite': oneMon.sprites['front_shiny'],
            'art': oneMon.sprites.other['official-artwork']['front_default']
        }

    }
    return cleanMon;
}

function getStats(monStats) {
    let cleanStats = {};
    for (i in monStats) {
        cleanStats[monStats[i].stat.name] = monStats[i].base_stat;
    }
    return cleanStats;
}

function getMonTypes(types) {
    let hasTwoTypes = types.length;

    if (hasTwoTypes > 1) {
        let monTypes = {
            'type1': types[0].type.name,
            'type2': types[1].type.name
        }
        return monTypes;
    }
    else {
        let monTypes = {
            'type1': types[0].type.name,
            'type2': 'null'
        }
        return monTypes;
    }
}

function getMonAbil(monAbil) {
    let cleanAbil = {
        'base': [],
        'hidden': []
    }
    for (i in monAbil) {
        if (monAbil[i].is_hidden) {
            cleanAbil.hidden.push(monAbil[i].ability.name);
        }
        else {
            cleanAbil.base.push(monAbil[i].ability.name);
        }
    }
    return cleanAbil;
}

function getMonMoves(monMoves) {
    let cleanMoves = [];
    for (i in monMoves) {
        let thisMove = monMoves[i]
        let cleanMove = {
            'name': thisMove.move.name,
            'level': thisMove.version_group_details[0].level_learned_at
        }
        cleanMoves.push(cleanMove);
    }
    return cleanMoves;
}

