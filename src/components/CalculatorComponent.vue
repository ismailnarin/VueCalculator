<template>
  <div ref="calculatorScreen" class="calculatorScreen"></div>
  <div class="calculatorContainer">
    <div class="calculatorNumbers">
      <div @click="addOperator" key="AC" class="calculatorNumberItem">AC</div>
      <div @click="addOperator" key="%" class="calculatorNumberItem">%</div>
      <div v-for="number in calculateNumbers" :key="number" @click="addNumber" class="calculatorNumberItem">{{ number }}</div>
    </div>
    <div class="calculatorOperators">
      <div v-for="operator in operators" :key="operator" @click="addOperator" class="calculatorOperatorItems">{{ operator }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
  return {
    screenResult:"",
    calculateNumbers: [1,2,3,4,5,6,7,8,9,0,","],
    operators:["+","-","/","x","="],
    firstNumber:null,
    secondNumber:null,
    buttonOperator:null,
    result:null,
    operatorCounter:0,
  }
},
methods: {
  addNumber(event){
    if(this.operatorCounter>0 && this.firstNumber!==null){
      this.operatorCounter=0;
      this.screenResult=""
    }
    var buttonText = event.target.textContent;
    this.screenResult += buttonText.toString();
  },
  addOperator(event){
    this.operatorCounter++;
    if(event.target.textContent=="AC"){
      this.buttonOperator=null;
      this.result=null;
      this.screenResult="";
      this.firstNumber=null;
      this.secondNumber=null;
    }
    else{
      if(this.firstNumber==null){
        var buttonText=event.target.textContent;
        this.buttonOperator = buttonText;
        this.firstNumber=this.screenResult;
      }
      else if(this.firstNumber!==null && this.secondNumber ==null && this.operatorCounter==1){
        this.secondNumber = this.screenResult;
        this.mathProcess(this.firstNumber, this.secondNumber, this.buttonOperator);
      }
      this.buttonOperator=event.target.textContent;
    }
  },

  mathProcess(firstNumber,secondNumber,operator){
    switch (operator) {
      case "+":
        this.result = parseFloat(firstNumber)+parseFloat(secondNumber);
        break;
      case "-":
        this.result = parseFloat(firstNumber)-parseFloat(secondNumber);
        break;
      case "x":
        this.result = parseFloat(firstNumber)*parseFloat(secondNumber);
        break;
      case "/":
        this.result = parseFloat(firstNumber)/parseFloat(secondNumber);
        break;
      case "%":
        this.result = parseFloat(firstNumber)-(parseFloat(firstNumber)*(parseFloat(secondNumber)/100));
        break;
      case "=":
        this.buttonOperator=null;
        this.result=this.screenResult;
        break;
    }
    this.secondNumber=null;
    this.firstNumber=this.result;
    this.screenResult=this.result;
    this.result=null;
  }
},
watch:{
  screenResult(){
    const calculatorScreen=this.$refs.calculatorScreen;
    calculatorScreen.textContent=this.screenResult;
  },
}
};
</script>
