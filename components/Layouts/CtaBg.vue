<script setup>
defineProps({
  bg: { type: String, default: '' },
});
</script>

<template>
  <div id="Cta" class="section-cta">
    <div class="parallax-bg">
      <v-parallax-bg
        :src="bg"
        :speed="0.2"
      ></v-parallax-bg>
    </div>

    <div class="container position-relative text-center">
      <h2 class="font-title my-5 pb-lg-3">
        {{ $t('FOOTER_CTA.TITLE') }}
      </h2>

      <div class="actions">
        <a href="#" class="btn btn-download my-2 my-lg-0 mx-sm-2 mx-lg-3" target="_blank" rel="noopener noreferrer">
          {{ $t('FOOTER_CTA.CTA.DOWNLOAD') }}
        </a>
        <a href="#" class="btn btn-demo my-2 my-lg-0 mx-sm-2 mx-lg-3" target="_blank">
          {{ $t('FOOTER_CTA.CTA.DEMO') }}
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-cta{
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
  background-color: #C3EBEF;
  color: #fff;
}

.font-title{
  width: 48rem;
  max-width: 100%;
  margin: 0 auto;
}

.actions{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: @screen-sm) {
    flex-direction: row;
  }
}
.btn{
  background-color: transparent;
  border: 3px solid #fff;
  color: #fff;
  font-weight: 500;
  padding: .75rem 2rem;
  width: 13.5rem;
  @media (min-width: @screen-lg) {
    width: auto;
  }
  &:hover{
    background-color: fade(#fff, 10%);
  }
}

.parallax-bg{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
