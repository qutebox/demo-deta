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
            <h5 class="label">
              SCIENCE BACKED
            </h5>
            <h2 class="title">
              Peak performance by design, backed by science
            </h2>
            <div class="content">
              <p>Backed by science, gain full clarity on your lifestyle patterns  and rest assured that you are always prepared to be at your best, at everyday and any moment. Designed by leading international experts with over 20 years of experience in the field of circadian science and performance readiness management. With (app), understand how your body and mind works. Gain key insights to your health and understand how to optimise your lifestyle effortlessly.</p>
              <div class="point">
                <div class="point-ic me-3">
                  <v-icon name="person" size="25"></v-icon>
                </div>
                <span><b>Derived from your unique lifestyle behaviours</b> - Personalized action plan of derived from your lifestyle behaviors, circadian rhythms and metabolic statuses.</span>
              </div>
              <div class="point">
                <div class="point-ic me-3">
                  <v-icon name="bars" size="25"></v-icon>
                </div>
                <span><b>Performance by design, not chance</b> - context-specific and personalised insights  to enable you to optimise life and work performance management</span>
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

.title{
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #23575C;
  @media (min-width: @screen-lg) {
    font-size: 2.4rem;
  }
}
.content{
  color: #23575C;
}
.label{
  font-size: 1rem;
  font-weight: 400;
  color: #23575C;
  margin-bottom: .75rem;
  @media (min-width: @screen-lg) {
    font-size: 1.2rem;
  }
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

.img-wrap{
  position: relative;
  padding-bottom: 130%;
  user-select: none;
  .img{
    position: absolute;
    height: auto;
    opacity: 0;
    transform: translateY(1.5em);
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
