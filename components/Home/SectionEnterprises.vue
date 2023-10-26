<script setup>
import { ref } from 'vue';
import { useKeenSlider } from 'keen-slider/vue';
import { asset } from '@/helpers/utils';

const { t } = useI18n();

// static vars
const cards = [
  {
    label: t('HOME.ENTERPRISE.CARD_1.LABEL'),
    title: t('HOME.ENTERPRISE.CARD_1.TITLE'),
    desc: t('HOME.ENTERPRISE.CARD_1.DESC'),
    cta: t('HOME.ENTERPRISE.CARD_1.CTA'),
    cover: asset('/images/home/slider-1.png'),
    cta_link: '/',
    classes: 'slider-item-enterprises',
  },
  {
    label: t('HOME.ENTERPRISE.CARD_2.LABEL'),
    title: t('HOME.ENTERPRISE.CARD_2.TITLE'),
    desc: t('HOME.ENTERPRISE.CARD_2.DESC'),
    cta: t('HOME.ENTERPRISE.CARD_2.CTA'),
    cover: asset('/images/home/slider-2.png'),
    cta_link: '/',
    classes: 'slider-item-hospitals',
  },
  {
    label: t('HOME.ENTERPRISE.CARD_3.LABEL'),
    title: t('HOME.ENTERPRISE.CARD_3.TITLE'),
    desc: t('HOME.ENTERPRISE.CARD_3.DESC'),
    cta: t('HOME.ENTERPRISE.CARD_3.CTA'),
    cover: asset('/images/home/slider-3.png'),
    cta_link: '/',
    classes: 'slider-item-insurers',
  },
  {
    label: t('HOME.ENTERPRISE.CARD_4.LABEL'),
    title: t('HOME.ENTERPRISE.CARD_4.TITLE'),
    desc: t('HOME.ENTERPRISE.CARD_4.DESC'),
    cta: t('HOME.ENTERPRISE.CARD_4.CTA'),
    cover: asset('/images/home/slider-4.png'),
    cta_link: '/',
    classes: 'slider-item-safety',
  },
];

// slider
const currSlide = ref(1);
const [$slider, slider] = useKeenSlider({
  selector: '.slider-item',
  initial: currSlide.value,
  slideChanged(e) {
    currSlide.value = e.track.details.rel;
  },
});
</script>

<template>
  <div id="Enterprises" class="section-enterprises">
    <div class="container position-relative">

      <div class="bg-light">
        <img src="@/assets/images/light-ellipse.svg" alt="" width="1293" height="480" loading="lazy">
      </div>

      <div class="position-relative">
        <h5 class="font-label mb-3 text-lg-center">
          {{ $t('HOME.ENTERPRISE.LABEL') }}
        </h5>
        <h2 class="font-title mb-4 text-lg-center">
          {{ $t('HOME.ENTERPRISE.TITLE') }}
        </h2>
        <div class="font-desc text-lg-center">
          <div v-html="$t('HOME.ENTERPRISE.DESC')"></div>
        </div>

        <div class="row g-0 justify-content-center my-5">
          <div class="col-lg-10">

            <div ref="$slider" class="slider">
              <div
                v-for="(card, index) in cards"
                :key="index"
                class="slider-item"
                :class="card.classes"
              >
                <div class="slider-item-card">
                  <div class="slider-item-cover mb-4 mb-lg-0 me-lg-4">
                    <img
                      :src="card.cover"
                      :alt="card.title"
                      width="562"
                      height="405"
                      loading="lazy"
                    >
                  </div>
                  <div class="slider-item-body px-lg-3">
                    <div class="slider-item-label mb-2 mb-lg-3">
                      {{ card.label }}
                    </div>
                    <h4 class="slider-item-title mb-3">
                      {{ card.title }}
                    </h4>
                    <div class="slider-item-desc">
                      {{ card.desc }}
                    </div>
                    <div class="slider-item-cta">
                      <NuxtLink :to="card.cta_link" class="btn btn-cta">
                        {{ card.cta }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="slider" class="slider-dots">
              <button
                v-for="(card, index) in cards"
                :key="index"
                class="dot"
                :class="{ __active: currSlide === index }"
                @click="slider.moveToIdx(index)"
              ></button>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.section-enterprises{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background-color: #fff;
  padding: 4rem 0;
  @media (min-width: @screen-lg) {
    padding: 5rem 0;
  }
}

.font-title{
  color: #2C335C;
}
.font-desc{
  color: #2C335C;
}
.font-label{
  color: #2C335C;
}

.slider{
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  padding: 1rem 0;
  overflow: visible !important;
}
.slider-item{
  flex: 0 0 100%;
  min-width: 1px;
  padding: 0 .75rem 1rem;
  @media (min-width: @screen-lg) {
    padding: 0 1rem 1rem;
  }
  &-card{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.08);
    user-select: none;
    @media (min-width: @screen-lg) {
      flex-direction: row;
      padding: 2rem;
      text-align: left;
    }
  }
  &-cover{
    @media (min-width: @screen-lg) {
      flex: 0 0 28rem;
    }
    img{
      width: 100%;
      height: auto;
    }
  }
  &-label{
    font-size: .75rem;
    text-transform: uppercase;
    color: var(--card-color-3);
    @media (min-width: @screen-lg) {
      font-size: 1rem;
    }
  }
  &-title{
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--card-color-1);
    margin-bottom: 1rem;
    @media (min-width: @screen-lg) {
      font-size: 1.8rem;
    }
  }
  &-desc{
    font-size: 1rem;
    color: var(--card-color-2);
    margin-bottom: 1.5rem;
    @media (min-width: @screen-lg) {
      margin-bottom: 2rem;
    }
  }
  &-cta{
    .btn{
      background-color: var(--card-color-4);
      color: #fff;
      padding: .75rem 2rem;
      transition: opacity .3s;
      &:hover{
        opacity: .85;
      }
    }
  }
}
.slider-item-enterprises{
  --card-color-1: #4BB2CB;
  --card-color-2: #268197;
  --card-color-3: #6AC9E0;
  --card-color-4: #4BB2CB;
}
.slider-item-hospitals{
  --card-color-1: #61AAF5;
  --card-color-2: #2D6DAF;
  --card-color-3: #5691CE;
  --card-color-4: #61AAF5;
}
.slider-item-insurers{
  --card-color-1: #29619C;
  --card-color-2: #29619C;
  --card-color-3: #29619C;
  --card-color-4: #29619C;
}
.slider-item-safety{
  --card-color-1: #29619C;
  --card-color-2: #445E8C;
  --card-color-3: #29619C;
  --card-color-4: #5E7DB3;
}
.slider-dots{
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  .dot{
    appearance: none;
    margin-left: .25rem;
    margin-right: .25rem;
    width: .75rem;
    height: .75rem;
    background-color: transparent;
    border: 1px solid #497EDC;
    border-radius: 50%;
    transition: background .3s;
    &:hover{
      background-color: fade(#497EDC, 30%);
    }
    &.__active{
      background-color: #497EDC;
    }
  }
}

.bg-light{
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -90%);
  @media (min-width: @screen-lg) {
    transform: translate(-50%, -50%);
  }
}
</style>
