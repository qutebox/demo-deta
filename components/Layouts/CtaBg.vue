<script setup>
defineProps({
  bg: { type: String, default: '' },
});
</script>

<template>
  <div id="Cta" class="section-cta" :style="{ backgroundImage: `url(${bg})` }">
    <div class="container text-center">
      <h2 class="font-title my-5 pb-lg-3">
        Find out how Detalytics can help activate your best potential
      </h2>

      <div class="actions">
        <a href="#" class="btn btn-download my-2 my-lg-0 mx-sm-2 mx-lg-3" target="_blank" rel="noopener noreferrer">
          Download the app
        </a>
        <a href="#" class="btn btn-demo my-2 my-lg-0 mx-sm-2 mx-lg-3" target="_blank">
          Get a demo
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
  background-position: center;
  background-size: cover;
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
</style>
