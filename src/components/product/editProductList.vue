<template>
	<div
		class="productEditIco"
		@click="provideProduct.editAllProduct = !provideProduct.editAllProduct">
		<span><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
	</div>
</template>
<style>
	.productEditIco {
		display: flex;
		color: white;
		font-size: 35px;
		flex-direction: column;
		align-items: flex-start;
	}
	.productEditIco span {
		cursor: pointer;
	}
</style>
<script>
	export default {
		inject: ["provideProduct"],
	};
</script>
