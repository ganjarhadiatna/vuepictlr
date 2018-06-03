//import module
import Vue from 'vue'
import Vuex from 'vuex'

//gunakan vuex
Vue.use(Vuex)

//import module di store
import state from './state'
import getters from './getters'
import mutations from './mutations'

export default new Vuex.Store({
	state,
	getters,
	mutations
})