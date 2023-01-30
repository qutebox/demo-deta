<template>
  <div id="Cta" class="section-cta">
    <div class="container text-center">
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
  padding: 6rem 0;
  background-color: #C3EBEF;
  background-image: radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #C3EBEF 100%);
}

.font-title{
  color: #008490;
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
.btn-download{
  border: 3px solid #50BDC7;
  background-color: #50BDC7;
  color: #fff;
  padding: .75rem 2rem;
  width: 13.5rem;
  @media (min-width: @screen-lg) {
    width: auto;
  }
  &:hover{
    background-color: lighten(#50BDC7, 7%);
  }
}
.btn-demo{
  background-color: transparent;
  border: 3px solid #3DAFB7;
  color: #3DAFB7;
  font-weight: 500;
  padding: .75rem 2rem;
  width: 13.5rem;
  @media (min-width: @screen-lg) {
    width: auto;
  }
  &:hover{
    background-color: fade(#3DAFB7, 10%);
  }
}
</style>
