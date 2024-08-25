<script setup>
import { onMounted, reactive, ref, watchEffect, watchPostEffect } from 'vue'

// 账号
let account = ref('Abc')

// 密码
let password = ref('123456')

// 员工
let emp = reactive({
    name: 'Jack',
    salary: 7000
})

// 当视图渲染成功后
onMounted(() => {
    // 侦听账号
    watchEffect(() => {
        console.log('-------------------------------------')
        console.log('账号：' + account.value)
        // 默认情况下，回调触发机制：在 Dom 更新之前
        console.log(document.getElementById('titleAccount').innerHTML)
    })

    // 侦听密码
    watchEffect(
        () => {
            console.log('=====================================')
            console.log('密码：' + password.value)
            // 默认情况下，回调函数触发机制：在 Dom 更新之前
            console.log(document.getElementById('titlePassword').innerHTML)
        },
        // 更改回调函数触发机制：在 Dom 更新之后
        { flush: 'post' }
    )

    // 侦听薪资
    watchPostEffect(() => {
        console.log('=====================================')
        console.log('员工薪资：' + emp.salary)
        // 回调函数的触发机制：在 Dom 更新之后
        console.log(document.getElementById('titleSalary').innerHTML)
    })

})



</script>

<template>

    <h1 id="titleAccount">
        账号：
        <i>{{ account }}</i>
    </h1>

    账号：<input type="text" v-model="account">

    <hr>

    <h1 id="titlePassword">
        密码：
        <i>{{ password }}</i>
    </h1>

    密码：<input type="text" v-model="password">

    
    <hr>

    <h1 id="titleSalary">
        员工薪资：
        <i>{{ emp.salary }}</i>
    </h1>

    员工薪资：<input type="number" v-model="emp.salary">

</template>