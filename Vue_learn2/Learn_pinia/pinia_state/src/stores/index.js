import {defineStore } from "pinia";
import {ref,computed } from "vue";
export const useUserstore = defineStore("pinia", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }
  return {count,doubleCount,increment}
})