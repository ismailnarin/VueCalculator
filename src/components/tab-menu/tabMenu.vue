<template>
	<div class="tabMenu">
		<div
			class="tabMenuItem"
			@click="provideTabMenu.tabMenuName = 'ProductList'">
			Ürünler
		</div>
		<div
			class="tabMenuItem"
			@click="provideTabMenu.tabMenuName = 'BeautyServices'">
			İşlemler
		</div>
	</div>
</template>
<style>
	.tabMenu {
		display: flex;
		color: white;
	}
	.tabMenuItem {
		border-radius: 10px;
		font-weight: bolder;
		margin: 10px;
		padding: 10px;
		background: linear-gradient(
			62deg,
			rgb(147 147 151) 0%,
			rgba(42, 162, 181, 0.47942927170868344) 50%,
			rgb(171 170 205) 100%
		);
		display: flex;
		cursor: pointer;
	}
</style>
<script>
	export default {
		inject: ["provideTabMenu"],
	};
</script>
