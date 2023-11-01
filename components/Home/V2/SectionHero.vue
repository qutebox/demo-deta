<script setup>
import {
  ref, computed, onMounted, onUnmounted, nextTick,
} from 'vue';
import { asset } from '@/helpers/utils';

const { t } = useI18n();

const slides = [
  {
    text: t('HOME.V2.HERO.GIF_TXT_1'),
    image: asset('/images/home/banner-1.jpg'),
    color: '#fff',
  },
  {
    text: t('HOME.V2.HERO.GIF_TXT_2'),
    image: asset('/images/home/slider-1.png'),
    color: '#000',
  },
  {
    text: t('HOME.V2.HERO.GIF_TXT_3'),
    image: asset('/images/home/slider-2.png'),
    color: '#000',
  },
  {
    text: t('HOME.V2.HERO.GIF_TXT_4'),
    image: asset('/images/home/slider-3.png'),
    color: '#fff',
  },
];

const currSlideIndex = ref(0);
const currSlide = computed(() => slides[currSlideIndex.value]);
const slideAni = ref('ani-slide__next');

// events
const timer = ref(null);

function nextSlide(newVal = undefined) {
  const next = newVal !== undefined ? newVal : currSlideIndex.value + 1;
  slideAni.value = next > currSlideIndex.value ? 'ani-slide__next' : 'ani-slide__prev';

  // prevent same slide?
  if (next === currSlideIndex.value) {
    return;
  }

  nextTick(() => {
    currSlideIndex.value = next % slides.length;
    // eslint-disable-next-line no-use-before-define
    loopSlide();
  });
}

function loopSlide() {
  clearTimeout(timer.value);
  timer.value = setTimeout(nextSlide, 5000);
}

function handleVisibilityChanged() {
  if (document.hidden) {
    clearTimeout(timer.value);
  } else {
    loopSlide();
  }
}

onMounted(() => {
  loopSlide();
  window.addEventListener('visibilitychange', handleVisibilityChanged);
});
onUnmounted(() => {
  clearTimeout(timer.value);
  window.removeEventListener('visibilitychange', handleVisibilityChanged);
});
</script>

<template>
  <div
    id="Hero"
    class="section-hero"
    :style="{
      '--color': currSlide.color,
      backgroundColor: currSlide.color === '#fff' ? '#000' : '#ddd',
    }"
  >
    <Transition :name="slideAni">
      <div
        :key="currSlideIndex"
        class="gallery-item"
        :style="{
          '--color': currSlide.color,
          backgroundColor: currSlide.color === '#fff' ? '#000' : '#ddd',
        }"
      >
        <div class="gallery-item-bg">
          <img
            :src="currSlide.image"
            alt=""
            width="1728"
            height="1060"
          >
        </div>
        <div class="gallery-item-body">
          <div class="container">
            <h1 class="gallery-item-heading mb-0">
              <span class="gallery-item-heading-main">
                {{ $t('HOME.V2.HERO.Activate') }}
              </span>
              <span :key="currSlideIndex" class="font-heading-sub">
                {{ currSlide.text }}
              </span>
            </h1>
            <h2 class="gallery-item-desc mt-4">
              <span class="d-block d-md-inline mx-1">
                {{ $t('HOME.V2.HERO.DESC_1') }}
              </span>
              <span class="d-block d-md-inline mx-1">
                {{ $t('HOME.V2.HERO.DESC_2') }}
              </span>
              <span class="d-block mx-1">
                With <span class="w-500">Detalytics</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </Transition>

    <div class="nav">
      <div class="container">
        <div class="nav-items">
          <div
            v-for="(nav, index) in slides"
            :key="index"
            class="nav-item"
            @click="nextSlide(index)"
          >
            <span>{{ index + 1 }}</span>
            <span v-if="index === currSlideIndex" class="nav-item-ring">
              <svg viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="57" stroke-width="6"></circle>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-hero{
  position: relative;
  overflow: hidden;
  min-height: 70vh;
  background-color: #000;
  font-family: 'Lato', sans-serif; // as requested
  @media (min-width: @screen-lg) {
    min-height: ~"calc(100vh - 6rem)";
  }
}

.gallery-item{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #000;
  color: var(--color, '#fff');
  padding: 5rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transition: background .3s;
  &-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-body{
    position: relative;
    width: 100%;
  }
  &-heading{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 2.5rem;
    font-weight: 300;
    text-align: center;
    @media (min-width: @screen-lg) {
      flex-direction: row;
      font-size: 3.5rem;
      text-align: left;
    }

    &-main{
      font-size: 1em;
      font-weight: 600;
      @media (min-width: @screen-lg) {
        margin-right: .25em;
      }
    }
  }
  &-desc{
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    @media (min-width: @screen-lg) {
      font-size: 1.25rem;
      text-align: left;
    }
  }
}

.nav{
  position: absolute;
  z-index: 5;
  left: 0;
  right: 0;
  bottom: 2rem;
  user-select: none;
  &-items{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    @media (min-width: @screen-lg) {
      justify-content: flex-start;
    }
  }
  &-item{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--color);
    border: 1px solid var(--color);
    border-radius: 50%;
    cursor: pointer;
    transition: color .3s, border .3s;
    @media (min-width: @screen-lg) {
      width: 3.5rem;
      height: 3.5rem;
    }
    &-ring{
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      svg{
        width: 100%;
        height: 100%;
      }
      circle{
        stroke: var(--color, '#fff');
        stroke-dasharray: 359.73; /* 2 * π * r (2 * 3.14 * r) */
        stroke-dashoffset: 0;
        transform: rotate(-90deg);
        transform-origin: center;
        transition: stroke-dashoffset 0.5s;
        animation: svgAnimation 5s forwards;
      }
    }
  }
}

.lightning{
  img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
}

// transition
.ani-slide__next{
  &-enter-active{
    transition: opacity .3s linear;
    transition-delay: .8s;
  }
  &-enter-from{
    opacity: 0;
  }
  &-leave-active{
    transition: transform .8s linear;
    .gallery-item-bg{
      transition: transform .5s ease-in-out;
    }
    .gallery-item-body{
      transition: opacity .3s ease-out .5s;
    }
  }
  &-leave-to{
    .gallery-item-bg{
      transform: translateX(-100%);
    }
    .gallery-item-body{
      opacity: 0;
    }
  }
}
.ani-slide__prev{
  &-enter-active{
    transition: opacity .3s linear;
    transition-delay: .8s;
  }
  &-enter-from{
    opacity: 0;
  }
  &-leave-active{
    transition: transform .8s linear;
    .gallery-item-bg{
      transition: transform .5s ease-in-out;
    }
    .gallery-item-body{
      transition: opacity .3s ease-out .5s;
    }
  }
  &-leave-to{
    .gallery-item-bg{
      transform: translateX(100%);
    }
    .gallery-item-body{
      opacity: 0;
    }
  }
}

@keyframes svgAnimation {
  0% { stroke-dashoffset: 359.73; }
  100% { stroke-dashoffset: 0; }
}
</style>
