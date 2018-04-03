var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  var test = new Array();
  test=array;
  var test2=element
  test.unshift(test2);
  return test;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  var test = new Array();
  test=array;
  test[0]=element;
  array=test;
  return array;
}
function addElementToEndOfArray (array, element){
  var array
  array.push(element);
}
function destructivelyAddElementToEndOfArray(array, element){
  var array
  [...array, element];

}
