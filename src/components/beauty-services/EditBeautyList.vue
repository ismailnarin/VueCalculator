<template>
	<div
		class="beautyEditIco"
		@click="provideBeauty.editAllBeauty = !provideBeauty.editAllBeauty">
		<span><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
	</div>
</template>
<style>
	.beautyEditIco {
		display: flex;
		color: white;
		font-size: 35px;
		flex-direction: column;
		align-items: flex-end;
	}
	.beautyEditIco span {
		cursor: pointer;
	}
</style>
<script>
	export default {
		inject: ["provideBeauty"],
	};
</script>
