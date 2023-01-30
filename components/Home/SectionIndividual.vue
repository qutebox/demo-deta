<script setup>
const { t } = useI18n();

const gifTexts = [
  t('HOME.INDIVIDUAL.TITLE_GIF_1'),
  t('HOME.INDIVIDUAL.TITLE_GIF_2'),
  t('HOME.INDIVIDUAL.TITLE_GIF_3'),
  t('HOME.INDIVIDUAL.TITLE_GIF_4'),
  t('HOME.INDIVIDUAL.TITLE_GIF_5'),
];
</script>

<template>
  <div id="Individual" class="section-individual">
    <div class="container position-relative">

      <div class="bg-light">
        <img src="@/assets/images/light-purple-bg.svg" alt="" width="900" height="900" loading="lazy">
      </div>

      <div class="row align-items-center g-5 position-relative">
        <!-- content -->
        <div class="col-lg-6">
          <div class="pe-xl-5">
            <h5 class="font-label mb-3">
              {{ $t('HOME.INDIVIDUAL.LABEL') }}
            </h5>
            <h2 class="font-title mb-4">
              {{ $t('HOME.INDIVIDUAL.TITLE') }}
              <span class="d-block">
                <CompGifText
                  :text="gifTexts"
                  :pause="2000"
                />
              </span>
            </h2>
            <div
              v-html="$t('HOME.INDIVIDUAL.DESC')"
              class="font-desc"
            ></div>
            <div class="mt-5">
              <a href="#" class="btn btn-cta" target="_blank" rel="noopener noreferrer">
                {{ $t('HOME.INDIVIDUAL.CTA') }}
              </a>
            </div>
          </div>
        </div>

        <!-- images -->
        <div class="col-lg-6">
          <v-inview
            class="img-wrap"
            add-class="__in"
            :style="{ paddingBottom: '110%' }"
          >
            <img
              src="/images/home/app-3b.png"
              alt="Detalytics"
              width="384"
              height="304"
              loading="lazy"
              class="img"
              :style="{
                '--delay': '.3s',
                width: '57%',
                top: '0%',
                right: '0%',
                transform: 'translateX(1rem)',
              }"
            >
            <img
              src="/images/home/app-3c.png"
              alt="Detalytics"
              width="415"
              height="249"
              loading="lazy"
              class="img"
              :style="{
                '--delay': '.5s',
                width: '60%',
                left: '0%',
                top: '30%',
                transform: 'translateX(-1rem)',
              }"
            >
            <img
              src="/images/home/app-3d.png"
              alt="Detalytics"
              width="372"
              height="311"
              loading="lazy"
              class="img"
              :style="{
                '--delay': '.7s',
                width: '55%',
                right: '5%',
                bottom: '10%',
                transform: 'translateX(1rem)',
              }"
            >
            <img
              src="/images/home/app-3a.png"
              alt="Detalytics App"
              width="438"
              height="798"
              loading="lazy"
              class="img img-phone"
              :style="{
                '--delay': '1.3s',
                width: '66%',
                left: '18%',
                top: '0%',
                transform: 'translateY(2rem)',
              }"
            >
          </v-inview>
        </div>

      </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.section-individual{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background-color: rgba(251, 194, 248, 0.15);
  background-image: linear-gradient(153.03deg, rgba(251, 194, 248, 0.15) 1.63%, rgba(254, 223, 255, 0.1) 97.66%);
  display: flex;
  align-items: center;
  padding: 4rem 0;
  @media (min-width: @screen-lg) {
    padding: 5rem 0;
  }
}

.font-title{
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #AA5998;
  @media (min-width: @screen-lg) {
    font-size: 2.4rem;
  }
}
.font-desc{
  color: #944182;
}
.font-label{
  color: fade(#AA5998, 63%);
}

.btn-cta{
  background-color: #925DAB;
  color: #fff;
  box-shadow: 0px 0px 4px #363C62, 0px 8px 16px rgba(182, 189, 230, 0.71);
  &:hover{
    background-color: lighten(#925DAB, 7%);
  }
}

.bg-light{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  @media (min-width: @screen-lg) {
    transform: translate(-20%, -50%);
  }
}
</style>
