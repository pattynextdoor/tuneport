import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import firebase from 'firebase'

Vue.config.productionTip = false

// Vue Resource HTTP
Vue.use(VueResource);
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.http.headers.common['Access-Control-Allow-Credentials'] = 'true';
Vue.http.headers.common['Access-Control-Allow-Methods'] = 'OPTIONS, GET, POST';
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control';
Vue.http.headers.common['Content-Type'] = 'application/json';
Vue.http.headers.common['Accept'] = 'application/json';

var firebaseConfig = {
    apiKey: "AIzaSyD5Nt3Y4MbUzehcdTZVg57ZzazBxZf-K34",
    authDomain: "tuneport-39ff9.firebaseapp.com",
    databaseURL: "https://tuneport-39ff9.firebaseio.com",
    projectId: "tuneport-39ff9",
    storageBucket: "tuneport-39ff9.appspot.com",
    messagingSenderId: "642258357290",
    appId: "1:642258357290:web:2a9bfbebc1a2c013"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
