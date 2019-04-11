import Vue from "vue";
import Vuex from "vuex";
import iview from "iview";
import App from "./app.vue";
import store from "./store/index";





Vue.use(iview)
Vue.use(Vuex)

new Vue({
    el:"#app",
    render(h){
        return h(App)
    },
    store: new Vuex.Store(store)
})