<template>
	<div>
		<div class="editBeautyTitle">Ürünü Düzenle</div>
		<div class="editBeautyImg">
			<img :src="provideBeauty.editBeauty.image" alt="" />
		</div>
		<div class="editBeauty"></div>
		<div class="editBeauty">
			<label for="beautyName">Ürün Adı:</label
			><input
				type="text"
				name="beautyName"
				id="beautyName"
				class="text"
				:value="provideBeauty.editBeauty.title" />
		</div>
		<div class="editBeauty">
			<label for="beautyPrice">Ürün Fiyatı:</label
			><input
				type="text"
				name="beautyPrice"
				id="beautyPrice"
				class="text"
				:value="provideBeauty.editBeauty.price" />
		</div>
		<div class="editBeauty">
			<label for="beautyCriticalStock">Ürün Kritik Stoğu:</label
			><input
				type="text"
				name="beautyCriticalStock"
				id="beautyCriticalStock"
				class="text"
				:value="provideBeauty.editBeauty.criticalStock" />
		</div>
		<div class="editBeauty">
			<label for="">Ürün Stoğu:</label
			><input
				type="text"
				name="beautyStock"
				id="beautyStock"
				class="text"
				:value="provideBeauty.editBeauty.stock" />
		</div>
		<div class="editBeauty">
			<div>
				<button id="beautyEditSaveButton">Kaydet</button>
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
	export default {
		inject: ["provideBeauty", "providePopUp"],
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
		},
		computed: {},
	};
</script>
