<template>
  <div id="layout-wrapper">
    <div class="layout-contents">
      <default-header/>
      <div class="page-content">
        <slot/>
      </div>
      <default-footer style="z-index: 100000"/>
    </div>
  </div>
</template>

<script setup>

import DefaultHeader from "@/components/layouts/DefaultHeader.vue";
import DefaultFooter from "@/components/layouts/DefaultFooter.vue";
</script>

<style scoped lang="scss">

#layout-wrapper {
  height: auto;
  display: flex;

  .layout-contents {
    position: relative;
    width: 100%;

    .page-content {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
}


</style>