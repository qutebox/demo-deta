<script setup>
import { asset } from '@/helpers/utils';
</script>

<template>
  <div id="About" class="section-about">
    <div class="container position-relative">
      <div class="bg-light">
        <img src="@/assets/images/light-orange-bg.svg" alt="" width="830" height="830" loading="lazy">
      </div>

      <div class="row align-items-center g-5 position-relative">
        <!-- content -->
        <div class="col-lg-6">
          <div class="pe-xl-5">
            <h2 class="font-title mb-4">
              {{ $t('HOME.V2.ABOUT.TITLE') }}
            </h2>
            <div
              v-html="$t('HOME.V2.ABOUT.BODY')"
              class="font-desc"
            ></div>
            <!-- <div class="mt-5">
              <NuxtLink to="/" class="btn btn-cta">
                {{ $t('HOME.V2.ABOUT.CTA') }}
              </NuxtLink>
            </div> -->
          </div>
        </div>

        <!-- images -->
        <div class="col-lg-6">
          <v-inview
            class="img-wrap"
            add-class="__in"
          >
            <img
              :src="asset('/images/home/pic-2.png')"
              alt="Detalytics"
              width="398"
              height="315"
              loading="lazy"
              class="img"
              :style="{
                '--delay': '.3s',
                width: '60%',
                top: '0',
                right: '10%',
                transform: 'translateX(1rem)',
              }"
            >
            <img
              :src="asset('/images/home/pic-1.png')"
              alt="Detalytics"
              width="429"
              height="258"
              loading="lazy"
              class="img"
              :style="{
                '--delay': '.5s',
                width: '63%',
                top: '33%',
                left: '3%',
                transform: 'translateX(-1rem)',
              }"
            >
            <img
              :src="asset('/images/home/pic-3.png')"
              alt="Detalytics"
              width="385"
              height="322"
              loading="lazy"
              class="img"
              :style="{
                '--delay': '.7s',
                width: '57%',
                right: '0%',
                bottom: '0%',
                transform: 'translateX(1rem)',
              }"
            >
          </v-inview>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-about{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background-color: #FFFCFC;
  background-image: linear-gradient(304.29deg, #FFFCFC 8.98%, #FFF2DF 72.64%);
  display: flex;
  align-items: center;
  padding: 4rem 0;
  @media (min-width: @screen-md) {
    padding: 5rem 0;
  }
}

.font-title{
  color: #DF8A2E;
}
.font-desc{
  color: #9D5B14;
}

.btn-cta{
  background-color: #EC9B45;
  color: #fff;
  box-shadow: 0px 0px 2.01468px #FFC88D, 0px 4.02937px 8.05874px #FFDBB6;
  &:hover{
    background-color: lighten(#EC9B45, 7%);
  }
}

.bg-light{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  @media (min-width: @screen-md) {
    transform: translate(0, -50%);
  }
}
</style>
