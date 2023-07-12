<template>
	<div>
		<AmoundPaid />
		<CalculatorComponent />
	</div>
</template>
<script>
	import CalculatorComponent from "@/components/CalculatorComponent";
	import AmoundPaid from "@/components/AmoundPaid";
	export default {
		data() {
			return {
				screen: {
					screenResult: "",
					screenFirstNumber: "",
					screenOperator: "",
				},
			};
		},
		components: {
			CalculatorComponent,
			AmoundPaid,
		},
		provide() {
			return {
				provideData: this.screen,
			};
		},
	};
</script>
