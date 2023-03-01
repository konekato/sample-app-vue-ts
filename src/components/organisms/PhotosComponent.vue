<template>
  <div class="row q-pa-md items-start q-gutter-md">
    <q-card class="my-card" v-for="photo in photos" :key="photo.id">
      <q-img :src="photo.thumbnailUrl">
        <div class="absolute-bottom text-subtitle2 text-center">
          {{ photo.title }}
        </div>
      </q-img>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Photo } from '../models';

export default defineComponent({
  name: 'PhotosComponent',
  props: {
    photos: {
      type: Array as PropType<Photo[]>,
      required: true
    },
  },
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
