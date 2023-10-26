<script setup>
import { asset } from '@/helpers/utils';
</script>

<template>
  <div id="Description">
    <!-- parallax-1 -->
    <div class="section-parallax parallax-1">
      <div class="parallax-bg">
        <v-parallax-bg
          :src="asset('/images/individuals/slide-5.jpg')"
          :speed="0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-6">
            <div class="pe-xl-5">
              <h2 class="font-title mb-4">
                We want to feel the best we are everyday, but truth is most of us are just trying to survive day by day.
              </h2>
              <div class="font-desc">
                Feeling exhausted and in a continuous state of mental fatigue? You want to achieve whatever goals and aspirations in life, but sometimes life’s challenges can be overwhelming. There is no joy in having a longer lifespan without feeling healthy mentally and physically, and you want to be able to to develop mental resilience to not just cope but thrive despite the challenges.
              </div>
            </div>
          </div>
          <div class="col-lg-6"></div>
        </div>
      </div>
    </div>

    <!-- parallax-2 -->
    <div class="section-parallax parallax-2">
      <div class="parallax-bg">
        <v-parallax-bg
          :src="asset('/images/individuals/slide-6.jpg')"
          :speed="-0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-5">
            <h2 class="font-title mb-4">
              With (app), activate the joy of living life to the fullest
            </h2>
            <div class="font-desc">
              <p class="mb-4">With (app), be empowered to develop mental resilience to not just cope, but thrive in the face of any lifestyle challenges and live in every moment. Separate facts from the myths, and let (app) guide you on following scientifically-proven advices and recommendations to improve your health and wellbeing.</p>
              <p class="mb-0">Develop lifestyle behaviours that empower you to develop mental resilience to not just cope, but thrive in the face of any context of your lifestyle and live in every moment.</p>
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
