<script setup>
import { asset } from '@/helpers/utils';
</script>

<template>
  <div id="IndividualsLifeLovers">
    <BusinessesSafetyCriticalSectionHero />
    <BusinessesSafetyCriticalSectionParallax />
    <BusinessesSafetyCriticalSectionDetalytics />
    <BusinessesSafetyCriticalSectionBenefits />
    <LayoutsCtaBg
      class="page-cta"
      :bg="asset('/images/businesses/cta-bg-1.jpg')"
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
