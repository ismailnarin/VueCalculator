<template>
	<div @click="addBeauty" class="addBeauty">+</div>
</template>
<style>
	.addBeauty {
		margin: 5px;
		width: 200px;
		height: 200px;
		display: flex;
		background-color: white;
		background: linear-gradient(
			62deg,
			rgba(113, 111, 180, 1) 0%,
			rgba(42, 162, 181, 0.47942927170868344) 50%,
			rgba(113, 111, 180, 1) 100%
		);
		border-radius: 25px;
		align-items: center;
		justify-content: center;
		font-size: 100px;
		font-weight: bold;
		color: white;
		cursor: pointer;
	}
</style>
<script>
	export default {
		inject: ["providePopUp"],
		methods: {
			addBeauty() {
				this.providePopUp.popUpName = "AddBeauty";
				this.providePopUp.popUpStatus = true;
			},
		},
	};
</script>
