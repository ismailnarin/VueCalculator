<template>
	<div
		class="customerContainer"
		:style="openRight ? 'width:800%' : 'width:100%'">
		<div @click="openRight = !openRight" class="rightMenuCloseButton">
			<i
				:class="
					openRight
						? 'fa fa-angle-double-right fa-xl'
						: 'fa fa-angle-double-left fa-xl'
				"
				aria-hidden="true"></i>
		</div>
		<div
			v-for="menuItem in provideRightMenu.rightMenuData"
			:key="menuItem.id"
			:class="!openRight ? 'customerIco' : 'customerMenuItem'">
			<i
				:class="menuItem.icon"
				aria-hidden="true"
				@click="openComponent(menuItem.containerName)"
				v-if="!openRight"></i>
			<div v-if="openRight" @click="openComponent(menuItem.containerName)">
				{{ menuItem.text }}
			</div>
		</div>
	</div>
</template>
<style>
	.rightMenuCloseButton {
		display: flex;
		padding: 20px 0px;
		cursor: pointer;
		font-weight: bold;
		color: white;
		justify-content: flex-start;
	}
	.customerContainer {
		flex-direction: column;
		right: 0;
		position: absolute;
		display: flex;
		height: 100%;
		background: linear-gradient(
			0deg,
			rgba(63, 94, 251, 1) 0%,
			rgba(252, 70, 107, 1) 100%
		);
		transition: all ease-in-out 0.3s;
	}

	.customerIco {
		padding: 13px 0px;
		height: 25px;
		color: white;
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
	}

	.customerMenuItem {
		color: white;
		padding: 13px 0px;
		display: flex;
		width: 100%;
		font-size: 20px;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		animation: fadeIn 0.8s ease;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
<script>
	export default {
		data() {
			return {
				openRight: false,
			};
		},
		methods: {
			openComponent(componentName) {
				this.providePopUp.popUpName = componentName;
				this.providePopUp.popUpStatus = true;
			},
		},
		inject: ["provideRightMenu", "providePopUp"],
	};
</script>
