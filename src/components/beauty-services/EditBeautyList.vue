<template>
	<div
		class="beautyEditIco"
		@click="provideBeauty.editAllBeauty = !provideBeauty.editAllBeauty">
		<span><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
	</div>
</template>
<style>
	.beautyEditIco {
		color: white;
		font-size: 35px;
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
