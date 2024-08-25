<script setup>
// 1.导入use打头的方法

import { ref } from 'vue';

import { useCounterStore } from '@/stores/counter';
// 2执行方法得到实例对象
const counterStore = useCounterStore();
console.log(counterStore);

</script>



<template>

<button @click="counterStore.increment">{{counterStore.doubleCount}}</button>
</template>