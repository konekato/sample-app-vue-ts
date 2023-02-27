<template>
  <error-not-found v-if="isNotFound"></error-not-found>
  <router-view v-else />
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import ErrorNotFound from './pages/ErrorNotFound.vue';
import { useErrorStore } from 'src/stores/error';

export default defineComponent({
    name: 'App',
    components: { ErrorNotFound },
    setup () {
      const { isNotFound } = toRefs(useErrorStore());
      return { isNotFound };
    }
});
</script>
