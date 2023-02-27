<template>
  <div>
    <router-link to="/posts">＜ Back</router-link>
  </div>
  <q-page class="row">
    <post-component
      :post="post"
      :comments="comments"
    ></post-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { usePostsStore } from 'src/stores/posts';
import PostComponent from 'src/components/organisms/PostComponent.vue';

export default defineComponent({
  name: 'PostPage',
  components: { PostComponent },
  setup () {
    const route = useRoute()
    const { id } = route.params;

    const store = usePostsStore();
    const { post, comments } = toRefs(store);
    const { getPostById } = store;

    onMounted(() => {
      getPostById(Number(id));
    })
    return {
      post,
      comments
    }
  }
})
</script>
