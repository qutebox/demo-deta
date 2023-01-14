<template>
  <div id="Description">
    <!-- parallax-1 -->
    <div class="section-parallax parallax-1">
      <div class="parallax-bg">
        <v-parallax-bg
          src="/images/businesses/slide-5.jpg"
          :speed="0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-6"></div>
          <div class="col-lg-6">
            <div class="">
              <h2 class="font-title mb-4">
                Trouble keeping up with sustained client engagement? Is lack of actionable insights preventing you from risk management?
              </h2>
              <div class="font-desc">
                <p class="mb-0">Is 50% client engagement even possible? As insurers, how do we achieve the most optimum risk management and lowest loss ratio for our clients? Current wellbeing solutions have low take up rates, and are often gimmicky with a high rate of attrition. How do you curate effective and personalised risk management, through sustained wellbeing engagement solutions that are relevant for your insured clients?</p>
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
          src="/images/businesses/slide-6.jpg"
          :speed="0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="">
              <h2 class="font-title mb-4">
                With (app), receive actionable insights to improve loss prevention, and serve your clients better  through proactive risk management.
              </h2>
              <div class="font-desc">
                <p class="mb-0">(app) by Detalytics makes all these possible. We offer dynamic risk profiling for your clients, where you can identify the degree of metabolic risk for your clients, and how to reduce these risks through actionable insights and recommendations. Through a a complementary health risk assessment model that easily integrates to your existing offerings/product solutions, access real-time risk profiles of all your individual clients and curate portfolios of lower risk ratios.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-5"></div>
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
