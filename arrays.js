var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  const test;
  test=array.unshift(element)
  return test;
}
function addElementToEndOfArray (array, element){
  var array
  array.push(element);
}
function destructivelyAddElementToEndOfArray(array, element){
  var array
  [...array, element];

}
