<script setup>
const faqs = [
  {
    q: 'How is (app) diffferent from my wearable app?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    q: 'What’s the difference between basic and advanced bundles?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    q: 'Can I create my own plan? Am I able to add-on specific features?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    q: 'Is my data private?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    q: 'How is my data protected?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    q: 'How is the biling like?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    q: 'How do I upgrade from basic to advanced plan?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
];
</script>

<template>
  <div id="Faq" class="section-faq">
    <div class="container">
      <h2 class="font-title text-center mb-5 pb-lg-4">
        Frequently Asked Questions (FAQ)
      </h2>

      <div class="faq-wrap">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="mb-4"
        >
          <v-faq :question="faq.q" :answer="faq.a"></v-faq>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-faq{
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(180deg, #eff8ff 0%, #E9F6FF 100%);
  padding: 5rem 0;
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
  }
}
</style>
