<script setup>
import { asset } from '@/helpers/utils';
</script>

<template>
  <div id="Cases" class="section-cases">
    <!-- case-1 -->
    <div id="Cases_1" class="section-cases-item section-case-1">
      <div class="container position-relative">
        <div class="bg-light">
          <img src="@/assets/images/light-blue-bg.svg" alt="" width="830" height="830" loading="lazy">
        </div>

        <div class="row align-items-center g-5 position-relative">
          <!-- content -->
          <div class="col-lg-6">
            <div class="pe-xl-5">
              <div class="font-subtitle">
                {{ $t('HOME.V2.CASES.CASE_1.SUBTITLE') }}
              </div>
              <h2 class="font-title mb-4">
                {{ $t('HOME.V2.CASES.CASE_1.TITLE') }}
              </h2>
              <div
                v-html="$t('HOME.V2.CASES.CASE_1.DESC')"
                class="font-desc"
              ></div>
              <div class="mt-5">
                <NuxtLink to="/" class="btn btn-cta">
                  {{ $t('HOME.V2.CASES.CASE_1.CTA') }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- images -->
          <div class="col-lg-6">
            <v-inview
              class="img"
              add-class="__in"
            >
              <img
                :src="asset('/images/home/slider-2.png')"
                alt="Detalytics"
                width="562"
                height="405"
                loading="lazy"
              >
            </v-inview>
          </div>
        </div>
      </div>
    </div>

    <!-- case-2 -->
    <div id="Cases_2" class="section-cases-item section-case-2">
      <div class="container position-relative">
        <div class="bg-light">
          <img src="@/assets/images/light-blue-bg.svg" alt="" width="830" height="830" loading="lazy">
        </div>

        <div class="row align-items-center g-5 position-relative">
          <!-- content -->
          <div class="col-lg-6">
            <div class="ps-xl-5">
              <div class="font-subtitle">
                {{ $t('HOME.V2.CASES.CASE_2.SUBTITLE') }}
              </div>
              <h2 class="font-title mb-4">
                {{ $t('HOME.V2.CASES.CASE_2.TITLE') }}
              </h2>
              <div
                v-html="$t('HOME.V2.CASES.CASE_2.DESC')"
                class="font-desc"
              ></div>
              <div class="mt-5">
                <NuxtLink to="/" class="btn btn-cta">
                  {{ $t('HOME.V2.CASES.CASE_2.CTA') }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- images -->
          <div class="col-lg-6 order-lg-first">
            <v-inview
              class="img"
              add-class="__in"
            >
              <img
                :src="asset('/images/home/slider-4.png')"
                alt="Detalytics"
                width="562"
                height="405"
                loading="lazy"
              >
            </v-inview>
          </div>
        </div>
      </div>
    </div>

    <!-- case-3 -->
    <div id="Cases_3" class="section-cases-item section-case-3">
      <div class="container position-relative">
        <div class="bg-light">
          <img src="@/assets/images/light-blue-bg.svg" alt="" width="830" height="830" loading="lazy">
        </div>

        <div class="row align-items-center g-5 position-relative">
          <!-- content -->
          <div class="col-lg-6">
            <div class="pe-xl-5">
              <div class="font-subtitle">
                {{ $t('HOME.V2.CASES.CASE_3.SUBTITLE') }}
              </div>
              <h2 class="font-title mb-4">
                {{ $t('HOME.V2.CASES.CASE_3.TITLE') }}
              </h2>
              <div
                v-html="$t('HOME.V2.CASES.CASE_3.DESC')"
                class="font-desc"
              ></div>
              <div class="mt-5">
                <NuxtLink to="/" class="btn btn-cta">
                  {{ $t('HOME.V2.CASES.CASE_3.CTA') }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- images -->
          <div class="col-lg-6">
            <v-inview
              class="img"
              add-class="__in"
            >
              <img
                :src="asset('/images/home/slider-1.png')"
                alt="Detalytics"
                width="562"
                height="405"
                loading="lazy"
              >
            </v-inview>
          </div>
        </div>
      </div>
    </div>

    <!-- case-4 -->
    <div id="Cases_4" class="section-cases-item section-case-4">
      <div class="container position-relative">
        <div class="bg-light">
          <img src="@/assets/images/light-blue-bg.svg" alt="" width="830" height="830" loading="lazy">
        </div>

        <div class="row align-items-center g-5 position-relative">
          <!-- content -->
          <div class="col-lg-6">
            <div class="ps-xl-5">
              <div class="font-subtitle">
                {{ $t('HOME.V2.CASES.CASE_4.SUBTITLE') }}
              </div>
              <h2 class="font-title mb-4">
                {{ $t('HOME.V2.CASES.CASE_4.TITLE') }}
              </h2>
              <div
                v-html="$t('HOME.V2.CASES.CASE_4.DESC')"
                class="font-desc"
              ></div>
              <div class="mt-5">
                <NuxtLink to="/" class="btn btn-cta">
                  {{ $t('HOME.V2.CASES.CASE_4.CTA') }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- images -->
          <div class="col-lg-6 order-lg-first">
            <v-inview
              class="img"
              add-class="__in"
            >
              <img
                :src="asset('/images/home/slider-3.png')"
                alt="Detalytics"
                width="562"
                height="405"
                loading="lazy"
              >
            </v-inview>
          </div>
        </div>
      </div>
    </div>

    <!-- case-5 -->
    <div id="Cases_5" class="section-cases-item section-case-5">
      <div class="container position-relative">
        <div class="bg-light">
          <img src="@/assets/images/light-red-bg.svg" alt="" width="830" height="830" loading="lazy">
        </div>

        <div class="row align-items-center g-5 position-relative">
          <!-- content -->
          <div class="col-lg-6">
            <div class="pe-xl-5">
              <div class="font-subtitle">
                {{ $t('HOME.V2.CASES.CASE_5.SUBTITLE') }}
              </div>
              <h2 class="font-title mb-4">
                {{ $t('HOME.V2.CASES.CASE_5.TITLE') }}
              </h2>
              <div
                v-html="$t('HOME.V2.CASES.CASE_5.DESC')"
                class="font-desc"
              ></div>
              <div class="mt-5">
                <NuxtLink to="/" class="btn btn-cta">
                  {{ $t('HOME.V2.CASES.CASE_5.CTA') }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- images -->
          <div class="col-lg-6">
            <v-inview
              class="img"
              add-class="__in"
            >
              <img
                :src="asset('/images/home/slider-1.png')"
                alt="Detalytics"
                width="562"
                height="405"
                loading="lazy"
              >
            </v-inview>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>

.section-case-1{
  --color: #61AAF5;
  --font: #2D6DAF;
  --bg: #EDFCFF;
  --btn: #61AAF5;
}
.section-case-2{
  --color: #29619C;
  --font: #445E8C;
  --bg: #EDFCFF;
  --btn: #5E7DB3;
}
.section-case-3{
  --color: #4BB2CB;
  --font: #268197;
  --bg: #EDFCFF;
  --btn: #4BB2CB;
}
.section-case-4{
  --color: #29619C;
  --font: #29619C;
  --bg: #EDFCFF;
  --btn: #29619C;
}
.section-case-5{
  --color: #F08FA2;
  --font: #D3566F;
  --bg: #FFF3F5;
  --btn: #F08FA2;
}

.section-cases-item{
  position: relative;
  overflow: hidden;
  background-color: var(--bg, #fff);
  padding: 4rem 0;
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
  }
}

.font-subtitle{
  font-size: 1.5rem;
  color: var(--color);
}
.font-title{
  font-size: 3rem;
  font-weight: 600;
  color: var(--color);
}
.font-desc{
  color: var(--font);
}
.btn-cta{
  background-color: var(--btn);
}
.img{
  opacity: 0;
  transform: translateY(1rem);
  text-align: center;
  transition: opacity .5s, transform .75s;
  &.__in{
    opacity: 1;
    transform: translateY(0);
  }
  img{
    width: 80%;
    height: auto;
  }
}
.bg-light{
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -90%);
  @media (min-width: @screen-lg) {
    transform: translate(-50%, -50%);
  }
}
</style>
