// Write your solution here!
const cats =[ "Milo","Otis","Garfield"]
 function destructivelyAppendCat (Ralph){
cats.push(Ralph)
 }
 function destructivelyPrependCat(Bob) {
    cats.unshift(Bob)  
 }
 function destructivelyRemoveLastCat(Garfield) {
   cats.pop(Garfield) 
 }
 function destructivelyRemoveFirstCat(Bob) {
    cats.shift(Bob)
 }
 function appendCat(Arnold) {
    return [...cats, Arnold]; 
  }
  function prependCat(Arnold) {
    return [Arnold, ... cats]
  }
  function removeLastCat() {
    return cats.slice(0,-1);
  }
  function removeFirstCat() {
    return cats.slice(1)
  }