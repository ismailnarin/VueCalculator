<template>
	<div>
		<div class="editProductTitle">Ürünü Düzenle</div>
		<div class="editProductImg">
			<img :src="provideProduct.editProduct.image" alt="" />
		</div>
		<div class="editProduct"></div>
		<div class="editProduct">
			<label for="productName">Ürün Adı:</label
			><input
				type="text"
				name="productName"
				id="productName"
				class="text"
				:value="provideProduct.editProduct.title" />
		</div>
		<div class="editProduct">
			<label for="productPrice">Ürün Fiyatı:</label
			><input
				type="text"
				name="productPrice"
				id="productPrice"
				class="text"
				:value="provideProduct.editProduct.price" />
		</div>
		<div class="editProduct">
			<label for="productCriticalStock">Ürün Kritik Stoğu:</label
			><input
				type="text"
				name="productCriticalStock"
				id="productCriticalStock"
				class="text"
				:value="provideProduct.editProduct.criticalStock" />
		</div>
		<div class="editProduct">
			<label for="">Ürün Stoğu:</label
			><input
				type="text"
				name="productStock"
				id="productStock"
				class="text"
				:value="provideProduct.editProduct.stock" />
		</div>
		<div class="editProduct">
			<div>
				<button id="productEditSaveButton">Kaydet</button>
			</div>
			<div>
				<button
					id="productEditDeleteButton"
					@click="deleteProduct(provideProduct.editProduct.id)">
					Ürünü Sil
				</button>
			</div>
		</div>
	</div>
</template>
<style>
	.editProductTitle {
		text-align: center;
		font-size: 35px;
		font-weight: bolder;
		color: white;
		margin-bottom: 10px;
	}
	.editProductImg {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 0 10px 0;
	}
	.editProduct {
		border-bottom: 1px solid #ffffff91;
		padding: 10px 0px;
		color: white;
		display: flex;
	}
	.editProduct:last-child {
		flex-direction: column;
	}
	.editProduct label {
		width: 200px;
	}
	.editProduct input:focus {
		outline: none;
		border: 1px solid #9aff9387;
	}
	.editProduct input {
		color: white;
		width: 200px;
		text-align: center;
		padding: 10px 5px;
		background-color: transparent;
		border: 1px solid #ffffff45;
		border-radius: 20px;
	}
	#productEditSaveButton,
	#productEditDeleteButton {
		margin: 10px 0px;
		border: none;
		font-weight: bold;
		border-radius: 30px;
		display: flex;
		width: 100%;
		padding: 15px;
		text-align: center;
		justify-content: center;
		align-items: center;
		color: white;
		cursor: pointer;
		transition: all ease 0.5s;
	}
	#productEditDeleteButton {
		background-color: #ff000059;
	}
	#productEditSaveButton {
		background-color: #00ff0057;
	}
	#productEditSaveButton:hover {
		background-color: #2cb72c;
	}
	#productEditDeleteButton:hover {
		background-color: red;
		transition: all ease 0.5s;
	}
</style>
<script>
	import axios from "axios";
	export default {
		inject: ["provideProduct", "providePopUp"],
		methods: {
			deleteProduct(productId) {
				this.providePopUp.popUpStatus = false;
				axios.delete(`http://localhost:3000/product/${productId}`).then(() => {
					this.provideProduct.productData =
						this.provideProduct.productData.filter((i) => i.id !== productId);
					this.provideProduct.editProduct = "";
				});
			},
		},
		computed: {},
	};
</script>
