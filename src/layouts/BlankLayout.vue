<template>
  <div id="layout-wrapper">
    <slot></slot>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute();

</script>