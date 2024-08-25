<script setup>
// 引入 watch 函数
import { ref, reactive, watch } from 'vue'

// 账号
let account = ref('Abc')

// 员工
let emp = reactive({
    name: 'Jack',
    salary: 7000
})

// 密码
let password = ref('123456')

// 侦听：创建完侦听器后立即执行一边
watch(
    account,
    (newData, oldData) => {
        console.log('===== 账号 =====')
        console.log(newData)
        console.log(oldData)
    },
    // 创建完侦听器后立即执行一边
    { immediate: true }
)

// deep: true：深度侦听，侦听函数返回的对象时，其嵌套属性值发生变换，依然可以触发回调函数，但是 newData, oldData 是相等的
watch(
    () => emp,
    (newData, oldData) => {
        console.log('===== 员工 =====')
        console.log(newData)
        console.log(oldData)
    },
    // 深度侦听
    { deep: true }
)

watch(
    password,
    (newData, oldData) => {
        console.log('===== 密码 =====')
        console.log(newData)
        console.log(oldData)
        // 默认情况下回调的触发机制在Dom更新之前执行
        console.log(document.getElementById('titlePassword').innerHTML)
    },
    // 更改回调函数的触发机制（Dom更新之后）
    { flush: 'post' }
)

</script>

<template>

    账号：<input type="text" v-model="account">
    <hr>
    员工薪资：<input type="number" v-model="emp.salary">
    <hr>
    <h1 id="titlePassword">
        密码：
        <i>{{ password }}</i>
    </h1>
    密码：<input type="password" v-model="password">

</template>