<template>
  <div id="Hero">
    <!-- slide-1 -->
    <div class="section-work-performance section-slide-1">
      <div class="bg-light">
        <img src="@/assets/images/circle-blue-bg.svg" alt="" width="900" height="900">
      </div>

      <div class="container position-relative">
        <h5 class="label text-center mb-4">
          WORK PERFORMANCE
        </h5>
        <h1 class="heading text-center mb-3">
          Activate your Peak Performance
        </h1>
        <div class="heading-desc text-center">
          Get the most out of your life and work, everyday
        </div>
        <div class="scroll text-center">
          <v-icon name="scroll" size="48"></v-icon>
        </div>
      </div>
    </div>

    <!-- slide-2 -->
    <div class="section-work-performance section-slide-2">
      <div class="parallax-bg">
        <v-parallax-bg
          src="/images/individuals/slide-1.jpg"
          :speed="-0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-7"></div>
          <div class="col-lg-5">
            <h2 class="title mb-4">
              Fatigue and burnout preventing you from performing your best?
            </h2>
            <div class="desc">
              From senior executives responsible for all major operations of a company, to the individuals at trading desks when right or wrong decisions can mean making or losing millions of dollars, one thing is common: to get the job done, day in and day out, your body and brain have to be at the optimal state of readiness to perform at your best.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- slide-3 -->
    <div class="section-work-performance section-slide-3">
      <div class="parallax-bg">
        <v-parallax-bg
          src="/images/individuals/slide-2.jpg"
          :speed="0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-5">
            <h2 class="title mb-4">
              With (app), activate the joy of peak performance.
            </h2>
            <div class="desc">
              Let (app) monitor your daily fatigue level before chronic fatigue turns into burnout. Assess your metabolic health statuses with your own smartphone and stop preventable lifestyle illnesses from altering the course of your dream career. Go from just coping with the demands of work to building sustainable physical and mental resilience and unleash your hidden advantage for a long and fulfilling career.
            </div>
          </div>
          <div class="col-lg-7"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
.section-work-performance{
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
.section-slide-1{
  background-color: #fff;
  min-height: ~"calc(100vh - 6rem)";
}

.heading{
  font-size: 2.4rem;
  font-weight: 500;
  color: #469FD6;
  @media (min-width: @screen-lg) {
    font-size: 3.2rem;
  }
}
.heading-desc{
  font-size: 1rem;
  font-weight: 400;
  color: #002E5E;
  @media (min-width: @screen-lg) {
    font-size: 1.2rem;
  }
}
.label{
  font-size: 1rem;
  font-weight: 400;
  color: #2888C3;
  @media (min-width: @screen-lg) {
    font-size: 1.2rem;
  }
}
.scroll{
  color: #469FD6;
  margin-top: 5rem;
  margin-bottom: -4rem;
  animation: scrolling 1s alternate infinite;
}
.title{
  font-size: 1.8rem;
  font-weight: 500;
  @media (min-width: @screen-lg) {
    font-size: 2.4rem;
  }
}

.bg-light{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
