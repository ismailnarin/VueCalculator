<template>
	<div>
		<div class="editBeautyTitle">İşlem Ekle</div>
		<div class="editBeautyImg">
			<!-- <img :src="provideBeauty.editBeauty.image" alt="" /> -->
			<input
				type="file"
				id="BeautyFile"
				class=""
				ref="fileInput"
				@change="onFileChange"
				hidden />
			<label for="BeautyFile"
				><i class="fa fa-camera" aria-hidden="true"></i
			></label>
		</div>
		<div class="editBeauty"></div>
		<div class="editBeauty">
			<label for="BeautyName">İşlem Adı:</label
			><input
				v-model="addBeautyItem.beautyName"
				type="text"
				name="beautyName"
				id="beautyName"
				required />
		</div>
		<div class="editBeauty">
			<label for="beautyPrice">İşlem Fiyatı:</label
			><input
				v-model="addBeautyItem.beautyPrice"
				type="number"
				name="beautyPrice"
				id="beautyPrice"
				required />
		</div>
		<div class="editBeauty">
			<input
				type="number"
				name="beautyCriticalStock"
				id="beautyCriticalStock"
				v-model="addBeautyItem.beautyCriticalStock"
				required />
			<label for="beautyPrice">İşlem Se</label>
			<select>
				<option v-for="i in 20" :key="i">{{ i }}</option>
			</select>
		</div>
		<div class="editBeauty">
			<label for="">Ürün Stoğu:</label
			><input
				type="number"
				name="beautyStock"
				id="beautyStock"
				v-model="addBeautyItem.beautyStock"
				required />
		</div>
		<div class="editBeauty">
			<div>
				<button type="submit" id="beautyEditSaveButton" @click="addBeauty">
					Kaydet
				</button>
			</div>
		</div>
	</div>
</template>
<style>
	.editBeautyTitle {
		text-align: center;
		font-size: 35px;
		font-weight: bolder;
		color: white;
		margin-bottom: 10px;
	}
	.editBeautyImg {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 0 10px 0;
	}
	.editBeauty {
		border-bottom: 1px solid #ffffff91;
		padding: 10px 0px;
		color: white;
		display: flex;
	}
	.editBeauty {
		display: flex;
	}
	.editBeauty:last-child {
		flex-direction: column;
	}
	.editBeauty label {
		display: flex;
		align-content: center;
		align-items: center;
	}
	.editBeauty input:focus {
		outline: none;
		border: 1px solid #9aff9387;
	}
	.editBeauty input {
		color: white;
		width: 200px;
		text-align: center;
		padding: 10px 5px;
		background-color: transparent;
		border: 1px solid #ffffff45;
		border-radius: 20px;
	}
	#beautyEditSaveButton,
	#beautyEditDeleteButton {
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
	#beautyEditDeleteButton {
		background-color: #ff000059;
	}
	#beautyEditSaveButton {
		background-color: #00ff0057;
	}
	#beautyEditSaveButton:hover {
		background-color: #2cb72c;
	}
	#beautyEditDeleteButton:hover {
		background-color: red;
		transition: all ease 0.5s;
	}
</style>
<script>
	import axios from "axios";
	export default {
		data() {
			return {
				addBeautyItem: {
					beautyName: "",
					beautyPrice: "",
					beautyCriticalStock: "",
					beautyStock: "",
					beautyImage: "",
				},
			};
		},
		methods: {
			onFileChange(event) {
				const file = event.target.files[0];
				this.addBeautyItem.beautyImage = file;
			},

			async addBeauty() {
				let error = { counter: 0, name: "" };
				for (const [key, value] of Object.entries(this.addBeautyItem)) {
					if (value == "" && key !== "beautyImage") {
						error.counter += 1;
						error.name = key;
						break;
					}
				}
				if (error.counter == 0) {
					// this.providePopUp.popUpStatus = false;
					const saveObject = {
						title: this.addBeautyItem.beautyName,
						created_at: new Date(),
						price: this.addBeautyItem.beautyPrice,
						image: "https://placehold.co/300x300",
						stock: this.addBeautyItem.beautyStock,
						criticalStock: this.addBeautyItem.beautyCriticalStock,
					};
					await axios.post("http://localhost:3000/beauty", saveObject);
					axios.get("http://localhost:3000/beauty").then((items_response) => {
						this.provideBeauty.beautyData = items_response.data || [];
						this.providePopUp.popUpStatus = false;
					});
				} else {
					alert(`Lütfen ${error.name} Değerini Giriniz`);
				}
			},
		},
		inject: ["provideBeauty", "providePopUp"],
	};
</script>
