<template>
  <div class="main">
    <div class="section">
      이곳은 메인 인트로 덕션 부분입니다.
      <div class="image-box">
        <img src="@/assets/images/img.png" alt="An example image" class="image">
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: auto;

  .section {
    .image-box {
      //max-width: 100vw;
      //max-height: 100vh;

      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }


}
</style>
