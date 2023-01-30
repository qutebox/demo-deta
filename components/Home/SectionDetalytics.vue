<template>
  <div id="Detalytics" class="section-detalytics">
    <div class="container">
      <div class="bg-light">
        <img src="@/assets/images/light-red-bg.svg" alt="" width="830" height="830" loading="lazy">
      </div>

      <div class="row align-items-center g-5 position-relative">
        <!-- content -->
        <div class="col-lg-6">
          <div class="pe-xl-5">
            <h5 class="font-label mb-3">
              {{ $t('HOME.DETA.LABEL') }}
            </h5>
            <h2
              v-html="$t('HOME.DETA.TITLE')"
              class="font-title mb-4"
            ></h2>
            <div class="font-desc">
              <div v-html="$t('HOME.DETA.DESC')"></div>

              <div class="point">
                <div class="point-ic me-3">
                  <v-icon name="trophy" size="25"></v-icon>
                </div>
                <span><b>{{ $t('HOME.DETA.POINT_1_BOLD') }}</b> - {{ $t('HOME.DETA.POINT_1_TXT') }}</span>
              </div>
              <div class="point">
                <div class="point-ic me-3">
                  <v-icon name="steps" size="25"></v-icon>
                </div>
                <span><b>{{ $t('HOME.DETA.POINT_2_BOLD') }}</b> - {{ $t('HOME.DETA.POINT_2_TXT') }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- images -->
        <div class="col-lg-6 text-center">
          <v-inview class="img" add-class="__in">
            <img
              src="/images/home/detalytics-app.png"
              alt="Detalytics App"
              width="695"
              height="725"
              loading="lazy"
            >
          </v-inview>
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
  background-color: rgba(255, 242, 242, 0.17);
  background-image: linear-gradient(180deg, rgba(253, 212, 208, 0.17) 0%, rgba(255, 242, 242, 0.17) 100%);
  display: flex;
  align-items: center;
  padding: 4rem 0;
  @media (min-width: @screen-lg) {
    padding: 5rem 0;
  }
}

.font-title{
  color: #D07575;
}
.font-desc{
  color: #BE6363;
}
.font-label{
  color: #D07575;
}

.point{
  display: flex;
  align-items: center;
  font-size: .8rem;
  padding: 1rem 0;
  color: #BE6363;
  &-ic{
    width: 3rem;
    min-width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #BE6363;
  }
}
.img{
  opacity: 0;
  transform: translateY(1.5em);
  transition-property: transform, opacity;
  transition-duration: .3s;
  transition-timing-function: ease-out;
  &.__in{
    opacity: 1;
    transform: translateY(0);
    transition-delay: .5s;
    transition-duration: 1s;
  }

  img{
    width: 34rem;
    max-width: 100%;
    height: auto;
  }
}

.bg-light{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  @media (min-width: @screen-lg) {
    transform: translate(0, -50%);
  }
}
</style>
