<template>
  <q-page class="row">
    <posts-component
      :posts="posts"
    ></posts-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

import PostsComponent from 'src/components/PostsComponent.vue';
import { Post } from 'src/components/models';
import { api } from 'src/boot/axios';

export default defineComponent({
  name: 'PostPage',
  components: { PostsComponent },
  setup () {
    const posts = ref<Post[]>([]);

    async function getPosts() {
      const res = await api.get('/posts').catch();
      posts.value = res.data;
    }
    onMounted(() => {
      getPosts();
    })
    return {
      posts
    }
  }
})
</script>
