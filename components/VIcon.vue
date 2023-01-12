<script setup>
defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: '1em' },
  attrs: { type: Object, default: null },
});
const ver = '1.0';
</script>

<template>
  <svg
    class="ic"
    :width="size"
    :height="size"
    :style="{ fill: 'currentColor' }"
  >
    <slot />
    <use
      :xlink:href="`/sprite.svg?v=${ver}#${name}`"
      v-bind="attrs"
    />
  </svg>
</template>
