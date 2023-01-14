<template>
  <div id="Description">
    <!-- parallax-1 -->
    <div class="section-parallax parallax-1">
      <div class="parallax-bg">
        <v-parallax-bg
          src="/images/businesses/slide-7.jpg"
          :speed="0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-6"></div>
          <div class="col-lg-6">
            <div class="ps-xl-5">
              <h2 class="font-title mb-4">
                Lack of visibility in patient informatics is affecting quality of care provision for patients
              </h2>
              <div class="font-desc">
                <p class="mb-0">In the connected patient care journey, visibility of patient data is key for hospitals to implement actionable insights and derive better treatment across the care continuum. However beyond the hospital, hospital providers lack any pre and post-admission patient insights. What you know about the patient is at best limited and qualitative. Patient data analytics is a black box, and inhibits the quality of efficient patient care management.</p>
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
          src="/images/businesses/slide-8.jpg"
          :speed="0.2"
        ></v-parallax-bg>
      </div>

      <div class="container position-relative">
        <div class="row g-5">
          <div class="col-lg-6">
            <div class="pe-xl-5">
              <h2 class="font-title mb-4">
                We demystify the black box of patient data insights for continuous lifetime partnership with providers and communities.
              </h2>
              <div class="font-desc">
                <p class="mb-0">With Detalytics,  increase visibility and efficiency of patient management throughout the connected patient care journey. We provide evidence-based patient data insights – from preventive care, diagnosis to treatment, enabling enhanced accuracy and reliable decision making on your treatment protocols. The result? Improved patient management and extended care delivery model at all stages of your patient care journey.</p>
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
