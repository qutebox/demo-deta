<template>
  <div id="Lifestyles" class="section-lifestyles">
    <div class="container">
      <h5 class="label text-lg-center">
        YOUR JOURNEY WITH DETALYTICS
      </h5>
      <h2 class="title text-lg-center">
        Evidence-based life and work transformation in every aspect of your lifestyle
      </h2>
      <div class="desc text-lg-center">
        Gain key personalised  insights into your body, mind and health with baseline assessments. From sleep, activities to diet, optimise your lifestyle behaviours and impact your goals.
      </div>
      <div class="text-center mb-5">
        <img src="/images/hiw/lifestyles.png" alt="Detalytics lifestyles" width="1205" height="938" loading="lazy" class="img">
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

.title{
  font-size: 1.8rem;
  font-weight: 500;
  color: #2C335C;
  margin: 0 auto 2rem;
  width: 53rem;
  max-width: 100%;
  @media (min-width: @screen-lg) {
    font-size: 2.4rem;
  }
}
.desc{
  color: #532749;
  width: 53rem;
  max-width: 100%;
  margin: 0 auto 3rem;
}
.label{
  font-size: 1rem;
  font-weight: 400;
  color: #2C335C;
  margin-bottom: 1rem;
  @media (min-width: @screen-lg) {
    font-size: 1.2rem;
  }
}
.img{
  width: 60rem;
  height: auto;
  max-width: 100%;
  border-radius: 1.7rem;
  box-shadow: 2rem 2.5rem 25px rgba(14, 90, 191, .2);
}
</style>
