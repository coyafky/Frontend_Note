<script setup>
// 引入 watch 函数
import { ref, reactive, watch } from 'vue'

let account = ref('Abc')

// 员工
let emp = reactive({
    name: 'Jack',
    salary: 7000
})

// 部门
let dept = reactive({
    id: '101',
    name: '销售部'
})


// 侦听：多个数据源组成的数组
watch(
    // 侦听多个数据源组成的数组
    [account, () => emp.salary, dept],
    // 参数一：新值数组，参数二：旧值数组
    ([newAccount, newSalary, newDept], [oldAccount, oldSalary, oldDept]) => {
        console.log('===== 账号新旧值 =====')
        console.log(newAccount)
        console.log(oldAccount)
        console.log('===== 薪资新旧值 =====')
        console.log(newSalary)
        console.log(oldSalary)
        console.log('===== 部门新旧值 =====')
        console.log(newDept)
        console.log(oldDept)
    }
)

</script>

<template>
    
    账号：<input type="text" v-model="account">
    <hr>
    员工薪资：<input type="number" v-model="emp.salary">
    <hr>
    部门名称：<input type="text" v-model="dept.name">

</template>