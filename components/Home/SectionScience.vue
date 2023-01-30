<template>
  <div id="Science" class="section-science">
    <div class="container position-relative">

      <div class="bg-light">
        <img src="@/assets/images/light-green-bg.svg" alt="" width="900" height="900" loading="lazy">
      </div>

      <div class="row align-items-center g-5 position-relative">
        <!-- content -->
        <div class="col-lg-6">
          <div class="ps-xl-5">
            <h5 class="font-label mb-3">
              {{ $t('HOME.SCIENCE.LABEL') }}
            </h5>
            <h2 class="font-title mb-4">
              {{ $t('HOME.SCIENCE.TITLE') }}
            </h2>
            <div class="font-desc">
              <div v-html="$t('HOME.SCIENCE.DESC')"></div>

              <div class="point">
                <div class="point-ic me-3">
                  <v-icon name="person" size="25"></v-icon>
                </div>
                <span><b>{{ $t('HOME.SCIENCE.POINT_1_BOLD') }}</b> - {{ $t('HOME.SCIENCE.POINT_1_TXT') }}</span>
              </div>
              <div class="point">
                <div class="point-ic me-3">
                  <v-icon name="bars" size="25"></v-icon>
                </div>
                <span><b>{{ $t('HOME.SCIENCE.POINT_2_BOLD') }}</b> - {{ $t('HOME.SCIENCE.POINT_2_TXT') }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- images -->
        <div class="col-lg-6 order-lg-first">
          <v-inview
            class="img-wrap"
            add-class="__in"
            :style="{ paddingBottom: '130%' }"
          >
            <img
              src="/images/home/app-2a.png"
              alt="Detalytics App"
              width="482"
              height="887"
              loading="lazy"
              class="img"
              :style="{
                '--delay': '.4s',
                width: '72%',
                bottom: '0%',
                left: '5%',
                transform: 'translateY(1.5em)',
              }"
            >
            <img
              src="/images/home/app-2b.png"
              alt="Detalytics App"
              width="458"
              height="372"
              loading="lazy"
              class="img"
              :style="{
                '--delay': '.8s',
                width: '69%',
                bottom: '70%',
                right: '5%',
                transform: 'translateY(1.5em)',
              }"
            >
          </v-inview>
        </div>

      </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.section-science{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background-color: #F8FBFF;
  background-image: linear-gradient(235.95deg, rgba(151, 187, 128, 0.17) 14.15%, rgba(245, 254, 234, 0.17) 75.85%);
  display: flex;
  align-items: center;
  padding: 5rem 0;
}

.font-title{
  color: #23575C;
}
.font-desc{
  color: #23575C;
}
.font-label{
  color: #23575C;
}

.point{
  display: flex;
  align-items: center;
  font-size: .8rem;
  padding: 1rem 0;
  color: #23575C;
  &-ic{
    width: 3rem;
    min-width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #23575C;
  }
}

.btn-cta{
  background-color: #2C335C;
  color: #fff;
  box-shadow: 0px 0px 4px #363C62, 0px 8px 16px rgba(182, 189, 230, 0.71);
  &:hover{
    background-color: lighten(#2C335C, 7%);
  }
}

.bg-light{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  @media (min-width: @screen-lg) {
    transform: translate(-50%, -50%);
  }
}
</style>
