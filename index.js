function receivesAFunction(thing) {
    thing()
}

function returnsANamedFunction() {
    return function returnsANamedFunction(){}
}

const returnsAnAnonymousFunction = function() {
    return function(){};
}