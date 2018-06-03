// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery'
import axios from 'axios'
import VueSession from 'vue-session'

// template
import Design from '@/components/main/Design.vue'

Vue.config.productionTip = false

// global variabel
window.axios = axios

// global user
Vue.use(VueSession)

/* prototype */
Vue.prototype.baseUrl = 'http://localhost:8000/api'

Vue.prototype.$setScroll = function (stt) {
  if (stt === 'hide') {
    jQuery('html').addClass('noscroll')
  } else {
    jQuery('html').removeClass('noscroll')
  }
}
Vue.prototype.$setTop = function () {
	jQuery(document).scrollTop(0)
}
Vue.prototype.$goBack = function () {
  window.history.back()
}

Vue.prototype.$logout = function () {
  this.$session.destroy()
  window.location = 'http://localhost:8080/welcome'
}

Vue.prototype.$saveToWall = function (stt) {
  if (stt == 'open') {
    //this.$setScroll('hide')
    jQuery('#chooseWall').show()
  } else {
    //this.$setScroll('show')
    jQuery('#chooseWall').hide()
  }
}
Vue.prototype.$saveToWallSmall = function (e) {
  e.stopPropagation()
  var wd = jQuery('.body').width()
  var hg = jQuery('.body').height()
  if (e.pageX > 1000) {
    var x = (e.pageX - 370)
    var y = (e.pageY)
  } else {
    var x = (e.pageX)
    var y = (e.pageY)
  }
  jQuery('#fastSavePict')
  .css({
    'top': y+'px',
    'left': x+'px'
  })
  .show()
}
Vue.prototype.$allHide = function () {
  //this.$setScroll('hide')
  jQuery('.create-popup').hide()
}
Vue.prototype.$createWall = function (stt) {
  if (stt == 'open') {
    //this.$setScroll('hide')
    jQuery('#createWall').show()
  } else {
    //this.$setScroll('show')
    jQuery('#createWall').hide()
  }
}
Vue.prototype.$chooseWall = function (stt) {
  if (stt == 'open') {
    //this.$setScroll('hide')
    jQuery('#chooseWall').show()
  } else {
    //this.$setScroll('show')
    jQuery('#chooseWall').hide()
  }
}
Vue.prototype.$opAddPict = function (stt) {
  if (stt == 'open') {
    //this.$setScroll('hide')
    jQuery('#addPict').show()
  } else {
    //this.$setScroll('show')
    jQuery('#addPict').hide()
  }    
}
Vue.prototype.$opCreatePopup = function (stt) {
  if (stt == 'open') {
    jQuery('#createPopup').show()
  } else {
    jQuery('#createPopup').hide()
  }
}
Vue.prototype.$opMenuPost = function (stt) {
  if (stt == 'open') {
    jQuery('#menuPost').show()
  } else {
    jQuery('#menuPost').hide()
  }
}
Vue.prototype.$opMenuAlert = function (stt, msg) {
  if (stt == 'open') {
    jQuery('#menuAlert').show()
    jQuery('#menuAlert #message').text(msg)
  } else {
    jQuery('#menuAlert').hide()
    jQuery('#menuAlert #message').text('')
  }
}
Vue.prototype.$opMenuMessage = function (stt, msg) {
  if (stt == 'open') {
    jQuery('#menuMessage').show()
    jQuery('#menuMessage #message').text(msg)
  } else {
    jQuery('#menuMessage').hide()
    jQuery('#menuMessage #message').text('')
  }
}
Vue.prototype.$opBottomMessage = function (stt, msg) {
  if (stt == 'open') {
    jQuery('#bottomMessage').show()
    jQuery('#bottomMessage #message').text(msg)
  } else {
    jQuery('#bottomMessage').hide()
    jQuery('#bottomMessage #message').text('')
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
