function calculatorModule(){
  var memory = 0;
  var total = 0;

  function load(num){
    if(typeof num === "number"){
     total = num;
     return total;
    }else{
      throw new "error!";
    }
  }

  function getTotal(num){
    return total;
  }

  function add(num){
    if(typeof num === "number"){
      total += num;
      return total;
    }else{
      throw new "error!";
    }
  }

  function subtract(num){
    if(typeof num === "number"){
     total -= num;
     return total;
   }else{
    throw new "error!";
   }
  }

  function multiply(num){
    if(typeof num === "number"){
      total *= num;
     return total;
   }else{
    throw new "error!";
   }
  }

  function divide(num){
    if(typeof num === "number"){
      total /= num;
      return total;
    }else{
      throw new "error!";
    }
  }

  function recallMemory(){
    return memory;
  }

  function saveMemory(){
    memory = total;
  }

  function clearMemory(){
    memory = 0;
  }


  return {
    load:load,
    getTotal:getTotal,
    add:add,
    subtract:subtract,
    multiply:multiply,
    divide:divide,
    recallMemory:recallMemory,
    saveMemory:saveMemory,
    clearMemory:clearMemory
  };

 }

 var calc = calculatorModule();