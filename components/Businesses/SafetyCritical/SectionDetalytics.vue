<script setup>
import { useKeenSlider } from 'keen-slider/vue';
import { asset } from '@/helpers/utils';

// static vars
const cards = [
  {
    title: 'Overcome chronic jetlag and optimise readiness level',
    desc: 'Mitigate flight risks of jetlag and irregular schedules, and elevate your aviation personnel’s readiness and functional level.',
    label: 'AVIATION PERSONNEL',
    cover: asset('/images/businesses/card-1.png'),
  },
  {
    title: 'Improved clinical staff resilience and care provision',
    desc: 'Address clinical burnout & staff fatigue through improved readiness of tasks and ability to provide care.',
    label: 'HEALTHCARE PROVIDERS',
    cover: asset('/images/businesses/card-2.png'),
  },
  {
    title: 'Alert, focused and always ready to perform',
    desc: 'Help your workers stay focused and alert, to reduce dangers and perform in high risk industries.',
    label: 'LAW ENFORCEMENT',
    cover: asset('/images/businesses/card-3.png'),
  },
];

// slider
const [$slider] = useKeenSlider({
  selector: '.col-lg-4',
  breakpoints: {
    '(min-width: 768px)': {
      slides: { perView: 2 },
    },
    '(min-width: 992px)': {
      slides: { perView: 3 },
    },
  },
  slides: { perView: 1.2 },
});
</script>

<template>
  <div id="Detalytics" class="section-detalytics">
    <div class="container">
      <div class="heading text-center mb-5 pb-4">
        <h5 class="font-label w-500 mb-3">
          WITH DETALYTICS
        </h5>
        <h2 class="font-title mb-4">
          Optimised task readiness and wellbeing
        </h2>
        <div class="font-desc">
          Better corporate resilience begins with actionable insights. Mitigate workplace risks from fatigue management and improve workplace performance, through a rejuvenated and focused workforce.
        </div>
      </div>

      <div ref="$slider" class="row g-3 g-md-4 g-xl-5 flex-nowrap">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="col-lg-4"
        >
          <div class="card-item p-3 p-md-4">
            <div class="card-item-cover">
              <img :src="card.cover" :alt="card.title" width="380" height="226" loading="lazy">
            </div>
            <h5 class="card-item-label">
              {{ card.label }}
            </h5>
            <h4 class="card-item-title">
              {{ card.title }}
            </h4>
            <div class="card-item-desc">
              {{ card.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-detalytics{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background-color: #E5F3F6;
  padding: 4rem 0;
  @media (min-width: @screen-lg) {
    padding: 6rem 0;
  }
}

.heading{
  color: #002E5E;
  width: 48rem;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.card-item{
  background-color: rgba(249, 252, 254, 0.7);
  border-radius: 1.5rem;
  height: 100%;
  user-select: none;
  &-cover{
    margin-bottom: 2rem;
    img{
      width: 100%;
      height: auto;
    }
  }
  &-title{
    font-size: 1.4rem;
    font-weight: 500;
    color: #002E5E;
    margin-bottom: 1rem;
  }
  &-desc{
    color: #445E8C;
  }
  &-label{
    font-size: 1.2rem;
    font-weight: 400;
    color: #002E5E;
    margin-bottom: .5rem;
  }
}
</style>
