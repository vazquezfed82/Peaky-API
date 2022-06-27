import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
//import {IconsPlugin, BootstrapVue} from 'bootstrap-vue'
import VueAxios from 'vue-axios'
//Preguntar por qué no funciona -> BootstrapVue, IconsPlugin
createApp(App).use(router, VueAxios, axios).mount('#app')