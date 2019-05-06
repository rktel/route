import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';   // here!
Vue.use(VueMeteorTracker);                           // here!

import App from '/imports/ui/App.vue'

// Quitamos mensaje Vue Development de consola del navegador
Vue.config.productionTip = false



Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  });
});