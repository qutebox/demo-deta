<template>
  <div id="Description">
    <!-- parallax-1 -->
    <div class="section-parallax parallax-1">
      <div class="parallax-bg">
        <v-parallax-bg
          src="/images/businesses/slide-3.jpg"
          :speed="-0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-6"></div>
          <div class="col-lg-6">
            <div class="ps-xl-5">
              <h2 class="font-title mb-4">
                Employee burnout is real, and harms your business performance.
              </h2>
              <div class="font-desc">
                <p class="mb-4">Your company’s performance relies on the strength of your workforce. Health is wealth, and in this case employee health is wealth, and performance. But do you have the right, impactful self-care tools for your employees?</p>
                <p class="mb-0">To sustain a healthy working environment, corporate wellbeing should be at the heart of your business beyond a superficial level - just having yoga classes, or Wellness Wednesdays isn’t impactful enough. A one-size fits all approach isn’t enough, and employee wellbeing needs to be addressed in a more personalised engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- parallax-2 -->
    <div class="section-parallax parallax-2">
      <div class="parallax-bg">
        <v-parallax-bg
          src="/images/businesses/slide-4.jpg"
          :speed="0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-5">
            <div class="">
              <h2 class="font-title mb-4">
                With (app), engage your employees better through impactful corporate wellbeing transformation.
              </h2>
              <div class="font-desc">
                <p class="mb-4">With (app) by Detalytics, optimise your company’s resilience development and unlock the peak performance potential of your employees. Through a holistic wellbeing approach, we provide employees with a personalised action plan to gain key insights to their health and understand how to optimise their lifestyle effortlessly.</p>
                <p class="mb-0">The result? Improved quality of life wellbeing in lifestyle behaviours optimisation, and longer peak performance optimisation for every employee.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
.section-parallax{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #eee;
  padding: 5rem 0;
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
  }
}

.parallax-bg{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
