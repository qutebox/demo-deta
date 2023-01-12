<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  text: { type: [String, Array], required: true },
  speed: { type: Number, default: 70 },
  clearSpeed: { type: Number, default: 20 },
  pause: { type: Number, default: 1000 },
  cursorSize: { type: Number, default: 2 },
});

const $emit = defineEmits([
  'onChange',
]);

// static vars
const textArr = Array.isArray(props.text) ? props.text : [props.text];
let textIndex = 0;
let timer = null;

// vue vars
const currText = ref(textArr[textIndex]);

const looper = (chars, config, cb, counter) => {
  // typing case
  let newLen = counter !== undefined ? (counter + 1) : 1;
  // backspace case
  if (config.type === 'back') {
    newLen = counter !== undefined ? (counter - 1) : chars.length;
  }

  if (newLen >= 0 && newLen <= chars.length) {
    currText.value = chars.slice(0, newLen).join('');

    // loop next
    timer = setTimeout(() => {
      looper(chars, config, cb, newLen);
    }, config.spd);
  } else {
    // complete
    clearTimeout(timer);
    if (cb) {
      cb();
    }
  }
};

const doTyping = (word) => new Promise((resolve) => {
  const chars = word.split('');
  // reset current text
  currText.value = '';

  looper(chars, {
    type: 'typing',
    spd: props.speed,
  }, resolve);
});

const doClear = (word) => new Promise((resolve) => {
  const chars = word.split('');
  // reset current text
  currText.value = word;

  looper(chars, {
    type: 'back',
    spd: props.clearSpeed,
  }, resolve);
});

const start = () => {
  const word = textArr[textIndex];

  // typing
  doTyping(word)
    // pause
    .then(() => new Promise((resolve) => {
      timer = setTimeout(resolve, props.pause);
    }))
    // clear
    .then(() => doClear(word))
    // trigger next
    .then(() => {
      textIndex += 1;
      if (textIndex > (textArr.length - 1)) {
        textIndex = 0;
      }
      timer = setTimeout(start, 300);
      // trigger
      $emit('changed', textArr[textIndex]);
    });
};

// lifecycle
onMounted(() => {
  start();
});

onUnmounted(() => {
  clearTimeout(timer);
});
</script>

<template>
  <span class="gift-text">
    {{ currText }}
    <span
      v-if="currText"
      class="cursor"
      :style="{ width: `${cursorSize}px` }"
      v-cloak
    ></span>
  </span>
</template>

<style lang="less" scoped>
.gift-text{
  position: relative;
  display: inline-block;
  vertical-align: baseline;
}

.cursor{
  position: absolute;
  bottom: 0;
  right: 0;
  height: 1.25em;
  width: 2px;
  background-color: currentColor;
  animation: blink 1s steps(1) infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
