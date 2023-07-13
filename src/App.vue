<template>
	<div>
		<div>
			<div>
				<editProductList />
			</div>
			<div>
				<ProductList />
			</div>
		</div>
		<!-- <AmoundPaid />
		<CalculatorComponent /> -->
	</div>
</template>
<script>
	// import CalculatorComponent from "@/components/CalculatorComponent";
	// import AmoundPaid from "@/components/AmoundPaid";
	import ProductList from "@/components/ProductsList";
	import editProductList from "@/components/product/editProductList";
	import axios from "axios";
	export default {
		data() {
			return {
				product: {
					productData: "",
					editAllProduct: false,
				},
				screen: {
					screenResult: "",
					screenFirstNumber: "",
					screenOperator: "",
				},
			};
		},
		components: {
			ProductList,
			editProductList,
			// CalculatorComponent,
			// AmoundPaid,
		},
		provide() {
			return {
				provideData: this.screen,
				provideProduct: this.product,
			};
		},
		mounted() {
			axios.get("http://localhost:3000/product").then((items_response) => {
				this.product.productData = items_response.data || [];
			});
		},
	};
</script>
