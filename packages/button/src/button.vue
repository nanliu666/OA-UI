<template>
	<el-button
		v-bind="$attrs"
		v-on="$listeners"
	>
		<slot></slot>
	</el-button>
	
</template>

<script>
	export default {
		name: 'MgButton',
		data() {
			return {}	
		},
		created() {},
		methods: {}		
	}
</script>

<style scoped lang="scss">
	.el-button--dashed{
		border-style:dashed;
	}
	.el-button--noBorder{
		border: none;
	}
	.el-button.is-disabled,.el-button.is-disabled:hover{
		background: #F5F6F6;
		border-color:#C6CBCE;
		color: #C6CBCE;;
	}
	.el-button.is-disabled.el-button--text,.el-button.is-disabled.el-button--noBorder{
		background: transparent;
		border: none;
	}
</style>