<script setup>
import { ref } from 'vue';
import { useKeenSlider } from 'keen-slider/vue';

const activeTab = ref('basic');

// static vars
const gallery = [
  '/images/pricing/gallery-1.png',
  '/images/pricing/gallery-2.png',
  '/images/pricing/gallery-3.png',
  '/images/pricing/gallery-1.png',
  '/images/pricing/gallery-2.png',
];

// slider
const [$slider] = useKeenSlider({
  selector: '.col-lg-4',
  breakpoints: {
    '(min-width: 768px)': {
      slides: { perView: 2.5 },
    },
    '(min-width: 992px)': {
      slides: { perView: 3.5 },
    },
  },
  slides: { perView: 1.2, origin: 'center' },
});
</script>

<template>
  <div id="Work" class="section-work">
    <div class="container">
      <!-- top -->
      <div class="row gx-5 gy-4">
        <div class="col-lg-6">
          <div class="content py-5 pe-xl-5">
            <h2 class="font-heading mb-4">
              <div class="icon me-3">
                <v-icon name="work" size="36"></v-icon>
              </div>
              <span>WORK</span>
              <small class="ms-3">BUNDLE</small>
            </h2>
            <div class="font-desc">
              <p class="mb-4">Optimised for work goals - improve your work performance with a targeted approach in productivity and fatigue management. Our work bundle is a personal advisory aligned to your chosen performance objective and based uniquely on your data.</p>
              <p class="mb-0">Manage fatigue and burnout better, perform at your optimal state and achieve your ideal work performance beyond your physiological conditions.</p>
            </div>

            <div class="tabs mt-4">
              <nav class="tabs-nav">
                <a
                  href="#"
                  class="tabs-nav-item"
                  :class="{ __active: activeTab === 'basic' }"
                  @click.prevent="activeTab = 'basic'"
                >
                  BASIC
                </a>
                <a
                  href="#"
                  class="tabs-nav-item"
                  :class="{ __active: activeTab === 'advanced' }"
                  @click.prevent="activeTab = 'advanced'"
                >
                  ADVANCED
                </a>
              </nav>
              <div class="tabs-content">
                <div
                  v-if="activeTab === 'basic'"
                  class="tabs-content-item"
                >
                  <div class="point">
                    <div class="icon me-3">
                      <v-icon name="check" size="20"></v-icon>
                    </div>
                    <span>Fatigue and jetlag management</span>
                  </div>
                  <div class="point">
                    <div class="icon me-3">
                      <v-icon name="check" size="20"></v-icon>
                    </div>
                    <span>Metabolic health optimisation</span>
                  </div>
                  <div class="point">
                    <div class="icon me-3">
                      <v-icon name="check" size="20"></v-icon>
                    </div>
                    <span>Personalised lifestyle, physiological and cognitive assessments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="cover">
            <img src="/images/pricing/cover-work.png" alt="Work" width="658" height="465" loading="lazy">
          </div>
        </div>
      </div>

      <!-- bottom -->
      <h4 class="font-subtitle text-center mt-5 pt-xl-4">
        Learn more about how the WORK bundle helps your profession
      </h4>

      <div ref="$slider" class="row g-4 g-lg-5 flex-nowrap mt-2 mb-5 pb-4 gallery">
        <div
          v-for="(img, index) in gallery"
          :key="index"
          class="col-lg-4"
        >
          <div class="gallery-item">
            <img :src="img" alt="" width="380" height="226" loading="lazy">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.section-work{
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(103.51deg, #FFFFFF 0%, #EAF4FF 100%);
}

.content{
  display: flex;
  flex-direction: column;
}
.icon{
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--color);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.font-heading{
  display: flex;
  align-items: center;
  color: #29619C;
  .icon{
    --size: 3rem;
    --color: #5E7DB3;
  }
  small{
    font-size: 1.2rem;
    font-weight: 400;
    color: #23575C;
    margin-top: 1.2rem;
  }
}
.font-desc{
  color: #23575C;
}
.font-subtitle{
  font-size: 1.4rem;
  color: #29619C;
}
.cover{
  position: relative;
  height: 100%;
  min-height: 300px;
  img{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: auto;
    object-fit: cover;
    @media (min-width: @screen-lg) {
      left: 0;
      height: 100%;
      width: auto;
      transform: none;
    }
  }
}

.tabs{
  &-nav{
    display: inline-flex;
    border-bottom: 1px solid #29619C;
    &-item{
      display: block;
      font-size: .875rem;
      padding: .65rem 2rem;
      color: #29619C;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: color .3s, border .3s;
      &.__active{
        border-color: #29619C;
      }
    }
  }
  &-content{
    position: relative;
    padding-top: 1.5rem;
    height: 8rem;
    &-item{
      color: #29619C;
      font-size: .875rem;
    }
  }
}

.point{
  display: flex;
  align-items: center;
  padding: .5rem 0;
  .icon{
    --size: 1rem;
    --color: #29619C;
  }
}

.gallery{
  img{
    width: 100%;
    height: auto;
  }
}
</style>
