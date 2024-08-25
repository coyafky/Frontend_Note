<script setup>
import { ref, watchEffect, watchPostEffect } from 'vue'

// 账号
let account = ref('Abc')

// 密码
let password = ref('123456')

// 调用 watchEffect 返回的函数，可以停止该侦听器
let stopWacthAccount = watchEffect(() => {
    console.log('-------------------------------------')
    console.log('账号：' + account.value)
})

// 调用 watchPostEffect 返回的函数，可以停止该侦听器
let stopWacthPassword = watchPostEffect(() => {
    console.log('=====================================')
    console.log('密码：' + password.value)
})

</script>

<template>
    账号：<input type="text" v-model="account">
    <button @click="stopWacthAccount">停止账号侦听器</button>
      
    <hr>
      
    密码：<input type="text" v-model="password">
    <button @click="stopWacthPassword">停止密码侦听器</button>
</template>