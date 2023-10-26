<script setup>
import { ref, watch, nextTick } from 'vue';

defineProps({
  content: { type: String, default: '' },
  width: { type: [String, Number], default: '15rem' },
  position: { type: String, default: 'top' },
  popupProps: { type: Object, default: null },
});

const $el = ref(null);
const $popup = ref(null);
const show = ref(false);
const pos = ref({ top: 0, left: 0 });

const onClose = (e) => {
  if (!e || e.target.closest('.tooltip') !== $el.value) {
    show.value = false;
  }
};

const onShow = (e) => {
  show.value = true;

  nextTick(() => {
    const rect = $popup.value.getBoundingClientRect();
    const parentRect = e.currentTarget.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.body.scrollTop;
    const scrollLeft = window.pageXOffset || document.body.scrollLeft;
    pos.value = {
      y: parentRect.top + scrollTop + ((parentRect.height - rect.height) / 2),
      x: parentRect.left + scrollLeft + ((parentRect.width - rect.width) / 2),
    };
  });
};

// bind global close
watch(show, (newVal) => {
  if (newVal) {
    document.body.addEventListener('click', onClose);
  } else {
    document.body.removeEventListener('click', onClose);
  }
});
</script>

<template>
  <div ref="$el" class="tooltip" @click="onShow">
    <slot />

    <Teleport to="body">
      <div
        v-if="show"
        ref="$popup"
        class="tooltip-popup"
        :class="{
          '__bottom': position === 'bottom',
          '__top': position === 'top',
          '__left': position === 'left',
          '__right': position === 'right',
        }"
        :style="{
          top: `${pos.y}px`,
          left: `${pos.x}px`,
          width: width,
        }"
        v-bind="popupProps"
      >
        <div v-if="content" v-html="content" />
        <slot v-else name="content" />
      </div>
    </Teleport>
  </div>
</template>

<style lang="less" scoped>
.tooltip{
  position: relative;
  cursor: pointer;
  &-popup{
    --bg: #9A9A9C;
    position: absolute;
    z-index: 100;
    background-color: var(--bg);
    color: #fff;
    font-size: 0.75em;
    padding: 1rem;
    border-radius: 4px;
    // pointer-events: none;
    &:before{
      content: '';
      position: absolute;
    }

    &.__bottom, &.__top{
      &:before{
        left: 50%;
        transform: translateX(-50%);
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
      }
    }
    &.__left, &.__right{
      &:before{
        top: 50%;
        transform: translateY(-50%);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
      }
    }
    &.__bottom{
      transform: translateY(50%);
      margin-top: 1rem;
      &:before{
        bottom: 100%;
        margin-bottom: -1px;
        border-bottom: 8px solid var(--bg);
      }
    }
    &.__top{
      transform: translateY(-50%);
      margin-top: -1rem;
      &:before{
        top: 100%;
        margin-top: -1px;
        border-top: 8px solid var(--bg);
      }
    }
    &.__right{
      transform: translateX(50%);
      margin-left: 1rem;
      &:before{
        right: 100%;
        margin-right: -1px;
        border-right: 8px solid var(--bg);
      }
    }
    &.__left{
      transform: translateX(-50%);
      margin-left: -1rem;
      &:before{
        left: 100%;
        margin-left: -1px;
        border-left: 8px solid var(--bg);
      }
    }
  }
}
</style>
