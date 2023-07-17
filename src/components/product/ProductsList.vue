<template>
	<div>
		<EditProductList />
	</div>
	<div class="productContainer">
		<div
			class="productCard"
			v-for="product in this.provideProduct.productData"
			:key="product.id">
			<div
				@click="editProduct(product)"
				v-if="this.provideProduct.editAllProduct"
				class="productEdit">
				<i class="fa fa-pencil" aria-hidden="true"></i>
			</div>
			<div class="productImage">
				<img :src="product.image" alt="" />
			</div>
			<div class="productTitle">
				{{ product.title }}
			</div>
			<div class="productPrice">{{ product.price }} TL</div>
		</div>
		<AddProduct />
	</div>
</template>
<style>
	.productPrice {
		font-size: 15px;
	}
	.productImage {
		height: 55%;
		display: flex;
		width: 100%;
		position: relative;
		margin-bottom: 10px;
	}
	.productImage img {
		object-fit: contain;
		width: 100%;
	}
	.productEdit {
		z-index: 90;
		padding: 5px;
		display: flex;
		position: absolute;
		top: 10px;
		right: 10px;
	}
	.productContainer {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.productCard {
		flex-direction: column;
		position: relative;
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
		font-size: 20px;
		font-weight: bold;
		color: white;
		cursor: pointer;
	}
</style>
<script>
	import AddProduct from "@/components/product/AddProduct";
	import EditProductList from "@/components/product/EditProductList";

	export default {
		components: {
			AddProduct,
			EditProductList,
		},
		inject: ["provideProduct", "providePopUp"],
		methods: {
			editProduct(product) {
				this.providePopUp.popUpStatus = true;
				this.providePopUp.popUpName = "EditProduct";
				this.provideProduct.editProduct = product;
			},
		},
	};
</script>
