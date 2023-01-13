<template>
  <div id="IndividualsSafety">
    <IndividualsWorkplaceSafetySectionHero />
    <IndividualsWorkplaceSafetySectionParallax />
    <IndividualsWorkplaceSafetySectionBenefits />
    <LayoutsCtaBg
      class="page-cta"
      bg="/images/individuals/cta-bg-2.jpg"
    />
  </div>
</template>

<style lang="less" scoped>
.page-cta :deep(.btn-download) {
  background-image: linear-gradient(125.76deg, #439CA5 29.07%, #3BB19C 80.83%);
  border-color: transparent;
  transition: opacity .3s;
  &:hover{
    opacity: .9;
  }
}
</style>
