<script setup>
import { asset } from '@/helpers/utils';
</script>

<template>
  <div id="IndividualsLifeLovers">
    <IndividualsLifeLoversSectionHero />
    <IndividualsLifeLoversSectionParallax />
    <IndividualsLifeLoversSectionBenefits />
    <LayoutsCtaBg
      class="page-cta"
      :bg="asset('/images/individuals/cta-bg-3.jpg')"
    />
  </div>
</template>

<style lang="less" scoped>
.page-cta :deep(.btn-download) {
  background-color: #F86783;
  border-color: #F86783;
  &:hover{
    background-color: lighten(#F86783, 7%);
    border-color: lighten(#F86783, 7%);
  }
}
</style>
