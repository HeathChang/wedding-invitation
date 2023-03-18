<template>
  <div id="layout-wrapper">
    <div class="layout-contents">
      <default-header/>
      <div class="page-content">
        <slot/>
      </div>
      <default-footer/>
    </div>
  </div>
</template>

<script setup>

import DefaultHeader from "@/components/layouts/DefaultHeader.vue";
import DefaultFooter from "@/components/layouts/DefaultFooter.vue";
</script>

<style scoped lang="scss">
.layout-wrapper {
  width: 100%;
  height: auto;
}
</style>