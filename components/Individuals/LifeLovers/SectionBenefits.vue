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
            Get the most out of life
          </h2>
        </div>

        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div class="content ps-xl-5">
              <h5 class="font-desc mb-2">
                01 LIFESTYLE PERFORMANCE
              </h5>
              <h2 class="font-title mb-4">
                Personalised insights to achieve goal-driven outcomes
              </h2>
              <div class="font-desc">
                <p class="mb-4">From work, health to life, our personal goals change with priority with time.  Based on your goals, (app) aligns with your context and guides you to reach the needed state of physical and mental wellbeing. Set personal goals, and learn how to align your lifestyle behaviours to support your goals that change with time.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '100%' }"
            >
              <img
                :src="asset('/images/individuals/benefits-life-lovers-1a.png')"
                alt="Benefit 1"
                class="img"
                width="406"
                height="745"
                loading="lazy"
                :style="{
                  '--delay': '.3s',
                  width: '62%',
                  top: '-4%',
                  left: '20%',
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
            <div class="content pe-xl-5">
              <h5 class="font-desc mb-2">
                02 PREVENTIVE HEALTH
              </h5>
              <h2 class="font-title mb-4">
                Prevention starts with awareness on your metabolic health risk
              </h2>
              <div class="font-desc">
                <p class="mb-4">With (app), understand and gain personalised insights your metabolic health. Through the use of computer-vision aided assessments, receive an analysed Metabolic Health Score.</p>
                <p class="mb-4">Interpret the associated health risks and impact of your lifestyle habits (sleep, physical activity, nutrition, environment) on your body, and proactively reduce health risks through actionable assessment recommendations.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-lg-first">
            <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '100%' }"
            >
              <img
                :src="asset('/images/individuals/benefits-life-lovers-1a.png')"
                alt="Benefit 2"
                class="img"
                width="406"
                height="745"
                loading="lazy"
                :style="{
                  '--delay': '.3s',
                  width: '62%',
                  top: '-4%',
                  left: '20%',
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
            <div class="content ps-xl-5">
              <h5 class="font-desc mb-2">
                03 MENTAL WELLBEING
              </h5>
              <h2 class="font-title mb-4">
                A connected mind, body and health to be fully in tune with your mental wellbeing
              </h2>
              <div class="font-desc">
                <p class="mb-4">Courses on mindfulness, relaxing music and coaching helps us to improve our mental wellbeing, but if you don’t take care of your body, mind and health - the outcome is often sub-optimal. Trying to achieve better health or improve work performance by targeting just one aspect of your lifestyle behaviours (sleep, activities, diet, etc) is not enough.</p>
                <p class="mb-4">With (app), we analyse metrics already proven by science and connect the dots between those metrics, your lifestyle behaviours,, and its impact on your physical and mental performance.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '100%' }"
            >
              <img
                :src="asset('/images/individuals/benefits-life-lovers-3a.png')"
                alt="Benefit 3"
                class="img"
                width="417"
                height="755"
                loading="lazy"
                :style="{
                  '--delay': '.3s',
                  width: '64%',
                  top: '-6%',
                  left: '20%',
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
            <div class="content pe-xl-5">
              <h5 class="font-desc mb-2">
                04 TRAVEL WELLBEING
              </h5>
              <h2 class="font-title mb-4">
                Stay rejuvenated in the midst of continuous travels
              </h2>
              <div class="font-desc">
                <p class="mb-4">Travelling is one of the best experiences in life, and you want to be able to fully enjoy it when the journey starts. The last thing you want is for jetlag fatigue to spoil your vacation fun.</p>
                <p class="mb-4">With (app)’s jetlag management feature, based on your flight schedule and lifestyle behaviours, we provide personal recommendations to help you re-align your circadian rhythm. Feel rejuvenated and energised, and truly enjoy the experience the joy of travelling.</p>
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
                :src="asset('/images/individuals/benefits-life-lovers-4a.png')"
                alt="Benefit 4"
                class="img"
                width="608"
                height="756"
                loading="lazy"
                :style="{
                  '--delay': '.3s',
                  width: '94%',
                  top: '0%',
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
  background-color: #DD899A;
  background-image: linear-gradient(137.49deg, #DD899A -4.62%, #FDEEF1 100.12%);
  display: flex;
  align-items: center;
  padding: 5rem 0;
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
  }
}
.benefit-1{
  --color-1: #fff;
  --color-2: #fff;
  padding-top: 4rem;
}
.benefit-2{
  --color-1: #F08FA2;
  --color-2: #D3566F;
  background-image: linear-gradient(137.49deg, #FFF3F5 -4.74%, #FDEEF1 100%);
}
.benefit-3{
  --color-1: #fff;
  --color-2: #fff;
}
.benefit-4{
  --color-1: #D3566F;
  --color-2: #D3566F;
  background-image: linear-gradient(137.49deg, #FFF3F5 -4.74%, #FDEEF1 100%);
}

.font-title{
  color: var(--color-1);
}
.font-desc{
  color: var(--color-2);
}
.heading{
  color: #fff;
}
.img-wrap{
  .img{
    opacity: 0;
    transform: translateY(1rem);
  }
}
</style>
