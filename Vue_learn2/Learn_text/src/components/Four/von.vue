<script setup>

import { ref } from 'vue'

let volume = ref(5) // 音量[0, 10]

// 增大音量
function addVolume() {
    // 如果音量没有在最高值，则添加音量
    if (volume.value !== 10) {
        volume.value++
    }
}

// 减小音量
function subVolume() {
    // 如果音量没有在最小值，则减小音量
    if (volume.value !== 0) {
        volume.value--
    }
}

// 设置音量
function setVolume(value) {
    // 判断音量是否在取值范围之间
    if (value >= 0 && value <= 10) {
        volume.value = value
    }
}

</script>


<template>

    <h3>当前音量：{{ volume }}</h3>

    <!-- v-on: 事件绑定 -->
    <button v-on:click="addVolume">添加音量</button>
    <button v-on:click="subVolume">减小音量</button>

    <hr>

    <!-- @ 是 v-on: 的缩写 -->
    <button @click="setVolume(0)">静音</button>
    <button @click="setVolume(5)">音量适中</button>
    <button @click="setVolume(10)">音量最大</button>

</template>