<template>
  <q-page class="row">
    <posts-component
    ></posts-component>
  </q-page>
</template>

<script lang="ts">
import PostsComponent from 'src/components/PostsComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostPage',
  components: { PostsComponent },
  setup () {
    return
  }
})
</script>
