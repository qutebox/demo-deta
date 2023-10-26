<script setup>
defineProps({
  data: { type: Object, required: true },
  plans: { type: Array, required: true },
  features: { type: Array, required: true },
});
</script>

<template>
  <div
    class="group-card"
    :style="{
      '--color': data.color,
      width: `calc(${plans.length} * var(--width))`,
    }"
  >
    <header class="group-card-header">
      <h2 class="group-card-name mb-3">
        <div v-if="data.icon" class="group-card-icon me-3">
          <v-icon :name="data.icon" size="24"></v-icon>
        </div>
        <span>{{ data.name }}</span>
      </h2>
      <div class="group-card-desc">
        {{ data.desc }}
      </div>
    </header>
    <div class="group-card-body">
      <PricingItemCard
        v-for="plan in plans"
        :key="plan.key"
        class="group-card-item"
        :data="plan"
        :features="features"
        :disabled="data.isComingSoon"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.group-card{
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  user-select: none;
  &-header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 1.5em 1em;
    color: #fff;
    background-image: linear-gradient(180deg, var(--color) 0%, #fff 140%);
    min-height: var(--height-group);
  }
  &-body{
    display: flex;
  }
  &-name{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    font-weight: 500;
    margin: 0;
  }
  &-icon{
    background-color: var(--color);
    color: #fff;
    width: 1em;
    min-width: 1em;
    height: 1em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-desc{
    font-size: .875em;
    flex-grow: 1;
  }
}
</style>
