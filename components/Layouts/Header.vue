<script setup>
import { ref, watch } from 'vue';

// eslint-disable-next-line no-undef
const route = useRoute();
const $nav = ref(null);
const childToggle = ref('');
let timer = null;

// events
const onToggleChild = (newVal) => {
  childToggle.value = newVal !== childToggle.value ? newVal : '';
};

const onToggleMNav = () => {
  const isOpen = !$nav.value.classList.contains('__active');

  clearTimeout(timer);
  if (isOpen) {
    $nav.value.classList.add('__active');
    timer = setTimeout(() => {
      $nav.value.classList.add('__active-in');
    }, 50);
  } else {
    $nav.value.classList.remove('__active-in');
    timer = setTimeout(() => {
      $nav.value.classList.remove('__active');
    }, 300); // follow css duration
  }
};

const onCloseMNav = () => {
  if ($nav.value.classList.contains('__active')) {
    onToggleMNav();
  }
};

// watcher
watch(route, () => {
  // force close
  onCloseMNav('close');
});
</script>

<template>
  <header class="header d-flex align-items-center">
    <NuxtLink to="/" class="logo">
      <img
        srcset="@/assets/images/logo.png, @/assets/images/logo@2x.png 2x"
        src="@/assets/images/logo.png"
        alt="Detalytics"
        width="173"
        height="48"
      >
    </NuxtLink>

    <!-- nav -->
    <div ref="$nav" class="nav ms-auto">
      <div class="nav-overlay d-lg-none" @click="onToggleMNav"></div>

      <nav class="nav-body">
        <ul class="menu">
          <li class="m-nav-toggle-li d-lg-none">
            <button class="m-nav-toggle m-nav-toggle-close" @click="onToggleMNav">
              <svg viewBox="0 0 32 32" width="24" height="24">
                <path d="M4 29a1 1 0 01-.71-.29 1 1 0 010-1.42l24-24a1 1 0 111.42 1.42l-24 24A1 1 0 014 29z" />
                <path d="M28 29a1 1 0 01-.71-.29l-24-24a1 1 0 011.42-1.42l24 24a1 1 0 010 1.42A1 1 0 0128 29z" />
              </svg>
            </button>
          </li>

          <li>
            <NuxtLink to="/how-it-works">
              {{ $t('HEADER.NAV.HOW_IT_WORKS') }}
            </NuxtLink>
          </li>
          <li class="child" :class="{ __active: childToggle === 'business' }">
            <a href="#" class="child-toggle" @click.prevent="onToggleChild('business')">
              {{ $t('HEADER.NAV.BUSINESSES') }} <VIcon name="caret" />
            </a>
            <ul class="child-nav">
              <li>
                <NuxtLink to="/businesses/safety-critical">
                  {{ $t('HEADER.NAV.BUSINESSES_SAFETY') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/businesses/corporate-employers">
                  {{ $t('HEADER.NAV.BUSINESSES_CORPORATE') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/businesses/insurers">
                  {{ $t('HEADER.NAV.BUSINESSES_INSURERS') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/businesses/healthcare-providers">
                  {{ $t('HEADER.NAV.BUSINESSES_HEALTHCARE') }}
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="child" :class="{ __active: childToggle === 'individuals' }">
            <a href="#" class="child-toggle" @click.prevent="onToggleChild('individuals')">
              {{ $t('HEADER.NAV.INDIVIDUALS') }} <VIcon name="caret" />
            </a>
            <ul class="child-nav">
              <li>
                <NuxtLink to="/individuals/work-performance">
                  {{ $t('HEADER.NAV.INDIVIDUALS_PERFORMANCE') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/individuals/workplace-safety">
                  {{ $t('HEADER.NAV.INDIVIDUALS_SAFETY') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/individuals/life-lovers">
                  {{ $t('HEADER.NAV.INDIVIDUALS_LIFE') }}
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink to="/pricing">
              {{ $t('HEADER.NAV.PRICING') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">
              {{ $t('HEADER.NAV.ABOUT') }}
            </NuxtLink>
          </li>
          <li class="mt-3 mt-lg-0 ms-lg-4">
            <a href="#" class="menu-btn" target="_blank">
              {{ $t('HEADER.NAV.ASSETMENT') }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- moble toggle -->
    <button class="m-nav-toggle m-nav-toggle-open ms-auto d-lg-none" @click="onToggleMNav">
      <svg viewBox="0 0 32 32" width="24" height="24">
        <path d="M29 6H3a1 1 0 000 2h26a1 1 0 000-2zM3 17h13a1 1 0 000-2H3a1 1 0 000 2zM25 24H3a1 1 0 000 2h22a1 1 0 000-2z" />
      </svg>
    </button>
  </header>
</template>

<style lang="less" scoped>
.header{
  --height: 4rem;
  position: sticky;
  z-index: 10;
  top: 0;
  background-color: #fff;
  height: var(--height);
  padding: 0 1rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06);
  @media (min-width: @screen-lg) {
    --height: 6rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.logo img{
  width: 9.5rem;
  height: auto;
}

.nav{
  &-body{
    position: fixed;
    z-index: 10;
    top: 0;
    bottom: 0;
    right: 0;
    max-width: 360px;
    width: 80%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #fff;
    color: #000;
    padding: 0 1rem;
    transform: translateX(100%);
    transition: transform .3s;
    display: none;
    @media (min-width: @screen-lg) {
      position: static;
      width: auto;
      max-width: none;
      transform: none;
      background-color: transparent;
      overflow: visible;
      display: block;
    }
  }
  &-overlay{
    position: fixed;
    background-color: rgba(0,0,0,.8);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity .3s;
    display: none;
  }
  &.__active{
    .nav-body, .nav-overlay{
      display: block;
    }
  }
  &.__active-in{
    .nav-body{
      transform: translateX(0);
    }
    .nav-overlay{
      opacity: 1;
    }
  }
}
.menu{
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  @media (min-width: @screen-lg) {
    flex-direction: row;
    align-items: center;
    li:not(:first-child){
      margin-left: .5rem;
    }
    a.menu-btn{
      width: auto;
    }
  }

  a{
    display: block;
    font-size: 1rem;
    text-decoration: none;
    color: var(--color-500);
    transition: color .3s;
    padding: .85rem 1.25rem;
    &:hover{
      color: var(--main-500);
    }
    &.router-link-exact-active{
      color: var(--main-500);
    }
  }
  a.menu-btn{
    display: inline-block;
    background-color: var(--main-500);
    color: #fff;
    padding: .65rem 2rem;
    border-radius: 2rem;
    width: 100%;
    text-align: center;
    box-shadow: 0px 0px 3px rgba(87, 187, 197, 0.44), 0px 6px 12px rgba(87, 187, 197, 0.54);
    transition: background .3s;
    &:hover{
      background-color: var(--main-300);
    }
  }

  .child{
    position: relative;
    &-nav{
      list-style: none;
      padding: .5rem 1rem;
      margin: 0 -1rem;
      background-color: #F2F9FF;
      box-shadow: inset 0 0px 24px rgba(45, 123, 223, 0.1);
      display: none;
      li{
        margin: 0;
      }
      a{
        display: block;
      }
    }
    &.__active{
      .child-nav{
        display: block;
      }
    }

    // desktop
    @media (min-width: @screen-lg) {
      .child-nav{
        position: absolute;
        z-index: 10;
        left: 50%;
        top: 100%;
        padding: .65rem .5rem;
        margin: 0;
        background-color: #fff;
        white-space: nowrap;
        border-radius: .5rem;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06);
        display: block;
        pointer-events: none;
        opacity: 0;
        transform: translate(-50%, 1rem);
        transition: transform .3s, opacity .3s;
        a{
          padding: .5rem 1.5rem;
        }
      }
      // state
      &:hover{
        .child-nav{
          pointer-events: initial;
          opacity: 1;
          transform: translate(-50%, 0);
        }
      }
    }
  }
}

.m-nav-toggle{
  appearance: none;
  background-color: #fff;
  color: #000;
  fill: currentColor;
  border: none;
  padding: 1.2rem 1rem;
  height: 100%;
  border-left: 1px solid #eee;
  &-open{
    margin-right: -1rem;
  }
}
.m-nav-toggle-li{
  border-bottom: 1px solid #eee;
  text-align: right;
  margin: 0 -1rem .5rem;
  padding: 0 !important;
}
</style>
