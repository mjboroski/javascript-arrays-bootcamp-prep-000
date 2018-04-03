var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array2=array.unshift(element);
  return array2;
}
function addElementToEndOfArray (array, element){
  var array
  array.push(element);
}
function destructivelyAddElementToEndOfArray(array, element){
  var array
  [...array, element];

}
