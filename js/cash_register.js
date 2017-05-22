//target IDs and classes------------------------------------------------------------
var targetRow1 = document.getElementsByClassName("row1");
var targetRow2 = document.getElementsByClassName("row2");
var targetRow3 = document.getElementsByClassName("row3");
var targetRow4 = document.getElementsByClassName("row4");
var targetRow5 = document.getElementsByClassName("row5");

var target1 = document.getElementById("target1");
var target2 = document.getElementById("target2");
var target3 = document.getElementById("target3");
var target4 = document.getElementById("target4");
var target5 = document.getElementById("target5");
var target6 = document.getElementById("target6");
var target7 = document.getElementById("target7");
var target8 = document.getElementById("target8");
var target9 = document.getElementById("target9");
var targetButton = document.getElementsByClassName("button");

var targetDisplay = document.querySelector("#display");
//target IDs and classes^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-

var rowArray1 = ["[ 7 ]", "[ 8 ]", "[ 9 ]", "[ % ]", "[ Clear ]"];
var rowArray2 = ["[ 4 ]", "[ 5 ]", "[ 6 ]", "[ x ]", "[ Get Balance ]"];
var rowArray3 = ["[ 1 ]", "[ 2 ]", "[ 3 ]", "[ - ]", "[ Withdraw Cash ]" ];
var rowArray4 = [" [ 0 ] ", " [ 00 ] ", " [ . ] ", " [ + ] "];
var rowArray5 = [" [ = ] "];


function addRow(rowArray, rowTarget) {
  for(var i = 0; i < rowArray.length; i++){
    var createButton = document.createElement("div");
    createButton.className = "button";
    createButton.innerHTML = rowArray[i];
    rowTarget[0].appendChild(createButton);
  }
}

addRow(rowArray1, targetRow1);
addRow(rowArray2, targetRow2);
addRow(rowArray3, targetRow3);
addRow(rowArray4, targetRow4);
addRow(rowArray5, targetRow5);

var buttonNames = ["target7", "target8", "target9", "targetDivide", "targetClear", "target4", "target5", "target6", "targetTimes", "targetGetBalance", "target1", "target2", "target3", "targetSubtract", "targetWithdrawCash", "target0", "target00", "targetPeriod", "targetPlus", "targetEqual"];
function addNames(array) {
  for(var i = 0; i < array.length; i++){
    targetButton[i].id = array[i];
  }
}
addNames(buttonNames);
// Creates buttons and layout ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



var cashRegister = function(){ //CASH REGISTER MODULE

  var displayCount = 0;
  var displayArr = [];
  var total = 0;
  var memory = 0;
  var lastOperation = "";

  var displayNum = function(num){
    displayArr.push(num);
    targetDisplay.innerHTML = displayArr.join("");
  };





  return {
    displayNum : displayNum



  };
};

var register = cashRegister();

function addClick(target, doSomething){
  target.addEventListener("click", doSomething);
}










