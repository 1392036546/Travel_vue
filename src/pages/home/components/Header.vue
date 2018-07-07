<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont header-back">&#xe637;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe62b;</span>
			输入城市/景点/主题/游玩
		</div>
		<div class="header-right">
			城市
			<span class="iconfont header-down">&#xe654;</span>
		</div>
	</div>
</template>

<script>
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'

	.header
		display:flex
		height:.86rem
		background:$bgColor
		color:#fff
		align-items:center
		min-width:6rem
		.header-left
			width:.8rem
			float:left
			.header-back
				font-size:.5rem
				text-align:center
		.header-input
			flex:1
			height:.64rem
			line-height:.64rem
			margin:auto
			background-color:#fff
			color:#ccc
			border-radius:.1rem
			padding-left:.2rem
		.header-right
			width:1.24rem
			float:right
			text-align:center
			.header-down
				font-size:.3rem
				margin-left:-.05rem
</style>