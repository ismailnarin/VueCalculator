<template>
	<div class="calculatorScreen">{{ provideData.screenResult }}</div>
</template>
<script>
	export default{
		inject:["provideData"],
	}
</script>