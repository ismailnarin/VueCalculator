<template>
  <div ref="calculatorScreen" class="calculatorScreen"></div>
  <div class="calculatorContainer">
    <div class="calculatorNumbers">
      <div class="calculatorNumberItem">AC</div>
      <div class="calculatorNumberItem">%</div>
      <div v-for="number in calculateNumbers" :key="number" @click="addNumber" class="calculatorNumberItem">{{ number }}</div>
    </div>
    <div class="calculatorOperators">
      <div class="calculatorOperatorItems">+</div>
      <div class="calculatorOperatorItems">-</div>
      <div class="calculatorOperatorItems">/</div>
      <div class="calculatorOperatorItems">x</div>
      <div class="calculatorOperatorItems">=</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
  return {
    screenNumber:"",
    calculateNumbers: [1,2,3,4,5,6,7,8,9,0,","]
  }
},
methods: {
  addNumber(event){
    var buttonText = event.target.textContent;
    this.screenNumber += buttonText.toString();
  },
},
watch:{
  screenNumber(){
    const calculatorScreen=this.$refs.calculatorScreen;
    calculatorScreen.textContent=this.screenNumber;
  }
}
};
</script>
