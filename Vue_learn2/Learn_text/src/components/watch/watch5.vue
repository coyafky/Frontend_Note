<script setup>
// 引入 watch 函数
import { ref, watch } from 'vue'

// 账号
let account = ref('Abc')

// 停止侦听器：调用 watch 返回的函数即可
let stopAccountWatch = watch(
    account,
    (newData, oldData) => {
        console.log('===== 账号 =====')
        console.log(newData)
        console.log(oldData)
    }
)
</script>

<template>

    账号：<input type="text" v-model="account">

    <button @click="stopAccountWatch">停止账号侦听器</button>

</template>