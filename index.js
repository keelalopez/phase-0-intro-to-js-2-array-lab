// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
};

function destructivelyPrependCat(name) {
    return cats.unshift(name);
};

function destructivelyRemoveLastCat(name) {
    return cats.pop();
};

function destructivelyRemoveFirstCat(name) {
    return cats.shift();
};

function appendCat (name) {
    let newCats = [...cats, name];
    return newCats;
};

function prependCat(name) {
    let newCats = [name, ...cats];
    return newCats
};

function removeLastCat() {
    return cats.slice(0, -1);
};

function removeFirstCat() {
    return cats.slice(1);
};
