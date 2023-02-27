import { defineStore } from 'pinia';

export const useErrorStore = defineStore('error', {
  state: () => ({
    isNotFound: false,
  }),

  getters: {},

  actions: {},
});
