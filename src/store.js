import { createStore } from "vuex";

export default createStore({
  state: {
    formData: {
      name: "",
      age: null,
      children: [],
    },
  },
  mutations: {
    setFormData(state, data) {
      state.formData = data;
    },
    setChildren(state, children) {
      state.formData.children = children;
    },
  },
  actions: {
    updateFormData({ commit }, data) {
      commit("setFormData", data);
    },
    updateChildren({ commit }, children) {
      commit("setChildren", children);
    },
  },
  getters: {
    formData: (state) => state.formData,
  },
});
