<template>
	<div>
		<home-header></home-header>
	</div>
</template>

<script>
	import HomeHeader from './components/Header.vue'
	export default {
		name: 'Home',
		components:{
//			在ES6中,对象的键和值相等可以省略值.
//			HomeHeader:HomeHeader
			HomeHeader
		}
	}
</script>

<style>
	
</style>
