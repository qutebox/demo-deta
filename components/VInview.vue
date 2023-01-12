<script setup>
import { ref } from 'vue';

const props = defineProps({
  addClass: { type: String, default: '' },
  once: { type: Boolean, default: true },
});

const $emit = defineEmits([
  'inview',
]);

const $el = ref(null);

const onView = (isVisible) => {
  if (isVisible) {
    if (props.addClass) {
      $el.value.classList.add(props.addClass);
    }
    $emit('inview');
  } else if (props.addClass) {
    $el.value.classList.remove(props.addClass);
  }
};
</script>

<template>
  <div ref="$el" v-observe-visibility="{
    once,
    callback: onView,
  }">
    <slot />
  </div>
</template>
