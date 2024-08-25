import {defineStore } from "pinia";

import { computed,ref } from "vue";

export const useAgeStore = defineStore("age", () => {
    const age = ref(30);
    return {age}
})
export const useCounterStore = defineStore("counter", () => {
      const count = ref(30);
        const  gettersCounter = computed(()=>{
            return count.value +=5;
        })
        function addCounter(){
            count.value +=1;
        }
        return {count,gettersCounter,addCounter} // 需要使用的就要暴露出来
})