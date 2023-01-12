<template>
  <div id="About" class="section-about">
    <div class="container position-relative">
      <div class="bg-light">
        <img src="@/assets/images/light-orange-bg.svg" alt="" width="830" height="830" loading="lazy">
      </div>

      <div class="row align-items-center g-5 position-relative">
        <!-- images -->
        <div class="col-lg-6 order-lg-last">
          <div class="img-wrap">
            <v-inview class="img-wrap-items" add-class="__in">
              <img
                src="/images/home/pic-2.png"
                alt="Detalytics"
                width="398"
                height="315"
                loading="lazy"
                class="item item-1"
                :style="{ '--delay': '.5s' }"
              >
              <img
                src="/images/home/pic-1.png"
                alt="Detalytics"
                width="429"
                height="258"
                loading="lazy"
                class="item item-2"
                :style="{ '--delay': '.8s' }"
              >
              <img
                src="/images/home/pic-3.png"
                alt="Detalytics"
                width="385"
                height="322"
                loading="lazy"
                class="item item-3"
                :style="{ '--delay': '1s' }"
              >
            </v-inview>
          </div>
        </div>

        <!-- content -->
        <div class="col-lg-6">
          <div class="pe-xl-5">
            <h2 class="title">
              With (app), activate your best at work and life everyday, in every situation
            </h2>
            <div class="content">
              <p>Want to achieve your peak performance at work? Want to prevent burnout and improve your mental wellbeing? Stop anti early aging when you are young, or better manage your weight?</p>
              <p>Through diving deep into your daily lifestyle behaviours and circadian rhythm patterns, gain key insights to your health and understand how to optimise your lifestyle effortlessly - to achieve all your goals.</p>
              <p>With 42, develop a personalised action plan activate your best at work and life, whenever and wherever.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.section-about{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background-color: #FFFCFC;
  background-image: linear-gradient(304.29deg, #FFFCFC 8.98%, #FFF2DF 72.64%);
  display: flex;
  align-items: center;
  padding: 4rem 0;
  @media (min-width: @screen-md) {
    padding: 5rem 0;
  }
}

.title{
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #DF8A2E;
  @media (min-width: @screen-md) {
    font-size: 2.4rem;
  }
}
.content{
  color: #9D5B14;
}

.img-wrap{
  position: relative;
  user-select: none;
  &-items{
    position: relative;
    padding-bottom: 100%;
    .item{
      position: absolute;
      height: auto;
      opacity: 0;
      transform: translateY(1.5rem);
      transition-property: transform, opacity;
      transition-duration: .3s;
      transition-timing-function: ease-out;
    }
    .item-1{
      width: 60%;
      top: 0;
      right: 10%;
    }
    .item-2{
      width: 63%;
      top: 33%;
      left: 3%;
    }
    .item-3{
      width: 57%;
      right: 0;
      bottom: 0;
    }

    &.__in{
      .item{
        opacity: 1;
        transform: translate(0);
        transition-duration: 1s;
        transition-delay: var(--delay);
      }
    }
  }
}

.bg-light{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
  @media (min-width: @screen-md) {
    transform: translate(0, -50%);
  }
}
</style>
