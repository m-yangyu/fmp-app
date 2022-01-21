<template>
	<div
		class="iconfont"
		:class="['iconfont',`icon-${name}`,`${className}`]"
		:style="{
            color,
            fontSize: size + 'rpx',
            margin,
        }"
		@click="handleClick" >
			<slot></slot>
		<div class="a">123123123</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'font-icon',
	props: {
		display: {
			type: String,
			default: 'inline',
		},
		name: {
			type: String,
			default: '',
		},
		size: {
			type: [String, Number],
			default: 32,
		},
		color: {
			type: String,
			default: '#444444',
		},
		margin: {
			type: String,
		},
		className: {
			type: String,
			default: '',
		},
	},
	methods: {
		handleClick() {
			this.$emit('click');
		},
	},
});
</script>
<style lang="less">
	.iconfont {
		border:2rpx solid #fff;
		background: #fff;
		border-radius: 50%;
		.a {
			color: #000;
		}
	}
</style>
