import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Post, Comment } from 'src/components/models';
import { useErrorStore } from './error';

const store = useErrorStore();

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[],
    post: {} as Post,
    comments: [] as Comment[],
  }),

  getters: {},

  actions: {
    async getPosts() {
      const res = await api.get('/posts').catch();
      this.posts = res.data;
    },

    async getPostById(id: number) {
      if (isNaN(id)) {
        store.isNotFound = true;
        return;
      }

      try {
        const path = `/posts/${id}`;
        const reqGetPost = api.get(path);
        const reqGetPostComments = api.get(path + '/comments');
        const res = await Promise.all([reqGetPost, reqGetPostComments]);

        this.post = res[0].data;
        this.comments = res[1].data;
      } catch {
        store.isNotFound = true;
      }
    },
  },
});
