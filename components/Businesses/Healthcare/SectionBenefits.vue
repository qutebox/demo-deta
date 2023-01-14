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
            Provide value-based care, throughout a connected patient care journey
          </h2>
          <div class="font-desc mb-5">
            Gain a full ecosystem view of your patient’s lifestyle analytics through evidence-based quantitative data diagnostics, through scientifically proven biomarkers and biometrics.
          </div>
        </div>

        <div class="row g-5 align-items-center justify-content-between">
          <div class="col-lg-6">
            <div class="content pe-xl-5">
              <h5 class="font-desc mb-2">
                01 EXTEND CARE DELIVERY MODEL
              </h5>
              <h2 class="font-title mb-4">
                Expansion of care delivery beyond the hospital through preventive health & early detection
              </h2>
              <div class="font-desc">
                <p class="mb-4">42 identifies chronic health vulnerability for people with potential risk factors. Through the extension of care delivery through preventive health, the hospital can engage with the healthy population through metabolic health assessments and analytics, where 42 offers visibility into pre-emptive care & early detection across the whole population community.</p>
                <p class="mb-0">With a lifelong engagement approach, increase market share and revenue by extended engagement through preventive care services.</p>
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
                02 DIGITAL PATIENT ONBOARDING
              </h5>
              <h2 class="font-title mb-4">
                Evidence-based patient onboarding for better triaging
              </h2>
              <div class="font-desc">
                <p class="mb-4">With 42, we answer the how and the what of patient lifestyle analytics. By providing visibility into patient’s longitudinal lifestyle patterns, nutritional performance and metabolic statuses, (app) provides doctors with evidence-based triaging decision support.</p>
                <p class="mb-0">Through clearer visibility into patient’s holistic lifestyle and biometric insights, Detalytics enables doctors to provide  accurate and individualised patient diagnosis that is scalable and backed by evidence.</p>
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
                03 IMPROVE REMOTE PATIENT MANAGEMENT
              </h5>
              <h2 class="font-title mb-4">
                AActionable insights on individual patient’s daily statuses through proactive remote care management
              </h2>
              <div class="font-desc">
                <p class="mb-4">With (app), management and remote patients' monitoring both easy and efficient with the visibility into post-admission patient data.  Proactively monitor, manage and with cohort of patients on home-care or post-treatment recovery. Hospital staff can now manage and intervene proactively with their patients on home-care, empowering optimal recovery responses and efficiency in post-treatment care.</p>
                <p class="mb-0">Through high level analytics on patient’s daily functional level beyond just biomarkers, high-touch post treatment followup is reduced through self-care advisory and support.</p>
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
  background-color: #BFDEFE;
  background-image: linear-gradient(137.49deg, #BFDEFE 0%, #F3FEFF 100%);
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
  width: 45rem;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
