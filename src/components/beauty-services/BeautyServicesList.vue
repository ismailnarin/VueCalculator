<template>
	<div>
		<EditBeautyList />
	</div>
	<div class="beautyContainer">
		<div
			class="beautyCard"
			v-for="beauty in this.provideBeauty.beautyData"
			:key="beauty.id">
			<div
				@click="editBeauty(beauty)"
				v-if="this.provideBeauty.editAllBeauty"
				class="beautyEdit">
				<i class="fa fa-pencil" aria-hidden="true"></i>
			</div>
			<div class="beautyImage">
				<img :src="beauty.image" alt="" />
			</div>
			<div class="beautyTitle">
				{{ beauty.title }}
			</div>
			<div class="beautyPrice">{{ beauty.price }} TL</div>
		</div>
		<AddBeauty />
	</div>
</template>
<style>
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
	.beautyCard {
		flex-direction: column;
		position: relative;
		margin: 5px;
		width: 200px;
		height: 200px;
		display: flex;
		background-color: white;
		background: linear-gradient(
			62deg,
			rgba(113, 111, 180, 1) 0%,
			rgba(42, 162, 181, 0.47942927170868344) 50%,
			rgba(113, 111, 180, 1) 100%
		);
		border-radius: 25px;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		font-weight: bold;
		color: white;
		cursor: pointer;
	}
</style>
<script>
	import AddBeauty from "@/components/beauty-services/AddBeauty";
	import EditBeautyList from "@/components/beauty-services/EditBeautyList";

	export default {
		components: {
			AddBeauty,
			EditBeautyList,
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
