<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="icon.width"
      :height="icon.height"
      :viewBox="`${'0 0 ' + icon.width + ' ' + icon.height}`"
      class="icon-svg"
      v-html="icon.path"
  >
  </svg>
</template>

<script>
import ICONS from "@/assets/icons/icons.js";

export default {
  props: {
    iconName: {
      type: String
    }
  },
  computed: {
    icon() {
      if (ICONS[this.iconName] === undefined) return {width: 18, height: 18, path: ''};
      return ICONS[this.iconName]
    }
  },
}
</script>


<style scoped>
.ml-5 {
  margin-left: 1.25rem;
}
</style>