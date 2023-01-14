<template>
  <div id="IndividualsLifeLovers">
    <BusinessesHealthcareSectionHero />
    <BusinessesHealthcareSectionParallax />
    <BusinessesHealthcareSectionBenefits />
    <LayoutsCtaBg
      class="page-cta"
      bg="/images/businesses/cta-bg-4.jpg"
    />
  </div>
</template>

<style lang="less" scoped>
.page-cta :deep(.btn-download) {
  background-color: #57BBC5;
  border-color: #57BBC5;
  &:hover{
    background-color: lighten(#57BBC5, 7%);
    border-color: lighten(#57BBC5, 7%);
  }
}
</style>
