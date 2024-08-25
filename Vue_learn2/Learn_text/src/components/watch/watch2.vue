<script setup>
// 引入 watch 函数
import { ref, reactive, watch } from 'vue'

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


// 区域
let region = reactive({
    id: '201',
    name: '北美洲'
})


// 侦听：对象
watch(
    emp,
    // 如果嵌套属性值发生变化，那么也会触发该回调函数，但是 newData, oldData 是相等的
    (newData, oldData) => {
        console.log('===== 员工信息新旧值 =====')
        console.log(oldData)
        console.log(newData)
        console.log('-----------------------')
    }
)

// 侦听：对象（getter）
watch(
    () => dept,
    // 如果嵌套属性值发生变化，默认情况下无法触发该回调函数
    (newData, oldData) => {
        console.log('===== 部门信息新旧值 =====')
        console.log(oldData)
        console.log(newData)
        console.log('-----------------------')
    }
)

// 侦听：对象（getter）
watch(
    () => region,
    // 如果嵌套属性值发生变化，并且配置深度侦听，会触发该回调函数，但是 newData, oldData 是相等的
    (newData, oldData) => {
        console.log('===== 区域信息新旧值 =====')
        console.log(oldData)
        console.log(newData)
        console.log('-----------------------')
    },
    // 深度侦听
    { deep: true }
)
</script>

<template>
    员工薪资：<input type="number" v-model="emp.salary">
    <hr>
    部门名称：<input type="text" v-model="dept.name">
    <hr>
    区域名称：<input type="text" v-model="region.name">
</template>