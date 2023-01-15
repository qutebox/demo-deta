<script setup>
import { ref } from 'vue';

const isAnnual = ref(false);

// static vars
const points = [
  {
    group: 'baseline',
    title: 'Self Care Baseline Assessments',
    childs: [
      {
        key: 'lifestyle_performance',
        label: 'Lifestyle Performance',
        desc: 'Analyse the impact of your lifestyle behaviours through a Lifestyle Performance Index (LSPI) score',
      },
      {
        key: 'metabolic_health',
        label: 'Metabolic Health',
        desc: 'Intepret the associated health risks and impact of your lifestyle habits (sleep, physical activity, nutrition, environment) on your body',
      },
      {
        key: 'diet_risk',
        label: 'Diet Risk',
        desc: 'Calculate the impact of your diet on your mental and physical health through a Diet Performance Score',
      },
      {
        key: 'acute_circadian',
        label: 'Acute Circadian Disruption',
        desc: 'Evaluate your cognitive performance through computed analysis of stress, resilience, anxiety and understand each contributing impact to your Cognitive Health',
      },
      {
        key: 'cognitive_health',
        label: 'Cognitive Health',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      },
      {
        key: 'personality_profile',
        label: 'Personality Profile',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      },
    ],
  },
  {
    group: 'wellbeing',
    title: 'Overall Wellbeing Summary',
    childs: [
      {
        key: 'body_health',
        label: 'Body Health',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      },
      {
        key: 'brain_health',
        label: 'Brain Health',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      },
    ],
  },
  {
    group: 'coaching',
    title: 'Daily Optimizations',
    childs: [
      {
        key: 'lifestyle_impacts',
        label: 'Daily lifestyle Impacts',
        desc: 'Measure the impact of your collective day-to-day lifestyle behaviours and activities on your well-being and health through Lifestyle Impact Score (LIS)',
      },
      {
        key: 'fatigue_management',
        label: 'Fatigue Management',
        desc: 'Receive a personalised Fatigue score as an overall measure derived from lifestyle behavious and your body’s responses to activity levels',
      },
    ],
  },
  {
    group: 'coaching',
    title: 'Personalised Coaching',
    childs: [
      {
        key: 'score_interpretations',
        label: 'Score Interpretations',
        desc: 'Breakdown of contributing factors behind your score with actionable recommendations to improve your score',
      },
      {
        key: 'goal_recommendations',
        label: 'Goal-based Recommendations',
        desc: 'Insights based uniquely on your personal data and aligned to your chosen performance objective',
      },
    ],
  },
  {
    group: 'travel',
    title: 'Travel Wellbeing',
    childs: [
      {
        key: 'jet_lag',
        label: 'Jet Lag Management',
        desc: 'Personalised recommendations to re-align your circadian rhythm and reduce jetlag impact from long-distance travels, with Personal JetLag Impact Score measurement',
      },
    ],
  },
];

const packages = {
  life: {
    title: 'Life',
    icon: 'heart',
    desc: 'Improve your lifestyle performance holistically, by cultivating lifestyle behaviour through preventive care',
    types: {
      basic: {
        name: 'Basic',
        price: 'XX',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
        points: {
          lifestyle_performance: 'Once only',
          metabolic_health: true,
          diet_risk: true,
          acute_circadian: true,
          cognitive_health: true,
          personality_profile: true,
          body_health: false,
          brain_health: false,
          lifestyle_impacts: true,
          fatigue_management: false,
          score_interpretations: true,
          goal_recommendations: false,
          jet_lag: false,
        },
      },
      advanced: {
        name: 'Advanced',
        price: 'XX',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
        points: {
          lifestyle_performance: true,
          metabolic_health: true,
          diet_risk: true,
          acute_circadian: true,
          cognitive_health: true,
          personality_profile: true,
          body_health: true,
          brain_health: true,
          lifestyle_impacts: true,
          fatigue_management: true,
          score_interpretations: true,
          goal_recommendations: true,
          jet_lag: 'Add on',
        },
      },
    },
  },
  work: {
    title: 'Work',
    icon: 'work',
    desc: 'Improve your work performance with targeted approach in productivity and fatigue management',
    types: {
      basic: {
        name: 'Basic',
        price: 'XX',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
        points: {
          lifestyle_performance: 'Once only',
          metabolic_health: true,
          diet_risk: true,
          acute_circadian: true,
          cognitive_health: true,
          personality_profile: true,
          body_health: false,
          brain_health: false,
          lifestyle_impacts: false,
          fatigue_management: false,
          score_interpretations: false,
          goal_recommendations: false,
          jet_lag: false,
        },
      },
      advanced: {
        name: 'Advanced',
        price: 'XX',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
        points: {
          lifestyle_performance: true,
          metabolic_health: true,
          diet_risk: true,
          acute_circadian: true,
          cognitive_health: true,
          personality_profile: true,
          body_health: true,
          brain_health: true,
          lifestyle_impacts: true,
          fatigue_management: true,
          score_interpretations: true,
          goal_recommendations: true,
          jet_lag: true,
        },
      },
    },
  },
};
</script>

