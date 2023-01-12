<template>
  <div id="Solution" class="section-solution">
    <div class="container position-relative">

      <div class="bg-light">
        <img src="@/assets/images/light-blue-bg.svg" alt="" width="900" height="900" loading="lazy">
      </div>

      <div class="row align-items-center g-5 position-relative">
        <!-- content -->
        <div class="col-lg-6">
          <div class="ps-xl-5">
            <h2 class="title">
              <span class="d-block">
                <CompGifText
                  :text="[
                    'Sleep',
                    'Fitness',
                    'Diet',
                  ]"
                  :pause="2000"
                />
              </span>
              is not enough.
            </h2>
            <div class="content">
              <p>Sleep, fitness, diet - It’s all connected. Current health and wellbeing solutions only specialise in a core aspect, but the truth is, achieving mindful wellbeing requires a holistic approach.</p>
              <p>With (app), we target all aspects of your lifestyle, mind and body, developing a holistic wellbeing approach to empower your fullest potential in any situation.</p>
              <div class="mt-5">
                <NuxtLink to="/" class="btn btn-cta">
                  Our Solutions
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- images -->
        <div class="col-lg-6 order-lg-first">
          <v-inview
            class="img-wrap"
            add-class="__in"
          >
            <img
              src="/images/home/pic-4.png"
              alt="Detalytics solution"
              width="453"
              height="302"
              loading="lazy"
              class="img"
              :style="{
                '--delay': '.5s',
                width: '66%',
                top: '5%',
                right: '6%',
              }"
            >
            <img
              src="/images/home/pic-5.png"
              alt="Detalytics solution"
              width="536"
              height="357"
              loading="lazy"
              class="img"
              :style="{
                '--delay': '.8s',
                width: '78%',
                top: '30%',
                left: '3%',
              }"
            >
            <img
              src="/images/home/pic-6.png"
              alt="Detalytics solution"
              width="422"
              height="237"
              loading="lazy"
              class="img"
              :style="{
                '--delay': '1s',
                width: '63%',
                right: '0',
                bottom: '0',
              }"
            >
          </v-inview>
        </div>

      </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.section-solution{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background-color: #F8FBFF;
  background-image: linear-gradient(252.68deg, #E7EEF5 8.55%, #F8FBFF 93.52%);
  display: flex;
  align-items: center;
  padding: 4rem 0;
  @media (min-width: @screen-lg) {
    padding: 5rem 0;
  }
}

.title{
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #545C87;
  @media (min-width: @screen-lg) {
    font-size: 2.4rem;
  }
}
.content{
  color: #434A6D;
}

.img-wrap{
  position: relative;
  user-select: none;
  padding-bottom: 90%;
  .img{
    position: absolute;
    height: auto;
    opacity: 0;
    transform: translateY(1.5rem);
    transition-property: transform, opacity;
    transition-duration: .3s;
    transition-timing-function: ease-out;
  }
  &.__in{
    .img{
      opacity: 1;
      transform: translate(0);
      transition-duration: 1.3s, .5s;
      transition-delay: var(--delay);
    }
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
