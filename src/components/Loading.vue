<template>
	<div class="loading">
		<img
			:src="toPage !== '' ? require(`../assets/loadings/${gifNum}.gif`) : ''"
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
			gifNum: this.toPage
		}
	},
	watch: {
		isLoad() {
			if (this.isLoad && this.toPage !== "") {
				this.gifNum = this.toPage
				this.delayOk(3000).then(() => {
					this.$router.push({ name: this.toPage })
					this.$emit("finish", false)
				})
			}
		}
	},
	methods: {
		delayOk(time) {
			return new Promise((resolve) => {
				setTimeout(() => {
					this.gifNum = "creamok"
					resolve()
				}, time)
			})
		}
	}
}
</script>