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
            Not just coping, but thriving
          </h2>
        </div>

        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div class="content ps-xl-5">
              <h5 class="font-desc mb-2">
                01 FATIGUE MANAGEMENT
              </h5>
              <h2 class="font-title mb-4">
                Understand your fatigue level through your Fatigue Score
              </h2>
              <div class="font-desc">
                <p class="mb-4">With (app), monitor your daily fatigue level before it deteriorates into risks on your work performance. Be well-informed on your fatigue level and task readiness through your Fatigue Score that breaks down your current state of fatigue.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '85%' }"
            >
              <img
                :src="asset('/images/individuals/benefits-workplace-safety-1a.png')"
                alt="Benefit 1"
                class="img"
                width="757"
                height="619"
                loading="lazy"
                :style="{
                  '--delay': '.3s',
                  width: '100%',
                  top: '0%',
                  left: '0%',
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
                02 TASK READINESS
              </h5>
              <h2 class="font-title mb-4">
                Be informed of how your fatigue level affects your task readiness and performance
              </h2>
              <div class="font-desc">
                <p class="mb-4">From sleep health, lifestyle activities and nutrition profile, understand how each aspect impacts you cognitive performance. With (app), understand the impacts and interdependency of each lifestyle factors on your task readiness.</p>
                <p class="mb-4">Gain science-backed insights on how to reduce work risks and optimise your  circadian rhythm alignment even with irregular shift-based work lifestyle.</p>
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
                :src="asset('/images/individuals/benefits-workplace-safety-2a.png')"
                alt="Benefit 1"
                class="img"
                width="407"
                height="734"
                loading="lazy"
                :style="{
                  '--delay': '.3s',
                  width: '65%',
                  top: '-7%',
                  left: '18%',
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
                03 RECOVERY MANAGEMENT
              </h5>
              <h2 class="font-title mb-4">
                Actionable insights on holistic recovery - from mind, body and health
              </h2>
              <div class="font-desc">
                <p class="mb-4">Like a dependable and knowledgeable performance coach, (app) will be your personal advisory to inform you on your fatigue level and task readiness - uniquely derived from your lifestyle behaviours, physiological statuses and circadian rhythm alignment.</p>
                <p class="mb-4">Through a guided recovery plan, reduce your fatigue and raise your task readiness level through personalised recommendations.</p>
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
                :src="asset('/images/individuals/benefits-workplace-safety-2a.png')"
                alt="Benefit 1"
                class="img"
                width="407"
                height="734"
                loading="lazy"
                :style="{
                  '--delay': '.3s',
                  width: '65%',
                  top: '-7%',
                  left: '18%',
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
  background-color: #BFECE4;
  background-image: linear-gradient(137.49deg, #BFECE4 0%, #FFFEFE 100%);
  display: flex;
  align-items: center;
  padding: 5rem 0;
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
  }
}
.benefit-1{
  --color-1: #368890;
  padding-top: 4rem;
}
.benefit-2{
  --color-1: #3BB19C;
  background-image: linear-gradient(137.49deg, #ECFDFF 0%, #FFFFFF 100%);
}
.benefit-3{
  --color-1: #368890;
}

.font-title{
  color: var(--color-1);
}
.font-desc{
  color: var(--color-1);
}
.heading{
  color: #368890;
}
.img-wrap{
  .img{
    opacity: 0;
    transform: translateY(1rem);
  }
}
</style>
