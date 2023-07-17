<template>
	<div class="calculatorScreen">
		<div>
			{{ provideData.screenResult == "" ? 0 : provideData.screenResult }}
		</div>
		<div>{{ provideData.screenOperator }}</div>
		<div>{{ provideData.screenFirstNumber }}</div>
	</div>
</template>
<script>
	export default {
		inject: ["provideData"],
	};
</script>
<style>
	.calculatorScreen {
		font-family: monospace;
		font-size: 100px;
		display: flex;
		width: 100%;
		height: 300px;
		color: white;
		flex-direction: column;
	}
	.calculatorScreen div:nth-child(2),
	.calculatorScreen div:nth-child(3) {
		font-size: 50px;
		color: aliceblue;
	}
</style>
