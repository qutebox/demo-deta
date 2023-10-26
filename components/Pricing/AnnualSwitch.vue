<script setup>
import { asset } from '@/helpers/utils';

defineProps({
  isAnnual: { type: Boolean, default: false },
  showEfx: { type: Boolean, default: false },
});

const $emit = defineEmits([
  'change',
]);

function onToggle(newState) {
  $emit('change', newState);
}
</script>

<template>
  <div
    class="switch d-inline-flex align-items-center justify-content-center"
    :class="{ __annual: isAnnual }"
  >
    <span
      class="switch-label switch-label-month"
      @click="onToggle(false)"
    >
      {{ $t('PRICING.pay_monthly') }}
    </span>
    <div
      class="switch-toggler"
      @click="onToggle(!isAnnual)"
    >
      <span class="switch-dot"></span>
    </div>
    <span
      class="switch-label switch-label-annual"
      @click="onToggle(true)"
    >
      {{ $t('PRICING.pay_annually') }}

      <img :src="asset('/images/pricing/pencil-line.svg')" alt="" width="68" height="11" class="efx-1"/>

      <template v-if="showEfx">
        <img :src="asset('/images/pricing/price-safe-2.svg')" alt="" width="168" height="87" class="efx-2"/>
      </template>
    </span>
  </div>
</template>

<style lang="less" scoped>
.switch{
  --size: 1.5rem;
  --color: #575859;
  &-toggler{
    position: relative;
    width: ~"calc(var(--size) * 2)";
    height: var(--size);
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius: 1rem;
    background-color: var(--color);
    cursor: pointer;
    @media (min-width: 768px) {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }
  &-dot{
    position: absolute;
    top: 0;
    left: 0;
    width: var(--size);
    height: var(--size);
    border: 2px solid var(--color);
    border-radius: 50%;
    background-color: #fff;
    transition: left .3s;
  }
  &-label{
    position: relative;
    font-size: .9rem;
    color: currentColor;
    text-transform: capitalize;
    cursor: pointer;
    user-select: none;
    transition: color .3s;
    &-month{
      color: #13B2C2;
    }
  }
  // state
  &.__annual{
    .switch-label-month{
      color: currentColor;
    }
    .switch-label-annual{
      color: #13B2C2;
    }
    .switch-dot{
      left: ~"calc(100% - var(--size))";
    }
  }

  // efx
  .efx-1{
    position: absolute;
    z-index: 1;
    top: 120%;
    left: 10%;
    right: 10%;
    width: 80%;
    height: auto;
  }
  .efx-2{
    position: absolute;
    z-index: 5;
    right: -65%;
    top: 150%;
    width: 7rem;
    height: auto;
    @media (min-width: 768px) {
      left: 110%;
      top: -50%;
      right: auto;
      width: 12rem;
    }
  }
}
</style>
