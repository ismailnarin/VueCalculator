<template>
	<div>
		<div class="addCustomerTitle">Müşteri Ekle</div>
		<div class="cusInnerContainer">
			<label for="">Adı</label>
			<input type="text" v-model="cusName" />
		</div>
		<div class="cusInnerContainer">
			<label for="">Soyadı</label>
			<input type="text" name="" id="" v-model="cusSurname" />
		</div>
		<div class="cusInnerContainer">
			<label for="">Telefon Numarası</label>
			<input
				type="number"
				placeholder="055511122233"
				name=""
				id=""
				v-model="cusPhone"
				minlength="11" />
		</div>
		<div class="buttonContainer">
			<button @click="addCustomer">Ekle</button>
		</div>
	</div>
</template>
<style scoped>
	.buttonContainer {
		display: flex;
		justify-content: flex-end;
	}
	.addCustomerTitle {
		display: flex;
		width: 100%;
		justify-content: center;
		margin-bottom: 15px;
		font-weight: bold;
		color: white;
		font-size: 25px;
	}
	label {
		color: white;
		display: flex;
	}
	.cusInnerContainer {
		display: flex;
		margin-bottom: 30px;
		flex-direction: column;
	}
	input {
		margin-top: 7px;
		color: white;
		width: 200px;
		text-align: center;
		padding: 10px 5px;
		background-color: transparent;
		border: 1px solid #ffffff45;
		border-radius: 20px;
	}
	input:focus {
		outline: none;
		border: 1px solid rgba(0, 255, 0, 0.531);
	}
	button {
		color: white;
		background-color: #0072ff;
		padding: 5px 15px;
		font-weight: bold;
		border-radius: 10px;
		border: none;
		cursor: pointer;
	}
</style>
<script>
	import axios from "axios";
	export default {
		data() {
			return {
				cusName: "",
				cusSurname: "",
				cusPhone: "",
			};
		},
		inject: ["providePopUp"],
		methods: {
			addCustomer() {
				if (
					this.cusName !== "" &&
					this.cusSurname !== "" &&
					this.cusPhone !== "" &&
					this.cusPhone.toString().length > 9
				) {
					const saveObject = {
						cusName: this.cusName,
						cusSurname: this.cusSurname,
						cusPhone: this.cusPhone,
					};
					axios
						.post("http://localhost:3000/customer", saveObject)
						.then((response) => {
							this.providePopUp.popUpStatus = false;
							console.log(response);
						});
				} else {
					alert("Bilgileri Eksiksiz Giriniz");
				}
			},
		},
	};
</script>
