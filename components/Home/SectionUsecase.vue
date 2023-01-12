<script setup>
const cards = [
  {
    title: 'Work Performance',
    desc: 'Elevate your readiness and functional level, to perform your best & stay optimised at work',
    img: '/images/home/card-1.png',
  },
  {
    title: 'Mental Wellbeing',
    desc: 'Recover from fatigue, prevent burnout and feel rejuvenated in life - in your health, body and mind.',
    img: '/images/home/card-2.png',
  },
  {
    title: 'Travel',
    desc: 'Improve travel readiness, and reduce impacts due to jetlag or irregular work/travel schedules Make the most out of your schedule, and feel energised wherever you are.',
    img: '/images/home/card-3.png',
  },
  {
    title: 'Anti Early Aging',
    desc: 'Identify and adopt pre-emptive health behaviours. understand yourself better and Improve your quality of life. Understand your body better, and empower yourself to feel the best you can everyday.',
    img: '/images/home/card-4.png',
  },
  {
    title: 'Learning Improvement',
    desc: 'Unlock your learning potential, improve your brain function and optimise your mind. Think faster, improve memory, comprehend information better, and operate at a higher brain capacity.',
    img: '/images/home/card-5.png',
  },
];
</script>

<template>
  <div id="Usecase" class="section-usecase">
    <div class="container">
      <h4 class="label text-lg-center">
        USE CASES
      </h4>
      <h2 class="title text-lg-center">
        Your all-in-one personalised (digital) coach empowering you to activate your optimal readiness for all important moments in your life.
      </h2>
      <div class="desc text-lg-center">
        Your goals change by context, and (app) is the only app that contextually aligns to all your goals in life and work. <br>With (app), achieve a holistic wellbeing approach to empower your fullest potential in any situation
      </div>

      <div class="row g-4 justify-content-center my-5 pt-lg-4">
        <div
          v-for="(item, index) in cards"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <v-inview
            class="card-item animated"
            :class="`card-item-${index}`"
            add-class="__in"
            :style="{ '--delay': `${index * 0.2}s` }"
          >
            <img
              :src="item.img"
              :alt="item.title"
              width="382"
              height="229"
              class="card-item-img"
              loading="lazy"
            >
            <h4 class="card-item-title">
              {{ item.title }}
            </h4>
            <div class="card-item-desc">
              {{ item.desc }}
            </div>
          </v-inview>
        </div>
      </div>

      <div class="text-center">
        <NuxtLink to="/" class="btn btn-cta">
          Our Solutions
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-usecase{
  position: relative;
  overflow: hidden;
  background-color: #F9F7FE;
  background-image: linear-gradient(142.05deg, #F9F7FE 2.36%, #FEFBFF 96.01%);;
  padding: 4rem 0;
  @media (min-width: @screen-lg) {
    padding: 5rem 0;
  }
}

.title{
  font-size: 1.8rem;
  font-weight: 500;
  color: #543573;
  margin-bottom: 1.5rem;
}
.desc{
  font-size: 1rem;
  color: #785C94;
}
.label{
  font-size: 1rem;
  text-transform: uppercase;
  color: rgba(84, 53, 115, 0.78);
  margin-bottom: .75rem;
  @media (min-width: @screen-lg) {
    font-size: 1.2rem;
  }
}

.card-item{
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  &-img{
    max-width: 100%;
    height: auto;
    margin-bottom: 1.25rem;
  }
  &-title{
    font-size: 1.4rem;
    font-weight: 500;
    color: #543573;
    margin-bottom: .5rem;
  }
  &-desc{
    font-size: .8rem;
    color: #9079A7;
  }

  // animation
  &.animated{
    opacity: 0;
    transform: translateY(2rem);
    transition-duration: .3s;
    transition-timing-function: ease-out;
    transition-property: transform, opacity;
  }
  &.__in{
    opacity: 1;
    transform: translateY(0);
    transition-duration: 1s;
    transition-delay: var(--delay);
  }
}

.btn-cta{
  background-color: #543573;
  color: #fff;
  box-shadow: 0px 0px 4px #846C9B, 0px 8px 16px rgba(125, 92, 157, 0.35);
  &:hover{
    background-color: lighten(#543573, 8%);
  }
}
</style>
