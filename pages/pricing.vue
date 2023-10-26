<script setup>
import { ref, onMounted } from 'vue';

useHead({
  title: 'Pricing',
});

const checkIsMobile = () => window.matchMedia('only screen and (max-width: 768px)').matches;

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = checkIsMobile();

  let isResize = false;
  window.addEventListener('resize', () => {
    if (isResize) {
      return;
    }
    isResize = true;
    requestAnimationFrame(() => {
      isMobile.value = checkIsMobile();
      isResize = false;
    });
  });
});
</script>

<template>
  <div id="Pricing">
    <PricingHero />
    <PricingMobileList v-if="isMobile" />
    <PricingTableList v-else />
  </div>
</template>
