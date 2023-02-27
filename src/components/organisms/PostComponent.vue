<template>
  <q-list bordered class="rounded-borders" style="max-width: 600px">
    <q-item-label header>Post</q-item-label>
    <q-item>
      <q-item-section>
        <q-item-label>
          <span class="text-weight-medium">{{ post.title }}</span>
          <span class="text-grey-8"> - {{ post.userId }}</span>
        </q-item-label>
        <q-item-label>{{ post.body }}</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator spaced />

    <q-item-label header>Comments</q-item-label>
    <q-item v-for="comment in comments" :key="comment.id" class="q-my-sm" >
      <q-item-section>
        <q-item-label class="text-weight-medium">
          <span class="text-weight-medium">{{ comment.name }}</span>
          <span class="text-grey-8"> - {{ comment.email }}</span>
        </q-item-label>
        <q-item-label>{{ comment.body }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Post, Comment } from '../models';

export default defineComponent({
  name: 'PostComponent',
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true
    },
    comments: {
      type: Array as PropType<Comment[]>,
      required: true
    }
  },
})
</script>
