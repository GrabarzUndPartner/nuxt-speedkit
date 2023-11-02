import { computed, reactive } from 'vue';
import { useCritical } from './defineCritical.mjs';
import { useHead } from '#imports';
import { useNuxtApp } from '#app';
import FontCollection from '#speedkit/classes/FontCollection';
import useConfig from '#speedkit/composables/config';

export default function useFonts({ critical } = {}) {
  const runtimeConfig = useConfig();
  const { isCritical } = useCritical();

  critical = critical || isCritical;

  const nuxtApp = useNuxtApp();

  const fontCollection = reactive(new FontCollection());

  console.log('critical?', critical);

  writeHead(isCritical, fontCollection, runtimeConfig);

  return {
    $getFont: (...args) => {
      return {
        runtimeConfig,
        isCritical: critical,
        fontCollection,
        definition: nuxtApp.$speedkit.getFont(...args)
      };
    }
  };
}

function writeHead(isCritical, fontCollection, runtimeConfig) {
  const options = { usedFontaine: runtimeConfig.usedFontaine };
  useHead({
    link: computed(() => {
      return fontCollection.getPreloadDescriptions(isCritical.value);
    }),
    style: computed(() => {
      return fontCollection.getStyleDescriptions(options);
    }),
    noscript: computed(() => {
      return fontCollection.getNoScriptStyleDescriptions();
    })
  });
}
