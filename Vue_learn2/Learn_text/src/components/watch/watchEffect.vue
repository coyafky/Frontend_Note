<script setup>
// 引入 watch 函数
import { reactive, ref, watchEffect } from 'vue'

// 账号
let account = ref('Abc')

// 员工
let emp = reactive({
    name: 'Jack',
    salary: 7000
})

// 创建成功后立即执行一遍
watchEffect(() => {
    // 此处用到了数据源，如果该数据源的值发生了变化，会重新执行该回调函数
    console.log('账号：' + account.value)
    console.log('员工的薪资：' + emp.salary)
})

</script>

<template>
    账号：<input type="text" v-model="account">
    <hr>
    员工薪资：<input type="number" v-model="emp.salary">
</template>