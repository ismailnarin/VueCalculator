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
		background: radial-gradient(
			circle,
			rgba(63, 94, 251, 1) 0%,
			rgba(252, 70, 107, 1) 100%
		);
	}
	.tabMenuItem {
		border-radius: 10px;
		font-weight: bolder;
		margin: 10px;
		padding: 10px;
		display: flex;
		cursor: pointer;
	}
</style>
<script>
	export default {
		inject: ["provideTabMenu"],
	};
</script>
