<template>
  <component :is="layout" >
    <slot  />
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';

const route = useRoute();
const layout = computed(() => {
  const metaLayout = route.meta.layout;
  return metaLayout === 'default' ? DefaultLayout : BlankLayout;
});
</script>
