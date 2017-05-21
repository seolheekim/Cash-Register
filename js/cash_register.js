var rowArray1 = ["[ 7 ]", "[ 8 ]", "[ 9 ]", "[ % ]", "[ Clear ]"];
var rowArray2 = ["[ 4 ]", "[ 5 ]", "[ 6 ]", "[ x ]", "[ Get Balance ]"];
var rowArray3 = ["[ 1 ]", "[ 2 ]", "[ 3 ]", "[ - ]", "[ Withdraw Cash ]" ];
var rowArray4 = [" [ 0 ] ", " [ 00 ] ", " [ . ] ", " [ + ] "];
var rowArray5 = [" [ = ] "];

var targetRow1 = document.getElementsByClassName("row1");
var targetRow2 = document.getElementsByClassName("row2");
var targetRow3 = document.getElementsByClassName("row3");
var targetRow4 = document.getElementsByClassName("row4");
var targetRow5 = document.getElementsByClassName("row5");

var targetButton = document.getElementsByClassName("button");

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

function addButton(target, doSomething){
  target.addEventListener('click', doSomething)
}

var targetDisplay = document.getElementById("display");

var displayArray = [];
var calcArr = 0;

function action7(){
  displayArray.push(7);
  calcArr = displayArray.join("");
  targetDisplay.innerHTML = calcArr;
  displayArray.join("");
}

function action8(){
  displayArray.push(8);
  calcArr = displayArray.join("");
  targetDisplay.innerHTML = calcArr;
  displayArray.join("");
}

function actionPlus(){
  var num1 = Number(calcArr);
  calculator.add(num1);
  calcArr = calculator.getTotal();
  displayArray = [];
  targetDisplay.innerHTML = calcArr;
}

function actionSubtract(){
  var num1 = Number(calcArr);
  calculator.subtract(num1);
  calcArr = calculator.getTotal();
  displayArray = [];
  targetDisplay.innerHTML = calcArr;
}

function actionEqual(){
  console.log(displayArray);
  console.log(calcArr);
}


addButton(target7, action7);
addButton(target8, action8);
addButton(targetPlus, actionPlus);
addButton(targetSubtract, actionSubtract);
addButton(targetEqual, actionEqual);
