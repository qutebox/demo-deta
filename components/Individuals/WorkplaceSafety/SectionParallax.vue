<template>
  <div id="Description">
    <!-- parallax-1 -->
    <div class="section-parallax parallax-1">
      <div class="parallax-bg">
        <v-parallax-bg
          src="/images/individuals/slide-3.jpg"
          :speed="0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-7"></div>
          <div class="col-lg-5">
            <h2 class="font-title mb-4">
              Staying alert and ready 24/7 is a challenge, especially if your job is continuously demanding.
            </h2>
            <div class="font-desc">
              Whether you operate from the flight deck or perform a surgery that demand ultimate focus and precision, one thing is common – staying alert and being on your feet is always a requirement. You need to always ready to perform,  and a risk of sudden incapacity or inability to perform could prove consequential. But it’s not easy to stay alert when you are fatigued and exhausted. Your body is not created to function non-stop at peak performance for days.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- parallax-2 -->
    <div class="section-parallax parallax-2">
      <div class="parallax-bg">
        <v-parallax-bg
          src="/images/individuals/slide-4.jpg"
          :speed="-0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-5">
            <h2 class="font-title mb-4">
              With (app), activate the joy of mission accomplished
            </h2>
            <div class="font-desc">
              <p class="mb-4">With (app), we help you to reduce work risks associated with sleep, fatigue and burnout. Understand the signals your body is sending you and be in the know of your task readiness level. Gain insights and take precautions against potential downtime, and how your cognitive performance can be affected.</p>
              <p class="mb-0">With (app), you can start your work shift with confidence, knowing that you will be able to perform when called upon.</p>
            </div>
          </div>
          <div class="col-lg-7"></div>
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
