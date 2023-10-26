<template>
  <div class="section-hero">
    <div class="container">
      <!-- header -->
      <header class="text-center">
        <h2 class="title mb-3" v-html="$t('PRICING.hero_title')"></h2>
        <div class="desc">
          {{ $t('PRICING.hero_desc') }}
        </div>
      </header>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-hero{
  position: relative;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media (min-width: 768px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

.title{
  font-size: 2rem;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  :deep(span){
    color: #13B2C2;
  }
}
.desc{
  font-size: 1rem;
  color: #636465;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
}
</style>
