<script setup>
import {
  ref, computed, onMounted, onUnmounted,
} from 'vue';
import {
  plans,
  planGroups,
  planFeatures,
} from '@/config/plans';

const $el = ref(null);
const isSticky = ref(false);
const isAnnual = ref(false);
const currPlans = computed(() => plans
  .filter((d) => d.isAnnual === isAnnual.value)
  .map((d) => ({
    ...d,
    group: planGroups.find((p) => p.key === d.group),
  })));

// sticky event
const handleStickyPos = () => {
  const pos = 158; // header + hero
  if (window.scrollY >= pos) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleStickyPos);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleStickyPos);
});
</script>

<template>
  <div ref="$el" class="section-price">
    <!-- switcher -->
    <div
      class="switcher text-center mb-5 py-3"
      :class="{ __sticky: isSticky }"
    >
      <PricingAnnualSwitch
        :isAnnual="isAnnual"
        :showEfx="!isSticky"
        @change="isAnnual = $event"
      />
    </div>

    <div class="container">
      <div class="plans">
        <PricingMobileCard
          v-for="item in currPlans"
          :key="item.key"
          :data="item"
          :features="planFeatures"
        />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-price{
  position: relative;
  // overflow: hidden;
  padding-bottom: 3rem;
}

.switcher.__sticky{
  position: sticky;
  z-index: 5;
  top: 4rem;
  background: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06);
}
</style>
