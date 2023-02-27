<template>
  <q-list bordered class="rounded-borders" style="max-width: 600px">
    <q-item v-for="post in posts" :key="post.id" class="q-my-sm" clickable v-ripple :to="{ name: 'posts', params: { id: 1 } }" >
      <q-item-section>
        <q-item-label>
          <span class="text-weight-medium">{{ post.title }}</span>
          <span class="text-grey-8"> - {{ post.userId }}</span>
        </q-item-label>
        <q-item-label>{{ post.body }}</q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-badge label="10k" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { Post } from '../models';

export default defineComponent({
  name: 'PostsComponent',
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true
    }
  },
})
</script>
