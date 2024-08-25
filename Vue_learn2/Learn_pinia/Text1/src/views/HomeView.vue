<script setup>
import TheWelcome from '../components/TheWelcome.vue'

import { useAgeStore ,useCounterStore} from '@/stores/indexs';
const ageStore = useAgeStore();
const counterStore = useCounterStore();
console.log(ageStore.age);
console.log(counterStore.counter);

</script>

<template>
  <main>
    <TheWelcome />
    <h2>
      <!-- {{ ageStore.age }} -->
      {{ counterStore.counter }}
    </h2>
  </main>
</template>
