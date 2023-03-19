<template>
  <div class="main">
    <div class="section">
      <introduction-index/>
    </div>
    <div class="section">
      <greeting-index/>
    </div>
    <div class="section">
      <date-index/>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import IntroductionIndex from "@/components/introduction/IntroductionIndex";
import GreetingIndex from "@/components/greeting/GreetingIndex";
import DateIndex from "@/components/date/DateIndex"; // @ is an alias to /src


</script>


<style scoped lang="scss">
.main {
  width: 100%;
  height: auto;
  .section{
    margin-top: 1rem;
  }
}

</style>


