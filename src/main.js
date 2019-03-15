import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// to add icons to library
library.add(faAngleDown);
library.add(faAngleUp);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
