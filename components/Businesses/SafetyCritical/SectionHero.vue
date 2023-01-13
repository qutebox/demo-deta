<template>
  <div id="Hero" class="section-hero">
    <div class="container">
      <div class="row g-3 align-items-center">
        <div class="col-md-7 col-lg-8">
          <div class="">
            <h5 class="font-label mb-3">
              SAFETY CRITICAL INDUSTRIES
            </h5>
            <h1 class="font-heading mb-3">
              Better workplace safety begins with actionable insights
            </h1>
            <div class="font-desc">
              Mitigate workplace risks and improve workplace safety through optimised task readiness and wellbeing
            </div>
          </div>
        </div>
        <div class="col-md-5 col-lg-4">

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-hero{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #F1FCFF;
  background-image: linear-gradient(145deg, #F1FCFF 0%, #E5F3F7 100%);
  min-height: ~"calc(100vh - 6rem)";
  padding: 5rem 0;
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
  }
}

.font-heading{
  color: #002E5E;
}
.font-label{
  color: #002E5E;
}
.font-desc{
  font-size: 1.2rem;
  color: #23575C;
  @media (min-width: @screen-lg) {
    font-size: 1.4rem;
  }
}
</style>
