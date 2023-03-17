const cats = ["Milo", "Otis", "Garfield"];
cats.length = 0;
function destructivelyAppendCat(name) {
cats.push('Ralph');}
function destructivelyPrependCat(name) {
cats.unshift('Bob');}
function destructivelyRemoveLastCat(name){
cats.pop('Garfield')}
cats;
function destructivelyRemoveFirstCat(name){
cats.shift('Milo')}
function appendCat(name){
    const newCats=[...cats,name];
    return newCats;
}
function prependCat(name){
    const newCats=[name,...cats];
    return newCats;
}
function removeLastCat() {
    const cats3=cats.slice(0,-1)
    return cats3
}
function removeFirstCat() {
    const cats4=cats.slice(1)
    return cats4
}
12:16

