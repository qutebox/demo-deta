<script setup>
import { ref, computed } from 'vue';
import { asset } from '@/helpers/utils';

const galleryIndex = ref(0);

const { t } = useI18n();

const gifTexts = [
  t('HOME.HERO.GIF_TXT_1'),
  t('HOME.HERO.GIF_TXT_2'),
  t('HOME.HERO.GIF_TXT_3'),
  t('HOME.HERO.GIF_TXT_4'),
  // t('HOME.HERO.GIF_TXT_5'),
  // t('HOME.HERO.GIF_TXT_6'),
  // t('HOME.HERO.GIF_TXT_7'),
  // t('HOME.HERO.GIF_TXT_8'),
];

const gallery = [
  {
    src: asset('/images/home/banner-1.jpg'),
    alt: 'Detalytics',
  },
  {
    src: asset('/images/home/slider-1.png'),
    alt: 'Detalytics',
  },
  {
    src: asset('/images/home/slider-2.png'),
    alt: 'Detalytics',
  },
];

const currGallery = computed(() => gallery[galleryIndex.value]);

// events
const onTextChanged = () => {
  galleryIndex.value = (galleryIndex.value + 1) % gallery.length;
};
</script>

<template>
  <div id="Hero" class="section-hero">
    <div class="gallery">
      <Transition name="fade">
        <div :key="galleryIndex" class="gallery-item">
          <img
            :src="currGallery.src"
            :alt="currGallery.alt"
            width="1728"
            height="1060"
          >
        </div>
      </Transition>
    </div>

    <div class="lightning d-none d-md-block">
      <img src="@/assets/images/light-red.svg" alt="" width="585" height="585" :style="{ marginLeft: '-8rem' }">
      <img src="@/assets/images/light-blue.svg" alt="" width="585" height="585" :style="{ marginLeft: '8rem' }">
    </div>

    <div class="container text-center position-relative">
      <h1 class="font-heading mb-3">
        <b>{{ $t('HOME.HERO.Activate') }}</b>
        <span class="d-block d-md-inline-block">
          <CompGifText
            :text="gifTexts"
            :speed="50"
            :clearSpeed="15"
            :pause="4000"
            @changed="onTextChanged"
          />
        </span>
      </h1>
      <h2 class="font-desc">
        {{ $t('HOME.HERO.DESC') }}
      </h2>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-hero{
  position: relative;
  overflow: hidden;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  color: #fff;
  padding: 3rem 0;
  @media (min-width: @screen-lg) {
    min-height: ~"calc(100vh - 6rem)";
  }
}

.font-heading{
  font-weight: 400;
  b{
    font-weight: 700;
    margin-right: .75rem;
  }
}

.font-desc{
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
}

.gallery{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  &-item{
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
.fade{
  &-enter-active,
  &-leave-active{
    transition: opacity 3s linear;
  }
  &-enter-from,
  &-leave-to{
    opacity: 0;
  }
}
</style>
