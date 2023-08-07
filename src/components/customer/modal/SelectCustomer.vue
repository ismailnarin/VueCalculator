<template>
	<div class="selectCustomerContainer">
		<table>
			<tr>
				<td>
					<input
						type="text"
						name=""
						placeholder="İsim Ara.."
						id=""
						v-model="searchName"
						@keyup="searchKey()" />
				</td>
				<td>
					<input
						type="text"
						name=""
						placeholder="Soyisim Ara.."
						id=""
						@keyup="searchKey()"
						v-model="searchSurname" />
				</td>
				<td>
					<input
						type="number"
						name=""
						placeholder="Telefon Ara.."
						id=""
						@keyup="searchKey()"
						v-model="searchPhone" />
				</td>
			</tr>
			<tr
				v-for="customer in customerList"
				:key="customer.id"
				class="customerList"
				@click="selectedCustomer(customer)">
				<td>
					{{ customer.cusName }}
				</td>
				<td>
					{{ customer.cusSurname }}
				</td>
				<td>
					{{ customer.cusPhone }}
				</td>
			</tr>
		</table>
	</div>
</template>
<script>
	import { cloneDeep } from "lodash";
	import axios from "axios";
	export default {
		data() {
			return {
				customerList: cloneDeep(this.provideCustomer.customerList),
				searchName: "",
				searchSurname: "",
				searchPhone: "",
			};
		},
		inject: ["provideCustomer", "providePopUp"],
		created() {
			axios.get("http://localhost:3000/customer").then((items_response) => {
				this.provideCustomer.customerList = items_response.data || [];
			});
		},
		methods: {
			searchKey() {
				this.customerList = this.provideCustomer.customerList.filter(
					(item) =>
						item.cusName
							.toLowerCase()
							.includes(this.searchName.toLowerCase()) &&
						item.cusSurname
							.toLowerCase()
							.includes(this.searchSurname.toLowerCase()) &&
						item.cusPhone.toString().includes(this.searchPhone)
				);
			},
			selectedCustomer(customer) {
				console.log(customer);
				this.provideCustomer.selectedCustomer = customer;
				this.providePopUp.popUpStatus = false;
			},
		},
	};
</script>
<style scoped>
	input {
		border-radius: 50px;
		border: 2px solid rgba(255, 255, 255, 0.626);
		background-color: #55555500;
		padding: 10px 14px;
		width: 150px;
		color: rgb(255, 255, 255);
		font-weight: 700;
	}
	input:focus {
		border: 2px solid white;
		outline: none;
	}
	th,
	td {
		padding: 15px 15px 15px 20px;
	}
	tr:first-child {
		position: sticky;
		top: 0;
		background-color: black;
		border-radius: 5px 5px 0px 0px;
	}
	.customerList {
		color: white;
		border-bottom: 1px solid rgba(255, 255, 255, 0.484);
		border-left: 1px solid rgba(255, 255, 255, 0.484);
		user-select: none;
		cursor: pointer;
	}
	.customerList:hover {
		background-color: rgba(255, 255, 255, 0.357);
	}
</style>
