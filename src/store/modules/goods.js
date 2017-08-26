import * as types from '../mutation-types.js';

const state = {
  goods: {},
  goodsSeries:{}
};

const mutations = {
  [types.SET_CURGOODS](state,goods) {
    state.goods = goods;
  },
  [types.SET_CURGOODSSERIES](state,goodsseries) {
    state.goodsSeries = goodsseries;
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
