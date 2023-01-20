<template>
  <div id="Lifestyles" class="section-lifestyles">
    <div class="container">
      <h5 class="font-label mb-3 text-lg-center">
        {{ $t('HIW.LIFESTYLE.LABEL') }}
      </h5>
      <h2 class="font-title text-lg-center">
        {{ $t('HIW.LIFESTYLE.TITLE') }}
      </h2>
      <div
        v-html="$t('HIW.LIFESTYLE.DESC')"
        class="font-desc text-lg-center"
      ></div>
      <div class="img text-center">
        <img src="/images/hiw/lifestyles-chart.png" alt="Detalytics lifestyles" width="1205" height="938" loading="lazy">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-lifestyles{
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
  @media (min-width: @screen-lg) {
    padding: 5rem 0;
  }
}

.font-title{
  color: #2C335C;
  margin: 0 auto 2rem;
  width: 53rem;
  max-width: 100%;
}
.font-desc{
  color: #532749;
  width: 53rem;
  max-width: 100%;
  margin: 0 auto 3rem;
}
.font-label{
  color: #2C335C;
}
.img{
  margin-left: -2rem;
  margin-right: -2rem;
  @media (min-width: @screen-lg) {
    margin-left: 0;
    margin-right: 0;
  }
  img{
    width: 60rem;
    height: auto;
    max-width: 100%;
    margin-right: -1rem;
  }
}
</style>
