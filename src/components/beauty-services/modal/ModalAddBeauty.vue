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
			<label for="beautyPrice">İşlem Tek Seans Ücreti</label
			><input
				v-model="addBeautyItem.beautyPrice"
				type="number"
				name="beautyPrice"
				id="beautyPrice"
				required />
		</div>
		<div class="editBeauty">
			<div>
				<div class="openPackageContainer" style="">
					<label for="openPackage" style="cursor: pointer"
						>Paket Ücretlerini Aç</label
					>
					<input
						type="checkbox"
						name=""
						id="openPackage"
						hidden
						v-model="addBeautyItem.openPackageCheck" />
					<label for="openPackage" style="width: 15%" class="toggleCheckBox">
						<div class="toggleCheckBoxItem"></div>
					</label>
				</div>
				<div
					class="seansContainer"
					:style="
						addBeautyItem.openPackageCheck
							? 'opacity:1;pointer-events:auto'
							: 'opacity:0.25;pointer-events:none'
					">
					<div class="seansCounter">
						<label for="seansCount">Seans Sayısı</label>
						<input
							style="width: 70%; margin-top: 15px"
							type="number"
							name=""
							id="seansCount"
							v-model="seansNumber" />
					</div>
					<div class="seansCounter">
						<label for="seansPrice">Paket Ücreti</label>
						<input
							style="width: 70%; margin-top: 15px"
							type="number"
							name=""
							id="seansPrice"
							v-model="packagePrice" />
					</div>
					<div class="seansButtonContainer">
						<button @click="addSeans">Ekle</button>
					</div>
				</div>
				<div>
					<div
						v-for="value in packages"
						:key="value.seansID"
						class="seansAddContainer">
						<div>Seans Sayısı : {{ value.seansNumber }}</div>
						<div>Paket Fiyatı : {{ value.packagePrice }}</div>
						<div><button @click="deleteSeans(value.seansID)">Sil</button></div>
					</div>
				</div>
			</div>
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
	.seansAddContainer {
		padding-bottom: 10px;
		border-bottom: 1px solid #ffffff3d;
		margin-bottom: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.seansAddContainer button {
		border-radius: 10px;
		cursor: pointer;
		border: none;
		padding: 4px 15px;
		background-color: #e34949d1;
		color: white;
	}
	.seansButtonContainer {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		margin-bottom: 20px;
	}
	.seansButtonContainer button {
		color: white;
		background-color: #0072ff;
		padding: 5px 15px;
		font-weight: bold;
		border-radius: 10px;
		border: none;
		cursor: pointer;
	}
	.seansContainer {
		padding: 20px;
		display: flex;
		flex-direction: row;
	}
	.openPackageContainer {
		display: flex;
		flex-direction: row;
		margin-bottom: 15px;
	}
	.openPackageContainer input:checked + .toggleCheckBox {
		background-color: #399767;
	}

	.openPackageContainer input:checked + .toggleCheckBox .toggleCheckBoxItem {
		transform: translateX(190%);
	}
	.toggleCheckBox {
		position: relative;
		padding: 5px;
		display: flex;
		width: 70px;
		height: 20px;
		background-color: black;
		border-radius: 15px;
		cursor: pointer;
		transition: all ease 0.5s;
	}
	.toggleCheckBoxItem {
		position: absolute;
		display: flex;
		width: 30%;
		height: 73%;
		background-color: white;
		border-radius: 15px;
		transition: all ease 0.5s;
	}
	.seansCounter {
		display: flex;
		flex-direction: column;
		margin-bottom: 15px;
		align-items: center;
	}
	.seansCounter label {
		width: 100% !important;
		justify-content: center;
	}
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
		width: 50%;
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
				packages: [],
				seansNumber: 0,
				packagePrice: 0,
				addBeautyItem: {
					beautyName: "",
					beautyPrice: "",
					openPackageCheck: false,
				},
			};
		},
		methods: {
			deleteSeans(seansID) {
				console.log(seansID);
				this.packages = this.packages.filter(
					(item) => item.seansID !== seansID
				);
			},
			addSeans() {
				if (this.seansNumber !== 0 && this.packagePrice !== 0) {
					const addPackage = {
						seansID: Date.now(),
						seansNumber: this.seansNumber,
						packagePrice: this.packagePrice,
					};
					this.seansNumber = 0;
					this.packagePrice = 0;
					this.packages.push(addPackage);
				}
			},
			onFileChange(event) {
				const file = event.target.files[0];
				this.addBeautyItem.beautyImage = file;
			},

			async addBeauty() {
				let error = { counter: 0, name: "" };
				for (const [key, value] of Object.entries(this.addBeautyItem)) {
					if ((key == "beautyName" || key == "beautyPrice") && value == "") {
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
						seans: this.packages,
						seansCheck: this.addBeautyItem.openPackageCheck,
					};
					await axios.post("http://localhost:3000/beauty-services", saveObject);
					axios
						.get("http://localhost:3000/beauty-services")
						.then((items_response) => {
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
