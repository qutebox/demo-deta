<script setup>
import { ref } from 'vue';

defineProps({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const show = ref(false);
</script>

<template>
  <div class="faq" :class="{ __show: show }">
    <header class="faq-question" @click="show = !show">
      <span>{{ question }}</span>
      <div class="faq-toggle ms-3">
        <v-icon name="caret" size="24"></v-icon>
      </div>
    </header>
    <div v-if="show" class="faq-answer">
      <div v-html="answer"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.faq{
  --padding-x: 1.5rem;
  --padding-y: 1rem;
  background-color: #fff;
  border-radius: .75rem;
  border: 1px solid #439CA5;
  box-shadow: 0 0 8px fade(#439CA5, 15%);
  @media (min-width: @screen-lg) {
    --padding-x: 3rem;
    --padding-y: 2.5rem;
  }
  &-question{
    position: relative;
    padding-top: var(--padding-y);
    padding-bottom: var(--padding-y);
    padding-left: var(--padding-x);
    padding-right: ~"calc(var(--padding-x) + 2.5rem)";
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
    @media (min-width: @screen-lg) {
      font-size: 1.4rem;
    }
  }
  &-answer{
    padding-bottom: var(--padding-y);
    padding-left: var(--padding-x);
    padding-right: var(--padding-x);
  }
  &-toggle{
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2.5rem;
    color: #469FD6;
    svg{
      width: 1em;
      height: 1em;
    }
  }

  &.__show{
    .faq-toggle{
      transform: translateY(-50%) rotate(180deg);
    }
  }
}
</style>
