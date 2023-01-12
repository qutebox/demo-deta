import { ObserveVisibility } from 'vue-observe-visibility';

// eslint-disable-next-line no-undef
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('observe-visibility', {
    ...ObserveVisibility,
    getSSRProps() {
      return {};
    },
  });
});
