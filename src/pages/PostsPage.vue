<template>
  <q-page class="row">
    <posts-component
      :posts="posts"
    ></posts-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import PostsComponent from 'src/components/organisms/PostsComponent.vue';
import { usePostsStore } from 'src/stores/posts';

export default defineComponent({
  name: 'PostsPage',
  components: { PostsComponent },
  setup () {
    const store = usePostsStore();
    const { posts } = storeToRefs(store);
    const { getPosts } = store;

    onMounted(() => {
      getPosts();
    })
    return {
      posts
    }
  }
})
</script>
