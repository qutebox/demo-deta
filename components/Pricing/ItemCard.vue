<script setup>
import { computed } from 'vue';

const props = defineProps({
  data: { type: Object, required: true },
  features: { type: Array, required: true },
  disabled: { type: Boolean, default: false },
});

const { t } = useI18n();
const { public: config } = useRuntimeConfig();

const displayTerm = computed(() => (props.data.isAnnual ? t('PRICING.year') : t('PRICING.month')));

// actions
function onBuyNow() {
  const qs = {
    planKey: props.data.key,
  };
  window.location = `${config.cartUrl}?${new URLSearchParams(qs)}`;
}
</script>

<template>
  <div
    class="item-card"
    :style="{
      '--bg': data.color,
    }"
  >
    <header class="item-card-header">
      <div class="item-card-label mb-2">
        {{ data.label || '&nbsp;' }}
      </div>
      <div class="item-card-price mb-2">
        <span class="item-card-price-amount">
          {{ data.displayPrice }}
        </span>
        <small class="item-card-price-term">
          per {{ displayTerm }}
        </small>
      </div>
      <div class="item-card-cta mt-2">
        <span v-if="disabled" class="tag">
          Coming soon
        </span>
        <button
          v-else-if="!data.isFree"
          class="item-card-btn"
          @click="onBuyNow"
        >
          {{ $t('PRICING.buy_now') }}
        </button>
      </div>
    </header>
    <div class="item-card-body">
      <div
        v-for="feature in features"
        :key="feature.group"
      >
        <h4 class="item-card-feature-group"></h4>
        <div
          v-for="d in feature.childs"
          :key="d.key"
          class="item-card-feature-point"
        >
          <div v-if="!!data.included[d.key]">
            <div
              v-if="data.included[d.key] !== true"
              class="item-card-feature-text"
            >
              {{ data.included[d.key] }}
            </div>
            <div
              v-else
              class="item-card-feature-check"
              :class="{
                // temporary disable for jet lag
                __grey: d.key === 'travel_jet_lag',
              }"
            >
              <v-icon name="check" size="16"></v-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.item-card{
  position: relative;
  background-color: var(--bg);
  flex: 1;
  text-align: center;
  &-header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: var(--height-price);
    padding: 1.5em;
  }
  &-body{
    padding: 0 1.5em 3em;
  }
  &-label{
    color: var(--color);
    font-size: 1.125em;
    font-weight: 400;
  }
  &-price{
    font-size: 1.75em;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
    &-amount{
      display: block;
    }
    &-term{
      display: block;
      font-size: .5em;
      font-weight: 400;
      margin-top: .5em;
      text-transform: lowercase;
    }
  }
  &-cta{
    height: 2.75em;
    .tag{
      display: inline-block;
      padding: .5em 1em;
      color: #9A9A9C;
      background-color: #fff;
      font-size: .875rem;
      font-weight: 600;
      border-radius: 2rem;
    }
  }
  &-btn{
    border: 1px solid #13B2C2;
    color: #13B2C2;
    max-width: 100%;
    width: 6.875em;
    font-size: 1em;
    font-weight: 600;
    padding: .45em 1em;
    background-color: transparent;
    border-radius: 4px;
  }
  &-feature{
    &-group{
      margin: 0;
      height: ~"calc(var(--height-point) * 1.4)";
    }
    &-point{
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 0.875em;
      padding: .5em;
      height: var(--height-point);
    }
    &-check{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: #13B2C2;
      color: #fff;
      width: 1.5em;
      height: 1.5em;
      border-radius: 50%;
      .ic{
        width: 1em;
        height: 1em;
      }
      &.__grey{
        background-color: #C3C3C4;
      }
    }
  }
}
</style>
