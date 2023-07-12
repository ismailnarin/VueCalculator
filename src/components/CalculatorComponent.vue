<template>
	<div class="calculatorContainer">
		<div class="calculatorNumbers">
			<div @click="addOperator" key="AC" class="calculatorNumberItem">AC</div>
			<div @click="addOperator" key="%" class="calculatorNumberItem">%</div>
			<div
				v-for="number in calculateNumbers"
				:key="number"
				@click="addNumber"
				class="calculatorNumberItem">
				{{ number }}
			</div>
		</div>
		<div class="calculatorOperators">
			<div
				v-for="operator in operators"
				:key="operator"
				@click="addOperator"
				class="calculatorOperatorItems">
				{{ operator }}
			</div>
		</div>
	</div>
</template>
<style>
	.calculatorContainer {
		display: flex;
		width: 60%;
	}
	.calculatorNumbers {
		grid-template-columns: repeat(3, 100px);
		display: grid;
		gap: 10px;
		grid-template-rows: repeat(5, 100px);
	}
	.calculatorNumberItem {
		user-select: none;
		cursor: pointer;
		font-weight: 600;
		color: white;
		border-radius: 50px;
		display: flex;
		background-color: #2f2f2f;
		justify-content: center;
		align-items: center;
		font-size: 25px;
	}
	.calculatorNumberItem:hover {
		background-color: #3b3b3b;
	}
	.calculatorNumberItem:nth-last-child(2) {
		grid-column-start: 1;
		grid-column-end: 3;
	}
	.calculatorNumberItem:nth-child(1) {
		grid-column-start: 1;
		grid-column-end: 3;
	}

	.calculatorNumberItem:nth-child(1),
	.calculatorNumberItem:nth-child(2) {
		background-color: #838383;
	}

	.calculatorOperators {
		margin-left: 10px;
		color: white;
		grid-template-columns: repeat(1, 100px);
		grid-template-rows: repeat(1, 100px);
		display: grid;
		gap: 10px;
	}
	.calculatorOperatorItems {
		display: flex;
		background-color: orange;
		justify-content: center;
		align-items: center;
		border-radius: 50px;
		font-size: 30px;
		font-weight: bold;
		cursor: pointer;
		user-select: none;
	}
</style>
<script>
	export default {
		data() {
			return {
				calculateNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."],
				operators: ["+", "-", "/", "x", "="],
				firstNumber: "",
				secondNumber: "",
				buttonOperator: "",
				result: "",
				operatorCounter: 0,
			};
		},
		methods: {
			addNumber(event) {
				if (this.operatorCounter > 0 && this.firstNumber !== "") {
					this.operatorCounter = 0;
					this.provideData.screenResult = "";
				}
				var buttonText = event.target.textContent;
				this.provideData.screenResult += buttonText.toString();
			},
			addOperator(event) {
				this.operatorCounter++;
				if (event.target.textContent == "AC") {
					this.buttonOperator = "";
					this.result = "";
					this.provideData.screenResult = "";
					this.firstNumber = "";
					this.secondNumber = "";
				} else {
					if (this.firstNumber == "") {
						this.firstNumber = this.provideData.screenResult;
						if (this.firstNumber !== "") {
							this.buttonOperator = event.target.textContent;
						}
					} else if (
						this.firstNumber !== "" &&
						this.secondNumber == "" &&
						this.operatorCounter == 1
					) {
						this.secondNumber = this.provideData.screenResult;
						this.mathProcess(
							this.firstNumber,
							this.secondNumber,
							this.buttonOperator
						);
					}
					console.log(this.firstNumber !== "");
					console.log(this.secondNumber !== "");
					if (this.firstNumber !== "") {
						this.buttonOperator = event.target.textContent;
					}
					this.provideData.screenResult = "";
				}
			},

			mathProcess(firstNumber, secondNumber, operator) {
				switch (operator) {
					case "+":
						this.result = parseFloat(firstNumber) + parseFloat(secondNumber);
						break;
					case "-":
						this.result = parseFloat(firstNumber) - parseFloat(secondNumber);
						break;
					case "x":
						this.result = parseFloat(firstNumber) * parseFloat(secondNumber);
						break;
					case "/":
						this.result = parseFloat(firstNumber) / parseFloat(secondNumber);
						break;
					case "%":
						this.result =
							parseFloat(firstNumber) -
							parseFloat(firstNumber) * (parseFloat(secondNumber) / 100);
						break;
					case "=":
						this.buttonOperator = "";
						this.result = this.provideData.screenResult;
						break;
				}
				this.secondNumber = "";
				this.firstNumber = this.result;
				this.provideData.screenResult = this.result;
				this.result = "";
			},
		},
		inject: ["provideData"],
		watch: {
			firstNumber() {
				this.provideData.screenFirstNumber = this.firstNumber;
			},
			buttonOperator() {
				console.log("calisti");
				this.provideData.screenOperator = this.buttonOperator;
			},
		},
	};
</script>
