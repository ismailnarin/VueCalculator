<template>
	<div style="display: flex">
		<div class="mainScreen">
			<popUp v-if="this.popUp.popUpStatus">
				<template #modalContent>
					<KeepAlive>
						<component :is="popUp.popUpName" />
					</KeepAlive>
				</template>
			</popUp>
			<TabMenu />
			<div>
				<div>
					<div>
						<KeepAlive> <component :is="tabMenu.tabMenuName" /></KeepAlive>
					</div>
				</div>
				<AmoundPaid />
				<CalculatorComponent />
			</div>
		</div>
		<div class="customerMain">
			<CustomerContainer />
		</div>
	</div>
</template>
<script>
	import AddCustomer from "@/components/customer/modal/AddCustomer";
	import SelectCustomer from "@/components/customer/modal/SelectCustomer";
	import PersonelContainer from "@/components/personel/modal/PersonelContainer";
	import AddBeauty from "@/components/beauty-services/modal/ModalAddBeauty";
	import AddProduct from "@/components/product/modal/ModalAddProduct";
	import BeautyServices from "@/components/beauty-services/BeautyServicesList.vue";
	import PopUp from "@/components/modal-popup/PopUp";
	import EditProduct from "@/components/product/modal/ModalEditProduct";
	import EditBeauty from "@/components/beauty-services/modal/ModalEditBeauty";
	import CalculatorComponent from "@/components/calculator/CalculatorComponent";
	import AmoundPaid from "@/components/paid-screen/AmoundPaid";
	import ProductList from "@/components/product/ProductsList";
	import axios from "axios";
	import TabMenu from "@/components/tab-menu/tabMenu";
	import CustomerContainer from "@/components/customer/CustomerContainer";
	export default {
		data() {
			return {
				customer: {
					selectedCustomer: "",
				},
				rightMenu: {
					rightMenuData: "",
				},
				beauty: {
					beautyData: "",
					editAllBeauty: false,
					editBeauty: "",
				},
				product: {
					productData: "",
					editAllProduct: false,
					editProduct: "",
				},
				screen: {
					screenResult: "",
					screenFirstNumber: "",
					screenOperator: "",
				},
				popUp: {
					popUpName: "",
					popUpStatus: false,
				},
				tabMenu: {
					tabMenuName: "ProductList",
				},
			};
		},
		components: {
			PersonelContainer,
			SelectCustomer,
			AddCustomer,
			AddProduct,
			AddBeauty,
			PopUp,
			ProductList,
			CalculatorComponent,
			AmoundPaid,
			EditProduct,
			TabMenu,
			BeautyServices,
			EditBeauty,
			CustomerContainer,
		},
		provide() {
			return {
				provideCustomer: this.customer,
				provideRightMenu: this.rightMenu,
				provideData: this.screen,
				provideProduct: this.product,
				providePopUp: this.popUp,
				provideTabMenu: this.tabMenu,
				provideBeauty: this.beauty,
			};
		},
		mounted() {
			axios.get("http://localhost:3000/product").then((items_response) => {
				this.product.productData = items_response.data || [];
			});
			axios
				.get("http://localhost:3000/beauty-services")
				.then((items_response) => {
					console.log(items_response);
					this.beauty.beautyData = items_response.data || [];
				});
			axios.get("http://localhost:3000/right-menu").then((items_response) => {
				this.rightMenu.rightMenuData = items_response.data || [];
			});
		},
	};
</script>
<style>
	.customerMain {
		display: flex;
		width: 3%;
		position: relative;
	}
	.mainScreen {
		display: flex;
		width: 100%;
		flex-direction: column;
	}
</style>
