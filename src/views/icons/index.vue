<template>
  <div class="page-icons">
    <h2>아이콘 리스트</h2>
    <ul>
      <li v-for="icon in iconList" :key="icon.id">
        <BaseIcons :iconName="icon.name"/>
        <span class="name">{{ icon.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import BaseIcons from "@/components/common/BaseIcons";
import ICONS from "@/assets/icons/icons";

export default {
  components: {
    BaseIcons
  },
  setup() {
    const iconList = ref([]);

    for (const [key, value] of Object.entries(ICONS)) {
      iconList.value.push({
        name: key,
        ...value
      });
    }
    console.log(iconList.value);
    return {
      iconList
    }
  }
}
</script>

<style lang="scss">
.page-icons {
  h2 {
    margin: 15px;
    margin-top: 35px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    margin: 15px;
    padding: 15px 20px 10px 20px;
    text-align: center;
    border: 1px solid #444;
    border-radius: 6px;
    .name {
      display: block;
      margin-top: 10px;
      color: var(--font-color-primary);
    }
  }
}
</style>