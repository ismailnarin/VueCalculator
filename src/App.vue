<template>
	<popUp v-if="this.popUp.popUpStatus">
		<template #modalContent>
			<component :is="popUp.popUpName" />
		</template>
	</popUp>
	<div>
		<div>
			<div>
				<editProductList />
			</div>
			<div>
				<ProductList />
			</div>
		</div>
		<AmoundPaid />
		<CalculatorComponent />
	</div>
</template>
<script>
	import PopUp from "@/components/modal-popup/PopUp";
	import EditProduct from "@/components/modal-popup/modal-content/modalEditProduct";
	import CalculatorComponent from "@/components/CalculatorComponent";
	import AmoundPaid from "@/components/AmoundPaid";
	import ProductList from "@/components/ProductsList";
	import EditProductList from "@/components/product/EditProductList";
	import axios from "axios";
	export default {
		data() {
			return {
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
			};
		},
		components: {
			PopUp,
			ProductList,
			EditProductList,
			CalculatorComponent,
			AmoundPaid,
			EditProduct,
		},
		provide() {
			return {
				provideData: this.screen,
				provideProduct: this.product,
				providePopUp: this.popUp,
			};
		},
		mounted() {
			axios.get("http://localhost:3000/product").then((items_response) => {
				this.product.productData = items_response.data || [];
			});
		},
	};
</script>
