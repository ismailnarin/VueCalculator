<template>
	<div class="beautyCardContainer" @click="seansWindow = !seansWindow">
		<div
			@click="editBeauty(beautyFor)"
			v-if="this.provideBeauty.editAllBeauty"
			class="beautyEdit">
			<i class="fa fa-pencil" aria-hidden="true"></i>
		</div>
		<div class="beautyImage">
			<img :src="beautyFor.image" alt="" />
		</div>
		<div class="beautyTitle">
			{{ beautyFor.title }}
		</div>
		<div class="beautyPrice">{{ beautyFor.price }} TL</div>
	</div>
	<div v-if="beautyFor.seansCheck && seansWindow" class="beautySeans">
		<div class="beautySeansContainer">
			<span
				><div>Tek Seans</div>
				<div>:</div>
				<div>{{ beautyFor.price }} TL</div></span
			>
			<span v-for="seans in beautyFor.seans" :key="seans.seansID"
				><div>{{ seans.seansNumber }} Seans</div>
				<div>:</div>
				<div>{{ seans.packagePrice }} TL</div>
			</span>
		</div>
		<div class="closeButton" @click="seansWindow = !seansWindow">KAPAT</div>
	</div>
</template>
<style>
	.beautySeans {
		box-sizing: border-box;
		padding: 16px;
		border-radius: 15px;
		top: 0;
		left: 104%;
		display: flex;
		width: 130%;
		height: 150%;
		position: absolute;
		background: linear-gradient(
			62deg,
			rgba(137, 55, 191, 1) 0%,
			rgb(120 91 175) 50%,
			rgba(180, 111, 168, 1) 100%
		);
		flex-direction: column;
		justify-content: space-between;
		cursor: auto;
		z-index: 100;
	}

	.beautySeansContainer {
		overflow-y: auto;
		position: relative;
		display: flex;
		flex-direction: column;
	}
	.beautySeansContainer span {
		display: flex;
		font-weight: 300;
		padding: 8px 0px 8px 8px;
		border-bottom: 1px solid #ffffffa1;
		transition: all ease 0.4s;
		cursor: pointer;
		flex-direction: row;
		justify-content: space-between;
		font-size: 15px;
	}
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
	.beautySeans div:last-child:hover {
		color: white;
	}
	.beautySeansContainer span:hover {
		border-radius: 10px;
		background-color: #ffffff42;
		font-weight: 300;
		padding: 8px 0px 8px 8px;
		border-bottom: 1px solid #ffffffa1;
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
	export default {
		data() {
			return {
				seansWindow: false,
			};
		},
		inject: ["providePopUp", "provideBeauty"],
		props: ["beautyFor"],
		methods: {
			editbeauty(beautyFor) {
				this.providePopUp.popUpStatus = true;
				this.providePopUp.popUpName = "EditBeauty";
				this.provideBeauty.editBeauty = beautyFor;
			},
		},
	};
</script>
