<template>
	<div class="loading">
		<img
			:src="require(`../assets/loadings/${gifNum}.gif`)"
			alt="loading"
		>
	</div>
</template>
<script>
export default {
	props: {
		isLoad: {
			type: Boolean,
			default: false
		},
		toPage: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			gifNum: 1
		}
	},
	watch: {
		isLoad() {
			if (this.isLoad) {
				this.gifNum = this.getRandomInt(4)
				this.delayOk(4000).then(() => {
					this.$router.push({ name: this.toPage })
					this.$emit("finish", false)
				})
			}
		}
	},
	methods: {
		getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max)) + 1;
		},
		delayOk(time) {
			return new Promise((resolve) => {
				setTimeout(() => {
					this.gifNum = "ok"
					resolve()
				}, time)
			})
		}
	}
}
</script>