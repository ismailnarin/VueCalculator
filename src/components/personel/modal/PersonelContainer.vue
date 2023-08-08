<template>
	<div style="padding: 5px 0px">
		<div><h4>Personel Ekle</h4></div>
		<div class="addPersonelContainer">
			<div class="personelInputContainer">
				<div class="addPersonelInner">
					<label for="">Adı :</label
					><input
						type="text"
						name=""
						id=""
						v-model="personelName"
						placeholder="İsim Giriniz.." />
				</div>
				<div class="addPersonelInner">
					<label for="">Soyadı :</label
					><input
						type="text"
						name=""
						id=""
						v-model="personelSurName"
						placeholder="Soyisim Giriniz.." />
				</div>
			</div>
			<div class="buttonContainer" @click="addPersonel">
				<button>Ekle</button>
			</div>
		</div>
		<div><h4>Personel Listesi</h4></div>
		<div>
			<div
				v-for="personel in providePersonel.personelList"
				:key="personel.id"
				class="personelList">
				<div>
					{{ personel.name }}
				</div>
				<div>
					{{ personel.surName }}
				</div>
				<div>
					<button class="deleteButton" @click="deletePersonel(personel.id)">
						Sil
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.personelList {
		border-radius: 0 0 10px 0px;
		border-bottom: 1px solid #ffffff7a;
		padding: 12px 0px;
		display: grid;
		grid-template-columns: 1fr 1fr 120px;
		text-align: left;
	}
	.personelList > div {
		text-align: left;
	}

	.deleteButton {
		background-color: red;
	}
	::placeholder {
		color: rgba(240, 248, 255, 0.396);
	}
	button {
		height: 100%;
		width: 100%;
		border-radius: 10px;
		border: none;
		cursor: pointer;
		background-color: #0072ff;
		color: white;
		font-weight: 700;
	}
	.buttonContainer {
		width: 100px;
	}
	div {
		text-align: center;
	}
	.addPersonelContainer {
		column-gap: 10px;
		display: flex;
		flex-direction: row;
		margin-bottom: 100px;
	}
	.addPersonelInner {
		display: flex;
		gap: 10px;
	}
	.personelInputContainer {
		display: flex;
		row-gap: 10px;
		flex-direction: column;
	}
	.addPersonelInner label {
		min-width: 150px;
	}
	input {
		background-color: transparent;
		padding: 5px 10px;
		border: 1px solid white;
		border-radius: 15px;
		color: white;
	}
	input:focus {
		border: 1px solid rgb(41, 188, 115);
		outline: none;
	}
</style>
<script scoped>
	import axios from "axios";
	export default {
		data() {
			return {
				personelName: "",
				personelSurName: "",
			};
		},
		inject: ["providePersonel"],
		methods: {
			addPersonel() {
				if (this.personelName !== "" && this.personelSurName !== "") {
					const saveObject = {
						name: this.personelName,
						surName: this.personelSurName,
					};
					axios.post("http://localhost:3000/personel", saveObject).then(() => {
						// this.providePopUp.popUpStatus = false;
						axios
							.get("http://localhost:3000/personel")
							.then((items_response) => {
								this.providePersonel.personelList = items_response.data || [];
							});
						this.personelName = "";
						this.personelSurName = "";
					});
				} else {
					alert("Lütfen bilgileri eksiksiz giriniz");
				}
			},
			async deletePersonel(id) {
				await axios.delete("http://localhost:3000/personel/" + id);
				axios.get("http://localhost:3000/personel").then((items_response) => {
					this.providePersonel.personelList = items_response.data || [];
				});
			},
		},
	};
</script>
