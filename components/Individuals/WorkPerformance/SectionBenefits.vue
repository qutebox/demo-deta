<script setup>
import { asset } from '@/helpers/utils';
</script>

<template>
  <div id="Benefits">
    <!-- benefit-1 -->
    <div id="Benefits1" class="section-benefits benefit-1">
      <div class="container">
        <!-- heading -->
        <div class="heading text-lg-center">
          <h5 class="font-label mb-2">
            BENEFITS
          </h5>
          <h2 class="font-title mb-5">
            Achieve Peak Performance, by Design
          </h2>
        </div>

        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div class="content pe-xl-5">
              <h5 class="font-desc mb-2">
                01 PERSONAL GOALS
              </h5>
              <h2 class="font-title mb-4">
                Define and achieve your best performance
              </h2>
              <div class="font-desc">
                <p class="mb-4">With (app), customize and perform at your own definition of your ‘best’. Elevate your readiness and functional level, through a holistic, actionable plan to achieve your peak performance goals.</p>
                <p class="mb-4">Your app is your personal advisory aligned to your chosen performance objective and based uniquely on your personal data.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-lg-first">
            <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '110%' }"
            >
              <img
                :src="asset('/images/individuals/benefits-work-performance-1a.png')"
                alt="Benefit 1"
                class="img"
                width="413"
                height="746"
                loading="lazy"
                :style="{
                  '--delay': '.3s',
                  width: '64%',
                  top: '0%',
                  left: '15%',
                }"
              >
            </v-inview>
          </div>
        </div>
      </div>
    </div>

    <!-- benefit-2 -->
    <div id="Benefits2" class="section-benefits benefit-2">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div class="content ps-xl-5">
              <h5 class="font-desc mb-2">
                02 FATIGUE MANAGEMENT
              </h5>
              <h2 class="font-title mb-4">
                Combat your fatigue levels and keep your brain healthy
              </h2>
              <div class="font-desc">
                <p class="mb-4">High-demand jobs, long hours and workplace stress combiend with heavy workloads can take a toll mentally and physically over time. Chronic fatigue leads to burnout, and only affects your productivity and ability to perform in the long run.</p>
                <p class="mb-4">With (app), we help to prevent all that. Monitor and manage your fatigue levels, through insighful breakdown of your circadian rhythm and contributing lifestyle factors.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '110%' }"
            >
              <img
                :src="asset('/images/individuals/benefits-work-performance-2a.png')"
                alt="Benefit 1"
                class="img"
                width="502"
                height="808"
                loading="lazy"
                :style="{
                  '--delay': '.3s',
                  width: '77%',
                  top: '-5%',
                  left: '15%',
                }"
              >
            </v-inview>
          </div>
        </div>
      </div>
    </div>

    <!-- benefit-3 -->
    <div id="Benefits3" class="section-benefits benefit-3">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div class="content pe-xl-5">
              <h5 class="font-desc mb-2">
                03 LIFESTYLE IMPACT
              </h5>
              <h2 class="font-title mb-4">
                Optimise your lifestyle and achieve holistic high-level performance
              </h2>
              <div class="font-desc">
                <p class="mb-4">To perform, focusing on just work alone is not enough. You need an optimised mind and body to support your capability to perform.  With (app), we target all that. From sleep, diet to lifestyle behaviours, we provide personalised and actionable recommendations to improve your holistic wellbeing.</p>
                <p class="mb-4">With personal insights on physical, mental and emotional health, build a strong foundational support/system that enables you to achieve your performance goals sustainably.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-lg-first">
            <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '110%' }"
            >
              <img
                :src="asset('/images/individuals/benefits-work-performance-3a.png')"
                alt="Benefit 1"
                class="img"
                width="718"
                height="905"
                loading="lazy"
                :style="{
                  '--delay': '.3s',
                  width: '100%',
                  top: '-13%',
                  left: '0%',
                }"
              >
            </v-inview>
          </div>
        </div>
      </div>
    </div>

    <!-- benefit-4 -->
    <div id="Benefits4" class="section-benefits benefit-4">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div class="content ps-xl-5">
              <h5 class="font-desc mb-2">
                04 JETLAG MANAGEMENT
              </h5>
              <h2 class="font-title mb-4">
                Stay rejuvenated in the midst of continuous travels
              </h2>
              <div class="font-desc">
                <p class="mb-4">For some, frequent travel is part of the job, but so is the associated jetlag that leaves you feeling tired and restless. With (app), our jetlag management feature fixes that.</p>
                <p class="mb-4">Based on your flight schedule and lifestyle behaviours, we provide personal recommendations to help you re-align your circadian rhythm. No matter where you travel, feel rejuvenated and energised.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '110%' }"
            >
              <img
                :src="asset('/images/individuals/benefits-work-performance-4a.png')"
                alt="Benefit 1"
                class="img"
                width="718"
                height="905"
                loading="lazy"
                :style="{
                  '--delay': '.3s',
                  width: '93%',
                  top: '-3%',
                  left: '5%',
                }"
              >
            </v-inview>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
.section-benefits{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background-color: #B2DCF7;
  background-image: linear-gradient(137.49deg, #B2DCF7 0%, #EFFEFF 100%);
  display: flex;
  align-items: center;
  padding: 5rem 0;
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
  }
}
.benefit-1{
  --color-1: #000;
  padding-top: 4rem;
}
.benefit-2{
  --color-1: #3E4E4F;
  background-image: linear-gradient(137.49deg, #EAFDFF 0%, #DCF2FF 100%);
}
.benefit-3{
  --color-1: #3E4E4F;
}
.benefit-4{
  --color-1: #3E4E4F;
  background-image: linear-gradient(137.49deg, #EAFDFF 0%, #DCF2FF 100%);
}

.font-title{
  color: var(--color-1);
}
.font-desc{
  color: var(--color-1);
}
.heading{
  color: #3E4E4F;
}
.img-wrap{
  .img{
    opacity: 0;
    transform: translateY(1rem);
  }
}
</style>
