// Creates buttons and layout START------------------------------------------------->
var targetRow1 = document.getElementsByClassName("row1");
var targetRow2 = document.getElementsByClassName("row2");
var targetRow3 = document.getElementsByClassName("row3");
var targetRow4 = document.getElementsByClassName("row4");
var targetRow5 = document.getElementsByClassName("row5");

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

var targetButton = document.getElementsByClassName("button");

var buttonNames = ["target7", "target8", "target9", "targetDivide", "targetClear", "target4", "target5", "target6", "targetMultiply", "targetGetBalance", "target1", "target2", "target3", "targetSubtract", "targetWithdrawCash", "target0", "target00", "targetPeriod", "targetAdd", "targetEqual"];
function addNames(array) {
  for(var i = 0; i < array.length; i++){
    targetButton[i].id = array[i];
  }
}
addNames(buttonNames);
// Creates buttons and layout END^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^>


var targetDisplay = document.querySelector("#display");//Creating targets for recently created HTML IDs and Classes
targetDisplay.innerHTML = 0;

var target1 = document.getElementById("target1");
var target2 = document.getElementById("target2");
var target3 = document.getElementById("target3");
var target4 = document.getElementById("target4");
var target5 = document.getElementById("target5");
var target6 = document.getElementById("target6");
var target7 = document.getElementById("target7");
var target8 = document.getElementById("target8");
var target9 = document.getElementById("target9");
var targetAdd = document.getElementById("targetAdd");
var targetSubtract = document.getElementById("targetSubtract");
var targetMultiply = document.getElementById("targetMultiply");
var targetEqual = document.getElementById("targetEqual");


var cashRegister = (function(){ //CASH REGISTER MODULE START-------------------------->

  var displayCount = 0;
  var displayArr = [];
  var total = 0;
  var temp = 0;
  var lastOperation = "";

  var action1 = function(){
    displayArr.push(1);
    targetDisplay.innerHTML = displayArr.join("");
  };
  var action2 = function(){
    displayArr.push(2);
    targetDisplay.innerHTML = displayArr.join("");
  };
  var action3 = function(){
    displayArr.push(3);
    targetDisplay.innerHTML = displayArr.join("");
  };
  var action4 = function(){
    displayArr.push(4);
    targetDisplay.innerHTML = displayArr.join("");
  };
  var action5 = function(){
    displayArr.push(5);
    targetDisplay.innerHTML = displayArr.join("");
  };
  var action6 = function(){
    displayArr.push(6);
    targetDisplay.innerHTML = displayArr.join("");
  };
  var action7 = function(){
    displayArr.push(7);
    targetDisplay.innerHTML = displayArr.join("");
  };
  var action8 = function(){
    displayArr.push(8);
    targetDisplay.innerHTML = displayArr.join("");
  };
  var action9 = function(){
    displayArr.push(9);
    targetDisplay.innerHTML = displayArr.join("");
  };
  var action0 = function(){
    displayArr.push(0);
    targetDisplay.innerHTML = displayArr.join("");
  };
  var actionAdd = function(){
    temp = Number(targetDisplay.innerHTML);
    displayArr = [];
    lastOperation = "add";
  };
  var actionSubtract = function(){
    temp = Number(targetDisplay.innerHTML);
    displayArr = [];
    lastOperation = "subtract";
  };
  var actionMultiply = function(){
    temp = Number(targetDisplay.innerHTML);
    displayArr = [];
    lastOperation = "multiply";
  };
  var actionEqual = function(){
    if (lastOperation === "add"){
      calc.add(temp);
      calc.add(Number(targetDisplay.innerHTML));
      targetDisplay.innerHTML = calc.getTotal();
      displayArr = [];
      temp = 0;
      calc.load(0);
    } else if (lastOperation === "subtract"){
      calc.load(temp);
      calc.subtract(Number(targetDisplay.innerHTML));
      targetDisplay.innerHTML = calc.getTotal();
      displayArr = [];
      temp = 0;
      calc.load(0);
    } else if (lastOperation === "multiply"){
      calc.load(temp);
      calc.multiply(Number(targetDisplay.innerHTML));
      targetDisplay.innerHTML = calc.getTotal();
      displayArr = [];
      temp = 0;
      calc.load(0);
    }
  };

  return {
    action1 : action1,
    action2 : action2,
    action3 : action3,
    action4 : action4,
    action5 : action5,
    action6 : action6,
    action7 : action7,
    action8 : action8,
    action9 : action9,
    action0 : action0,
    actionAdd : actionAdd,
    actionSubtract : actionSubtract,
    actionMultiply : actionMultiply,
    actionEqual : actionEqual


  };
});

var register = cashRegister();

//CASH REGISTER MODULE END ---------------------------------------------------------->



function addClick(target, doSomething){
  target.addEventListener("click", doSomething);
}

addClick(target1, register.action1); //Adding button events AND corresponding functions
addClick(target2, register.action2);
addClick(target3, register.action3);
addClick(target4, register.action4);
addClick(target5, register.action5);
addClick(target6, register.action6);
addClick(target7, register.action7);
addClick(target8, register.action8);
addClick(target9, register.action9);
addClick(target0, register.action0);
addClick(targetAdd, register.actionAdd);
addClick(targetSubtract, register.actionSubtract);
addClick(targetMultiply, register.actionMultiply);
addClick(targetEqual, register.actionEqual);


