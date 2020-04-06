import Vue from 'vue';
import Vuex from 'vuex';
import apiService from '@/services/apiService';
import { TokenService } from '@/services/storageService'



Vue.use(Vuex);

export default new Vuex.Store({
  modules: {

  },
  state: {
    token: localStorage.getItem('access_token') || null,
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    },
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    },
  },
  actions: {
    destroyToken(context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          apiService.post('logout', {
            access_token: context.getters.loggedIn
          })
            .then(response => {
              TokenService.removeToken()
              TokenService.removeRefreshToken()
              apiService.removeHeader()
              context.commit('destroyToken')
              resolve(response)
              console.log(response);
            })
            .catch(error => {
              TokenService.removeToken()
              TokenService.removeRefreshToken()
              apiService.removeHeader()
              context.commit('destroyToken')
              console.log(error);
              reject(error)
            })
        })
      }
    },
    retrieveToken(context, payload) {

      return new Promise((resolve, reject) => {
        apiService.post('/user/login', payload)
          .then(response => {
            if (response.data.code === 200) {
              context.commit('retrieveToken', response.data.data)
              resolve(response)
            }
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
  },
});
