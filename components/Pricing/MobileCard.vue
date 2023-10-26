<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  data: { type: Object, required: true },
  features: { type: Array, required: true },
});

const { t } = useI18n();
const { public: config } = useRuntimeConfig();

const isMore = ref(false);
const displayTerm = computed(() => (props.data.isAnnual ? t('PRICING.year') : t('PRICING.month')));
const planFeatures = computed(() => props.features.map((group) => ({
  ...group,
  childs: group.childs.map((p) => ({
    ...p,
    value: props.data.included[p.key] || false,
  })).filter((p) => p.value),
})).filter((group) => group.childs.length));

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
    class="mobile-card"
    :style="{
      '--bg': data.color,
      '--gbg': data.group.color,
    }"
  >
    <!-- open -->
    <div
      v-if="!isMore"
      class="mobile-card-toggle"
      @click="isMore = true"
    >
      <div class="mobile-card-toggle-plan">
        <span v-if="data.group.icon" class="mobile-card-icon">
          <v-icon :name="data.group.icon" size="24" />
        </span>
        <h4 class="mobile-card-name px-2">
          {{ data.group.name }}
        </h4>
        <span v-if="data.label" class="mobile-card-tag">
          {{ data.label }}
        </span>
      </div>
      <div class="mobile-card-toggle-price">
        <span class="mobile-card-price">
          {{ data.displayPrice }}
        </span>
        <small class="mobile-card-price-term">
          per {{ displayTerm }}
        </small>
      </div>
      <div class="mobile-card-toggle-arrow">
        <v-icon name="caret" size="20" />
      </div>
    </div>

    <!-- opened -->
    <div v-else class="mobile-card-body">
      <div class="mb-2">
        <div class="mobile-card-icon">
          <v-icon :name="data.group.icon" size="24" />
        </div>
      </div>
      <div class="d-inline-flex align-items-center mb-2">
        <h4 class="mobile-card-name px-2">
          {{ data.group.name }}
        </h4>
        <span v-if="data.label" class="mobile-card-tag">
          {{ data.label }}
        </span>
      </div>
      <div class="mobile-card-desc">
        {{ data.group.desc }}
      </div>
      <div class="mobile-card-body-price">
        <span class="mobile-card-price-currency">
          USD
        </span>
        <span class="mobile-card-price">
          {{ data.displayPrice.replace('USD ', '') }}
        </span>
        <small class="mobile-card-price-term">
          / {{ displayTerm }}
        </small>
      </div>

      <!-- cta -->
      <div class="mobile-card-body-cta mt-2 mb-4">
        <span v-if="data.group.isComingSoon" class="mobile-card-btn disabled">
          Coming soon
        </span>
        <button
          v-else-if="!data.isFree"
          class="mobile-card-btn"
          @click="onBuyNow"
        >
          {{ $t('PRICING.buy_now') }}
        </button>
      </div>

      <!-- features -->
      <div class="mobile-card-features">
        <div
          v-for="feature in planFeatures"
          :key="feature.group"
          class="mobile-card-features-group"
        >
          <h4 class="mobile-card-features-group-title">
            {{ feature.title }}
          </h4>
          <div
            v-for="d in feature.childs"
            :key="d.key"
            class="mobile-card-features-point"
            :class="{ __grey: d.key === 'travel_jet_lag' }"
          >
            <div class="mobile-card-features-point-label">
              <span>{{ d.label }}</span>
              <VTooltip
                class="mobile-card-features-point-info ms-2"
                :content="d.desc"
                position="top"
              >
                <v-icon name="info" size="14"></v-icon>
              </VTooltip>
            </div>
            <div class="mobile-card-features-point-value ms-3">
              <div v-if="typeof d.value === 'string'">
                {{ d.value }}
              </div>
              <div v-else class="mobile-card-features-point-check">
                <v-icon name="check" size="16"></v-icon>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-card-body-arrow" @click="isMore = false">
        <v-icon name="caret" size="20" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.mobile-card{
  position: relative;
  background-color: var(--bg);
  border-radius: 1rem;
  margin-bottom: 1rem;
  color: #2D2D2D;
  &-toggle{
    display: flex;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    &-plan{
      flex-grow: 1;
      display: flex;
      align-items: center;
    }
    &-price{
      line-height: 1.2;
      text-align: right;
      > *{
        display: block;
      }
      .mobile-card-price{
        font-size: 1.3rem;
        color: inherit;
      }
    }
    &-arrow{
      color: var(--gbg);
      padding-left: .5rem;
    }
  }
  &-body{
    text-align: center;
    padding: 1rem;
    &-arrow{
      padding: .75rem 1rem;
      margin-bottom: -1rem;
      color: var(--gbg);
      cursor: pointer;
      .ic{
        transform: rotate(180deg);
      }
    }
    .mobile-card-name{
      font-size: 1rem;
    }
  }

  &-name{
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0;
  }
  &-desc{
    opacity: .7;
    font-size: .875rem;
  }
  &-icon{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: var(--gbg);
  }
  &-tag{
    display: inline-block;
    padding: .2rem .35rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--gbg);
    border: 1px solid var(--gbg);
    border-radius: 1rem;
    line-height: 1.3;
  }
  &-price{
    font-size: 2rem;
    font-weight: 500;
    color: var(--gbg);
  }
  &-price-currency{
    color: var(--gbg);
    font-weight: 400;
  }
  &-price-term{
    text-transform: lowercase;
    font-weight: 400;
  }
  &-btn{
    display: inline-block;
    background-color: #13B2C2;
    border: 1px solid #13B2C2;
    color: #fff;
    font-size: 1em;
    font-weight: 600;
    padding: .75rem 1.5rem;
    border-radius: 4px;
    &.disabled{
      background-color: #fff;
      border-color: #fff;
      color: #9A9A9C;
    }
  }
  &-features{
    text-align: left;
    &-group:not(:last-child){
      margin-bottom: 1.5rem;
    }
    &-group-title{
      position: relative;
      font-size: 1.25rem;
      font-weight: 700;
      padding-bottom: 1rem;
      margin-bottom: .25rem;
      &:after{
        content: '';
        position: absolute;
        width: 96px;
        left: 0;
        top: 100%;
        height: 1px;
        border-bottom: 1px solid #a9a9a9;
      }
    }
    &-point{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .5rem 0;
      font-size: .875rem;
      &-label{
        display: inline-flex;
        align-items: center;
        font-weight: 500;
      }
      &-info{
        color: #a9a9a9;
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
        &.__grey{
          background-color: #C3C3C4;
        }
      }
    }
  }
}
</style>
