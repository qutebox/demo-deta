<template>
  <div id="Hero" class="section-hero">
    <div class="container">
      <h5 class="font-label text-center mb-4">
        SAFETY CRITICAL
      </h5>
      <h1 class="font-heading text-center mb-3">
        Activate your alertness to perform
      </h1>
      <div class="font-desc text-center">
        Always on my feet, ready for anything
      </div>
      <div class="scroll text-center">
        <v-icon name="scroll" size="48"></v-icon>
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
  background-image: url('@/assets/images/circle-green-bg.svg');
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
  color: #49C0AB;
}
.font-label{
  color: #49C0AB;
}
.font-desc{
  font-size: 1rem;
  color: #49C0AB;
  @media (min-width: @screen-lg) {
    font-size: 1.2rem;
  }
}
.scroll{
  color: #49C0AB;
  margin-top: 5rem;
  margin-bottom: -4rem;
  animation: scrolling 1s alternate infinite;
}
</style>
