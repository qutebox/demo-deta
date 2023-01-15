<script setup>
import { ref } from 'vue';
// import { useKeenSlider } from 'keen-slider/vue';

const activeTab = ref('basic');

// static vars
// const gallery = [
//   '/images/pricing/gallery-1.png',
//   '/images/pricing/gallery-2.png',
//   '/images/pricing/gallery-3.png',
//   '/images/pricing/gallery-1.png',
//   '/images/pricing/gallery-2.png',
// ];

// // slider
// const [$slider] = useKeenSlider({
//   selector: '.col-lg-4',
//   breakpoints: {
//     '(min-width: 768px)': {
//       slides: { perView: 2.5 },
//     },
//     '(min-width: 992px)': {
//       slides: { perView: 3.5 },
//     },
//   },
//   slides: { perView: 1.2, origin: 'center' },
// });
</script>

<template>
  <div id="Life" class="section-work">
    <div class="container">
      <!-- top -->
      <div class="row gx-5 gy-4">
        <div class="col-lg-6">
          <div class="content py-5 ps-xl-5">
            <h2 class="font-heading mb-4">
              <div class="icon me-3">
                <v-icon name="heart" size="36"></v-icon>
              </div>
              <span>LIFE</span>
              <small class="ms-3">BUNDLE</small>
            </h2>
            <div class="font-desc">
              <p class="mb-0">The LIFE bundle is for individuals looking for more holistic lifestyle improvements, beyond a specific targeted improvement. With our life bundle, improve your lifestyle performance holistically for preventive care. Cultivate good lifestyle habits, derived through personal insights on your mind, body and health.</p>
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
                    <span>Self care</span>
                  </div>
                  <div class="point">
                    <div class="icon me-3">
                      <v-icon name="check" size="20"></v-icon>
                    </div>
                    <span>Brain and Body Health</span>
                  </div>
                  <div class="point">
                    <div class="icon me-3">
                      <v-icon name="check" size="20"></v-icon>
                    </div>
                    <span>Anti-Early ageing</span>
                  </div>
                  <div class="point">
                    <div class="icon me-3">
                      <v-icon name="check" size="20"></v-icon>
                    </div>
                    <span>Daily lifestyle impacts and optimizations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 order-lg-first">
          <div class="cover">
            <img src="/images/pricing/cover-life.png" alt="Work" width="658" height="465" loading="lazy">
          </div>
        </div>
      </div>

      <!-- bottom -->
      <!-- <h4 class="font-subtitle text-center pt-4">
        Learn more about how the WORK bundle helps your profession
      </h4>

      <div ref="$slider" class="row g-5 flex-nowrap mt-2 mb-5 pb-4 gallery">
        <div
          v-for="(img, index) in gallery"
          :key="index"
          class="col-lg-4"
        >
          <div class="gallery-item">
            <img :src="img" alt="" width="380" height="226" loading="lazy">
          </div>
        </div>
      </div> -->

    </div>
  </div>
</template>

<style lang="less" scoped>
.section-work{
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(257deg, #FFFFFF 0%, rgba(240, 143, 162, 0.04) 100%);
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
  color: #F86783;
  .icon{
    --size: 3rem;
    --color: #F86783;
  }
  small{
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 1.2rem;
  }
}
.font-desc{
  color: #F86783;
}
// .font-subtitle{
//   font-size: 1.4rem;
//   color: #29619C;
// }
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
      left: auto;
      right: 0;
      height: 100%;
      width: auto;
      transform: none;
    }
  }
}

.tabs{
  &-nav{
    display: inline-flex;
    border-bottom: 1px solid #F86783;
    &-item{
      display: block;
      font-size: .875rem;
      padding: .65rem 2rem;
      color: #F86783;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: color .3s, border .3s;
      &.__active{
        border-color: #F86783;
      }
    }
  }
  &-content{
    position: relative;
    padding-top: 1.5rem;
    height: 10rem;
    &-item{
      color: #F86783;
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
    --color: #F86783;
  }
}

// .gallery{
//   img{
//     width: 100%;
//     height: auto;
//   }
// }
</style>
