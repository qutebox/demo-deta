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
          <h2 class="font-title mb-5">
            Better, safer, resilient workplace, by design
          </h2>
        </div>

        <div class="row g-5 align-items-center justify-content-between">
          <div class="col-lg-5">
            <div class="content ps-xl-5">
              <h5 class="font-desc mb-2">
                01 PERSONALISED SELF CARE
              </h5>
              <h2 class="font-title mb-4">
                Personalised optimal readiness, scalable to every employee.
              </h2>
              <div class="font-desc">
                <p class="mb-4">A one-size fit all solution to employee wellbeing does not align to each employee’s needs. Every individual’s needs, physical and mental responses to workplace demands are unique.</p>
                <p class="mb-0">With (app), we provide a personalised approach to employee task readiness and wellbeing management. Through assessment-based analysis and personalised insights, we provide a self-care advisory based on each person’s individual status.</p>
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
            <div class="content pe-xl-5">
              <h5 class="font-desc mb-2">
                02 PRE-EMPTIVE AND PREVENTIVE
              </h5>
              <h2 class="font-title mb-4">
                A proactive approach to risk management
              </h2>
              <div class="font-desc">
                <p class="mb-0">Traditional risk management tends to be reactive, which is too late to pre-empt and prevent workplace incidents. With (app), we shift risk management from a reactive model to a proactive model. Through predictive analytics of current and projected fatigue and tak readiness statuses, individuals are able to understand and gain sufficient time for risk mitigation and recovery.</p>
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
          <div class="col-lg-5">
            <div class="content ps-xl-5">
              <h5 class="font-desc mb-2">
                03 CONFIDENTIAL AND SECURE
              </h5>
              <h2 class="font-title mb-4">
                Full user ownership through user-generated data
              </h2>
              <div class="font-desc">
                <p class="mb-0">At Detalytics, we put our users in the center of what we develop through full ownership of user-generated data. All individual analytics and insights is shared at each employee’s own discretion, ensuring that personal data insights is fully used to empower actionable changes.</p>
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