<template>
  <div id="Price" class="section-price">
    <div class="container">
      <!-- switcher -->
      <div class="d-flex align-items-center justify-content-center justify-content-lg-end switch-wrap mb-4">
        <span @click="isAnnual = false">
          Monthly
        </span>
        <div
          class="switch"
          :class="{ __on: isAnnual }"
          @click="isAnnual = !isAnnual"
        >
          <span class="switch-dot"></span>
        </div>
        <span @click="isAnnual = true">
          Annual
        </span>
      </div>

      <!-- table -->
      <div class="price">
        <!-- head -->
        <div class="price-head">
          <div class="price-row">
            <div class="price-col price-label" :style="{ opacity: .5 }">
              &nbsp;
            </div>
            <div
              v-for="(pkg, key) in packages"
              :key="key"
              class="price-col"
              :class="`price-${key}`"
            >
              <div
                class="price-package"
                :class="`price-package-${key}`"
              >
                <header class="price-package-header">
                  <h2 class="price-package-title mb-3">
                    <div class="price-package-icon me-3">
                      <v-icon :name="pkg.icon" size="24"></v-icon>
                    </div>
                    {{ pkg.title }}
                  </h2>
                  <div class="price-package-desc">
                    {{ pkg.desc }}
                  </div>
                </header>
                <div class="price-package-body">
                  <div
                    v-for="(type, k) in pkg.types"
                    :key="k"
                    class="price-package-type"
                    :class="`price-package-type-${k}`"
                  >
                    <div class="price-package-typename">
                      {{ type.name }}
                    </div>
                    <div class="price-package-amt">
                      ${{ type.price }}
                    </div>
                    <div class="price-package-duration">
                      {{ isAnnual ? '/annual' : '/month' }}
                    </div>
                    <div class="price-package-txt">
                      {{ type.desc }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- body -->
        <div class="price-body">
          <template
            v-for="(point, index) in points"
            :key="index"
          >
            <!-- group-title -->
            <div class="price-row">
              <div class="price-col price-label price-group">
                <h4 class="price-group-name">
                  {{ point.title }}
                </h4>
              </div>
              <div
                v-for="(pkg, pkgKey) in packages"
                :key="pkgKey"
                class="price-col price-row-inner"
                :class="`price-col-${pkgKey}`"
              >
                <div
                  v-for="(type, typeKey) in pkg.types"
                  :key="typeKey"
                  class="price-col"
                  :class="`price-col-${typeKey}`"
                >
                  &nbsp;
                </div>
              </div>
            </div>

            <!-- group-points -->
            <div
              v-for="p in point.childs"
              :key="p.key"
              class="price-row"
            >
              <!-- label -->
              <div class="price-col price-label">
                <div class="price-label-name">
                  {{ p.label }}
                </div>
                <div class="price-label-desc">
                  {{ p.desc }}
                </div>
              </div>
              <!-- packages -->
              <div
                v-for="(pkg, pkgKey) in packages"
                :key="pkgKey"
                class="price-col price-row-inner"
                :class="`price-col-${pkgKey}`"
              >
                <div
                  v-for="(type, typeKey) in pkg.types"
                  :key="typeKey"
                  class="price-col"
                  :class="`price-col-${typeKey}`"
                >
                  <span v-if="typeof type.points[p.key] === 'string'">
                    {{ type.points[p.key] }}
                  </span>
                  <div v-else-if="type.points[p.key]" class="price-check">
                    <v-icon name="check" size="16"></v-icon>
                  </div>
                </div>
              </div>
            </div>

          </template>

          <!-- extra-space -->
          <div class="price-row">
            <div class="price-col price-label">
              &nbsp;
            </div>
            <div
              v-for="(pkg, pkgKey) in packages"
              :key="pkgKey"
              class="price-col price-row-inner"
              :class="`price-col-${pkgKey}`"
            >
              <div
                v-for="(type, typeKey) in pkg.types"
                :key="typeKey"
                class="price-col"
                :class="`price-col-${typeKey}`"
              >
                &nbsp;
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.section-price{
  position: relative;
  overflow: hidden;
  padding: 3rem 0 5rem;
  background-image: linear-gradient(180deg, #FFFFFF 0%, #E9F6FF 100%);
  @media (min-width: @screen-lg) {
    padding-bottom: 7rem;
  }
}

.switch{
  --size: 35px;
  position: relative;
  width: ~"calc(var(--size) * 2.2)";
  height: var(--size);
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 1rem;
  background-color: rgba(87, 187, 197, 0.36);
  cursor: pointer;
  &-dot{
    position: absolute;
    top: 0;
    left: 0;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background-color: #469FD6;
    transition: left .3s;
  }
  &-wrap{
    font-size: .9rem;
  }
  // state
  &.__on{
    .switch-dot{
      left: ~"calc(100% - var(--size))";
    }
  }
}

.price{
  text-align: center;
  font-size: .875rem;
  border-radius: 0 0 1rem 1rem;
  background-color: #fff;
  overflow-y: hidden;
  overflow-x: auto;
  margin-left: -2.25rem;
  margin-right: -2.25rem;
  box-shadow: 20px 25px 25px fade(#5786D6, 30%);
  @media (min-width: @screen-lg) {
    // overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }
  &-row{
    display: flex;
    flex-wrap: nowrap;
    min-width: ~"calc(300px * 2 + 150px)"; /* mobile sticky fix */
    @media (min-width: @screen-lg) {
      width: auto;
    }
  }
  &-col{
    flex: 0 0 auto;
    width: 300px;
    padding: .5rem 1.5rem;
    &:not(:first-child) {
      border-left: 4px solid #fff;
    }
    @media (max-width: @screen-lg) {
      &.price-label{
        width: 150px;
        position: sticky;
        z-index: 1;
        left: 0;
      }
    }
    @media (min-width: @screen-lg) {
      width: 33.33%;
    }
  }
  &-row-inner{
    padding: 0;
    display: flex;
    flex-wrap: nowrap;
    .price-col{
      width: auto;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
    }
  }

  &-head{
    .price-col{
      padding: 0;
    }
  }

  // package head
  &-package{
    color: #fff;
    &-life{
      border-radius: 1rem 1rem 0 0;
      background-color: #F86783;
      background-image: linear-gradient(180deg, #F86783 0%, #FFEEF2 100%);
      .price-package-icon{
        background-color: #EB4A6A;
      }
    }
    &-work{
      border-radius: 1rem 1rem 0 0;
      background-color: #5E7DB3;
      background-image: linear-gradient(180deg, #5E7DB3 0%, #D3E3FF 100%);
      .price-package-icon{
        background-color: #29619C;
      }
    }
    &-header{
      padding: 1.5rem 1rem;
      border-bottom: 1px solid #fff;
    }
    &-body{
      display: flex;
    }
    &-type{
      padding: 2rem 1rem;
      &:not(:first-child) {
        border-left: 1px solid #fff;
      }
    }
    &-icon{
      color: #fff;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-title{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      font-weight: 500;
    }
    &-desc{
      font-size: .7rem;
    }
    &-typename{
      font-size: 1.2rem;
      font-weight: 400;
    }
    &-amt{
      font-size: 3.2rem;
      line-height: 1;
    }
    &-duration{
      font-size: 1rem;
      margin-bottom: .5rem;
    }
    &-txt{
      font-size: .6rem;
    }
  }
  .price-col-life{
    .price-col-basic{
      background-color: fade(#FFF3F6, 47%);
    }
    .price-col-advanced{
      background-color: fade(#FFE4EA, 47%);
    }
  }
  .price-col-work{
    .price-col-basic{
      background-color: fade(#F0FEFF, 9%);
    }
    .price-col-advanced{
      background-color: fade(#60CFDA, 9%);
    }
  }

  // group
  &-group{
    position: relative;
    z-index: 5;
    background-color: #fff;
    text-align: left;
    &-name{
      position: relative;
      font-size: 1.2rem;
      font-weight: 500;
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
      margin-bottom: 0;
      &:after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 2.5rem;
        background-color: #A7A7A7;
      }
    }
  }

  // label
  &-label{
    position: relative;
    z-index: 5;
    background-color: #fff;
    text-align: left;
    &-name{
      font-size: .8rem;
      font-weight: 500;
      margin-bottom: .5em;
    }
    &-desc{
      font-size: .6rem;
    }
  }

  // check
  &-check{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    color: #fff;
    background-color: #3BB19C;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
