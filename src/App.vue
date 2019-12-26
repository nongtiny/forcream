<template>
  <div id="app">
    <transition name="slide-down">
      <loading v-show="isLoad" :is-load="isLoad" :toPage="result" @finish="onFinish" />
    </transition>
    <router-view />
  </div>
</template>
<script>
import Loading from "./components/Loading";
import { mapState } from "vuex";

export default {
  components: {
    Loading
  },
  data () {
    return {
      isLoad: false
    }
  },
  computed: {
    ...mapState({
      result: 'scanResult'
    })
  },
  watch: {
    result() {
      if (this.result.length !== '') {
        this.isLoad = true;
      } else {
        this.isLoad = false;
      }
    }
  },
  methods: {
    onFinish(load) {
      this.isLoad = load;
    }
  }
}
</script>
