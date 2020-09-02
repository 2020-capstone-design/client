import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ownerId: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.ownerId !== '';
    },
  },
  mutations: {
    setOwnerId(state, ownerId) {
      state.ownerId = ownerId;
    },
    clearOwnerId(state) {
      state.ownerId = '';
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = '';
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log('data.token', data.token);
      commit('setToken', data.token);
      commit('setOwnerId', data.user.ownerId);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.ownerId);
      return data;
    },
  },
});
