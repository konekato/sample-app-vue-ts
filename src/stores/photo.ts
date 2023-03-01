import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Photo } from 'src/components/models';
import { useErrorStore } from './error';

const store = useErrorStore();
const LIMIT_PER_PAGE = 10;

export const usePhotoStore = defineStore('photo', {
  state: () => ({
    photos: [] as Photo[],
    page: 1,
  }),

  getters: {
    getPhotosPerPage(state) {
      return state.photos.slice(0, state.page * LIMIT_PER_PAGE);
    },
  },

  actions: {
    async getPhotos() {
      try {
        const res = await api.get('/photos');
        this.photos = res.data;
      } catch {
        store.isNotFound = true;
      }
    },
  },
});
