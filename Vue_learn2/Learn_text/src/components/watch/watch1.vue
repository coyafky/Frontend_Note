<script setup>
// 引入 watch 函数
import { ref, reactive, watch } from 'vue'
  
// 账号
const account = ref('Abc') 

// 员工
const emp = reactive({
    name: 'Jack',
    salary: 7000
})

// 侦听：原始类型的数据变化
watch(account, (newData, oldData) => {
    console.log('===== 账号新旧值 =====')
    console.log(oldData)
    console.log(newData)
    console.log('-----------------------')
})

// 侦听：对象中的某一个属性变化（需要提供 getter 函数才行）
watch(
    () => emp.salary,
    (newData, oldData) => {
        console.log('===== 员工薪资新旧值 =====')
        console.log(oldData)
        console.log(newData)
        console.log('-----------------------')
    }
)
</script>

<template>
    账号：<input type="text" v-model="account">
    <br>
    <br>
    员工薪资：<input type="number" v-model="emp.salary">
</template>