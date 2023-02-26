import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Post } from 'src/components/models';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[],
  }),

  getters: {},

  actions: {
    async getPosts() {
      const res = await api.get('/posts').catch();
      this.posts = res.data;
    },
  },
});
