import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scanResult: ""
  },
  mutations: {
    UPDATE_SCAN_RESULT(stateData, data) {
      stateData.scanResult = data;
    },
    RESET_SCAN_RESULT(stateData) {
      stateData.scanResult = '';
    }
  },
  actions: {
    updateScanResult({ commit }, data) {
      commit('UPDATE_SCAN_RESULT', data);
    },
    resetScanResult({ commit }) {
      commit('RESET_SCAN_RESULT');
    }
  }
})
