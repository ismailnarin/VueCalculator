<template>
	<div class="modal">
		<div class="modalBack" @click="closeModal"></div>
		<div class="modalContainer">
			<div class="closeModal" @click="closeModal">
				<i class="fa fa-times-circle-o" aria-hidden="true"></i>
			</div>
			<div class="modalContent"><slot name="modalContent"></slot></div>
		</div>
	</div>
</template>
<style>
	.closeModal {
		display: flex;
		position: absolute;
		top: 10px;
		right: 10px;
		font-size: 25px;
		cursor: pointer;
		color: #e57c7c;
		transition: all ease 0.3s;
	}
	.modal {
		z-index: 100;
		position: fixed;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.modalContainer {
		backdrop-filter: blur(5px);
		background: linear-gradient(
			62deg,
			rgb(255 255 255 / 67%) 0%,
			rgb(255 255 255 / 34%) 50%,
			rgb(255 255 255 / 33%) 100%
		);
		margin: auto;
		position: absolute;
		z-index: 200;
		border-radius: 10px;
		display: flex;
		padding: 50px;
		/* background-color: white; */
		flex-direction: column;
		animation-name: openPopUp;
		animation-duration: 0.5s;
	}
	@keyframes openPopUp {
		0% {
			transform: scale(0);
		}
		70% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}

	.modalContent {
		display: flex;
	}
	.modalBack {
		z-index: 100;
		display: flex;
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #0000008f;
		align-items: center;
		justify-content: center;
	}
	.closeModal:hover {
		color: red;
	}
</style>
<script>
	export default {
		inject: ["providePopUp"],
		methods: {
			closeModal() {
				this.providePopUp.popUpStatus = false;
			},
		},
	};
</script>
