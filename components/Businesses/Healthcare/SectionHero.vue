<template>
  <div id="Hero" class="section-hero">
    <div class="container">
      <div class="row g-3 align-items-center">
        <div class="col-md-7 col-lg-8">
          <div class="">
            <h5 class="font-label mb-3">
              HEALTHCARE PROVIDERS
            </h5>
            <h1 class="font-heading mb-3">
              Better patient outcomes begins with actionable insights
            </h1>
            <div class="font-desc">
              Enabling continuous lifetime partnership between providers and communities
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
  display: flex;
  align-items: center;
  background-color: #EBF6FF;
  background-image: linear-gradient(355.74deg, #EBF6FF 0%, #85C0FE 100%);
  padding: 5rem 0;
  min-height: 75vh;
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
    min-height: ~"calc(100vh - 6rem)";
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
  color: #002E5E;
  @media (min-width: @screen-lg) {
    font-size: 1.4rem;
  }
}
</style>
