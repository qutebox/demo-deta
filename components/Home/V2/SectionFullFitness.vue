<script setup>
import { asset } from '@/helpers/utils';

const { t } = useI18n();

// const cards = [
//   {
//     title: t('HOME.USECASES.CASE_1_TITLE'),
//     desc: t('HOME.USECASES.CASE_1_DESC'),
//     img: asset('/images/home/card-1.png'),
//   },
//   {
//     title: t('HOME.USECASES.CASE_2_TITLE'),
//     desc: t('HOME.USECASES.CASE_2_DESC'),
//     img: asset('/images/home/card-2.png'),
//   },
//   {
//     title: t('HOME.USECASES.CASE_3_TITLE'),
//     desc: t('HOME.USECASES.CASE_3_DESC'),
//     img: asset('/images/home/card-3.png'),
//   },
//   {
//     title: t('HOME.USECASES.CASE_4_TITLE'),
//     desc: t('HOME.USECASES.CASE_4_DESC'),
//     img: asset('/images/home/card-4.png'),
//   },
//   {
//     title: t('HOME.USECASES.CASE_5_TITLE'),
//     desc: t('HOME.USECASES.CASE_5_DESC'),
//     img: asset('/images/home/card-5.png'),
//   },
// ];
</script>

<template>
  <div id="Usecase" class="section-usecase">
    <div class="container">
      <h2 class="font-title mb-4 text-center">
        {{ $t('HOME.V2.FULL_FITNESS.TITLE') }}
      </h2>
      <div
        v-html="$t('HOME.V2.FULL_FITNESS.DESC')"
        class="font-desc text-center"
      ></div>

      <!-- <div class="row g-4 justify-content-center my-5 pt-lg-4">
        <div
          v-for="(item, index) in cards"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <v-inview
            class="card-item animated"
            :class="`card-item-${index}`"
            add-class="__in"
            :style="{ '--delay': `${index * 0.2}s` }"
          >
            <img
              :src="item.img"
              :alt="item.title"
              width="382"
              height="229"
              class="card-item-img"
              loading="lazy"
            >
            <h4 class="card-item-title">
              {{ item.title }}
            </h4>
            <div class="card-item-desc">
              {{ item.desc }}
            </div>
          </v-inview>
        </div>
      </div> -->

      <!-- <div class="text-center">
        <NuxtLink to="/" class="btn btn-cta">
          {{ $t('HOME.V2.FULL_FITNESS.CTA') }}
        </NuxtLink>
      </div> -->
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-usecase{
  position: relative;
  overflow: hidden;
  background-color: #F9F7FE;
  background-image: linear-gradient(142.05deg, #F9F7FE 2.36%, #FEFBFF 96.01%);;
  padding: 4rem 0;
  @media (min-width: @screen-lg) {
    padding: 5rem 0;
  }
}

.font-title{
  color: #543573;
  font-weight: 700;
  font-size: 3.25rem;
  @media (min-width: @screen-md) {
    font-size: 4.8rem;
  }
}
.font-desc{
  color: #785C94;
}

// .card-item{
//   padding-left: 2rem;
//   padding-right: 2rem;
//   text-align: center;
//   margin-bottom: 2rem;
//   &-img{
//     max-width: 100%;
//     height: auto;
//     margin-bottom: 1.25rem;
//   }
//   &-title{
//     font-size: 1.4rem;
//     font-weight: 500;
//     color: #543573;
//     margin-bottom: .5rem;
//   }
//   &-desc{
//     font-size: .8rem;
//     color: #9079A7;
//   }

//   // animation
//   &.animated{
//     opacity: 0;
//     transform: translateY(2rem);
//     transition-duration: .3s;
//     transition-timing-function: ease-out;
//     transition-property: transform, opacity;
//   }
//   &.__in{
//     opacity: 1;
//     transform: translateY(0);
//     transition-duration: 1s;
//     transition-delay: var(--delay);
//   }
// }

// .btn-cta{
//   background-color: #543573;
//   color: #fff;
//   box-shadow: 0px 0px 4px #846C9B, 0px 8px 16px rgba(125, 92, 157, 0.35);
//   &:hover{
//     background-color: lighten(#543573, 8%);
//   }
// }
</style>
