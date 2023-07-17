<template>
	<div>
		<div class="editProductTitle">Ürünü Ekle</div>
		<div class="editProductImg">
			<!-- <img :src="provideProduct.editProduct.image" alt="" /> -->
			<input
				type="file"
				id="productFile"
				class=""
				ref="fileInput"
				@change="onFileChange"
				hidden />
			<label for="productFile"
				><i class="fa fa-camera" aria-hidden="true"></i
			></label>
		</div>
		<div class="editProduct"></div>
		<div class="editProduct">
			<label for="productName">Ürün Adı:</label
			><input
				v-model="addProductItem.productName"
				type="text"
				name="productName"
				id="productName"
				required />
		</div>
		<div class="editProduct">
			<label for="productPrice">Ürün Fiyatı:</label
			><input
				v-model="addProductItem.productPrice"
				type="number"
				name="productPrice"
				id="productPrice"
				required />
		</div>
		<div class="editProduct">
			<label for="productCriticalStock">Ürün Kritik Stoğu:</label
			><input
				type="number"
				name="productCriticalStock"
				id="productCriticalStock"
				v-model="addProductItem.productCriticalStock"
				required />
		</div>
		<div class="editProduct">
			<label for="">Ürün Stoğu:</label
			><input
				type="number"
				name="productStock"
				id="productStock"
				v-model="addProductItem.productStock"
				required />
		</div>
		<div class="editProduct">
			<div>
				<button type="submit" id="productEditSaveButton" @click="addProduct">
					Kaydet
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
	.editProduct {
		display: flex;
	}
	.editProduct:last-child {
		flex-direction: column;
	}
	.editProduct label {
		display: flex;
		align-content: center;
		align-items: center;
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
		data() {
			return {
				addProductItem: {
					productName: "",
					productPrice: "",
					productCriticalStock: "",
					productStock: "",
					productImage: "",
				},
			};
		},
		methods: {
			onFileChange(event) {
				const file = event.target.files[0];
				this.addProductItem.productImage = file;
			},

			async addProduct() {
				let error = { counter: 0, name: "" };
				for (const [key, value] of Object.entries(this.addProductItem)) {
					if (value == "" && key !== "productImage") {
						error.counter += 1;
						error.name = key;
						break;
					}
				}
				if (error.counter == 0) {
					// this.providePopUp.popUpStatus = false;
					const saveObject = {
						title: this.addProductItem.productName,
						created_at: new Date(),
						price: this.addProductItem.productPrice,
						image: "https://placehold.co/300x300",
						stock: this.addProductItem.productStock,
						criticalStock: this.addProductItem.productCriticalStock,
					};
					await axios.post("http://localhost:3000/product", saveObject);
					axios.get("http://localhost:3000/product").then((items_response) => {
						this.provideProduct.productData = items_response.data || [];
						this.providePopUp.popUpStatus = false;
					});
				} else {
					alert(`Lütfen ${error.name} Değerini Giriniz`);
				}
			},
		},
		inject: ["provideProduct", "providePopUp"],
	};
</script>
