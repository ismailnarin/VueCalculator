<template>
	<div>
		<div class="editBeautyTitle">İşlem Düzenle</div>
		<div class="editBeautyImg">
			<img :src="beauty.image" alt="" />
		</div>
		<div class="editBeauty"></div>
		<div class="editBeauty">
			<label for="beautyName">İşlem Adı:</label
			><input
				type="text"
				name="beautyName"
				id="beautyName"
				class="text"
				v-model="beauty.title" />
		</div>
		<div class="editBeauty">
			<label for="beautyPrice">İşlem Fiyatı(Nakit):</label
			><input
				type="text"
				name="beautyPrice"
				id="beautyPrice"
				class="text"
				v-model="beauty.priceCash" />
		</div>
		<div class="editBeauty">
			<label for="beautyPrice">İşlem Fiyatı(Kart):</label
			><input
				type="text"
				name="beautyPrice"
				id="beautyPrice"
				class="text"
				v-model="beauty.priceCard" />
		</div>
		<div class="openPackageContainer" style="">
			<label for="openPackage" style="cursor: pointer"
				>Paket Ücretlerini Aç</label
			>
			<input
				type="checkbox"
				name=""
				id="openPackage"
				hidden
				v-model="beauty.seansCheck" />
			<label for="openPackage" style="width: 15%" class="toggleCheckBox">
				<div class="toggleCheckBoxItem"></div>
			</label>
		</div>
		<div>
			<div
				class="seansContainer"
				:style="
					beauty.seansCheck
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
					<label for="seansPrice">Paket Ücreti(Nakit)</label>
					<input
						style="width: 70%; margin-top: 15px"
						type="number"
						name=""
						id="seansPrice"
						v-model="packagePriceCash" />
				</div>
				<div class="seansCounter">
					<label for="seansPrice">Paket Ücreti(Kart)</label>
					<input
						style="width: 70%; margin-top: 15px"
						type="number"
						name=""
						id="seansPrice"
						v-model="packagePriceCard" />
				</div>
				<div class="seansButtonContainer">
					<button @click="addSeans">Ekle</button>
				</div>
				<div></div>
			</div>
			<div
				v-for="value in beauty.seans"
				:key="value.seansID"
				class="seansAddContainer">
				<div>Seans Sayısı : {{ value.seansNumber }}</div>
				<div>Paket Fiyatı (Nakit) : {{ value.packagePriceCash }}</div>
				<div>Paket Fiyatı (Kart) : {{ value.packagePriceCard }}</div>
				<div><button @click="deleteSeans(value.seansID)">Sil</button></div>
			</div>
		</div>

		<div class="editBeauty">
			<div>
				<button id="beautyEditSaveButton" @click="editSaveBeauty">
					Kaydet
				</button>
			</div>
			<div>
				<button
					id="beautyEditDeleteButton"
					@click="deleteBeauty(provideBeauty.editBeauty.id)">
					Ürünü Sil
				</button>
			</div>
		</div>
	</div>
</template>
<style>
	.openPackageContainer {
		display: flex;
		flex-direction: row;
		margin: 25px 0px;
		color: white;
		justify-content: space-evenly;
	}
	.openPackageContainer input:checked + .toggleCheckBox {
		background-color: #399767;
	}

	.openPackageContainer input:checked + .toggleCheckBox .toggleCheckBoxItem {
		transform: translateX(190%);
	}
	.seansAddContainer {
		padding-bottom: 10px;
		border-bottom: 1px solid #ffffff3d;
		margin-bottom: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: white;
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
	.seansCounter {
		display: flex;
		flex-direction: column;
		margin-bottom: 15px;
		align-items: center;
	}
	.seansCounter label {
		width: 100% !important;
		justify-content: center;
		text-align: center;
	}
	.seansCounter input {
		color: white;
		width: 200px;
		text-align: center;
		padding: 10px 5px;
		background-color: transparent;
		border: 1px solid #ffffff45;
		border-radius: 20px;
		width: 70%;
		margin-top: 15px;
	}
	.seansContainer input:focus {
		outline: none;
		border: 1px solid #9aff9387;
	}
	.seansContainer {
		padding: 20px;
		display: flex;
		flex-direction: row;
		color: white;
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
	.editBeauty:last-child {
		flex-direction: column;
	}
	.editBeauty label {
		width: 200px;
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
	import { cloneDeep } from "lodash";
	export default {
		data() {
			return {
				beauty: cloneDeep(this.provideBeauty.editBeauty),
				packagePriceCash: 0,
				packagePriceCard: 0,
				seansNumber: 0,
			};
		},
		inject: ["provideBeauty", "providePopUp", "provideProduct"],
		methods: {
			deleteBeauty(beautyId) {
				this.providePopUp.popUpStatus = false;
				axios
					.delete(`http://localhost:3000/beauty-services/${beautyId}`)
					.then(() => {
						this.provideBeauty.beautyData =
							this.provideBeauty.beautyData.filter((i) => i.id !== beautyId);
						this.provideBeauty.editBeauty = "";
					});
			},
			addSeans() {
				if (
					this.packagePriceCash !== 0 &&
					this.packagePriceCard !== 0 &&
					this.seansNumber !== 0
				) {
					const addPackage = {
						seansID: Date.now(),
						seansNumber: this.seansNumber,
						packagePriceCash: this.packagePriceCash,
						packagePriceCard: this.packagePriceCard,
					};
					this.seansNumber = 0;
					this.packagePriceCash = 0;
					this.packagePriceCard = 0;
					this.beauty.seans.push(addPackage);
				} else {
					alert("Lütfen Seans verilerini eksiksiz giriniz.");
				}
			},
			deleteSeans(seansID) {
				this.beauty.seans = this.beauty.seans.filter(
					(item) => item.seansID !== seansID
				);
			},
			async editSaveBeauty() {
				console.log(this.beauty.seans);
				const saveObject = {
					title: this.beauty.title,
					created_at: new Date(),
					price: this.beauty.price,
					image: "https://placehold.co/300x300",
					priceCash: this.beauty.priceCash,
					priceCard: this.beauty.priceCard,
					seans: this.beauty.seans,
					seansCheck: this.beauty.seansCheck,
				};
				axios.delete("http://localhost:3000/beauty-services/" + this.beauty.id);
				await axios.post("http://localhost:3000/beauty-services", saveObject);
				axios
					.get("http://localhost:3000/beauty-services")
					.then((items_response) => {
						console.log(items_response);
						this.provideBeauty.beautyData = items_response.data || [];
						this.providePopUp.popUpStatus = false;
					});
			},
		},
		computed: {},
	};
</script>
