<script setup>
import { asset } from '@/helpers/utils';
</script>

<template>
  <div id="Description">
    <!-- parallax-1 -->
    <div class="section-parallax parallax-1">
      <div class="parallax-bg">
        <v-parallax-bg
          :src="asset('/images/businesses/slide-1.jpg')"
          :speed="0.3"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-5"></div>
          <div class="col-lg-7">
            <div class="pe-xl-5">
              <h2 class="font-title mb-4">
                Fatigue and burnout affecting your organisation’s workplace resilience, and creating workplace safety risks?
              </h2>
              <div class="font-desc">
                <p class="mb-4">Your company’s performance relies on the strength of your workforce. Health is wealth, and in this case employee health is wealth, and performance.</p>
                <p class="mb-4">For your workforce in shift-based operations, it’s challenging to maintain optimal performance readiness across irregular work schedules - staying alert and ready 24/7 requires efforts beyond willpower - in optimised health, body and mind. Exhausted employees means more workplace risks and tendencies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- parallax-2 -->
    <div class="section-parallax parallax-2">
      <div class="parallax-bg">
        <v-parallax-bg
          :src="asset('/images/businesses/slide-2.jpg')"
          :speed="0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-5">
            <div class="">
              <h2 class="font-title mb-4">
                With (app), design your workplace resilience for a workforce that is ready to perform always.
              </h2>
              <div class="font-desc">
                <p class="mb-4">With 42,  mitigate workplace risks and improve workplace safety through proactive workplace resilience management. We help your employees in safety-critical industries like hospital, aviation and law enforcement to feel rejuvenated, and optimised.</p>
                <p class="mb-4">Through predictive analytics and personalised self-care advisory, help em employees be better informed on their task readiness and reduce work risks associated with sleep, fatigue and burnout. With (app), we help to enable your employees to be always on their feet and ready to perform in any situation.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6"></div>
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
