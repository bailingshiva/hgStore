import * as types from '../mutation-types.js';

const state = {
  category: {}
};

const mutations = {
  [types.SET_CURCATEGORY](state,category) {
    state.category = category;
  }
};

const getters = {

};

const actions = {

};

export default {
  state,
  getters,
  actions,
  mutations
}
