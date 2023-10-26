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
            WITH DETALYTICS
          </h5>
          <h2 class="font-title mb-4">
            Healthier employees, better businesses
          </h2>
          <div class="font-desc mb-5">
            Achieve personalised employee wellbeing, with tangible P&L at scale
          </div>
        </div>

        <div class="row g-5 align-items-center justify-content-between">
          <div class="col-lg-6">
            <div class="content pe-xl-5">
              <h5 class="font-desc mb-2">
                01 PERSONALISED SELF CARE
              </h5>
              <h2 class="font-title mb-4">
                Sustainable work performance, personalised to each employee
              </h2>
              <div class="font-desc">
                <p class="mb-4">Through an alignment of each employee’s wellbeing statuses with life and work goals, we develop a holistic wellbeing approach to empower your employee’s fullest potential in any situation - in work, learning, travel and health.</p>
                <p class="mb-0">The result is personalised actionable recommendations that is deployable at scale across corporates.</p>
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
                02 PREEMPTIVE AND PREVENTIVE
              </h5>
              <h2 class="font-title mb-4">
                Actionable and predictive insights for better risks management
              </h2>
              <div class="font-desc">
                <p class="mb-4">Through evidence-based wellbeing transformation, Detalytics provides a personalised approach to employee wellbeing engagement - from sleep, body, health and mind. With dynamic insights on corporate-scale predictive health risks and costs, (app) addresses the root causes of employee’s physical and mental wellbeing challenges.</p>
                <p class="mb-0">Engage your employees better through impactful corporate wellbeing transformation that targets evidence-based self-insured decision support.</p>
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
                03 CONFIDENTIAL AND SECURE
              </h5>
              <h2 class="font-title mb-4">
                Upholding responsible individual data privacy and protection
              </h2>
              <div class="font-desc">
                <p class="mb-4">Data privacy and protection can be a tension point and concern between employees and employers. With Detalytics, we always put users in the center of what we develop, giving employees full ownership of user-generated data.</p>
                <p class="mb-0">All personal data is maintained by employee data protection, with employee’s having full discretion on how data should be shared.</p>
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
  background-image: linear-gradient(344.14deg, #EBF6FF 0%, #C8E3FF 100%);
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
  --color-1: #002E5E;
  --color-2: #002E5E;
  padding-top: 4rem;
  background-image: linear-gradient(180deg, rgba(190, 223, 255, 0.54) 0%, rgba(217, 217, 217, 0) 100%);
}
.benefit-2{
  --color-1: #002E5E;
  --color-2: #002E5E;
}
.benefit-3{
  --color-1: #002E5E;
  --color-2: #002E5E;
}

.font-title{
  color: var(--color-1);
}
.font-desc{
  color: var(--color-2);
}
.heading{
  color: #002E5E;
}
</style>
