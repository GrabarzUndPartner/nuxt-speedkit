import { computed, ref, inject, provide } from 'vue';
const criticalContextKey = Symbol('criticalContext');

export default function defineCritical(critical = false) {
  const currentCritical = ref(critical);

  const criticalInject = inject(
    criticalContextKey,
    currentCritical.value || false
  );

  const isCritical = computed(() => {
    return typeof currentCritical.value === 'boolean'
      ? currentCritical.value
      : criticalInject;
  });

  provide(criticalContextKey, isCritical.value || critical);
  console.log('isCritical', isCritical.value);
  return {
    isCritical,
    critical: criticalInject
  };
}

export function useCritical() {
  const isCritical = inject(criticalContextKey, false);
  return {
    isCritical
  };
}
