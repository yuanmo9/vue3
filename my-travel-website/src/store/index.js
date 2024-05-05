// store/index.js

import { createStore } from 'vuex';

const store = createStore({
  modules: {
    visitor: {
      namespaced: true,
      state: {
        visitorData: {
          2020: 1000,
          2021: 2000,
          2022: 3000,
          2023: 4000,
          2024: 5000,
        },
        auth: {
          isAuthenticated: false,
          username: 'admin',
          password: '123456'
        },
        destinationData: [] // 新增目的地数据存放区
      },
      mutations: {
        updateVisitorData(state, payload) {
          state.visitorData = payload;
        },
        login(state) {
          state.auth.isAuthenticated = true;
        },
        logout(state) {
          state.auth.isAuthenticated = false;
        },
        updateUserInfo(state, payload) {
          state.auth.username = payload.newNickname;
          state.auth.password = payload.newPassword;
        },
        // 新增 mutation 更新目的地数据
        updateDestinationData(state, payload) {
          state.destinationData.push(payload);
        }
      },
      actions: {
        async fetchVisitorData({ commit }) {
          try {
            const data = await fetchVisitorDataFromBackend();
            commit('updateVisitorData', data);
          } catch (error) {
            console.error('Failed to fetch visitor data:', error);
          }
        },
        async updateUserInfo({ commit }, payload) {
          try {
            console.log('正在更新用户信息:', payload);
            commit('updateUserInfo', payload);
          } catch (error) {
            console.error('更新用户信息失败:', error);
            throw error;
          }
        },
        // 新增 action 更新目的地数据
        updateDestinationData({ commit }, payload) {
          commit('updateDestinationData', payload);
        }
      },
      getters: {
        getVisitorData: state => state.visitorData,
        getDestinationData: state => state.destinationData // 新增获取目的地数据的 getter
      }
    }
  }
});

async function fetchVisitorDataFromBackend() {
  return {
    2020: 1000,
    2021: 2000,
    2022: 3000,
    2023: 4000,
    2024: 5000,
  };
}

export default store;
