// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
console.log(kittens)

function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop(name)
}
function appendKitten(name){
  kittens.append(name)
}
