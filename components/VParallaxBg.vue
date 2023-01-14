<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  src: { type: String, required: true },
  speed: { type: Number, default: 0.2 },
  scrollHeight: { type: [Number, String], default: '150%' },
  debug: { type: Boolean, default: false },
});

const $el = ref(null);
const $parallax = ref(null);

// events
const isInView = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const setParallaxPos = () => {
  const rect = $el.value.getBoundingClientRect();
  const parentHeight = rect.height;
  const parallaxHeight = $parallax.value.offsetHeight;
  const availableOffset = parallaxHeight - parentHeight;
  const direction = props.speed < 0 ? -1 : 1;

  // const animationValue = window.pageYOffset * Math.abs(props.speed);
  const animationValue = (window.innerHeight - rect.top) * Math.abs(props.speed);
  if (animationValue <= availableOffset && animationValue >= 0) {
    $parallax.value.style.transform = `translateY(${animationValue * direction}px)`;
  }
};

const onScroll = () => {
  window.requestAnimationFrame(() => {
    if (isInView($el.value)) {
      setParallaxPos();
    }
  });
};

// lifecycle
onMounted(() => {
  window.addEventListener('scroll', onScroll, false);
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll, false);
});
</script>

<template>
  <div ref="$el" class="v-parallax">
    <div
      ref="$parallax"
      class="v-parallax-scroll"
      :class="{ 'is-reverse': speed < 0 }"
      :style="{ height: scrollHeight }"
    >
      <img
        :src="src"
        alt=""
        width="1500"
        height="900"
        loading="lazy"
        v-cloak
      >
    </div>
  </div>
</template>

<style lang="less" scoped>
.v-parallax{
  position: relative;
  overflow: hidden;
  height: 100%;
  pointer-events: none;
  user-select: none;
  &-scroll{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150%;
    overflow: hidden;
    will-change: transform;
    &.is-reverse{
      top: 0;
      bottom: auto;
    }
    > img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
