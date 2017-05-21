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

var targetButton = document.getElementsByClassName("button");

// console.log(targetButton[1]);

for(var i = 0; i < targetButton.length; i++){
  console.log(targetButton[i])
}

var buttonNames = ["target7", "target8", "target9", "target%", "targetClear", "target4", "target5", "target6", "targetX", "targetGetBalance", "target1", "target2", "target3", "target-", "targetWithdrawCash", "target0", "target00", "target.", "target+", "target="];
function addNames(array) {
  for(var i = 0; i < array.length; i++){
    targetButton[i].id = array[i];
  }
}
addNames(buttonNames);

calculator.add




