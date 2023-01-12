<template>
  <div id="Detalytics" class="section-detalytics">
    <div class="container">
      <div class="bg-light">
        <img src="@/assets/images/light-red-bg.svg" alt="" width="830" height="830" loading="lazy">
      </div>

      <div class="row align-items-center g-5 position-relative">
        <!-- images -->
        <div class="col-lg-6 order-lg-last text-center">
          <v-inview class="img" add-class="__in">
            <img
              src="/images/home/detalytics-app.png"
              alt="Detalytics App"
              width="695"
              height="725"
              loading="lazy"
            >
          </v-inview>
        </div>

        <!-- content -->
        <div class="col-lg-6">
          <div class="pe-xl-5">
            <h5 class="label">
              WITH DETALYTICS
            </h5>
            <h2 class="title">
              Power your health, <br>power your mind.
            </h2>
            <div class="content">
              <p>(app) connects the dots/gaps between fitness, health, wellbeing and sleep, to provide a holistic evaluation of your lifestyle behaviours. With (app), encompass a holistic approach to your lifestyle.  Gain full clarity on your lifestyle patterns  and rest assured that you are always prepared to be at your best, at everyday and any moment.</p>
              <div class="point">
                <div class="me-3">
                  <svg viewBox="0 0 42 42" width="42" height="42">
                    <circle cx="21" cy="21" r="21" fill="currentColor" />
                    <path fill="#fff" d="M29.3 13.5h-1.7v-.8c0-.4-.2-.9-.5-1.2-.2-.3-.7-.5-1.1-.5H16c-.4 0-.9.2-1.2.5-.3.3-.5.7-.5 1.2v.8h-1.7c-.4 0-.9.2-1.2.5-.3.3-.5.7-.5 1.2v2.5c0 .9.4 1.7 1 2.3.6.6 1.5 1 2.4 1h.3c.3 1.3 1.1 2.4 2 3.3 1 .9 2.2 1.4 3.5 1.6v3.4H16V31h10v-1.7h-4.2v-3.4c1.3-.2 2.6-.7 3.6-1.6 1-.9 1.7-2 2-3.3h.2c.9 0 1.7-.4 2.4-1 .6-.6 1-1.5 1-2.3v-2.5c0-.4-.2-.9-.5-1.2-.3-.3-.7-.5-1.2-.5zm-15 5.8c-.4 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2v-2.5h1.7v4.2zm11.7 0c0 .7-.1 1.3-.4 1.9-.3.6-.6 1.2-1.1 1.6-.5.5-1.1.8-1.7 1.1-.6.2-1.3.4-2 .3-1.3-.1-2.6-.7-3.5-1.6-.9-1-1.4-2.3-1.4-3.6v-6.4h10v6.7zm3.3-1.6c0 .4-.2.9-.5 1.2-.3.3-.7.5-1.2.5v-4.1h1.7v2.4z" />
                  </svg>
                </div>
                <span><b>Context-ready to every scenario</b> - real-time purpose driven insights to optimise your readiness and stay hyper-focused</span>
              </div>
              <div class="point">
                <div class="me-3">
                  <svg viewBox="0 0 42 42" width="42" height="42">
                    <circle cx="21" cy="21.5" r="21" fill="currentColor" />
                    <path fill="#fff" d="M11.6 11c.2 0 .3.1.4.2.1.1.2.3.2.4v18.7c0 .2-.1.3-.2.4-.1.1-.3.2-.4.2s-.3-.1-.4-.2c-.1-.1-.2-.3-.2-.4V11.7c0-.2.1-.3.2-.4.1-.2.3-.3.4-.3zm1.9 1.9c0-.2.1-.3.2-.4.1-.1.3-.2.4-.2h5c.2 0 .3.1.4.2s.2.3.2.4v1.2c0 .2-.1.3-.2.4-.1.1-.3.2-.4.2h-5c-.2 0-.3-.1-.4-.2-.1-.1-.2-.3-.2-.4v-1.2zm2.5 5c0-.2.1-.3.2-.4.1-.1.3-.2.4-.2h8.8c.2 0 .3.1.4.2.1.1.2.3.2.4v1.2c0 .2-.1.3-.2.4-.1.1-.3.2-.4.2h-8.8c-.2 0-.3-.1-.4-.2s-.2-.2-.2-.4v-1.2zm2.5 5c0-.2.1-.3.2-.4s.3-.2.4-.2h7.5c.2 0 .3.1.4.2.1.1.2.3.2.4v1.2c0 .2-.1.3-.2.4-.1.1-.3.2-.4.2h-7.5c-.2 0-.3-.1-.4-.2-.1-.1-.2-.3-.2-.4v-1.2zm2.5 4.9c0-.2.1-.3.2-.4.1-.1.3-.2.4-.2h8.8c.2 0 .3.1.4.2.1.1.2.3.2.4V29c0 .2-.1.3-.2.4-.1.1-.3.2-.4.2h-8.8c-.2 0-.3-.1-.4-.2-.1-.1-.2-.3-.2-.4v-1.2z" />
                  </svg>
                </div>
                <span><b>Holistic, step-by-step approach</b> - guided step-by-step approach to accumulate atomic habits that improve your quality of life </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.section-detalytics{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background-color: rgba(255, 242, 242, 0.17);
  background-image: linear-gradient(180deg, rgba(253, 212, 208, 0.17) 0%, rgba(255, 242, 242, 0.17) 100%);
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
  color: #D07575;
  @media (min-width: @screen-lg) {
    font-size: 2.4rem;
  }
}
.content{
  color: #BE6363;
}
.label{
  font-size: 1rem;
  font-weight: 400;
  color: #D07575;
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
.img{
  opacity: 0;
  transform: translateY(1.5em);
  transition-property: transform, opacity;
  transition-duration: .3s;
  transition-timing-function: ease-out;
  &.__in{
    opacity: 1;
    transform: translateY(0);
    transition-delay: .5s;
    transition-duration: 1s;
  }

  img{
    width: 34rem;
    max-width: 100%;
    height: auto;
  }
}

.bg-light{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
  @media (min-width: @screen-lg) {
    transform: translate(0, -50%);
  }
}
</style>
