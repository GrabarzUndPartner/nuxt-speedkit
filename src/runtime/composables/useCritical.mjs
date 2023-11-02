import { inject } from 'vue';
import { criticalContextKey } from '../utils/defineCritical.mjs';

export default function useCritical() {
  const isCritical = inject(criticalContextKey, false);
  return {
    isCritical
  };
}
