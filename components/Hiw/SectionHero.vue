<script setup>
import { asset } from '@/helpers/utils';

const { t } = useI18n();

const points = [
  {
    title: t('HIW.WHY.POINT_1.NAME'),
    desc: t('HIW.WHY.POINT_1.DESC'),
    icon: 'trophy',
  },
  {
    title: t('HIW.WHY.POINT_2.NAME'),
    desc: t('HIW.WHY.POINT_2.DESC'),
    icon: 'trophy',
  },
  {
    title: t('HIW.WHY.POINT_3.NAME'),
    desc: t('HIW.WHY.POINT_3.DESC'),
    icon: 'person',
  },
];
</script>

<template>
  <div id="Hero" class="section-hero">
    <!-- top -->
    <div class="hero-top">
      <div class="container position-relative">
        <div class="bg-light">
          <img src="@/assets/images/light-blue-bg.svg" alt="" width="900" height="900">
        </div>

        <div class="row g-0 align-items-center position-relative">
          <div class="col-lg-5 mb-4 mb-lg-0">
            <div class="cover">
              <img
                :src="asset('/images/hiw/deta-app.png')"
                alt="Detalytics App"
                width="1225"
                height="1018"
                class="cover-img"
              >
            </div>
          </div>

          <div class="col-lg-7">
            <h1 class="font-heading mb-4 text-center text-lg-left">
              {{ $t('HIW.HERO.TITLE') }}
            </h1>
            <h5
              v-html="$t('HIW.HERO.DESC')"
              class="font-heading-desc mb-5 text-center text-lg-left"
            ></h5>
          </div>
        </div>
      </div>
    </div>

    <!-- bottom -->
    <div class="hero-btm">
      <div class="container">
        <h5 class="font-label mb-3 text-center">
          {{ $t('HIW.WHY.LABEL') }}
        </h5>
        <h2
          v-html="$t('HIW.WHY.TITLE')"
          class="font-title mb-5 text-center"
        ></h2>

        <div class="row justify-content-between gy-5 gx-0 my-3">
          <div
            v-for="(point, index) in points"
            :key="index"
            class="col-lg-3"
          >
            <v-inview
              class="reason"
              add-class="__in"
              :style="{ '--delay': `${(index * 0.2) + 0.3}s` }"
            >
              <div class="d-flex align-items-center d-lg-block mb-3">
                <div class="reason-icon me-4 me-lg-0 mb-lg-4">
                  <div class="ic-wrap">
                    <v-icon :name="point.icon" size="56" />
                  </div>
                </div>
                <h4 class="reason-title mb-0">
                  {{ point.title }}
                </h4>
              </div>
              <div class="reason-desc">
                {{ point.desc }}
              </div>
            </v-inview>
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
  background-color: #F0FCFF;
  background-image: linear-gradient(208.51deg, #F2F9FF 25.65%, #F5FAFF 64.97%, #F0FCFF 90.1%);
}

.hero-top{
  position: relative;
  min-height: ~"calc(100vh - 6rem)";
  display: flex;
  align-items: center;
}
.hero-btm{
  padding: 3rem 0 5rem;
}

.cover{
  position: relative;
  padding-bottom: 110%;
  pointer-events: none;
  user-select: none;
  &-img{
    position: absolute;
    left: 0;
    top: 0;
    width: 150%;
    height: auto;
  }
}
.font-heading{
}
.font-heading-desc{
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  @media (min-width: @screen-lg) {
    font-size: 1.6rem;
  }
}

.font-label{
  color: #54ABB1;
}
.font-title{
  color: #36898F;
}

.reason{
  opacity: 0;
  transform: translateY(1rem);
  transition-property: transform, opacity;
  transition-duration: .3s;
  &.__in{
    opacity: 1;
    transform: translateY(0);
    transition-duration: 1s, .5s;
    transition-delay: var(--delay);
  }

  &-icon{
    .ic-wrap{
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(180deg, #5FBAC0 0%, #C4F6FB 100%);
    }
  }
  &-title{
    font-size: 1.4rem;
    font-weight: 500;
    color: #36898F;
    margin-bottom: 1rem;
  }
  &-desc{
    color: #446366;
    line-height: 1.35;
  }
}

.bg-light{
  position: absolute;
  top: 50%;
  left: 50%;
  user-select: none;
  pointer-events: none;
  transform: translate(-50%, -60%);
  @media (min-width: @screen-lg) {
    transform: translate(-90%, -50%);
  }
}
</style>
