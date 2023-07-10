<template>
  <div ref="calculatorScreen" class="calculatorScreen"></div>
  <div class="calculatorContainer">
    <div class="calculatorNumbers">
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
    screenNumber:"",
    calculateNumbers: ["AC","%",1,2,3,4,5,6,7,8,9,0,","],
    operators:["+","-","/","x","="]
  }
},
methods: {
  addNumber(event){
    var buttonText = event.target.textContent;
    (buttonText=="AC" || buttonText=="%") ? buttonText="":this.screenNumber += buttonText.toString();
  },
  addOperator(event){
    console.log(event);
  }
},
watch:{
  screenNumber(){
    const calculatorScreen=this.$refs.calculatorScreen;
    calculatorScreen.textContent=this.screenNumber;
  },
}
};
</script>
