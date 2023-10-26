<script setup>
defineProps({
  features: { type: Array, required: true },
});
</script>

<template>
  <div class="item-features">
    <header class="item-features-header"></header>
    <div class="item-features-body">
      <div
        v-for="feature in features"
        :key="feature.group"
        class="item-features-group"
      >
        <h4 class="item-features-group-title">
          {{ feature.title }}
        </h4>
        <div
          v-for="d in feature.childs"
          :key="d.key"
          class="item-features-point"
          :class="{ __grey: d.key === 'travel_jet_lag' }"
        >
          <div class="d-inline-flex align-items-center">
            <span>{{ d.label }}</span>
            <VTooltip
              class="item-features-point-info ms-2"
              :content="d.desc"
              position="bottom"
            >
              <v-icon name="info" size="14"></v-icon>
            </VTooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.item-features{
  background-color: #fff;
  padding-left: .5rem;
  padding-right: .5rem;
  width: 100%;
  // width: var(--width);
  // @media (min-width: @screen-md) {
  //   width: ~"calc(var(--width) * 1.4)";
  // }
  &-header{
    min-height: ~"calc(var(--height-group) + var(--height-price))";
  }
  &-body{
    padding-bottom: 3rem;
  }
  &-group-title{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.125em;
    font-weight: 600;
    margin: 0;
    height: ~"calc(var(--height-point) * 1.4)";
    &:after{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100px;
      border-bottom: 1px solid #A9A9A9;
    }
  }
  &-point{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.875em;
    font-weight: 500;
    height: var(--height-point);
    &.__grey{
      color: #9A9A9C;
    }
  }
  &-point-info{
    width: 1em;
    height: 1em;
    color: #A9A9A9;
    cursor: pointer;
    svg{
      display: block;
    }
  }
}
</style>
