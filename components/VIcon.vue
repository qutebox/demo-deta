<script setup>
import { onMounted } from 'vue';
import { asset } from '@/helpers/utils';

defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: '1em' },
  block: { type: Boolean, default: false },
  attrs: { type: Object, default: null },
});

const ver = '1.4';

// due to unable security error, browser will block the use of <use> when refering other domain, hence the work around is fetch the CDN assets manually
onMounted(() => {
  const path = asset(`/images/sprite.svg?v=${ver}`);
  // append only once
  const id = 'SvgSprites';
  let $el = document.getElementById(id);
  if ($el) {
    return;
  }

  $el = document.createElement('div');
  $el.setAttribute('id', id);
  $el.style.display = 'none';
  document.body.appendChild($el);

  fetch(path)
    .then((response) => response.text())
    .then((response) => {
      $el.innerHTML = response.replaceAll('id="', 'id="ic_');
    });
});
</script>

<template>
  <svg
    class="ic"
    :width="size"
    :height="size"
    :style="{
      fill: 'currentColor',
      display: block ? 'block' : null,
    }"
  >
    <slot />
    <use
      :xlink:href="`#ic_${name}`"
      v-bind="attrs"
    />
  </svg>
</template>
