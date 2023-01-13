<template>
  <div id="Points" class="section-points">
    <!-- point-1 -->
    <div id="Points1" class="section-points-sec section-points-1">
      <div class="container position-relative">
        <div class="row g-5 align-items-center position-relative">
          <div class="col-lg-7">
            <div class="pe-xl-4">
              <h5 class="font-label mb-3">
                SCIENTIFIC, RESEARCH-BASED APPROACH
              </h5>
              <h2 class="font-title mb-4">
                Designed by leading international experts with over 20+ years of experience in the field of circadian science and performance readiness management
              </h2>
              <p class="font-desc">
                Targeting just one aspect (sleep, fitness or diet) isn’t enough. With (app), we offer context-specific and personalised insights diving deep into your daily lifestyle behaviours and circadian rhythm patterns. Through a gold-standard science-backed approach supported by a panel of renounced specialists, in the field of medicine, high-performance , our app provides gold-standard insights for you to gain full clarity on your lifestyle patterns and personalised approach in life and work performance management.
              </p>
            </div>
          </div>

          <div class="col-lg-5">
            <v-inview class="cover" add-class="__in">
              <img src="/images/hiw/point-1.png" alt="Leading expert" width="592" height="628" loading="lazy">
            </v-inview>
          </div>
        </div>
      </div>
    </div>

    <!-- point-2 -->
    <div id="Points2" class="section-points-sec section-points-2">
      <div class="container position-relative">
        <div class="row g-5 align-items-center position-relative">
          <div class="col-lg-7">
            <div class="ps-xl-5">
              <h5 class="font-label mb-3">
                CONTEXT-DRIVEN TO YOUR LIFESTYLE.
              </h5>
              <h2 class="font-title mb-4">
                We demystify health and wellbeing into actionable and context-driven insights that are unique to your lifestyle
              </h2>
              <p class="font-desc">
                With 42, gain full clarity on your lifestyle patterns  and be guided on what to do at each step of your life journey. Our app provides gold-standard insights for you to gain full clarity on your lifestyle patterns and personalised approach in life and work performance management. We analyze metrics already proven by science and connect the dots between those metrics, your lifestyle behaviours, and its impact on your physical and mental performance.
              </p>
            </div>
          </div>

          <div class="col-lg-5 position-relative order-lg-first">
            <v-inview class="cover" add-class="__in">
              <img src="/images/hiw/point-2.png" alt="Context driven" width="592" height="628" loading="lazy">
            </v-inview>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-points-sec{
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
  }
}
.section-points-1{
  --color-1: #DF8A2E;
  --color-2: #DF8A2E;
  --color-3: #DF8A2E;
  background-color: rgba(253, 212, 208, 0.17);
  background-image: linear-gradient(180deg, rgba(253, 212, 208, 0.17) 0%, rgba(255, 242, 242, 0.17) 100%);
  .cover img{
    top: 0;
    left: 50%;
    transform: translateX(-40%);
    @media (min-width: @screen-lg) {
      left: 5%;
      right: auto;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.section-points-2{
  --color-1: #AA5998;
  --color-2: #944182;
  --color-3: #944182;
  background-color: rgba(251, 194, 248, 0.17);
  background-image: linear-gradient(153.03deg, rgba(251, 194, 248, 0.17) 1.63%, rgba(254, 223, 255, 0.1105) 97.66%);
  .cover img{
    top: 0;
    left: 50%;
    transform: translateX(-60%);
    @media (min-width: @screen-lg) {
      left: auto;
      right: 5%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.font-title{
  color: var(--color-1);
}
.font-desc{
  color: var(--color-2);
}
.font-label{
  color: var(--color-3);
}

.cover{
  position: relative;
  padding-bottom: 70%;
  opacity: 0;
  transition-property: opacity;
  transition-duration: .3s;
  &.__in{
    opacity: 1;
    transition-duration: 1.5s;
    transition-delay: .3s;
  }
  img{
    position: absolute;
    width: 130%;
    height: auto;
  }
}
</style>
