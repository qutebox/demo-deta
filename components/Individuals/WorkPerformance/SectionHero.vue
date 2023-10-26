<template>
  <div id="Hero" class="section-hero">
    <div class="container">
      <h5 class="font-label text-center mb-4">
        WORK PERFORMANCE
      </h5>
      <h1 class="font-heading text-center mb-3">
        Activate your Peak Performance
      </h1>
      <div class="font-desc text-center">
        Get the most out of your life and work, everyday
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
  display: flex;
  align-items: center;
  background-color: #fff;
  background-image: url('@/assets/images/circle-blue-bg.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 5rem 0;
  min-height: 75vh;
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
    min-height: ~"calc(100vh - 6rem)";
  }
}

.font-heading{
  color: #469FD6;
}
.font-label{
  color: #2888C3;
}
.font-desc{
  font-size: 1rem;
  color: #002E5E;
  @media (min-width: @screen-lg) {
    font-size: 1.2rem;
  }
}
.scroll{
  color: #469FD6;
  margin-top: 5rem;
  margin-bottom: -4rem;
  animation: scrolling 1s alternate infinite;
}
</style>
