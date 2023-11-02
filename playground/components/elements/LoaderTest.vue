<template>
  <div class="loader-test" :class="{ active, critical: isCritical }">
    <span>{{ active ? 'active' : 'inactive' }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from '#imports';
import defineCritical from '#speedkit/composables/defineCritical';

const { isCritical } = defineCritical();
const active = ref(false);

onMounted(() => (active.value = true));
</script>

<style lang="postcss" scoped>
.loader-test {
  display: flex;
  color: white;
  background: red;

  &:not(.critical) {
    transition: background 0.2s 1s linear;
  }

  &.active {
    background: green;
  }
}
</style>
