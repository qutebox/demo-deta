<script setup>
import {
  ref, computed, onMounted, onUnmounted,
} from 'vue';
// import { useKeenSlider } from 'keen-slider/vue';
import {
  plans,
  planGroups,
  // planAddons,
  planFeatures,
} from '@/config/plans';

const isAnnual = ref(false);
const plansObj = computed(() => plans
  .filter((d) => d.isAnnual === isAnnual.value)
  .reduce((a, c) => {
    if (!a[c.group]) {
      a[c.group] = [];
    }
    a[c.group].push(c);
    return a;
  }, {}));

// slider
// const [$plans] = useKeenSlider({
//   selector: '.plan-group',
//   mode: 'free',
//   renderMode: 'performance',
//   slides: {
//     perView: 'auto',
//   },
// });

const scrollFixWidth = ref(0);

const getPlansExactWidth = () => {
  let width = 0;
  Array.from(document.querySelectorAll('.plan-group')).forEach(($el) => {
    width += $el.offsetWidth;
  });
  return width;
};

const applyScrollFix = () => {
  const width = getPlansExactWidth();
  // disable if screen can show all plans
  if (width < window.innerWidth) {
    scrollFixWidth.value = 0;
  } else {
    const containerWidth = document.querySelector('.container').offsetWidth;
    scrollFixWidth.value = (window.innerWidth - containerWidth) / 2;
  }
};

const timer = ref(null);
const handleResize = () => {
  clearTimeout(timer.value);
  timer.value = setTimeout(applyScrollFix, 300);
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  applyScrollFix();
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="section-price">
    <div class="container">
      <!-- switcher -->
      <div class="text-center mb-5 pb-lg-5">
        <PricingAnnualSwitch
          :isAnnual="isAnnual"
          showEfx
          @change="isAnnual = $event"
        />
      </div>

      <div
        class="plans-wrap"
        :class="{ __scroll: scrollFixWidth }"
      >
        <div class="plans-wrap-inner">
          <div v-if="scrollFixWidth" :style="{ minWidth: `${scrollFixWidth}px` }"></div>

          <div class="plans">
            <div class="plan-group plans-features">
              <PricingItemFeaturesCard :features="planFeatures" />
            </div>
            <div
              v-for="group in planGroups"
              :key="group.key"
              class="plan-group"
              :class="{
                [`plan-group-${group.key}`]: true,
              }"
            >
              <PricingItemGroupCard
                :data="group"
                :plans="plansObj[group.key]"
                :features="planFeatures"
              />
            </div>
          </div>

          <div v-if="scrollFixWidth" :style="{ minWidth: `${scrollFixWidth}px` }"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.section-price{
  position: relative;
  overflow: hidden;
  padding-bottom: 5rem;
  @media (min-width: @screen-lg) {
    padding-bottom: 7rem;
  }
}

// navtive scroll
.plans-wrap.__scroll{
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  .plans-wrap-inner{
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 20px;
    margin-bottom: -20px;
  }
  .plans{
    justify-content: flex-start;
  }
}

.plans{
  --spacing: .75em;
  --width: 10em;
  --height-group: 12rem;
  --height-price: 12rem;
  --height-point: 2.75rem;
  font-size: 14px;
  display: flex;
  flex-wrap: nowrap;
  margin-left: 0;
  margin-right: 0;
  justify-content: center;
  // overflow: auto;
  @media (min-width: @screen-sl) {
    --width: 11em;
    --spacing: 1em;
    font-size: 16px;
  }
  @media (min-width: @screen-ssl) {
    --width: 12em;
  }
}
.plan-group{
  padding-left: ~"calc(var(--spacing) / 2)";
  padding-right: ~"calc(var(--spacing) / 2)";
  flex: 0 0 auto;
  &-travel{
    --width: 12em;
  }
}
.plans-features{
  padding-left: 0;
  padding-right: 0;
  width: var(--width);
  @media (min-width: @screen-md) {
    width: ~"calc(var(--width) * 1.4)";
  }
}
</style>
