<template>
	<div class="main">
		<qrcode-stream @decode="onDecode" @init="onInit" />
		<div class="suggest">
			<h2 class="text">แฟนลองสแกนกล่องดูสิ</h2>
			<img src="../assets/img/suggest.png" alt="tiny">
		</div>
	</div>
</template>
<script>
import { QrcodeStream } from 'vue-qrcode-reader';

export default {
	components: {
    QrcodeStream
	},
	data () {
    return {
      error: ''
    }
  },
  beforeRouteEnter(to, from, next) {
		// eslint-disable-next-line
    console.log("dfdf")
    next((vm) => {
      vm.$store.dispatch("resetScanResult").then(() => next());
    })
	},
	methods: {
    onDecode (result) {
      this.$store.dispatch('updateScanResult', result)
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        }
      }
    }
  }
}
</script>