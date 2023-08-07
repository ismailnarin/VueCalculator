<template>
	<div>
		<EditBeautyList />
	</div>
	<div class="beautyContainer">
		<div
			class="beautyCard"
			v-for="beauty in this.provideBeauty.beautyData"
			:key="beauty.id">
			<BeautyView :beautyFor="beauty" />
		</div>
		<AddBeauty />
	</div>
</template>
<style>
	.closeButton {
		color: #ffeb3b;
		display: flex;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
		justify-content: center;
		font-weight: 300;
		text-decoration: underline;
		font-size: 15px;
	}

	.beautyPrice {
		font-size: 15px;
	}
	.beautyImage {
		height: 55%;
		display: flex;
		width: 100%;
		position: relative;
		margin-bottom: 10px;
	}
	.beautyImage img {
		object-fit: contain;
		width: 100%;
	}
	.beautyEdit {
		z-index: 90;
		padding: 5px;
		display: flex;
		position: absolute;
		top: 10px;
		right: 10px;
	}
	.beautyContainer {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.beautyCard,
	.beautyCardContainer {
		flex-direction: column;
		position: relative;
		margin: 5px;
		width: 200px;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		font-weight: bold;
		color: white;
		cursor: pointer;
	}
	.beautyCard {
		background-color: white;
		background: linear-gradient(
			62deg,
			rgba(113, 111, 180, 1) 0%,
			rgba(42, 162, 181, 0.47942927170868344) 50%,
			rgba(113, 111, 180, 1) 100%
		);
		border-radius: 25px;
	}
</style>
<script>
	import AddBeauty from "@/components/beauty-services/AddBeauty";
	import BeautyView from "@/components/beauty-services/BeautyView";
	import EditBeautyList from "@/components/beauty-services/EditBeautyList";

	export default {
		data() {
			return {
				seansWindow: false,
			};
		},
		components: {
			AddBeauty,
			EditBeautyList,
			BeautyView,
		},
		inject: ["providePopUp", "provideBeauty"],
		methods: {
			editbeauty(beauty) {
				this.providePopUp.popUpStatus = true;
				this.providePopUp.popUpName = "EditBeauty";
				this.provideBeauty.editBeauty = beauty;
			},
		},
	};
</script>
