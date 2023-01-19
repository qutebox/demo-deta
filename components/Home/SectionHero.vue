<script setup>
const { t } = useI18n();

const gifTexts = [
  t('HOME.HERO.GIF_TXT_1'),
  t('HOME.HERO.GIF_TXT_2'),
  t('HOME.HERO.GIF_TXT_3'),
  t('HOME.HERO.GIF_TXT_4'),
  t('HOME.HERO.GIF_TXT_5'),
  t('HOME.HERO.GIF_TXT_6'),
  t('HOME.HERO.GIF_TXT_7'),
  t('HOME.HERO.GIF_TXT_8'),
];

const gallery = [
  {
    src: '/images/home/banner-1.jpg',
    alt: 'Detalytics',
  },
];

// events
const onTextChanged = (newText) => {
  // console.log(newText);
};
</script>

<template>
  <div id="Hero" class="section-hero">
    <div class="gallery">
      <div
        v-for="(img, index) in gallery"
        :key="index"
        class="gallery-item"
      >
        <img
          :src="img.src"
          :alt="img.alt"
          :loading="index === 0 ? '' : 'lazy'"
          width="1728"
          height="1060"
        >
      </div>
    </div>

    <div class="lightning d-none d-md-block">
      <img src="@/assets/images/light-red.svg" alt="" width="585" height="585" :style="{ marginLeft: '-8rem' }">
      <img src="@/assets/images/light-blue.svg" alt="" width="585" height="585" :style="{ marginLeft: '8rem' }">
    </div>

    <div class="container text-center position-relative">
      <h1 class="font-heading mb-3">
        {{ $t('HOME.HERO.Activate') }}
        <span class="d-block d-md-inline-block">
          <CompGifText
            :text="gifTexts"
            :speed="50"
            :clearSpeed="15"
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
  min-height: ~"calc(100vh - 6rem)";
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  color: #fff;
  padding: 3rem 0;
}

.font-heading{}
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
</style>
