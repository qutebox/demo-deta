<template>
  <div id="HowItWork">
    <!-- step-1 -->
    <div id="HowItWork1" class="section-hiw section-hiw-1">
      <div class="container">
        <!-- heading -->
        <div class="heading">
          <h5 class="font-label text-center mb-2" :style="{ opacity: .7 }">
            {{ $t('HIW.STEPS.LABEL') }}
          </h5>
          <h2 class="font-title text-center mb-5 pb-3">
            {{ $t('HIW.STEPS.TITLE') }}
          </h2>
        </div>

        <h3 class="font-subtitle mb-4 content">
          {{ $t('HIW.STEPS.STEP_1.NAME') }}
        </h3>
        <div class="row align-items-center g-5">
          <!-- body -->
          <div class="col-lg-6">
            <div class="content ps-xl-4">
              <div class="font-label mb-3">
                {{ $t('HIW.STEPS.STEP_1.LABEL') }}
              </div>
              <h2 class="font-title mb-4">
                {{ $t('HIW.STEPS.STEP_1.TITLE') }}
              </h2>
              <div
                v-html="$t('HIW.STEPS.STEP_1.DESC')"
                class="font-desc"
              ></div>
            </div>
          </div>
          <!-- cover -->
          <div class="col-lg-6 position-relative order-lg-first">
            <div class="bg-light">
              <img src="@/assets/images/light-orange-bg.svg" alt="" width="800" height="800" :style="{ opacity: .5 }">
            </div>

            <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '120%' }"
            >
              <img
                src="/images/hiw/step-1a.png"
                alt="Step 1"
                width="450"
                height="823"
                loading="lazy"
                class="img"
                :style="{
                  '--delay': '.3s',
                  left: '15%',
                  top: '0%',
                  width: '69%',
                  transform: 'translateY(2rem)',
                }"
              >
            </v-inview>
          </div>
        </div>
      </div>
    </div>

    <!-- step-2 -->
    <div id="HowItWork2" class="section-hiw section-hiw-2">
      <div class="container">
        <!-- step-2a -->
        <div class="row align-items-center g-5">
          <!-- body -->
          <div class="col-lg-6">
            <div class="content">
              <h3 class="font-subtitle mb-5">
                {{ $t('HIW.STEPS.STEP_2.NAME') }}
              </h3>

              <div class="font-label mb-3">
                {{ $t('HIW.STEPS.STEP_2.LABEL_1') }}
              </div>
              <h2 class="font-title mb-4">
                {{ $t('HIW.STEPS.STEP_2.TITLE_1') }}
              </h2>
              <div
                v-html="$t('HIW.STEPS.STEP_2.DESC_1')"
                class="font-desc"
              ></div>
            </div>
          </div>
          <!-- cover -->
          <div class="col-lg-6 position-relative">
            <div class="bg-light">
              <img src="@/assets/images/light-purple-bg.svg" alt="" width="800" height="800">
            </div>

            <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '110%' }"
            >
              <img
                src="/images/hiw/step-2a.png"
                alt="Step 2"
                width="388"
                height="696"
                loading="lazy"
                class="img"
                :style="{
                  '--delay': '.3s',
                  left: '0%',
                  top: '0%',
                  width: '55%',
                  opacity: '1',
                  transform: 'translateY(2rem)',
                }"
              >
              <img
                src="/images/hiw/step-2b.png"
                alt="Step 2"
                width="397"
                height="715"
                loading="lazy"
                class="img"
                :style="{
                  '--delay': '.3s',
                  left: '50%',
                  top: '10%',
                  width: '55%',
                  opacity: '1',
                  transform: 'translateY(-2rem)',
                }"
              >
            </v-inview>
          </div>
        </div>
        <!-- step-2b -->
        <div class="row align-items-center g-5 mt-4">
          <!-- body -->
          <div class="col-lg-6">
            <div class="content">
              <div class="font-label mb-3">
                {{ $t('HIW.STEPS.STEP_2.LABEL_2') }}
              </div>
              <h2 class="font-title mb-4">
                {{ $t('HIW.STEPS.STEP_2.TITLE_2') }}
              </h2>
              <div
                v-html="$t('HIW.STEPS.STEP_2.DESC_2')"
                class="font-desc"
              ></div>
            </div>
          </div>
          <!-- cover -->
          <div class="col-lg-6 order-lg-first position-relative">
            <div class="bg-light">
              <img src="@/assets/images/light-purple-bg.svg" alt="" width="800" height="800">
            </div>

            <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '100%' }"
            >
              <img
                src="/images/hiw/step-2d.png"
                alt="Step 2"
                width="380"
                height="607"
                loading="lazy"
                class="img"
                :style="{
                  '--delay': '.3s',
                  left: '7%',
                  top: '15%',
                  width: '50%',
                  transform: 'translateY(-1.5rem)',
                }"
              >
              <img
                src="/images/hiw/step-2c.png"
                alt="Step 2"
                width="494"
                height="659"
                loading="lazy"
                class="img"
                :style="{
                  '--delay': '.5s',
                  left: '30%',
                  top: '7%',
                  width: '66%',
                  transform: 'translateY(-2rem)',
                }"
              >
            </v-inview>
          </div>
        </div>
      </div>
    </div>

    <!-- step-3 -->
    <div id="HowItWork3" class="section-hiw section-hiw-3">
      <div class="container">
        <!-- step-3a -->
        <div class="row align-items-center g-5">
          <!-- body -->
          <div class="col-lg-6">
            <div class="content pe-xl-5">
              <h3 class="font-subtitle mb-5">
                {{ $t('HIW.STEPS.STEP_3.NAME') }}
              </h3>

              <div class="font-label mb-3">
                {{ $t('HIW.STEPS.STEP_3.LABEL_1') }}
              </div>
              <h2 class="font-title mb-4">
                {{ $t('HIW.STEPS.STEP_3.TITLE_1') }}
              </h2>
              <div
                v-html="$t('HIW.STEPS.STEP_3.DESC_1')"
                class="font-desc"
              ></div>
            </div>
          </div>
          <!-- cover -->
          <div class="col-lg-6 position-relative">
            <div class="bg-light">
              <img src="@/assets/images/light-blue-bg.svg" alt="" width="800" height="800">
            </div>

            <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '100%' }"
            >
              <img
                src="/images/hiw/step-3a.png"
                alt="Step 3"
                width="410"
                height="655"
                loading="lazy"
                class="img"
                :style="{
                  '--delay': '.3s',
                  left: '7%',
                  top: '15%',
                  width: '50%',
                  transform: 'translateY(-1.5rem)',
                }"
              >
              <img
                src="/images/hiw/step-3b.png"
                alt="Step 3"
                width="533"
                height="710"
                loading="lazy"
                class="img"
                :style="{
                  '--delay': '.5s',
                  left: '30%',
                  top: '7%',
                  width: '66%',
                  transform: 'translateY(-2rem)',
                }"
              >
            </v-inview>
          </div>
        </div>
        <!-- step-3b -->
        <div class="row align-items-center g-5 mt-4">
          <!-- body -->
          <div class="col-lg-6">
            <div class="content">
              <div class="font-label mb-3">
                {{ $t('HIW.STEPS.STEP_3.LABEL_2') }}
              </div>
              <h2 class="font-title mb-4">
                {{ $t('HIW.STEPS.STEP_3.TITLE_2') }}
              </h2>
              <div
                v-html="$t('HIW.STEPS.STEP_3.DESC_2')"
                class="font-desc"
              ></div>
            </div>
          </div>
          <!-- cover -->
          <div class="col-lg-6 position-relative order-lg-first">
            <div class="bg-light">
              <img src="@/assets/images/light-blue-bg.svg" alt="" width="800" height="800">
            </div>

            <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '100%' }"
            >
              <img
                src="/images/hiw/step-3c.png"
                alt="Step 3"
                width="512"
                height="833"
                loading="lazy"
                class="img"
                :style="{
                  '--delay': '.3s',
                  left: '10%',
                  top: '5%',
                  width: '65%',
                  transform: 'translateY(-2rem)',
                }"
              >
            </v-inview>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section-hiw{
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
}
.section-hiw-1{
  --color-1: #DF8A2E;
  --color-2: #DF8A2E;
  --color-3: #DF8A2E;
  background-color: #FEF0E1;
  background-image: linear-gradient(180deg, #FEF0E1 0%, #fff 100%);
  @media (min-width: @screen-lg) {
    padding: 5rem 0;
  }
}
.section-hiw-2{
  --color-1: #944182;
  --color-2: #944182;
  --color-3: #944182;
  background-color: rgba(251, 194, 248, 0.17);
  background-image: linear-gradient(180deg, rgba(251, 194, 248, 0.17) 0%, #fff 100%);
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
  }
  ul{
    font-size: .875em;
  }
}
.section-hiw-3{
  --color-1: #434A6D;
  --color-2: #73778F;
  --color-3: #434A6D;
  background-color: #E7EEF5;
  background-image: linear-gradient(180deg, #E7EEF5 0%, #FFF 100%);
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
  }
  ul{
    font-size: .875em;
    color: var(--color-3);
  }
}

.content{
  position: relative;
  z-index: 1;
}

.font-title{
  color: var(--color-1);
}
.font-subtitle{
  color: var(--color-1);
}
.font-desc{
  color: var(--color-2);
  :deep(ul){
    padding-left: 1.5rem;
    li{
      padding: .25rem 0 .25rem 1rem;
    }
  }
}
.font-label{
  color: var(--color-3);
}

.bg-light{
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  pointer-events: none;
  user-select: none;
}
</style>
