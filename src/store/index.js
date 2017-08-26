import Vue from 'vue';
import Vuex from 'vuex';
import goods from './modules/goods.js';
import category from './modules/category.js';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    goods,category
  },
})
