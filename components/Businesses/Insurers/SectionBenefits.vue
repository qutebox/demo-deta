<script setup>
// import { asset } from '@/helpers/utils';
</script>

<template>
  <div id="Benefits" class="section-benefits-all">
    <!-- benefit-1 -->
    <div id="Benefits1" class="section-benefits benefit-1">
      <div class="container">
        <!-- heading -->
        <div class="heading text-lg-center pb-lg-5">
          <h5 class="font-label mb-2">
            BENEFITS
          </h5>
          <h2 class="font-title mb-4">
            Proactive risk management and loss prevention
          </h2>
          <div class="font-desc mb-5">
            Curate effective and personalised risk management for your clients, <br class="d-none d-lg-block">and sustained engagement for every individual.
          </div>
        </div>

        <div class="row g-5 align-items-center justify-content-between">
          <div class="col-lg-6">
            <div class="content pe-xl-5">
              <h5 class="font-desc mb-2">
                01 BETTER RISK MANAGEMENT AND LOSS PREVENTION
              </h5>
              <h2 class="font-title mb-4">
                Improve loss prevention and profitability through proactive risk management
              </h2>
              <div class="font-desc">
                <p class="mb-4">Through personalised assessments on potential health risks in preventable illnesses, our app collectively provides loss prevention advisory for each insured based on predictive analytics.</p>
                <p class="mb-0">With (app)’s dynamic risk profiling,  you can now identify the degree of metabolic risk for your clients. Gain dynamic insights into most impactful root causes of future losses, and how to reduce these risks through actionable insights and recommendations.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <!-- <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '100%' }"
            >
              <img
                src="/images/individuals/benefits-life-lovers-1a.png"
                alt="Benefit 1"
                class="img"
                width="406"
                height="745"
                loading="lazy"
                :style="{
                  '--delay': '.3s',
                  width: '62%',
                  top: '-4%',
                  left: '20%',
                }"
              >
            </v-inview> -->
          </div>
        </div>
      </div>
    </div>

    <!-- benefit-2 -->
    <div id="Benefits2" class="section-benefits benefit-2">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div class="content ps-xl-5">
              <h5 class="font-desc mb-2">
                02 BETTER CLIENT ENGAGEMENT AND SERVICES
              </h5>
              <h2 class="font-title mb-4">
                Individually personalised, and deployable at scale
              </h2>
              <div class="font-desc">
                <p class="mb-4">With (app), gain insights on real-time risk profiles of your individual clients. We offer a hyper-personalised approach to risk management through analytics and advisory that is derived from real-time human generated data, instead of historical macro statistics.</p>
                <p class="mb-0">The result? A holistic health coach that is uniquely personalised to each individual client’s goals and context. With our cloud mobile solution,  deploy  cost-effective personalisation at scale for every insured client.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-lg-first">
            <!-- <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '100%' }"
            >
              <img
                src="/images/individuals/benefits-life-lovers-1a.png"
                alt="Benefit 2"
                class="img"
                width="406"
                height="745"
                loading="lazy"
                :style="{
                  '--delay': '.3s',
                  width: '62%',
                  top: '-4%',
                  left: '20%',
                }"
              >
            </v-inview> -->
          </div>
        </div>
      </div>
    </div>

    <!-- benefit-3 -->
    <div id="Benefits3" class="section-benefits benefit-3">
      <div class="container">
        <div class="row g-5 align-items-center justify-content-between">
          <div class="col-lg-6">
            <div class="content pe-xl-5">
              <h5 class="font-desc mb-2">
                03 IMPROVE PROFITABILITY AND PRODUCT INNOVATION
              </h5>
              <h2 class="font-title mb-4">
                All in one solution that contextually aligns to each insured’s wellbeing goals - in work life, and travel
              </h2>
              <div class="font-desc">
                <p class="mb-4">With (app)’s ability to align to every individual’s unique context, our solution is always relevant in usage to any goals and lifestyle- in life, work and travel. Curate sustained engagement for every insured individual, through a fully holistic approach for mind and body wellbeing across all your client’s important moments in life.</p>
                <p class="mb-0">With product scalability and individual data analytics combined, innovate and develop new product innovations that addresses the needs of your insurers.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <!-- <v-inview
              class="img-wrap"
              add-class="__in"
              :style="{ paddingBottom: '100%' }"
            >
              <img
                src="/images/individuals/benefits-life-lovers-3a.png"
                alt="Benefit 3"
                class="img"
                width="417"
                height="755"
                loading="lazy"
                :style="{
                  '--delay': '.3s',
                  width: '64%',
                  top: '-6%',
                  left: '20%',
                }"
              >
            </v-inview> -->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
.section-benefits-all{
  background-color: #EDFCFF;
  background-image: linear-gradient(137.49deg, #EDFCFF 0%, #DBFCFF 100%);
}
.section-benefits{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 5rem 0;
  @media (min-width: @screen-lg) {
    padding: 7rem 0;
  }
}
.benefit-1{
  --color-1: #23575C;
  --color-2: #23575C;
  padding-top: 4rem;
}
.benefit-2{
  --color-1: #23575C;
  --color-2: #23575C;
}
.benefit-3{
  --color-1: #23575C;
  --color-2: #23575C;
}

.font-title{
  color: var(--color-1);
}
.font-desc{
  color: var(--color-2);
}
.heading{
  color: #23575C;
}
</style>
