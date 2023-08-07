<template>
	<div>
		Seçili Müşteri:
		<span style="color: rgba(240, 255, 255, 0.593)">
			{{
				provideCustomer.selectedCustomer == ""
					? "Müşteri Seçilmedi"
					: ` ${provideCustomer.selectedCustomer.cusName} ${provideCustomer.selectedCustomer.cusSurname}`
			}}
		</span>
	</div>
</template>
<style>
	div {
		color: white;
	}
</style>
<script>
	export default {
		data() {
			return {};
		},
		inject: ["provideCustomer"],
	};
</script>
