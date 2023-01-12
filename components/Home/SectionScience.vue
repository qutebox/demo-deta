<template>
  <div id="Science" class="section-science">
    <div class="container position-relative">

      <div class="bg-light">
        <img src="@/assets/images/light-green-bg.svg" alt="" width="900" height="900" loading="lazy">
      </div>

      <div class="row align-items-center g-5 position-relative">
        <!-- images -->
        <div class="col-lg-6">
          <div class="img-wrap">
            <v-inview class="img-wrap-items" add-class="__in">
              <img
                src="/images/home/app-2a.png"
                alt="Detalytics App"
                width="482"
                height="887"
                loading="lazy"
                class="item item-1"
                :style="{ '--delay': '.4s' }"
              >
              <img
                src="/images/home/app-2b.png"
                alt="Detalytics App"
                width="458"
                height="372"
                loading="lazy"
                class="item item-2"
                :style="{ '--delay': '.8s' }"
              >
            </v-inview>
          </div>
        </div>

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
                <div class="me-3">
                  <svg viewBox="0 0 42 42" width="42" height="42">
                    <circle cx="21" cy="21" r="21" fill="currentColor" />
                    <path fill="#fff" d="M29.3 13.5h-1.7v-.8c0-.4-.2-.9-.5-1.2-.2-.3-.7-.5-1.1-.5H16c-.4 0-.9.2-1.2.5-.3.3-.5.7-.5 1.2v.8h-1.7c-.4 0-.9.2-1.2.5-.3.3-.5.7-.5 1.2v2.5c0 .9.4 1.7 1 2.3.6.6 1.5 1 2.4 1h.3c.3 1.3 1.1 2.4 2 3.3 1 .9 2.2 1.4 3.5 1.6v3.4H16V31h10v-1.7h-4.2v-3.4c1.3-.2 2.6-.7 3.6-1.6 1-.9 1.7-2 2-3.3h.2c.9 0 1.7-.4 2.4-1 .6-.6 1-1.5 1-2.3v-2.5c0-.4-.2-.9-.5-1.2-.3-.3-.7-.5-1.2-.5zm-15 5.8c-.4 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2v-2.5h1.7v4.2zm11.7 0c0 .7-.1 1.3-.4 1.9-.3.6-.6 1.2-1.1 1.6-.5.5-1.1.8-1.7 1.1-.6.2-1.3.4-2 .3-1.3-.1-2.6-.7-3.5-1.6-.9-1-1.4-2.3-1.4-3.6v-6.4h10v6.7zm3.3-1.6c0 .4-.2.9-.5 1.2-.3.3-.7.5-1.2.5v-4.1h1.7v2.4z" />
                  </svg>
                </div>
                <span><b>Derived from your unique lifestyle behaviours</b> - Personalized action plan of derived from your lifestyle behaviors, circadian rhythms and metabolic statuses.</span>
              </div>
              <div class="point">
                <div class="me-3">
                  <svg viewBox="0 0 42 42" width="42" height="42">
                    <circle cx="21" cy="21" r="21" fill="currentColor" />
                    <path fill="#fff" d="M29.3 13.5h-1.7v-.8c0-.4-.2-.9-.5-1.2-.2-.3-.7-.5-1.1-.5H16c-.4 0-.9.2-1.2.5-.3.3-.5.7-.5 1.2v.8h-1.7c-.4 0-.9.2-1.2.5-.3.3-.5.7-.5 1.2v2.5c0 .9.4 1.7 1 2.3.6.6 1.5 1 2.4 1h.3c.3 1.3 1.1 2.4 2 3.3 1 .9 2.2 1.4 3.5 1.6v3.4H16V31h10v-1.7h-4.2v-3.4c1.3-.2 2.6-.7 3.6-1.6 1-.9 1.7-2 2-3.3h.2c.9 0 1.7-.4 2.4-1 .6-.6 1-1.5 1-2.3v-2.5c0-.4-.2-.9-.5-1.2-.3-.3-.7-.5-1.2-.5zm-15 5.8c-.4 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2v-2.5h1.7v4.2zm11.7 0c0 .7-.1 1.3-.4 1.9-.3.6-.6 1.2-1.1 1.6-.5.5-1.1.8-1.7 1.1-.6.2-1.3.4-2 .3-1.3-.1-2.6-.7-3.5-1.6-.9-1-1.4-2.3-1.4-3.6v-6.4h10v6.7zm3.3-1.6c0 .4-.2.9-.5 1.2-.3.3-.7.5-1.2.5v-4.1h1.7v2.4z" />
                  </svg>
                </div>
                <span><b>Performance by design, not chance</b> - context-specific and personalised insights  to enable you to optimise life and work performance management</span>
              </div>
            </div>
          </div>
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
}

.img-wrap{
  position: relative;
  user-select: none;
  &-items{
    position: relative;
    padding-bottom: 130%;
    .item{
      position: absolute;
      height: auto;
      opacity: 0;
      transform: translateY(1.5em);
      transition-property: transform, opacity;
      transition-duration: .3s;
      transition-timing-function: ease-out;
    }
    .item-1{
      width: 72%;
      bottom: 0%;
      left: 5%;
    }
    .item-2{
      width: 69%;
      bottom: 70%;
      right: 5%;
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
  transform: translate(-50%, -50%);
}
</style>
