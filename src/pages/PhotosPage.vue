<template>
  <q-page>
    <h1>Photos</h1>
    <photos-component
      :photos="getPhotosPerPage"
    ></photos-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import PhotosComponent from 'src/components/organisms/PhotosComponent.vue';
import { usePhotoStore } from 'src/stores/photo';

export default defineComponent({
  name: 'PhotosPage',
  components: { PhotosComponent },
  setup () {
    const store = usePhotoStore();
    const { getPhotosPerPage } = storeToRefs(store);
    const { getPhotos } = store;

    onMounted(() => {
      getPhotos();
    })
    return {
      getPhotosPerPage
    }
  }
})
</script>
