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
		<div class="beautyPrice">{{ beautyFor.priceCash }}TL</div>
	</div>
	<transition name="seansAnimation">
		<div v-if="seansWindow" class="beautySeans" :key="elementKey">
			<div class="beautySeansContainer">
				<table>
					<tr>
						<td>Tek Seans</td>
						<td>=></td>
						<td>Nakit</td>
						<td>:</td>
						<td>{{ beautyFor.priceCash }} TL</td>
						<td>Kart</td>
						<td>:</td>
						<td>{{ beautyFor.priceCard }} TL</td>
					</tr>
					<tr v-for="seans in beautyFor.seans" :key="seans.seansID">
						<td>{{ seans.seansNumber }} Seans</td>
						<td>=></td>
						<td>Nakit</td>
						<td>:</td>
						<td>{{ seans.packagePriceCash }} TL</td>
						<td>Kart</td>
						<td>:</td>
						<td>{{ seans.packagePriceCard }} TL</td>
					</tr>
				</table>
			</div>
			<div class="closeButton" @click="seansWindow = !seansWindow">KAPAT</div>
		</div>
	</transition>
</template>
<style>
	table {
		border-collapse: collapse;
	}
	.beautySeans {
		box-sizing: border-box;
		padding: 16px;
		border-radius: 15px;
		top: 0;
		left: 104%;
		display: flex;
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
		transform-origin: top left;
	}
	.seansAnimation-enter-active,
	.seansAnimation-leave-active {
		transition: all ease 0.2s; /* Kaybolma animasyonu için geçiş süresi belirleyin */
	}

	/* Elementi tamamen gizleme (opacity: 0) ve konumu değiştirme */
	.seansAnimation-enter-from {
		transform: scale(0);
	}
	.seansAnimation-enter-to {
		transform: scale(1);
	}
	.seansAnimation-leave-to {
		transform: scale(0);
	}

	.beautySeans.v-leave-to {
		transform: scale(0);
	}

	.beautySeansContainer {
		overflow-y: auto;
		position: relative;
		display: flex;
		flex-direction: column;
	}
	.beautySeansContainer table tr td {
		font-weight: 300;
		padding: 8px;
		border-bottom: 1px solid #ffffffa1;
		transition: all ease 0.4s;
		cursor: pointer;
		justify-content: space-between;
		font-size: 15px;
		white-space: nowrap;
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
	.beautySeansContainer tr {
		transition: all ease 0.5s;
	}
	.beautySeansContainer tr:hover {
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
			editBeauty(beautyFor) {
				this.providePopUp.popUpStatus = true;
				this.providePopUp.popUpName = "EditBeauty";
				this.provideBeauty.editBeauty = beautyFor;
			},
		},
	};
</script>
