<script setup>
import { asset } from '@/helpers/utils';
</script>

<template>
  <div id="Description">
    <!-- parallax-1 -->
    <div class="section-parallax parallax-1">
      <div class="parallax-bg">
        <v-parallax-bg
          :src="asset('/images/individuals/slide-1.jpg')"
          :speed="-0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-7"></div>
          <div class="col-lg-5">
            <h2 class="font-title mb-4">
              Fatigue and burnout preventing you from performing your best?
            </h2>
            <div class="font-desc">
              From senior executives responsible for all major operations of a company, to the individuals at trading desks when right or wrong decisions can mean making or losing millions of dollars, one thing is common: to get the job done, day in and day out, your body and brain have to be at the optimal state of readiness to perform at your best.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- parallax-2 -->
    <div class="section-parallax parallax-2">
      <div class="parallax-bg">
        <v-parallax-bg
          :src="asset('/images/individuals/slide-2.jpg')"
          :speed="0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-5">
            <h2 class="font-title mb-4">
              With (app), activate the joy of peak performance.
            </h2>
            <div class="font-desc">
              Let (app) monitor your daily fatigue level before chronic fatigue turns into burnout. Assess your metabolic health statuses with your own smartphone and stop preventable lifestyle illnesses from altering the course of your dream career. Go from just coping with the demands of work to building sustainable physical and mental resilience and unleash your hidden advantage for a long and fulfilling career.
            </div>
          </div>
          <div class="col-lg-7"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
.section-parallax{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #eee;
  padding: 5rem 0;
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
  }
}

.parallax-bg{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
