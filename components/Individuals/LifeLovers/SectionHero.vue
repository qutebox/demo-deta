<template>
  <div id="Hero" class="section-hero">
    <div class="container">
      <h5 class="font-label text-center mb-4">
        HEALTH & WELLBEING
      </h5>
      <h1 class="font-heading text-center mb-3">
        Activate the joy of living
      </h1>
      <div class="font-desc text-center">
        Live life to your fullest potential
      </div>
      <div class="scroll text-center">
        <a href="#Description" :style="{ color: 'inherit' }">
          <v-icon name="scroll" size="48"></v-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-hero{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #fff;
  background-image: url('@/assets/images/circle-red-bg.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: ~"calc(100vh - 6rem)";
  padding: 5rem 0;
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
  }
}

.font-heading{
  color: #F08FA2;
}
.font-label{
  color: #F08FA2;
}
.font-desc{
  font-size: 1rem;
  color: #F08FA2;
  @media (min-width: @screen-lg) {
    font-size: 1.2rem;
  }
}
.scroll{
  color: #F08FA2;
  margin-top: 5rem;
  margin-bottom: -4rem;
  animation: scrolling 1s alternate infinite;
}
</style>
